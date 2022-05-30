import React, { Component } from 'react'; 

class LoginComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="container  animated fadeIn">
                <div className="title float-left">
                    <h1 className="brand" ><a href="/index" style={{ color: "white"}}>Poolesville Event Check-In</a></h1>
                </div>
                <div className="help-icon float-right">
                    <a href="/help" style={{ color: "#FDD336"}}><i class="fa fa-question-circle fa-3x"></i></a>
                </div>
                <div className="clearfix">

                </div>
                <div className="wrapper">
                    <div class="company-info">
                        <div id="logo-wrapper">
                            <img src="/images/PHSLogo.png" width="200" height="200" alt="Logo" id="logo"/>
                        </div>
                    </div>
                <div className="contact">
                <div className="box-wrapper">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label style={{ color: "white"}}>Username</label>
                            <input className="form-control" type="text" id="username" size="6"/>
                        </div>
                        <div className="form-group">
                            <label style={{ color: "white"}}>Password</label>
                            <input className="form-control" type="password" id="password" size="6"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-md btn-success" type="button" id="loginBtn">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default LoginComponent;