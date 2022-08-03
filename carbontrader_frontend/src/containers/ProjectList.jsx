import React from 'react';
import { useEffect,useState } from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/ProjectList.scss';
import { collection, onSnapshot,query } from "firebase/firestore";
import {db} from '../firebase'
import axios from 'axios';

const ProjectList = () => {
    

  
	return (
		<section className="main-container">
            <div className='textContainer'>
                <br/>
            <p className='main-titleFirst'>Bienvenidos al</p>
            <h1 className='main-titleSecond'>Portafolio de CarbonTrader</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie, lorem sit amet dignissim viverra, est dolor dapibus dui, quis aliquet neque erat commodo arcu. </p>
            </div>
           
			<div className="ProjectList">
				
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                
			</div>
		</section>
	);
}

export default ProjectList;