import React from 'react'

export default function Forbidden(){
    return(
        <div className="wrapper-page">
            <div className="ex-page-content text-center">
                <div className="text-error"><span className="text-primary">4</span><i className="ti-face-sad text-pink"></i><span className="text-info">3</span></div>
                <h2>Forbidden</h2><br/>
                <p className="text-muted">You don't have permission to access this page.</p>
                <br/>
                <a className="btn btn-default waves-effect waves-light" href='/login'> Return to Login Page</a>
            </div>
        </div>
    );
}