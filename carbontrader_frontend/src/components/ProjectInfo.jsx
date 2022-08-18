import React, { useContext, useState } from "react";
import "../styles/ProjectInfo.scss";
import AppContext from "../context/AppContext";
import Img from "../assets/img/ProjectExample.jpg";
const ProjectInfo = (props) => {
  const { state } = useContext(AppContext);
  const { changeFirstSection } = useContext(AppContext);
  const dataProjectContainer = document.getElementById("projectData");
  const handleClick = () => {
    changeFirstSection();
  };

  if (state.project.length === 0) {
    return (
      <div className="emptySelection">
        <div>
          <h1 className="ex">Seleccione el proyecto de su preferencia</h1>
        </div>
      </div>
    );
  }

  return (
    <section className="InfoContainer">
      <div className=" InfoContainer-descriptionContainer">
        <img src={state.project.image} alt="" />
        <h1>{state.project.project}</h1>
        <div
          id="projectData"
          className={`InfoContainer-textContainer
            ${
              state.secondSection === "check"
                ? ""
                : "heightDescriptionContainer"
            }`}
        >
          <p>{state.project.description}</p>
          <div className="projectDataContainer">
            <span>
              <p>Bonos de circulación</p>
              <p>46,000</p>
            </span>
            <span>
              <p>Bonos emitidos</p>
              <p>1000,000</p>
            </span>
            <span>
              <p>Fecha de emisión</p>
              <p>13/03/2020</p>
            </span>
            <span>
              <p>Precio Unitario</p>
              <p>$43.000COP</p>
            </span>
          </div>
        </div>
      </div>
      {state.secondSection !== "check" && (
        <div className="InfoContainer-buttonContainer">
          <button onClick={() => handleClick()}>Comprar créditos</button>
        </div>
      )}
    </section>
  );
};
export default ProjectInfo;
