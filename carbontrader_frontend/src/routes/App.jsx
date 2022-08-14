import "../styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import "../styles/global.scss";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

function App() {
  const project = {
    title: "Proyecto alfa",
    imageURL: "https://alkilautos.com/blog/wp-content/uploads/2019/03/D.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie, lorem sit amet dignissim viverra, est dolor dapibus dui, quis aliquet neque erat commodo arcu.",
  };
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
