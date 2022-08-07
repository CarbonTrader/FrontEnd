import Header from '../components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import '../styles/global.scss';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Header />} />
    </Routes>

</BrowserRouter>
  );
}

export default App;
