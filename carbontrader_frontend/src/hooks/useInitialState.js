import { useState } from "react";

const initialState = {
  currentItem: "profile",
  user: {},
  project: [],
  firstSection: "list",
  secondSection: "info",
  currentHomeTab: "project",
  registerOption: "CP",
  device:""
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
  const changedevice = (p) => {
    setState({
      ...state,
      device: p,
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
    changedevice,
  };
};

export default useInitialState;
