import React from "react";
import { Label } from "../Label/Label";
import { UserCardStyle } from "./UserCardStyle";

const UserCard = () => {
  return (
    <UserCardStyle>
      <img src="https://picsum.photos/200/300" alt="" className="userPic" />
      <div className="userFilter">
        <Label/>
        <Label/>
        <Label/>
      </div>
      <div className="userName">
        <h3>Nombre usuario</h3>
      </div>
      <div className="userDescription">
        <h4>Descripción</h4>
        <h3>
          Lorem ipsum dolor sit amet consectetur. In ullamcorper iaculis vitae
          morbi mauris id.
        </h3>
      </div>
      <a href="/perfil">Ver perfil</a>
    </UserCardStyle>
  );
};

export default UserCard;
