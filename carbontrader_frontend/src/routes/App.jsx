import React from "react";
import Layout from '../containers/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import '../styles/global.scss';


const App = () => {
  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                <Route exact path="/" element={<Home/>} />
              </Routes>
          </Layout>
      </BrowserRouter>
  );
}

export default App;
