import React from "react";
import Header from "../components/Header";
import "../styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../components/Checkout";
import ProjectInfo from "../components/ProjectInfo";
import Home from "../pages/Home";

function App() {
  const project = {
    title: "Proyecto alfa",
    imageURL: "https://alkilautos.com/blog/wp-content/uploads/2019/03/D.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie, lorem sit amet dignissim viverra, est dolor dapibus dui, quis aliquet neque erat commodo arcu.",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/" element={<Register />} />
        <Route exact path="/" element={<Header />} />
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/"
          element={
            <ProjectInfo
              imageURL={project.imageURL}
              title={project.title}
              description={project.description}
            />
          }
        />
        <Route exact path="/" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
