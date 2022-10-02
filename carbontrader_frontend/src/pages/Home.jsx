import React from "react";
import ProjectList from "../containers/projects/ProjectList";
import GlobalTransactions from "../containers/globalTransactions/GlobalTransactions";
import UserProfile from "../containers/profile/UserProfile";
import Header from "../components/Header";
import AppContext from "../context/AppContext";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

const Home = () => {
  const { state } = useContext(AppContext);
  const { user,changeToken } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
    changeToken()
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
