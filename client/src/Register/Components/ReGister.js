import React, { useState } from 'react';
import "../Stylesheets/register.css";
import { useHistory } from "react-router-dom";

export default function ReGister() {
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [WuserName, setWUserName] = useState("");
    const [emAil, setEmail] = useState("");
    const [WemAil, setWEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [WpassWord, setWPassWord] = useState("");
    const [checkPassWord, setCheckPassWord] = useState("");
    const [WcheckPassWord, setWCheckPassWord] = useState("");
    const [error, setError] = useState(null);
    const Register = () => {
        var data = {
            'userName': userName,
            'email': emAil,
            'password': passWord,
            "cpassword": checkPassWord
        }
        fetch("member/register", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(res => res.json())
            .then((result) => {
                if (result.status===1){
                    alert("註冊成功");
                history.push('/');
                }else if(result.status===0){
                    setWUserName(result.WuserName);
                    setWEmail(result.WemAil);
                    setWPassWord(result.WpassWord);
                    setWCheckPassWord(result.WcheckPassWord);
                }
            }, (error) => {
                setError(error);
            }
            );
    }
    return (
        <register>
            <registerlistcenter>
                <registerlist>
                    <p>UserName：</p>
                    <warning>&nbsp;{WuserName}</warning>
                    <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="UserName"
                    />
                    <p>Email：</p>
                    <warning>&nbsp;{WemAil}</warning>
                    <input
                        value={emAil}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <p>Password：</p>
                    <warning>&nbsp;{WpassWord}</warning>
                    <input
                        value={passWord}
                        onChange={(e) => setPassWord(e.target.value)}
                        placeholder="Password"
                    />
                    <p>CheckPassword：</p>
                    <warning>&nbsp;{WcheckPassWord}</warning>
                    <input
                        value={checkPassWord}
                        onChange={(e) => setCheckPassWord(e.target.value)}
                        placeholder="CheckPassword"
                    />
                </registerlist>
                <button onClick={Register}>Register</button>
            </registerlistcenter>
        </register>
    )
}