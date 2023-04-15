import React from "react";
import { GalleryCardStyle } from "./GalleryCardStyle";
import PictureSmall from "./PictureSmall/PictureSmall";

const GalleryCard = () => {
  return (
    <GalleryCardStyle>
      <div className="sectionTitle">
        <h3>Galería</h3>
      </div>
      <div className="sectionContent">
        <PictureSmall />
        <PictureSmall />
        <PictureSmall />
        <PictureSmall />
        <PictureSmall />
        <PictureSmall />
      </div>
    </GalleryCardStyle>
  );
};

export default GalleryCard;
