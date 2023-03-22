import React, {useState, useEffect} from "react"

// componentes
import { NewPost } from "../componentes/NewPost"
import { PostCard } from "../componentes/PostCard"

// css global
import { MainSectionStyle } from "../Ye"

export function Home() {
    const [Datos, setDatos] = useState([])
    const Publicaciones =[]

    const GetDatos =async ()=>{
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
        <MainSectionStyle>
            {
                Datos.map((items)=>{
                    return (
                        <PostCard titulo={items.Titulo} descripcion={items.Descripcion}/>
                    )
                })
            }
        </MainSectionStyle>
    )
}