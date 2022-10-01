import React from "react";
import ProjectList from "../containers/projects/ProjectList";
import GlobalTransactions from "../containers/globalTransactions/GlobalTransactions";
import UserProfile from "../containers/profile/UserProfile";
import UserMarket from "../containers/market/UserMarket";
import Header from "../components/Header";
import AppContext from "../context/AppContext";
import MobileHeader from "../components/MobileHeader";
import { useContext, useEffect } from "react";
import ProyectCheckout from "../containers/market/ProyectCheckout";

const Home = () => {
  const { state, changeDevice } = useContext(AppContext);

  return (
    <>
      <Header currentItem="projectListItem" />
      {state.headerType && <MobileHeader />}
      {state.currentHomeTab === "project" ? (
        <ProjectList />
      ) : state.currentHomeTab === "transactions" ? (
        <GlobalTransactions />
      ) : state.currentHomeTab === "profile" ? (
        <UserProfile />
      ) : state.currentHomeTab === "market" ? (
        <UserMarket />
      ) : (
        <ProyectCheckout />
      )}
    </>
  );
};
export default Home;
