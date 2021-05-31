import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';
import "../Stylesheets/tologin.css";

export default function Tologin() {

    const fblogin = (respone) => {
        console.log(respone);
    }
    const googlelogin = (respone) => {
        console.log(respone);
    }
    return (
        <tologin>
            <tologinlist>
                <Link to="/login"><button><img src="https://img.icons8.com/nolan/64/fast-cart.png" alt="logo" /><p>帳戶登入</p></button></Link>
                
                    <GoogleLogin
                        clientId="552111064032-ql39e6pqe5rd5sr86svdphg7vks5rlho.apps.googleusercontent.com"
                        onSuccess={googlelogin}
                        onFailure={googlelogin}
                        cookiePolicy={'single_host_origin'}
                        render={renderProps => (
                            <button onClick={renderProps.onClick}><img src="https://img.icons8.com/plasticine/100/000000/google-logo.png"></img><p>Google 登入</p></button>
                        )}
                   
                    />
                <FacebookLogin
                    appId="470259040855737"
                    callback={fblogin}
                    render={renderProps => (
                        <button onClick={renderProps.onClick}><img src="https://img.icons8.com/plasticine/100/000000/facebook.png"></img><p>facebook 登入</p></button>
                    )}

                />
            </tologinlist>
        </tologin>
    )
}