import React from "react";

import { SocialCardStyle } from "./SocialCardStyle";
import { Label } from "../../Label/Label";

const SocialCard = () => {
  return (
    <SocialCardStyle>
      <img src="https://picsum.photos/200/300" alt="" />
      <div className="socialText">
        <h3>User Name</h3>
        <div className="filterSection">
          <Label/>
          <Label/>
          <Label/>
          <Label/>
          <Label/>
          <Label/>
          <Label/>
          <Label/>
        </div>
      </div>
    </SocialCardStyle>
  );
};

export default SocialCard;  
