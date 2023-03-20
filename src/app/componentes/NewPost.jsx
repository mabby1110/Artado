/** @jsxImportSource @emotion/react */

import React, {Component} from "react";
import styled from '@emotion/styled'
import { css } from "@emotion/react";

// css global

export class NewPost extends Component{
  constructor() {
    super()
    this.state = {
      Titulo: '',
      Descripcion: '',
      Objetivo: '',
      Rol: '',
      Etiqueta: ''
    }
  }

  publicarProyecto(e) {
    console.log(this.state)
    fetch('/api', {
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

  handleChange(e) {
    const { name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={(e) => this.publicarProyecto(e)}>
          <div>
            <h1>Titulo</h1>
            <input onChange={(e) => this.handleChange(e)} name="Titulo" type="text"/>
          </div>
          <div>
            <h3>Descripción</h3>
            <input onChange={(e) => this.handleChange(e)} name="Descripcion" type="text"/>
          </div>
          <div>
            <h3>Objetivo</h3>
            <input onChange={(e) => this.handleChange(e)} name="Objetivo" type="text"/>
          </div>
          <div>
            <h3>Se busca</h3>
            <p>Nombre del rol</p>
            <input onChange={(e) => this.handleChange(e)} name="Rol" type="text"/>
            <p>Etiqueta</p>
            <input onChange={(e) => this.handleChange(e)} name="Etiqueta" type="text"/>
          </div>
          <button type="submit">Publicar</button>
        </form>
      </div>
    )
  }
}