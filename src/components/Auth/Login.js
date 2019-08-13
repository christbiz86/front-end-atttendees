import React from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../redux/reducer';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {

        };
    }

    handleChange = event =>{
        this.setState({ 
            [event.target.name]:event.target.value
         })
    }

    handleSubmit = event => {
        event.preventDefault();
        let { email, password } = this.state;
        this.props.login(email, password);
        this.setState({
            email: '',
            password: ''
          });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoginSuccess) {
            this.props.history.push('/Annual');
        }
    }

    render(){
        let {email, password} = this.state;
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return(
            <div>
                <div className="account-pages"/>
                <div className="clearfix"/>
                <div className="wrapper-page">
                    <div className=" card-box">
                        <div className="panel-heading"> 
                            <h3 className="text-center"> Sign In to <strong className="text-custom">Attendee</strong> </h3>
                        </div> 
    
                        <div className="panel-body">
                            <form className="form-horizontal m-t-20" onSubmit={this.handleSubmit}>
                                <div className="form-group ">
                                    <div className="col-xs-12">
                                        <input className="form-control" type="email" name="email" required="" placeholder="Email" onChange={this.handleChange}/>
                                    </div>
                                </div>
    
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <input className="form-control" type="password" name="password" required="" placeholder="Password" onChange={this.handleChange}/>
                                    </div>
                                </div>
    
                                <div className="form-group ">
                                    <div className="col-xs-12">
                                        <div className="checkbox checkbox-primary">
                                            <input id="checkbox-signup" type="checkbox"/>
                                            <label htmlFor="checkbox-signup">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="form-group text-center m-t-40">
                                    <div className="col-xs-12">
                                        <button className="btn btn-pink btn-block text-uppercase waves-effect waves-light" type="submit">Log In</button>
                                    </div>
                                </div>
    
                                <div className="form-group m-t-30 m-b-0">
                                    <div className="col-sm-12">
                                        <a href="#" className="text-dark"><i className="fa fa-lock m-r-5"></i> Forgot your password?</a>
                                    </div>
                                </div>

                                <div className="message">
                                    { isLoginPending && <div>Please wait...</div> }
                                    { isLoginSuccess && <div>Success.</div> }
                                    { loginError && <div>{loginError.message}</div> }
                                </div>
                            </form>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <p>Don't have an account?
                                <Link to="/Registrasi">
                                    <b> Sign Up</b>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    };
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);