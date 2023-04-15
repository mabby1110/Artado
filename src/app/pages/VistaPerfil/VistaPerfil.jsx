import React from "react";

import UserCard from "../../componentes/UserCard/UserCard";
import AboutCard from "./UserInfo/About/AboutCard";
import ProjectsCard from "./UserInfo/Projects/ProjectsCard";
import GalleryCard from "./UserInfo/Gallery/GalleryCard";

import { UserSectionStyle } from "../Ye";

export function Perfil() {
  return (
    <UserSectionStyle>
      <div className="userSection1">
        <div className="userTopSection">
          <UserCard />
          <img src="https://picsum.photos/300" alt="" className="userBanner" />
        </div>
        <div className="userDownSection">
          <div className="downSubSection2">
            <div className="userInfoSection">
              <AboutCard />
            </div>
            <div className="userInfoSection">
              <ProjectsCard />
            </div>
            <div className="userInfoSection">
              <GalleryCard />
            </div>
          </div>
        </div>
      </div>
    </UserSectionStyle>
  );
}
