/** @jsxImportSource @emotion/react */
import React, {useState, useEffect, useRef} from "react";
import { css } from "@emotion/react";
import { set } from "mongoose";

// css global
import { NewPostStyle } from "../Ye";

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
  const [Preview, setPreview] = useState("")
  const [img, setImg] = useState({})
  const ref_etiqueta = useRef(null);
  const ref_rol = useRef(null);

  const PostPublicacion = async (e) => {
    e.preventDefault()
    // var data = new FormData();
    // var input = document.querySelector('input[type="file"]');
    // data.append('file', input.files[0]);
    // console.log(typeof(data)+data);
    console.log(img)
    console.log(Datos)
    await fetch('http://localhost:3000/api/post', {
      method: 'POST',
      body: JSON.stringify({'test':img.clientX}),
      headers : {'Accept' : 'application/json', 'Content-Type' : 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.error(err))
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

  function MostrarPreview(e)
  {

    document.getElementById("preview").src = e.target.value;
    console.log(e.target.value);

  }

  return (
    <NewPostStyle>
      <form onSubmit={(e) => PostPublicacion(e)} encType='multipart/form-data'>
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
          
          <p>Agregar imagen BD : Cuando se muestre el preview puede continuar</p>
          <input type="text" onChange={(e) => MostrarPreview(e)}/>
          <p>Preview</p>
          <img max-width="600px" max-height="250px"  src="" id="preview" alt="" />
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
        <button type="submit">Publicar</button>
      </form>
    </NewPostStyle>
  )
}