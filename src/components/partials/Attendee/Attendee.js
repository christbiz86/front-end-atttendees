import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { loadModels, getFullFaceDescription, createMatcher } from '../../../api/face';
import DrawBox from './Drawbox';

const WIDTH = 420;
const HEIGHT = 420;
const inputSize = 160;

class Attendee extends Component {
    constructor(props) {
        super(props);
        this.webcam = React.createRef();
        this.state = {
            user: localStorage.getItem('user'),
            match: null,
            fullDesc: null,
            faceMatcher: null,
            facingMode: null,
            users: {
                user: null
            }
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
        const getter = {
            name: JSON.parse(localStorage.getItem('user')).idUser.nama
        }
        await fetch('http://localhost:8080/coba/coba', { 
            method: 'POST',
            body: JSON.stringify(getter),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(async response => await response.json())
        .then(async data =>
            await this.setState({
                users: {
                    user:data
                }
            })
        );
        const faceMatcher = await createMatcher(this.state.users);
        this.setState({ faceMatcher });
        console.log(this.state.users);
        console.log(this.state.faceMatcher);
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
        console.log(this.state.fullDesc);
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
                                        <a href="#clock-in" data-toggle="tab" aria-expanded="false"> 
                                            <span class="visible-xs"><i class="fa fa-home"></i></span> 
                                            <span class="hidden-xs">Attendee In</span> 
                                        </a> 
                                    </li>
                                    <li class="tab"> 
                                        <a href="#clock-out" data-toggle="tab" aria-expanded="true"> 
                                            <span class="visible-xs"><i class="fa fa-envelope-o"></i></span> 
                                            <span class="hidden-xs">Attendee Out</span> 
                                        </a> 
                                    </li>
                                </ul> 
                                
                                <div className="card-box" id="clock-out">
                                    <h4 className="m-t-0 header-title"><b>Insert Form</b></h4>
                                    <div class="row">
                                    </div>
                                </div>
                                <div className="card-box table-responsive" id="clock-in">
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

export default Attendee;