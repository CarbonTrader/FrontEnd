import React from "react";
import ProjectList from "../containers/ProjectList";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header currentItem="projectListItem" />
      <ProjectList />
    </>
  );
};
export default Home;
