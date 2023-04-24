/** @jsxImportSource @emotion/react */
import React, {useState, useRef, useEffect} from "react";
import { db, storage } from "../../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";

// css global
import { NewPostStyle } from "./NewPostStyle";
import { Collection } from "mongoose";

export function NewPost() {
  const initPost = {
    Titulo: '',
    Descripcion: '',
    Objetivo: '',
    Rol: []
  }

  const initRol = {
      Titulo: '',
      Etiquetas: []
  }

  const ref_etiqueta = useRef(null);
  const ref_rol = useRef(null);
  const navigate = useNavigate()

  const [postData, setPostData] = useState(initPost)
  const [rol, setRol] = useState(initRol)
  const [file, SetFile] = useState(null)
  const [progress, setProgress] = useState(null);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.nameconst
      const storageRef = ref(storage, file.name)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
        switch (snapshot.state) {
          case "pause":
            console.log("upload is paused")
            break;
          case "running":
            console.log("upload is running")
            break;
          default:
            break;
        }
        console.log(progress)
      }, (error) => {
        console.log(error)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((getDownloadURL) => {
          setPostData((prev) => ({...prev, img: getDownloadURL}))
        })
      })
    }

    file && uploadFile()
  }, [file]);

  function AddLabel() {
    const labelList = rol.Etiquetas
    labelList.push(ref_etiqueta.current.value)
    setRol({...rol, Etiquetas: labelList})
    ref_etiqueta.current.value = ''
  }

  function AddRol() {
    const rolList = postData.Rol
    rolList.push(rol)
    setPostData({...postData, Rol: rolList})
    setRol(initRol)
    ref_etiqueta.current.value = ''
    ref_rol.current.value = ''
  }

  function HandleRol(e) {
    setRol({...rol, Titulo: e.target.value})
  }

  function HandleChange(e) {
    setPostData({...postData, [e.target.name]: e.target.value})
  }

  const HandleSubmit = async (e) => {
    e.preventDefault()
    setSubmit(True)
    await addDoc(collection(db, 'user'),{
      ...postData,
      timestamp: serverTimestamp()
    })
    navigate('/')
  }

  return (
    <NewPostStyle>
      <form onSubmit={(e) => HandleSubmit(e)}>
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
          <input name="Rol" onChange={HandleRol} placeholder="Actor/Director/Artista..." ref={ref_rol} type="text"/>
          
          <p>Etiqueta</p>
          <input name="Etiqueta" ref={ref_etiqueta} type="text"/>
          <input className="addT" type="button" value="+" onClick={AddLabel}/>
          <div>
            {
              rol.Etiquetas.map((etiqueta)=>{
                return(
                  <input type="button" key={etiqueta} value={etiqueta} />
                )
              })
            }
          </div>
          <input className="addR" type="button" value="Agregar Rol" onClick={AddRol}/>
        </div>
        <div>
          {
            postData.Rol.map((rol, index)=>{
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
        <input
          type="file"
          label="Upload"
          onChange={(e) => SetFile(e.target.files[0])}
        />
        <br />
        <button
          type="submit"
          disabled={progress !== null && progress < 100}
        >
          Publicar
        </button>
      </form>
    </NewPostStyle>
  )
}