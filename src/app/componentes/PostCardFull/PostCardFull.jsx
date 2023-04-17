/** @jsxImportSource @emotion/react */

// css global

import GalleryCard from "./ProjectInfo/Gallery/GalleryCard";
import { PostCardFullStyle } from "./PostCardFullStyle";
import ColaboratorScroll from "./ProjectInfo/Colaborators/ColaboratorScroll";
import UserCard from "../UserCard/UserCard";

export function PostCardFull(props) {
  return (
    <PostCardFullStyle>
      <div className="postContainer">
        <div className="postImgHead">
          <img src="https://picsum.photos/600/200" alt="" />
        </div>
        <div className="postInfoOne">
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
        <div className="postInfoTwo">
          <div className="sectionOne">
            <UserCard />
          </div>
          <div className="sectionTwo">
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
        <div className="postBtn">
          <button className="showM">Ver más</button>
        </div>
      </div>
    </PostCardFullStyle>
  );
}
