/** @jsxImportSource @emotion/react */
import React, {useState, useEffect, useRef} from "react";
import { css } from "@emotion/react";
import { set } from "mongoose";

// componentes

// css global

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

  let Etiqueta = []
  
  const [Datos, setDatos] = useState(Publicacion)
  const [Etiquetas, setEtiquetas] = useState([])
  const ref_etiqueta = useRef(null);
  const ref_rol = useRef(null);

  const PostPublicacion = async (e) => {
    console.log(Datos)

    // await fetch('/api', {
    //     method: 'POST',
    //     body: JSON.stringify(this.state),
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })
    //   .catch(err => console.error(err))

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
    <div>
      <form onSubmit={(e) => PostPublicacion(e)}>
        <div>
          <h1>Titulo</h1>
          <input onChange={(e) => HandleChange(e)} name="Titulo" type="text"/>
        </div>
        <div>
          <h3>Descripción</h3>
          <input onChange={(e) => HandleChange(e)} name="Descripcion" type="text"/>
        </div>
        <div>
          <h3>Objetivo</h3>
          <input onChange={(e) => HandleChange(e)} name="Objetivo" type="text"/>
        </div>
        <div>
          <h3>Se busca</h3>
          <p>Nombre del rol</p>
          <input name="Rol" ref={ref_rol} type="text"/>
          {
            Etiquetas.map((etiqueta)=>{
              return(
                <input type="button" key={etiqueta} value={etiqueta} />
              )
            })
          }
          <p>Etiqueta</p>
          <input name="Etiqueta" ref={ref_etiqueta} type="text"/>

          <input type="button" value="+" onClick={()=>AddEtiqueta()}/>
          <input type="button" value="Add" onClick={()=>AddRol()}/>
          <p>
            {
              Datos.Rol.map((rol)=>{
                return(
                  <div key={rol}>
                    <h2>{rol.Titulo}</h2>
                    {
                      rol.Etiquetas.map((e)=>{
                        return(<p key={e}>e</p>)
                      })
                    }
                  </div>
                )
              })
            }
          </p>
        </div>
        <button type="submit">Publicar</button>
      </form>
    </div>
  )
}