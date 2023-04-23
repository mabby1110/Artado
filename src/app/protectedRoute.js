import { Navigate } from "react-router";
import { useAuth } from "./context/authContext";

export function ProtectedRoute({ children }) {
    const {user} = useAuth()

    if (!user) return <Navigate to='/login'/>

    return <>{children}</>
}
