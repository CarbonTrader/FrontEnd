import { useState } from "react";

const initialState = {
  project: [],
  firstSection: "list",
  secondSection: "info",
  projectListItem: true,
  globalTransactionsItem: false,
  profileItem: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

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
  return {
    state,
    showInfo,
    changeFirstSection,
    changeprojectListItem,
  };
};

export default useInitialState;
