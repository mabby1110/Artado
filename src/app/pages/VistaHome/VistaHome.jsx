import {useState, useEffect} from "react"

// componentes
import { PostCard } from "../../componentes/PostCard/PostCard"
import { SearchBar } from "../../componentes/SearchBar/SearchBar"
import { useAuth } from "../../context/authContext"

// css
import { VistaHomeStyle } from "./VistaHomeStyle"

export function Home() {
    const [Datos, setDatos] = useState([])
    const Publicaciones =[]

    const {user} = useAuth()
    console.log(user)

    const GetDatos = async ()=>{
        await fetch('/api/post')
            .then(res => res.json())
            .then(data =>{
                data.forEach(element => {
                    Publicaciones.push(element)
                })
                setDatos(Publicaciones)
        })
    }

    useEffect(() => {
        GetDatos()
    }, [])

    return (
        <VistaHomeStyle>
            <div className="feed-section">
                {
                    Datos.map((items) => {
                        return (
                            <PostCard
                                key={items._id}
                                titulo={items.Titulo}
                                descripcion={items.Descripcion}
                            />
                        )
                    })
                }
            </div>
        </VistaHomeStyle>
    )
}