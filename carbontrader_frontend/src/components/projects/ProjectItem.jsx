import React, {useContext, useState} from "react";
import "../../styles/pages/home/projectList/ProjectItem.scss";
import AppContext from "../../context/AppContext";
import {getOnSaleProvidersCredits, getProviderEmail,} from "../../services/projectService";
import LoadingSpinner from "../shared/loading-spinner/LoadingSpinner";

const ProjectItem = ({ project }) => {
  const { showInfo } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (item) => {
    setIsLoading(true);
    localStorage.setItem("currentProject", JSON.stringify(project));
    showInfo(item);
    getProviderEmail(project.id).then((res) => {
      localStorage.setItem("cp_email", res.data);
    });
    getOnSaleProvidersCredits(project.id).then((res) => {
      localStorage.setItem("provider_credits", JSON.stringify(res.data));
      setIsLoading(false);
    });
  };

  return (
    <div className="ProjectItem" onClick={() => handleClick(project)}>
      {isLoading && <LoadingSpinner />}
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
