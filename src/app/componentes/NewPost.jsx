/** @jsxImportSource @emotion/react */
import React, {useState, useEffect} from "react";
import { css } from "@emotion/react";
import { set } from "mongoose";

// componentes

// css global

export function NewPost() {
  let Publicacion = {
    Titulo: '',
    Descripcion: '',
    Objetivo: '',
    Rol: [
        {
            Titulo: '',
            Etiquetas: []
        }
    ]
  }
  const [Datos, setDatos] = useState(Publicacion)

  const PostDatos = async (e) => {
    await fetch('/api', {
        method: 'POST',
        body: JSON.stringify(this.state),
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

  function handleChange(e) {
    const { name, value} = e.target
    Publicacion[name] = value
    console.log(Publicacion)
  }
  
  return (
    <div>
      <form onSubmit={(e) => PostDatos(e)}>
        <div>
          <h1>Titulo</h1>
          <input onChange={(e) => handleChange(e)} name="Titulo" type="text"/>
        </div>
        <div>
          <h3>Descripción</h3>
          <input onChange={(e) => handleChange(e)} name="Descripcion" type="text"/>
        </div>
        <div>
          <h3>Objetivo</h3>
          <input onChange={(e) => handleChange(e)} name="Objetivo" type="text"/>
        </div>
        <div>
          <h3>Se busca</h3>
          <p>Nombre del rol</p>
          <input onChange={(e) => addRol(e)} name="Rol" type="text"/>
          <p>Etiqueta</p>
          <input onChange={(e) => addRol(e)} name="Etiqueta" type="text"/>
          <input type="button" value="+" />
          {
            // Datos.map((items)=>{
            //   return (
            //       <div>{items.Rol}</div>
            //   )
            // })
          }
        </div>
        <button type="submit">Publicar</button>
      </form>
    </div>
  )
}