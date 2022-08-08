import '../styles/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import '../styles/global.scss';
import Checkout from '../components/Checkout'
import ProjectInfo from '../components/ProjectInfo'

function App() {
  const project = {
    "title": "Proyecto alfa",
    "imageURL": "https://alkilautos.com/blog/wp-content/uploads/2019/03/D.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie, lorem sit amet dignissim viverra, est dolor dapibus dui, quis aliquet neque erat commodo arcu.",
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<ProjectInfo imageURL={project.imageURL} title={project.title} description={project.description} />} />
        <Route exact path="/" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
