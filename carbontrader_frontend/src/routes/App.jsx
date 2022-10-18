import React from "react";
import "../styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import AppContext from "../context/AppContext";
import UserContext from "../context/UserContext";
import useInitialState from "../hooks/useInitialState";
import useUserState from "../hooks/useUserState";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const initialState = useInitialState();
  const userState = useUserState();
  return (
    <UserContext.Provider value={userState}>
      <AppContext.Provider value={initialState}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route exact path="/Home" element={<Home />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </UserContext.Provider>
  );
}
export default App;
