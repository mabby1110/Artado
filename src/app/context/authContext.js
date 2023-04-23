import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('El context esta vacio... ')
    return context
}

export function AuthProvider ({children}) {

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = async (email, password) => {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
        return userCredentials
    }

    return (
        <authContext.Provider value={{signup, login}}>
            {children}
        </authContext.Provider>
    )
}