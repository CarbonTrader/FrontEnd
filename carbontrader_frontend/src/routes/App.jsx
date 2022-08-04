import '../styles/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from '../components/Checkout'


function App() {
  
  return (
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Checkout/>} />
        </Routes>
    
</BrowserRouter>
  );
}


export default App;
