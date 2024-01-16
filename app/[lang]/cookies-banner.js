'use client'
import React, {useEffect, useState} from "react";
import {hasCookie, setCookie} from "cookies-next";

const CookieConsent = (props) => {
    const [showConsent, setShowConsent] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowModal(!hasCookie("ACCEPT"));
        }, 1000)
        setTimeout(() => {
            setShowConsent(hasCookie("ACCEPT"));
        }, 2000)
    }, []);

    const acceptCookie = () => {
        setShowConsent(true);
        setCookie("ACCEPT", true,  {expires: new Date(2147483647 * 1000)});
        setTimeout(() => {
            setShowModal(false)
        }, 2000)
    };

    return (
        <div className={`${showModal ? "" : "hidden"} fixed z-[9999] inset-0 bg-slate-700 bg-opacity-50`}>
            <div
                className={`${!showConsent ? "translate-y-0" : "translate-y-full"}
                transform-cpu duration-1000 delay-1000
                fixed flex-col gap-y-5 rounded-t-[20px] bottom-0 left-0 right-0 
                flex items-center justify-between px-4 py-8 bg-gray-100`}>
        <span className="text-dark text-base mr-16">
          This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.
        </span>
                <div className="flex gap-x-10">
                    <button className="flex px-4 justify-center rounded-[10px] focus:scale-95 text-[#686868] items-center overflow-hidden
                        group w-full h-10 self-center duration-300 shadow-[1px_1px_10px_rgba(0,0,0,0.25)]
                        hover:shadow-none hover:border-[1px] "
                            onClick={() => acceptCookie()}>
                        Accept
                    </button>
                    <button className="flex px-4 justify-center rounded-[10px] focus:scale-95 text-[#d52a2c] items-center overflow-hidden
                        group w-full h-10 self-center duration-300 shadow-[1px_1px_10px_rgba(0,0,0,0.25)]
                        hover:shadow-none hover:border-[1px]"
                            onClick={() => acceptCookie()}>
                        Decline
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CookieConsent