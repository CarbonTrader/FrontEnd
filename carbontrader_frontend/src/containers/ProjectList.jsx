import React from 'react';
import { useEffect,useState } from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/ProjectList.scss';
import { collection, onSnapshot,query } from "firebase/firestore";
import {db} from '../firebase'
import axios from 'axios';

const ProjectList = () => {
    const arrayDummy = [
        {
            "title": "Proyecto alfa",
            "imageURL": "https://alkilautos.com/blog/wp-content/uploads/2019/03/D.jpg",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie, lorem sit amet dignissim viverra, est dolor dapibus dui, quis aliquet neque erat commodo arcu.",
        },
        {
            "title": "Proyecto alfa",
            "imageURL": "https://www.eluniversal.com.co/sites/default/files/bosques_3.jpg",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie, lorem sit amet dignissim viverra, est dolor dapibus dui, quis aliquet neque erat commodo arcu.",
        },
        {
            "title": "Proyecto alfa",
            "imageURL": "https://www.vanguardia.com/binrepository/716x477/0c0/0d0/none/12204/USJO/03tecno02b007_big_ce_VL150772_MG22010792.jpg",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie, lorem sit amet dignissim viverra, est dolor dapibus dui, quis aliquet neque erat commodo arcu.",
        }
    ]  
	return (
		<section className="main-container">
            <div className='textContainer'>
                <br/>
            <p className='main-titleFirst'>Bienvenidos al</p>
            <h1 className='main-titleSecond'>Portafolio de CarbonTrader</h1>
            <p> </p>
            </div>
           
			<div className="ProjectList">
                {arrayDummy.map(project => (
                    <ProjectItem description ={project.description} title={project.title} imageURL={project.imageURL}/>
                ))}                
			</div>
		</section>
	);
}

export default ProjectList;