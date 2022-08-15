import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import "../styles/global.scss";

import Home from "../pages/Home";
import Header from "../components/Header";
import Checkout from "../components/Checkout";
import ProjectInfo from "../components/ProjectInfo";
import UserProfile from "../pages/UserProfile";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
