import React, { createContext, useContext, useEffect, useState } from "react";

export const  AuthContext =createContext()

export function useAuth(){
    return useContext(AuthContext)
}
const AuthProvider=({children})=>{
    const emptyUser={
        id:'',
        username:'Jones',
        email:'',
        token:'',
        isAuthenticated:false
    }
    let localState=localStorage.getItem('Eventix')
    localState=JSON.parse(localState)
    if(!localState || !localState.username) localState=emptyUser
    const [currentUser,setCurrentUser] = useState({...localState})
    const [loading, setLoading] = useState(true)

    function Login(user){
        setLoading(true)
        if(user){
            setCurrentUser(user)
            localStorage.setItem('Eventix',JSON.stringify(user))
        }
        setLoading(false)
    }

    function Logout(){
        setCurrentUser({...emptyUser})
        localStorage.removeItem('Eventix')
        setLoading(false)
    }
    useEffect(()=>{
        Login()
    },[])
    useEffect(()=>{
    },[currentUser])
    return <AuthContext.Provider value={{currentUser,Login,Logout}}>
        {!loading && children}
    </AuthContext.Provider>
}
export default AuthProvider