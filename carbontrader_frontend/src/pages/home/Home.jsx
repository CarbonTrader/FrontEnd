import React, { useEffect } from "react";
import ProjectList from "../../containers/projects/ProjectList";
import GlobalTransactions from "../../containers/globalTransactions/GlobalTransactions";
import UserProfile from "../../containers/profile/UserProfile";
import Header from "../../components/shared/header/Header";
import { useAppContext } from "../../context/AppContext";
import { useUserContext } from "../../context/UserContext";
import MarketCredits from "../../containers/projects/MarketCredits";

const Home = () => {
  const { state } = useAppContext();
  const { changeUser } = useUserContext();

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
