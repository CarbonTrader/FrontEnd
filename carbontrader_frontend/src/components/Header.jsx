import React from "react";
import '../styles/Header.scss'
import  logo from"../assets/icons/world_icon.png"


const Header = () => {
    return (
        <nav className="menu">
            <div className="menu__firstSection">
                <img src={logo} alt="Logo" />
                <h1>CarbonTrader</h1>
            </div>
            <div className="menu__secondSection">
                <ul className="menu__items">
                    <li className="menu__item">
                        <a href="/">Proyectos</a>
                    </li>
                    <li className="menu__item">
                        <a href="/">Checkout</a>
                    </li>
                    <li className="menu__item">
                        <a href="/">Proyecto</a>
                    </li>
                    <li className="menu__item">
                        <a href="/">Item 1</a>
                    </li>
             
                </ul>
            </div>
            <div className="menu__thirdSection">
                <a href="">Ingresar</a>
            </div>
        </nav>
    );
}

export default Header;