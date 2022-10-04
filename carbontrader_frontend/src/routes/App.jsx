import React from "react";
import "../styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
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
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route exact path="/Home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </UserContext.Provider>
  );
}
export default App;
