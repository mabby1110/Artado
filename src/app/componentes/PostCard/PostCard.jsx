/** @jsxImportSource @emotion/react */

// css global

import {PostCardStyle} from "./PostCardStyle"

export function PostCard(props) {
  return (
    <PostCardStyle>
      <div className="postImg">
        <img src="https://picsum.photos/600/200" alt="" />
      </div>
      <div className="postInfo">
        <div className="sectionOne">
          <h1>{props.titulo}</h1>
          <p>{props.descripcion}</p>
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
      <div className="postBtn">
        <a href="">Ver mas</a>
        <button>Postular</button>
      </div>
    </PostCardStyle>
  );
};