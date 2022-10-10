import React, { useContext, useState } from "react";
import "../../styles/pages/home/projectList/ProjectItem.scss";
import AppContext from "../../context/AppContext";

const ProjectItem = ({ project }) => {
  const { showInfo } = useContext(AppContext);
  const handleClick = (item) => {
    localStorage.removeItem("currentProject");
    localStorage.removeItem("market");
    localStorage.removeItem("quantity");
    localStorage.removeItem("amount");
    localStorage.setItem(
      "amount",
      project.credits.filter((x) => x.state === "OnSale").length
    );
    localStorage.setItem("currentProject", JSON.stringify(project));
    showInfo(item);
  };
  return (
    <div className="ProjectItem" onClick={() => handleClick(project)}>
      <div className="ProjectItem-Image">
        <img src={project.images[0]} alt="" />
      </div>
      <div className="ProjectItem-info">
        <div>
          <h1 className="ProjectItem-title">{project.name}</h1>
          <p className="ProjectItem-description">
            <p className="subtitle">Sector: </p>
            {project.sector}.
          </p>
          <p className="ProjectItem-description ">
            <p className="subtitle">Verificador: </p>
            {project.project_verifier}.
          </p>
          <p className="ProjectItem-description ">
            <p className="subtitle">Criterio de evaluación: </p>
            {project.evaluation_criteria}.
          </p>
          <p className="ProjectItem-description ">
            <p className="subtitle">Método de cuantificación: </p>
            {project.quantification_methodology}:
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
