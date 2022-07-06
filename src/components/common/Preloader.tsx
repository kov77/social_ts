import preloaderImg from "../../assets/images/preloader.gif";
import React from "react";

export const Preloader = (state: any) => {
    return <>
        <div><img src={preloaderImg} alt="preloader image"/></div>
    </>
}
