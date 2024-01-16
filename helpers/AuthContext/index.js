"use client";
import Cookies from "js-cookie";
import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(
        (Cookies.get("userData") && JSON.parse(Cookies.get("userData"))) || (typeof window !== "undefined"
            && localStorage.getItem("USER_DATAA")) && JSON.parse(localStorage.getItem("USER_DATAA"))
    );
    useEffect(() => {
        if (user) {
            if (typeof window !== "undefined") {
                localStorage.setItem(
                    "USER_DATAA",
                    JSON.stringify({
                        user: user,
                    })
                );
            }
            Cookies.set("userData", JSON.stringify(user), {expires: new Date(2147483647 * 1000)});
        }
    }, [user]);
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}
