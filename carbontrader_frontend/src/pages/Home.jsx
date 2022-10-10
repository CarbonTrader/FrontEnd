import React from "react";
import ProjectList from "../containers/projects/ProjectList";
import GlobalTransactions from "../containers/globalTransactions/GlobalTransactions";
import UserProfile from "../containers/profile/UserProfile";
import Header from "../components/Header";
import AppContext from "../context/AppContext";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import MarketCredits from "../containers/projects/MarketCredits";

const Home = () => {
  const { state } = useContext(AppContext);
  const { user, changeToken, changeUser } = useContext(UserContext);

  useEffect(() => {
    changeUser();
  }, []);

  return (
    <>
      <Header currentItem="projectListItem" />
      {state.currentHomeTab === "project" ? (
        <ProjectList />
      ) : state.currentHomeTab === "transactions" ? (
        <GlobalTransactions />
      ) : state.currentHomeTab === "profile" ? (
        <UserProfile />
      ) : (
        <MarketCredits />
      )}
    </>
  );
};
export default Home;
