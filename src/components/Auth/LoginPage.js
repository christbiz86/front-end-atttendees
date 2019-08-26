import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class LoginPage extends React.Component{
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
<<<<<<< HEAD
            email: '', 
            password: '',
            submitted: false,
            isLoading: false
=======
            email: null,
            password: null,
            submitted: false
>>>>>>> 54686353824092025289bb168de4a0f9ff352c0b
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

<<<<<<< HEAD
        this.setState({ submitted: true, isLoading: true });
=======
        this.setState({ submitted: true });
>>>>>>> 54686353824092025289bb168de4a0f9ff352c0b
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }

    render(){
        const { loggingIn } = this.props;
<<<<<<< HEAD
        const { email, password, submitted, isLoading } = this.state;
=======
        const { email, password, submitted } = this.state;
>>>>>>> 54686353824092025289bb168de4a0f9ff352c0b
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
                                        <input className="form-control" type="email" name="email" required value={email} placeholder="Email" onChange={this.handleChange}/>
                                    </div>
                                </div>
    
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <input className="form-control" type="password" name="password" required value={password} placeholder="Password" onChange={this.handleChange}/>
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
<<<<<<< HEAD
                                    <button className="btn btn-pink btn-block text-uppercase waves-effect waves-light" type="submit" onClick={this.handleSubmit} disabled={isLoading}>
                                        { isLoading &&  <i className="fa fa-refresh fa-spin"> </i> }
                                        { isLoading &&  <span> Loading </span> }
                                        { !isLoading &&  <span> Log In </span> }
                                    </button>  
=======
                                        <button className="btn btn-pink btn-block text-uppercase waves-effect waves-light" type="submit">Log In</button>
>>>>>>> 54686353824092025289bb168de4a0f9ff352c0b
                                    </div>
                                </div>
    
                                <div className="form-group m-t-30 m-b-0">
                                    <div className="col-sm-12">
                                        <a href="#" className="text-dark"><i className="fa fa-lock m-r-5"></i> Forgot your password?</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <p>Don't have an account?
                                <a href={'/registrasi'}>
                                    <b> Sign Up</b>
                                </a> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
<<<<<<< HEAD

=======
>>>>>>> 54686353824092025289bb168de4a0f9ff352c0b
function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}
<<<<<<< HEAD

=======
>>>>>>> 54686353824092025289bb168de4a0f9ff352c0b
const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};
<<<<<<< HEAD

=======
>>>>>>> 54686353824092025289bb168de4a0f9ff352c0b
const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };