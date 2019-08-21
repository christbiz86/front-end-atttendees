import * as faceapi from 'face-api.js';

const maxDescriptorDistance = 0.5;

export async function loadModels() {
    const MODEL_URL = process.env.PUBLIC_URL + '/models';
    await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
    await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);
    await faceapi.loadFaceRecognitionModel(MODEL_URL);
}

export async function getFullFaceDescription(blob, inputSize = 512) {
    // tiny_face_detector options 
    let scoreThreshold = 0.5;
    const OPTION = new faceapi.TinyFaceDetectorOptions({
        inputSize,
        scoreThreshold
      });
      const useTinyModel = true;
    
      // fetch image to api
      let img = await faceapi.fetchImage(blob);
    
      // detect all faces and generate full description from image
      // including landmark and descriptor of each face
      let fullDesc = await faceapi
        .detectAllFaces(img, OPTION)
        .withFaceLandmarks(useTinyModel)
        .withFaceDescriptors();
      return fullDesc;
};

// export async function getFullFaceDescription(blob) {
  
//   const blobs = await Promise.all(
//     ['sheldon.png', 'raj.png', 'leonard.png', 'howard.png'].map(
//       uri => (await fetch(uri)).blob()
//     )
//   )

//   const images = await Promise.all(blobs.map(
//     blob => await faceapi.bufferToImage(blob)
//   ))

//   const minConfidence = 0.8  
//   const fullFaceDescriptions = await faceapi.allFaces(blob, minConfidence)
//   const resized = fullFaceDescriptions.map(fd => fd.forSize(width, height))

//   fullFaceDescription.forEach((fd, i) => {
//     faceapi.drawDetection(canvas, fd.detection, { withScore: true })
//   })
//   fullFaceDescription.forEach((fd, i) => {
//     faceapi.drawLandmarks(canvas, fd.landmarks, { drawLines: true })
//   })

//   const refDescriptions = await Promsie.all(images.map(
//     img => (await faceapi.allFaces(img))[0]
//   ))
  
//   const refDescriptors = refDescriptions.map(fd => fd.descriptor)

//   const sortAsc = (a, b) => a - b
//   const labels = ['sheldon', 'raj', 'leonard', 'howard']

//   const results = fullFaceDescription.map((fd, i) => {
//     const bestMatch = refDescriptors.map(
//       refDesc => ({
//         label: labels[i],
//         distance: faceapi.euclideanDistance(fd.descriptor, refDesc)
//       })
//     ).sort(sortAsc)[0]
        
//     return {
//       detection: fd.detection,
//       label: bestMatch.label,
//       distance: bestMatch.distance
//     }
//   })

//   const maxDistance = 0.6

//   results.forEach(result => {
//     faceapi.drawDetection(canvas, result.detection, { withScore: false })
    
//     const text = `${result.distance < maxDistance ? result.className : 'unkown'} (${result.distance})`
//     const { x, y, height: boxHeight } = detection.getBox()
//     faceapi.drawText(
//       canvas.getContext('2d'),
//       x,
//       y + boxHeight,
//       text
//     )
//   })
// };

export async function createMatcher(faceProfile) {
    // Create labeled descriptors of member from profile
    let members = Object.keys(faceProfile);
    let labeledDescriptors = members.map(
      member =>
        new faceapi.LabeledFaceDescriptors(
          faceProfile[member].name,
          faceProfile[member].descriptors.map(
            descriptor => new Float32Array(descriptor)
          )
        )
    );

    // Create face matcher (maximum descriptor distance is 0.5)
    let faceMatcher = new faceapi.FaceMatcher(
        labeledDescriptors,
        maxDescriptorDistance
    );
    return faceMatcher;
}

export function isFaceDetectionModelLoaded() {
    return !!faceapi.nets.tinyFaceDetector.params;
}