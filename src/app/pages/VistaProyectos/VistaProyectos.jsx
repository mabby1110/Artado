import React, {useState, useEffect} from "react"

// componentes

// css global
// componentes
// css global
import { ProjectSectionStyle } from "./VistaProyectosStyle";
import { PostCardFull } from "../../componentes/PostCardFull/PostCardFull";

function switchTab(evt, selTab) {
  var i, tabcontent, tablinks, select;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  select = document.getElementsByClassName(selTab);
  select[0].style.display = "block";
  evt.currentTarget.className += " active";
}

export function Proyectos() {
  const [Datos, setDatos] = useState([]);
  const Publicaciones = [];

  const GetDatos = async () => {
    await fetch("/api/post")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((element) => {
          Publicaciones.push(element);
        });
        setDatos(Publicaciones);
      });
  };

  useEffect(() => {
    GetDatos();
  }, []);
  return (
    <ProjectSectionStyle>
      <div className="tabsBox">
        <button
          type="button"
          className="tablinks active"
          onClick={(e) => switchTab(e, "myPro")}
        >
          Mis Proyectos
        </button>
        <button
          type="button"
          className="tablinks"
          onClick={(e) => switchTab(e, "otherPro")}
        >
          Postulados
        </button>
      </div>

      <div className="TabSection">
        <div className="tabcontent myPro" style={{ display: "block" }}>
          {Datos.map((items) => {
            return (
              <PostCardFull
                key={items._id}
                titulo={items.Titulo}
                descripcion={items.Descripcion}
              />
            );
          })}
        </div>
        <div className="tabcontent otherPro">
          {Datos.map((items) => {
            return (
              <PostCardFull
                key={items._id}
                titulo={items.Titulo}
                descripcion={items.Descripcion}
              />
            );
          })}
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
