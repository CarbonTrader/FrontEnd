import React, {useContext, useEffect, useState} from "react";
import ProjectItem from "../../components/projects/ProjectItem";
import "../../styles/pages/home/projectList/ProjectList.scss";
import ProjectInfo from "../../components/projects/ProjectInfo";
import AppContext from "../../context/AppContext";
import useGetProjects from "../../hooks/useGetProjects";
import Checkout from "../../components/projects/Checkout";
import {getGlobalTransactions} from "../../services/transactionService";
import LoadingSpinner from "../../components/shared/loading-spinner/LoadingSpinner";

const ProjectList = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    localStorage.removeItem("currentProject");
    localStorage.removeItem("market");
    localStorage.removeItem("quantity");
    localStorage.removeItem("amount");
    localStorage.removeItem("credits");
    localStorage.removeItem("transactions");
    localStorage.removeItem("provider_credits");
    localStorage.removeItem("cp_email");
    getGlobalTransactions().then((res) => {
      localStorage.setItem("global", JSON.stringify(res));
      setIsLoading(false);
    });
  }, []);
  const { state } = useContext(AppContext);
  const projects = useGetProjects();

  return (
    <section className="main-container">
      {isLoading && <LoadingSpinner />}
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
        <div
          id="firstHomeSection"
          className={`ProjectList-listItems
            ${state.firstSection === "list" ? "scroll" : ""}`}
        >
          {state.firstSection === "list" ? (
            projects.map((project) => <ProjectItem project={project} />)
          ) : (
            <ProjectInfo />
          )}
        </div>
        <div className="Proyect-info">
          {state.secondSection === "info" ? <ProjectInfo /> : <Checkout />}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
