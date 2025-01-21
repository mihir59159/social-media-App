import { createContext, useEffect, useState } from "react"

export const AuthContex = createContext();

export const ContextProvider = ({children})=>{
    const[curruser,setCurruser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = (data)=>{
        //login function
        setCurruser({
            id:1,
            name:data.username,
            userId:125,
            profilePic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        });
    }

    useEffect(()=>{
        // console.log("Current user object:", curruser);
        localStorage.setItem("user",JSON.stringify(curruser))
    },[curruser])

    return <AuthContex.Provider value={{curruser,login}}>{children}</AuthContex.Provider>;
}