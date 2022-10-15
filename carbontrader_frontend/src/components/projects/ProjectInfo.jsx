import React, { useContext, useState } from "react";
import "../../styles/pages/home/projectList/ProjectInfo.scss";
import AppContext from "../../context/AppContext";
import { getUserTransactions, getUser } from "../../services/userService";
const ProjectInfo = () => {
  const { state } = useContext(AppContext);
  const { changeFirstSection } = useContext(AppContext);

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
        <img src={state.project.images[0]} alt="" />
        <h1>{state.project.name}</h1>
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
              <p>Bonos en venta</p>
              <p>{state.project.credits.length}</p>
            </span>
            <span>
              <p>Bonos emitidos</p>
              <p>?</p>
            </span>
            <span>
              <p>Fecha de emisión</p>
              <p>13/03/2020</p>
            </span>
            <span>
              <p>Precio Unitario</p>
              <p>${state.project.price}COP</p>
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
