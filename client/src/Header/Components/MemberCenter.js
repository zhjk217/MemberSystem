import React, { useEffect, useState } from 'react';
import "../Stylesheets/MemberCenter.css";
import { Link } from "react-router-dom";

export default function MemberCenter() {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        fetch("member/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLogin(result.islogin);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                }
            );
    });
    const loginout = () => {
        fetch('member/signout')
            .then(
                (result) => {
                },
                (error) => {

                }
            );
    }
    if (!isLogin) {
        return (
            <membercenter>
                <div>
                    <Link to="/register"><p>註冊</p></Link>
                    <Link to="/login"><p>登入</p></Link>
                </div>
            </membercenter>
        )
    }
    return (
        <membercenter>

            <div>
                <p>個人資料</p>
                <Link to="/"><p onClick={loginout}>登出</p></Link>
            </div>
        </membercenter>
    );
};