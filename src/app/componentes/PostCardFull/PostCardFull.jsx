import React, { useState, useEffect } from "react";

// css global

import GalleryCard from "./ProjectInfo/Gallery/GalleryCard";
import { PostCardFullStyle } from "./PostCardFullStyle";
import ColaboratorScroll from "./ProjectInfo/Colaborators/ColaboratorScroll";
import UserCard from "../UserCard/UserCard";

// function switchTab(evt, selTab) {
//   var i, tabcontent, tablinks, select;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   select = document.getElementsByClassName(selTab);
//   select[0].style.display = "block";
//   evt.currentTarget.className += " active";
// }

export function PostCardFull(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <PostCardFullStyle>
      <div className="postContainer">
        <div className={`postImgHead ${open ? "infoOpen" : "infoClosed"}`}>
          <img src="https://picsum.photos/600/200" alt="" />
        </div>
        <div className={`postInfoOne ${open ? "infoOpen" : "infoClosed"}`}>
          <div className="postImgMin">
            <img src="https://picsum.photos/600/200" alt="" />
          </div>
          <div className="sectionInfo">
            <div className="sectionOne">
              <h1>{props.titulo}</h1>
              <p>{props.descripcion}</p>
            </div>
            <div className="sectionTwo">
              <h3>Colaboradores</h3>
              <div className="colabsOne">
                <div className="colabContainer">
                  <p>Colab 1</p>
                  <p>Colab 1</p>
                  <p>Colab 1</p>
                  <p>Colab 1</p>
                  <p>Colab 1</p>
                  <p>Colab 1</p>
                  <p>Colab 1</p>
                  <p>Colab 1</p>
                  <p>Colab 1</p>
                  <p>Colab 1</p>
                  <p>Colab 1</p>
                  <p>Colab 1</p>
                  <p>Colab 1</p>
                  <p>Colab 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={open ? "infoOpen" : "infoClosed"}>
          <div className="postInfoTwo">
            <div className="sectionOne">
              <h3>Propietario</h3>
              <UserCard />
            </div>
            <div className="sectionTwo">
              <div className="subOne">
                <div className="objective">
                  <h4>Objetivo</h4>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="budget">
                  <h4>Presupuesto</h4>
                  <p>####</p>
                </div>
              </div>
              <div className="subTwo">
                <div className="startDate">
                  <h4>Fecha Inicio</h4>
                  <p>##/##/##</p>
                </div>
                <div className="endDate">
                  <h4>Fecha Entrega</h4>
                  <p>##/##/##</p>
                </div>
              </div>
              <div className="wanted">
                <h3>Se busca</h3>
                <ul>
                  <li>
                    <label className="checkContainer">
                      <input type="checkbox" name="" id="" />
                      <span className="checkS"></span>
                    </label>
                    <p>Puesto 1</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="postInfoThree">
            <div className="sectionColabs">
              <h3>Colaboradores</h3>
              <div className="colabScroller">
                <ColaboratorScroll />
              </div>
            </div>
          </div>
          <div className="postInfoFour">
            <h3>Galería</h3>
            <div className="sectionGallery">
              <GalleryCard />
            </div>
          </div>
        </div>
        <div className="postBtn">
          <button
            type="button"
            className="showM"
            onClick={() => setOpen(!open)}
          >
            {open ? "Ver menos" : "Ver mas"}
          </button>
        </div>
      </div>
    </PostCardFullStyle>
  );
}
