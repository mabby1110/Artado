import { useState } from "react"
import { useAuth } from "../../context/authContext"

export function Register() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    
    const { signup } = useAuth()

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(user.email, user.password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                placeholder="your@email.art"
                onChange={handleChange}
            />

            <label htmlFor="Password">Password</label>
            <input
                type="password"
                name="password"
                onChange={handleChange}
            />

            <button onChange={handleChange}>Register</button>
        </form>
    )
}