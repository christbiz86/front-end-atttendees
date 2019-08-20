import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.props.logout();

        this.state = {
            email: '',
            password: '',
            submitted: false,
            isLoading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true, isLoading: true });
        const { email, password } = this.state;

        if(email && password) {
            this.props.login(email, password)
        }
    }

    render(){
        const { loggingIn } = this.props;
        const { email, password, submitted, isLoading } = this.state;
        return(
            <div className="wrapper-page">
        	<div className=" card-box">
            <div className="panel-heading"> 
                <h3 className="text-center"> Sign In to <strong className="text-custom">Attendee</strong> </h3>
            </div> 
            <div className="panel-body">
            <form className="form-horizontal m-t-20" name="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                    <div className="col-xs-12">
                        <input className="form-control" name="email" type="email" required="" placeholder="E-mail" onChange={this.handleChange} value={this.state.email}/>
                    </div>
                </div>
                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                    <div className="col-xs-12">
                        <input className="form-control" name="password" type="password" required="" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
                    </div>
                </div>
                <div className="form-group ">
                    <div className="col-xs-12">
                        <div className="checkbox checkbox-primary">
                            <input id="checkbox-signup" type="checkbox"/>
                            <label for="checkbox-signup">
                                Remember me
                            </label>
                        </div>
                    </div>
                </div>
                
                <div className="form-group text-center m-t-40">
                    <div className="col-xs-12">
                        <button className="btn btn-pink btn-block text-uppercase waves-effect waves-light" type="submit" onClick={this.handleSubmit} disabled={isLoading}>
                        { isLoading &&  <i className="fa fa-refresh fa-spin"> </i> }
                        { isLoading &&  <span> Loading </span> }
                        { !isLoading &&  <span> Log In </span> }
                        </button>
                    </div>
                </div>

                {/* <div className="form-group m-t-30 m-b-0">
                    <div className="col-sm-12">
                        <a href="page-recoverpw.html" className="text-dark"><i className="fa fa-lock m-r-5"></i> Forgot your password?</a>
                    </div>
                </div> */}
            </form> 
            
            </div>   
            </div>                              
                <div className="row">
            	<div className="col-sm-12 text-center">
            		<p>Don't have an account? <a href="#" className="text-primary m-l-5"><b>Sign Up</b></a></p>
                        
                    </div>
            </div>
        </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLogin = connect(mapState, actionCreators)(Login);
export { connectedLogin as Login };