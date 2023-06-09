import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from "../servicios/firebase";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error("There is no auth provider")
    return context
}

const Contexto = ({children})=>{

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const signup = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password)

    const login = (email,password) => signInWithEmailAndPassword(auth, email, password);

    const logOut = () => signOut(auth)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser =>{
            setUser(currenUser);
            setLoading(false)
        });

        return () => unsubscribe();
    }, [])

    return(
        <authContext.Provider value={{signup, login, user, logOut, loading}}>
            {children}
        </authContext.Provider>
    )
}

export default Contexto