import React, { useContext, useState } from 'react';
import '../styles/ProjectInfo.scss';
import AppContext from '../context/AppContext'
import Img from '../assets/img/ProjectExample.jpg';
const ProjectInfo = (props) => {
    const { state } = useContext(AppContext);
    const { changeFirstSection } = useContext(AppContext);
    const { changeSecondSection } = useContext(AppContext)
    let optionToShow;
    const handleClick = () =>{
        console.log(state);
		changeFirstSection()
        //changeSecondSection("check")
	}

    if( state.project.length === 0 ){
        return(
            <h1 className = 'ex'>Escoja un proyecto</h1>
        )
    }
    if(state.secondSection==="check"){
        optionToShow = "";
    }else{
        optionToShow = <button onClick={() => handleClick()}>Comprar créditos</button>;
    }
    return (
        <section className='InfoContainer'>
            <div className='InfoContainer-descriptionContainer'>
                <img src={state.project.image} alt="" />
                <h1>{state.project.project}</h1>
                <div className='InfoContainer-textContainer'>
                    <p>{state.project.description}</p>
                    <h2>¿Quienes somos?</h2>
                    <p>{state.project.description}</p>
                    <h2>¿Donde nos ubicamos?</h2>
                    <p>{state.project.description}</p>
                </div>
            </div>
            <div className='InfoContainer-buttonContainer'>
                {optionToShow}
            </div>
        </section>
    );
}
export default ProjectInfo