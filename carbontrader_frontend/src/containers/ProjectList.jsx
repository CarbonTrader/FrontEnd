import React from "react";
import { useEffect, useState, useContext } from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/ProjectList.scss";
import ProjectInfo from "../components/ProjectInfo";
import AppContext from "../context/AppContext";
import useGetProjects from "../hooks/useGetProjects";
import Checkout from "../components/Checkout";

const ProjectList = () => {
  const { state } = useContext(AppContext);
  let FirstMainContainerSection;
  let SecondMainContainerSection;
  const projects = useGetProjects();

  if (state.firstSection === "list") {
    FirstMainContainerSection = projects.map((project) => (
      <ProjectItem project={project} />
    ));
  } else {
    FirstMainContainerSection = <ProjectInfo />;
  }

  if (state.secondSection === "info") {
    SecondMainContainerSection = <ProjectInfo />;
  } else {
    SecondMainContainerSection = <Checkout />;
  }

  return (
    <section className="main-container">
      <div className="textContainer">
        <br />
        <p className="main-titleFirst">Bienvenidos al</p>
        <h1 className="main-titleSecond">Portafolio de CarbonTrader</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          doloribus ipsa. Pariatur optio sequi perferendis, omnis debitis,
          inventore, est odio cupiditate placeat quibusdam error qui possimus et
          assumenda modi quam.{" "}
        </p>
      </div>

      <div className="ProjectList-container">
        <div className="ProjectList-listItems">{FirstMainContainerSection}</div>
        <div className="Proyect-info">{SecondMainContainerSection}</div>
      </div>
    </section>
  );
};

export default ProjectList;
