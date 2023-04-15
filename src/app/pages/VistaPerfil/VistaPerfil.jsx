import React from "react";

import UserCard from "../../componentes/UserCard/UserCard";
import AboutCard from "./UserInfo/About/AboutCard";
import ProjectsCard from "./UserInfo/Projects/ProjectsCard";
import GalleryCard from "./UserInfo/Gallery/GalleryCard";

import { UserSectionStyle } from "./VistaPerfilStyle";

export function Perfil() {
  return (
    <UserSectionStyle>
      <div className="userProfileBanner">
        <img src="https://picsum.photos/600/200" alt="" className="userBanner" />
      </div>
      <div className="userInfoSection">
        <AboutCard />
      </div>
      <div className="userInfoSection">
        <ProjectsCard />
      </div>
      <div className="userInfoSection">
        <GalleryCard />
      </div>
    </UserSectionStyle>
  );
}
