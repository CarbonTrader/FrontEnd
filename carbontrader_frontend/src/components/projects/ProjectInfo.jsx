import React, { useContext } from "react";
import "../../styles/pages/home/projectList/ProjectInfo.scss";
import AppContext from "../../context/AppContext";

const ProjectInfo = () => {
  const { state } = useContext(AppContext);
  const { changeFirstSection } = useContext(AppContext);

  const handleClick = () => {
    if (
      state.project.credits.filter((credit) => credit.retire_date === null)
        .length === 0
    ) {
      alert("Este proyecto no tiene bonos en venta");
    } else {
      changeFirstSection();
    }
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
              <p>
                {
                  state.project.credits.filter(
                    (credit) => credit.retire_date === null
                  ).length
                }
              </p>
            </span>
            <span>
              <p>Bonos emitidos</p>
              <p>{state.project.credits.length}</p>
            </span>
            <span>
              <p>Fecha de emisión</p>
              <p>
                {new Date(
                  state.project.creation_date / 1000000
                ).toLocaleDateString()}
              </p>
            </span>
            <span>
              <p>Precio Unitario</p>
              <p>${state.project.credits[0].price.toFixed(3)}COP</p>
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
