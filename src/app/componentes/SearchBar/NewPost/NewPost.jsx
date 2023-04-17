/** @jsxImportSource @emotion/react */
import React, {useState, useRef} from "react";

// css global
import { NewPostStyle } from "./NewPostStyle";

export function NewPost() {
  let Publicacion = {
    Titulo: '',
    Descripcion: '',
    Objetivo: '',
    Rol: []
  }

  let Rol = {
      Titulo: '',
      Etiquetas: []
  }
  
  const [Datos, setDatos] = useState(Publicacion)
  const [Etiquetas, setEtiquetas] = useState([])
  const ref_etiqueta = useRef(null);
  const ref_rol = useRef(null);

  const PostPublicacion = async (e) => {
    await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify(Datos),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.error(err))
    e.preventDefault()
  }

  function AddEtiqueta() {
    Rol.Etiquetas.push(ref_etiqueta.current.value)
    setEtiquetas((prev)=>{
      return (
        [...prev, ...Rol.Etiquetas]
      )
    })
    ref_etiqueta.current.value = ''
  }
  
  function AddRol() {
    Rol.Titulo = ref_rol.current.value
    Rol.Etiquetas = Etiquetas
    setDatos((prev)=>{
      prev.Rol.push(Rol)
      return({...prev, Rol: prev.Rol})
    })
    setEtiquetas([])
    ref_rol.current.value = ''
  }

  function HandleChange(e) {
    const { name, value } = e.target
    setDatos((prev)=>{
      return({...prev, [name]: value})
    })
  }

  return (
    <NewPostStyle>
      <form onSubmit={(e) => PostPublicacion(e)}>
        <div className="titleInsert">
          <h1>Titulo</h1>
          <input onChange={(e) => HandleChange(e)} placeholder="Titulo de mi proyecto" name="Titulo" type="text"/>
        </div>
        <div className="descInsert">
          <h3>Descripción</h3>
          <input onChange={(e) => HandleChange(e)} placeholder="Mi proyecto se trata..." name="Descripcion" type="text"/>
        </div>
        <div className="objInsert">
          <h3>Objetivo</h3>
          <input onChange={(e) => HandleChange(e)} placeholder="Lo que espero de este proyecto..." name="Objetivo" type="text"/>
        </div>
        <div className="roleInsert">
          <h3>Se busca</h3>
          <p>Nombre del rol</p>
          <input name="Rol" placeholder="Actor/Director/Artista..." ref={ref_rol} type="text"/>
          {
            Etiquetas.map((etiqueta)=>{
              return(
                <input type="button" key={etiqueta} value={etiqueta} />
              )
            })
          }
          <p>Etiqueta</p>
          <input name="Etiqueta" ref={ref_etiqueta} type="text"/>

          <input className="addT" type="button" value="+" onClick={()=>AddEtiqueta()}/>
          <input className="addR" type="button" value="Add" onClick={()=>AddRol()}/>
        </div>
        <div>
          {
            Datos.Rol.map((rol, index)=>{
              return(
                <div key={index}>
                  <p> {rol.Titulo} </p>
                  {rol.Etiquetas.map(etiqueta=>{return(<input type="button" key={etiqueta} value={etiqueta} />)})}
                </div>
              )
            })
          }
        </div>
        <br />
        <button className="addB" type="submit">Publicar</button>
      </form>
    </NewPostStyle>
  )
}