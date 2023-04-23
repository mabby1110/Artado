import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('context esta vacio... ')
    return context
}

export function AuthProvider ({children}) {
    const [user, setUser] = useState(null)
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = async (email, password) => {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        return userCredentials
    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])

    return (
        <authContext.Provider value={{signup, login, logout, user}}>
            {children}
        </authContext.Provider>
    )
}