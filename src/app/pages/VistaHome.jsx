import React, {useState, useEffect} from "react"

// componentes
import { PostCard } from "../componentes/PostCard/PostCard"
import { SearchBar } from "../componentes/SearchBar/SearchBar"

// css
import { HomeSectionStyle } from "../Ye"

export function Home() {
    const [Datos, setDatos] = useState([])
    const Publicaciones =[]

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
        <div>
            <SearchBar/>
            <HomeSectionStyle>
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
            </HomeSectionStyle>
        </div>
    )
}