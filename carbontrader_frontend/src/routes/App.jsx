
import '../styles/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectInfo from '../components/ProjectInfo'

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<ProjectInfo/>} />
        </Routes>
    
</BrowserRouter>
  );
}

export default App;
