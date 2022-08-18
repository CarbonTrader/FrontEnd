import React from "react";
import "../styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
        <Route exact path="/Home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
export default App;
