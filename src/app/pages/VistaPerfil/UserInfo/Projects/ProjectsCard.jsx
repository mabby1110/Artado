import React from "react";
import { ProjectsCardStyle } from "./ProjectsCardStyle";
import ProjectsSmall from "./ProjectSmall/ProjectsSmall";
import { useState, useRef } from "react";

const ProjectsCard = () => {
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
    <ProjectsCardStyle>
      <div className="sectionTitle">
        <h3>Proyectos de este usuario</h3>
      </div>
      <div className="scrollContainer">
        <div className="sectionContent">
          {scrollX !== 0 && (
            <button className="prev" onClick={() => slide(-150)}>
              <i className="fa fa-angle-left">{"<"}</i>
            </button>
          )}
          <ul ref={scrl} onScroll={scrollCheck}>
            <ProjectsSmall />
            <ProjectsSmall />
            <ProjectsSmall />
            <ProjectsSmall />
            <ProjectsSmall />
            <ProjectsSmall />
            <ProjectsSmall />
            <ProjectsSmall />
            <ProjectsSmall />
            <ProjectsSmall />
          </ul>

          {!scrolEnd && (
            <button className="next" onClick={() => slide(+150)}>
              <i className="fa fa-angle-right">{">"}</i>
            </button>
          )}
        </div>
      </div>
    </ProjectsCardStyle>
  );
};

export default ProjectsCard;
