import React from "react";
import { ColaboratorScrollStyle } from "./ColaboratorScrollStyle";
import { useState, useRef } from "react";
import UserCard from "../../../UserCard/UserCard";

const ColaboratorScroll = () => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  return (
    <ColaboratorScrollStyle>
      <div className="sectionContent">
        {scrollX !== 0 && (
          <button
            className="prev"
            onClick={() => slide(-150)}
          >
            <i className="fa fa-angle-left">{"<"}</i>
          </button>
        )}
        <ul ref={scrl} onScroll={scrollCheck}>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
        </ul>

        {!scrolEnd && (
          <button
            className="next"
            onClick={() => slide(+150)}
          >
            <i className="fa fa-angle-right">{">"}</i>
          </button>
        )}
      </div>
    </ColaboratorScrollStyle>
  );
};

export default ColaboratorScroll;
