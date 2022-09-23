import React from "react";
import ProjectList from "../containers/projects/ProjectList";
import GlobalTransactions from "../containers/globalTransactions/GlobalTransactions";
import UserProfile from "../containers/profile/UserProfile";
import Header from "../components/Header";
import AppContext from "../context/AppContext";
import MobileHeader from "../components/MobileHeader";
import { useContext } from "react";

const Home = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <Header currentItem="projectListItem" />
      {state.headerType && <MobileHeader />}
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
