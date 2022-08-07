import React, { useState } from 'react';
import '../styles/ProjectInfo.scss';
import Img from'../assets/img/ProjectExample.jpg';
const ProjectInfo = (props) => {
    return(
        <section className='InfoContainer'>
            <div className='InfoContainer-descriptionContainer'>
                <img src={props.imageURL} alt="" />
                <h1>{props.title}</h1>
                <div className='InfoContainer-textContainer'>
                    <p>{props.description}</p>
                    <h2>¿Quienes somos?</h2>
                    <p>{props.description}</p>
                    <h2>¿Donde nos ubicamos?</h2>
                    <p>{props.description}</p>
                </div>                           
            </div>  
            <div className='InfoContainer-buttonContainer'>
                <button>Comprar créditos</button>
            </div>  
        </section>
    );
}
export default ProjectInfo