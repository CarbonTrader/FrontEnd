import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../styles/App.scss';
import '../styles/global.scss';

import Home from "../pages/Home";
import Header from '../components/Header'
import Checkout from '../components/Checkout'
import ProjectInfo from '../components/ProjectInfo'
import InvestorProfile from '../pages/UserProfile/InvestorProfile/InvestorProfile';

function App() {
  const project = {
    "title": "Proyecto alfa",
    "imageURL": "https://alkilautos.com/blog/wp-content/uploads/2019/03/D.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie, lorem sit amet dignissim viverra, est dolor dapibus dui, quis aliquet neque erat commodo arcu.",
  }
  const investor = {
    "name": "Cristóbal",
    "email": "email123@gmail.com",
    "password": "122445",
    "transactions":[
      {
        "buyer_pk":"64f6796080e9d292...",
        "carbontrader_serial":"1",
        "hash":"1",
        "seller_pk": "b99bb445c1721382...",
        "timestamp":"111",
        "transaction_type":"Compra"
      },
      {
        "buyer_pk":"64f6796080e9d292...",
        "carbontrader_serial":"1",
        "hash":"1",
        "seller_pk": "0592b0b489e78ba1...",
        "timestamp":"222",
        "transaction_type":"Compra"
      },
      {
        "buyer_pk":"ecf80ad14629dba8...",
        "carbontrader_serial":"1",
        "hash":"1",
        "seller_pk": "64f6796080e9d292...",
        "timestamp":"333",
        "transaction_type":"Venta"
      }
    ]
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<InvestorProfile investor = {investor}/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
