import React, { useState } from 'react';
import '../styles/ProjectInfo.scss';
import Img from'../assets/img/ProjectExample.jpg';
const ProjectInfo = () => {
    return(
        <section className='InfoContainer'>
            <div className='InfoContainer-descriptionContainer'>
                <img src={Img} alt="" />
                <h1>Proyecto Delta</h1>
                <div className='InfoContainer-textContainer'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad distinctio eius aperiam odio est nesciunt, praesentium quae facere, earum blanditiis molestiae labore? Impedit animi labore, commodi porro nam consequatur cupiditate.</p>
                    <h2>¿Quienes somos?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ut dolorum molestiae enim corporis. Ut maxime aspernatur quaerat soluta, deleniti in sint consequuntur, dicta veritatis reprehenderit possimus corrupti eos debitis?</p>
                    <h2>¿Donde nos ubicamos?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugiat sint, non inventore voluptate commodi repellat, sed labore, voluptates odit magni quis! Veritatis tempora earum explicabo voluptate officiis maxime! Eum.</p>
                </div>            
                
                             
            </div>  
            <div className='InfoContainer-buttonContainer'>
                <button>Comprar créditos</button>
            </div>  
        </section>
    );
}
export default ProjectInfo