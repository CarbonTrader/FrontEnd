import { useState } from "react";

const initialState = {
  currentItem: "profile",
  user: {},
  project: [],
  firstSection: "list",
  secondSection: "info",
  currentHomeTab: "project",
  registerOption: "CP",
  headerType: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const changeCurrentItem = (p) => {
    setState({
      ...state,
      currentItem: p,
    });
  };

  const changeCurrentHomeTab = (p) => {
    setState({
      ...state,
      currentHomeTab: p,
      headerType: false,
    });
  };

  const changeRegisterOption = (p) => {
    setState({
      ...state,
      registerOption: p,
    });
  };

  const changeUser = (u) => {
    setState({
      ...state,
      user: u,
    });
  };

  const showInfo = (p) => {
    setState({
      ...state,
      project: p,
    });
  };

  const changeFirstSection = () => {
    setState({
      ...state,
      firstSection: "info",
      secondSection: "check",
    });
  };

  const changeprojectListItem = (arg) => {
    setState({
      ...state,
      projectListItem: arg,
    });
  };
  const changeHeaderType = () => {
    setState({
      ...state,
      headerType: !state.headerType,
    });
  };
  const changeCurrentProject = (p) => {
    setState({
      ...state,
      project: p,
      firstSection: "info",
    });
  };
  const changeToCheckout = () => {
    setState({
      ...state,
      //  project: p,
      firstSection: "check",
    });
  };

  return {
    state,
    changeCurrentItem,
    changeUser,
    showInfo,
    changeFirstSection,
    changeprojectListItem,
    changeCurrentHomeTab,
    changeRegisterOption,
    changeHeaderType,
    changeCurrentProject,
    changeToCheckout,
  };
};

export default useInitialState;
