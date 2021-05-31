import React, { useState } from 'react';

import member from "./Images/member.svg";


import RightBar from "./Components/RightBar";

import {Link } from "react-router-dom";

export default function Header() {



    const [unFoldRightBar, setUnFoldRightBar] = useState("");
    const [laterUnFoldRightBar, setLaterUnFoldRightBar] = useState("");
    const UnFoldRightBar = (string) => {
        setLaterUnFoldRightBar(unFoldRightBar);
        if (unFoldRightBar === string)
            setUnFoldRightBar("close");
        else
            setUnFoldRightBar(string);
    }
    return (
        <>
            <header>
                <topic>
       
                    <h1><Link to="/">
                        <span role="img" aria-label="message">

                            MemberSystem
                        </span>
                    </Link> </h1>
                </topic>

   
                <icon>

                    <img src={member} alt="member" onClick={() => UnFoldRightBar("memberCenter")} />
                </icon>
            </header>

            <RightBar status={unFoldRightBar} laterstatus={laterUnFoldRightBar} />
        </>
    );
};