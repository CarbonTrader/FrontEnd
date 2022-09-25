import React from "react";
import ProjectList from "../containers/projects/ProjectList";
import GlobalTransactions from "../containers/globalTransactions/GlobalTransactions";
import UserProfile from "../containers/profile/UserProfile";
import Header from "../components/Header";
import AppContext from "../context/AppContext";
import { useContext, useEffect } from "react";

const Home = () => {
  const { state, changeDevice } = useContext(AppContext);

  useEffect(() => {
    if (state.device === "") {
      if (window.screen.width > 1000) changeDevice("desktop");
      else changeDevice("mobile");
    }
  }, []);

  return (
    <>
      <Header currentItem="projectListItem" />
      {state.currentHomeTab === "project" ? (
        <ProjectList />
      ) : state.currentHomeTab === "transactions" ? (
        <GlobalTransactions />
      ) : (
        <UserProfile />
      )}
    </>
  );
};
export default Home;
