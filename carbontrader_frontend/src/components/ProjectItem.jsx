import React, { useState } from "react";
import "../styles/ProjectItem.scss";
import Image from "../assets/img/ProjectExample.jpg";

const ProjectItem = (props) => {
  return (
    <div className="ProjectItem">
      <div className="ProjectItem-Image">
        <img src={props.imageURL} alt="" />
      </div>
      <div className="ProjectItem-info">
        <div>
          <p className="ProjectItem-title">{props.title}</p>
          <p className="ProjectItem-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
