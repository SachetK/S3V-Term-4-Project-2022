import React, { useEffect } from 'react'; 

const HomeComponent = () => {    
    useEffect(() => {
        PersonService.getPeople();
    }, []);

    return (
        <div className="container  animated fadeIn">
            <div className="title float-left">
                <h1 className="brand" ><a href="/index" style={{ color: "white"}}>Poolesville Event Check-In</a></h1>
            </div>
            <div className="help-icon float-right">
                <a href="/help" style={{ color: "#FDD336"}}><i class="fa fa-question-circle fa-3x" /></a>
            </div>
            <div className="clearfix">

            </div>
            <div className="wrapper">
                <div class="company-info">
                    <div id="logo-wrapper">
                        <img src="/images/PHSLogo.png" width="200" height="200" alt="Logo" id="logo"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;