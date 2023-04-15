import React from "react";
import { PictureSmallStyle } from "./PictureSmallStyle";

const PictureSmall = () => {
  return (
    <PictureSmallStyle>
      <div className="pictureSection">
        <li>
          <img src="https://picsum.photos/300" className="galleryImg" />
        </li>
      </div>
    </PictureSmallStyle>
  );
};

export default PictureSmall;
