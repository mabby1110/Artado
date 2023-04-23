import { useState } from "react"
import { useAuth } from "../../context/authContext"
import { useNavigate } from "react-router-dom"

export function Register() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState()
    const { signup } = useAuth()
    const navigate = useNavigate()

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signup(user.email, user.password)
            navigate('/')
        } catch(error){
            setError(error.message)
        }
    }

    return (
        <div>
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

                <button>Register</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}