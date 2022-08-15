import { useState } from "react";

const initialState = {
  currentItem: "profile",
  user:{}
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const changeCurrentItem = (p) => {
    setState({
      ...state,
      currentItem: p,
    });
  };
  const changeUser = (u) => {
    setState({
      ...state,
      user: u,
    });
  };
  return {
    state,
    changeCurrentItem,
    changeUser
  };
};

export default useInitialState;