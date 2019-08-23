import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Webcam from 'react-webcam';
import { loadModels, getFullFaceDescription, createMatcher } from '../../../api/face';
import DrawBox from './Drawbox';
import { JSON_PROFILE } from '../../../common/profile';

const WIDTH = 420;
const HEIGHT = 420;
const inputSize = 160;

class Attendee extends Component {
    constructor(props) {
        super(props);
        this.webcam = React.createRef();
        this.state = {
            user: localStorage.getItem('user'),
            fullDesc: null,
            faceMatcher: null,
            facingMode: null,
            descriptors: null
        };
    }

    componentWillMount() {
        loadModels();
        this.setInputDevice();
        this.matcher();
    }

    setInputDevice = () => {
        navigator.mediaDevices.enumerateDevices().then(async devices => {
          let inputDevice = await devices.filter(
            device => device.kind === 'videoinput'
          );
          if (inputDevice.length < 2) {
            await this.setState({
              facingMode: 'user'
            });
          } else {
            await this.setState({
              facingMode: { exact: 'environment' }
            });
          }
          this.startCapture();
        });
    };

    matcher = async () => {
        fetch('http://localhost:8080/coba', { 
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(data =>
            this.setState({
                descriptors: data
            })
        )
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

        const faceMatcher = await createMatcher(this.state.descriptors);
        this.setState({ faceMatcher });
    };

    startCapture = () => {
        this.interval = setInterval(() => {
            this.capture();
        }, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    capture = async () => {
        if (!!this.webcam.current) {
            await getFullFaceDescription(
              this.webcam.current.getScreenshot(),
              inputSize
            ).then(fullDesc => this.setState({ fullDesc }));
        }
    };

    render(){
        // const user = this.state;
        const { fullDesc, faceMatcher, facingMode, user } = this.state;
        let videoConstraints = null;
        let camera = '';
        if(!!facingMode) {
            videoConstraints = {
                width: WIDTH,
                height: HEIGHT,
                facingMode: facingMode
            };
            if(facingMode === 'user'){
                camera = 'Front';
            } else {
                camera = 'Back';
            }
        }
        return(
            <div className="content-page">
                <div className="content">
                    <div className="container">
                        {/* Page Title */}
                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="page-title">Dashboard</h4>
                                <ol className="breadcrumb">
                                 <li>
                                     <a href="#">Attendee Application</a>
                                 </li>
                                 <li>
                                     <a href="#">Attendee</a>
                                 </li>
                             </ol>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                            <ul class="nav nav-tabs tabs">
                                <li class="active tab">
                                    <a href="#shift-list" data-toggle="tab" aria-expanded="false"> 
                                        <span class="visible-xs"><i class="fa fa-home"></i></span> 
                                        <span class="hidden-xs">Attendee In</span> 
                                    </a> 
                                </li>
                                <li class="tab"> 
                                    <a href="#insert-form" data-toggle="tab" aria-expanded="true"> 
                                        <span class="visible-xs"><i class="fa fa-envelope-o"></i></span> 
                                        <span class="hidden-xs">Attendee Out</span> 
                                    </a> 
                                </li>
                            </ul> 
                                
                            <div className="card-box" id="insert-form">
                                <h4 className="m-t-0 header-title"><b>Insert Form</b></h4>
                                <div class="row">
                                </div>
                            </div>
                            <div className="card-box table-responsive" id="shift-list">
                                <h4 className="m-t-0 header-title"><b>Attendee In</b></h4>
                                <div className="Camera" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    {/* <p>Camera: {camera}</p> */}
                                    <div style={{width: WIDTH, height: HEIGHT}}>
                                        <div style={{ position: 'relative', width: WIDTH }}>
                                            {!!videoConstraints ? (
                                            <div style={{ position: 'absolute' }}>
                                                <Webcam 
                                                    audio={false}
                                                    width={WIDTH}
                                                    height={HEIGHT}
                                                    ref={this.webcam}
                                                    screenshotFormat="image/jpeg"
                                                    videoConstraints={videoConstraints}
                                                />
                                            </div>
                                        ) : null }
                                        {!!fullDesc ? (
                                            <DrawBox 
                                                fullDesc={fullDesc}
                                                faceMatcher={faceMatcher}
                                                imageWidth={WIDTH}
                                                boxColor={'blue'}
                                            />
                                        ) : null }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Attendee);