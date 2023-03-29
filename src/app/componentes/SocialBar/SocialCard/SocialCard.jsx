import React from "react";
import { SocialCardStyle } from "./SocialCardStyle";
import Filter from "../../FilterBar/Filter/Filter"

const SocialCard = () => {
  return (
    <SocialCardStyle>
      <img src="https://picsum.photos/200/300" alt="" />
      <div className="socialText">
        <h3>User Name</h3>
        <div className="filterSection">
          <Filter/>
          <Filter/>
          <Filter/>
          <Filter/>
          <Filter/>
          <Filter/>
          <Filter/>
          <Filter/>
        </div>
      </div>
    </SocialCardStyle>
  );
};

export default SocialCard;  
