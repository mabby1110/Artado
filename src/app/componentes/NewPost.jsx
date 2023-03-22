/** @jsxImportSource @emotion/react */
import React, {useState, useEffect} from "react";
import { css } from "@emotion/react";

// componentes

// css global

export function NewPost() {
  const Publicaciones = {
    Titulo: '',
    Descripcion: ''
  }
  const [Datos, setDatos] = useState(Publicaciones)

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
    setDatos({
      [name]: value
    })
    console.log(Datos)
  }
  
  return (
    <div>
      <form onSubmit={(e) => publicarProyecto(e)}>
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
          <input onChange={(e) => handleChange(e)} name="Rol" type="text"/>
          <p>Etiqueta</p>
          <input onChange={(e) => handleChange(e)} name="Etiqueta" type="text"/>
        </div>
        <button type="submit">Publicar</button>
      </form>
    </div>
  )
}