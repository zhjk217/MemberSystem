import React, { useEffect } from 'react';
import $ from "jquery";
import MemberCenter from "./MemberCenter";

export default function RightBar(props) {
    const unfoldRightBar = props.status;
    const unlaterFoldRightBar = props.laterstatus;
    useEffect(() => {
        if(unlaterFoldRightBar !== "close"){

        $("membercenter").animate({ right: "-100px" }, 150);
        setTimeout(function(){RightBar();},150);
        }else
        RightBar();
    }, [unfoldRightBar]);
    const RightBar = () => {
        switch (unfoldRightBar) {
            case "memberCenter":
                $("membercenter").animate({ right: "0px" }, 150);
                break;
            default:
                console.log("none");
        }
    }
    return (
        <>

            <MemberCenter />
        </>
    );
}