import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "../Stylesheets/login.css";

export default function Login() {
    const history = useHistory();
    const [emAil, setEmail] = useState("");
    const [WemAil, setWEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [WpassWord, setWPassWord] = useState("");
    const login = () => {
        var data = {
            'email': emAil,
            'password': passWord,
        }
        fetch("member/login", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .then((result) => {
                if (result.status === 1) {
                    alert("登入成功");
                    history.push('/');
                } else if (result.status === 0) {

                    setWEmail(result.WemAil);
                    setWPassWord(result.WpassWord);

                }
            }, (error) => {
           
            }
            );
    }
    return (
        <login>
            <loginlistcenter>
                <loginlist>
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
                </loginlist>
                <button onClick={login}>Login</button>
            </loginlistcenter>
        </login>
    )
}