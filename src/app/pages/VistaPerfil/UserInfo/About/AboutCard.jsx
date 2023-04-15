import React from "react";
import { AboutCardStyle } from "./AboutCardStyle";
import { Label } from "../../../../componentes/Label/Label";

const AboutCard = () => {
  return (
    <AboutCardStyle>
      <div className="sectionTitle">
        <h3>Sobre este usuario</h3>
      </div>
      <div className="sectionContent">
        <div className="basicInfo">
          <div className="userName">
            <h4 className="userName1">Nombre</h4>
            <h4 className="userName2">Apellido</h4>
          </div>
          <div className="userExtra">
            <div className="userLang">
              <h4>Idiomas</h4>
              <div className="langBox">
                <ul>
                  <li>
                    <p>#######</p>
                  </li>
                  <li>
                    <p>#######</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="userLoc">
              <h4>Localidad</h4>
              <p>#######</p>
            </div>
          </div>
          <div className="userDesc">
            <h3>Descripción</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. In ullamcorper iaculis
              vitae morbi mauris id.Lorem ipsum dolor sit amet consectetur. In
              ullamcorper iaculis vitae morbi mauris id.
            </p>
          </div>
        </div>
        <div className="sectionFilters">
          <h3>Filtros</h3>
          <div className="filterBox">
            <Label />
            <Label />
            <Label />
            <Label />
            <Label />
            <Label />
          </div>
        </div>
        <div className="contactInfo">
          <h3>Contacto</h3>
          <div className="contactTypes">
            <p>Contacto 1</p>
            <p>Contacto 2</p>
          </div>
        </div>
      </div>
    </AboutCardStyle>
  );
};

export default AboutCard;
