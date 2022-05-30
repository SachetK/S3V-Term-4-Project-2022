import { useRef, useState, useEffect } from "react";

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])
    
    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])
    
    const handleSubmit = async (e) => {
        e.preventsDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }
    return (
        <>
            { success ? ( 
                <section>
                    <h1>Nice</h1>                
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className="container  animated fadeIn">
                        <div className="title float-left">
                            <h1 className="brand" ><a href="/index" style={{ color: "white"}}>Poolesville Event Check-In</a></h1>
                        </div>
                        <div className="help-icon float-right">
                            <a href="/help" style={{ color: "#FDD336"}}><i className="fa fa-question-circle fa-3x"></i></a>
                        </div>
                        <div className="clearfix">

                        </div>
                        <div className="wrapper">
                            <div className="company-info">
                                <div id="logo-wrapper">
                                    <img src="/images/PHSLogo.png" width="200" height="200" alt="Logo" id="logo"/>
                                </div>
                            </div>
                            <div className="contact">        
                                <form className="box-wrapper" onSubmit = {handleSubmit}>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label style={{ color: "white"}}>Username</label>
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                id="username" 
                                                size="6"
                                                ref={userRef}
                                                autoComplete="off"
                                                onChange={(e) => setUser(e.target.value)}
                                                value={user}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ color: "white"}}>Password</label>
                                            <input 
                                                className="form-control" 
                                                type="password" 
                                                id="password" 
                                                size="6"
                                                onChange={(e) => setPwd(e.target.value)}
                                                value={pwd}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-md btn-success" type="button" id="loginBtn" onClick={handleSubmit}>Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Login