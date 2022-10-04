import React from "react";
import ProjectList from "../containers/projects/ProjectList";
import GlobalTransactions from "../containers/globalTransactions/GlobalTransactions";
import UserProfile from "../containers/profile/UserProfile";
import UserMarket from "../containers/market/UserMarket";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import AppContext from "../context/AppContext";
import UserContext from "../context/UserContext";
import ProyectCheckout from "../containers/market/ProyectCheckout";
import { useContext, useEffect } from "react";

const Home = () => {
  const { state } = useContext(AppContext);
  const { user, changeToken } = useContext(UserContext);

  useEffect(() => {
    changeToken();
  }, []);

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
