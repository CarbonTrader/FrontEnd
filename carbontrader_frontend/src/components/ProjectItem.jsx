import React, { useContext, useState } from 'react';
import '../styles/ProjectItem.scss';
import AppContext from '../context/AppContext';
import Image from '../assets/img/ProjectExample.jpg'


const ProjectItem = ({project}) => {
	
	const { showInfo } = useContext(AppContext);
	const handleClick = item =>{
		showInfo(item)
	}

	return (
		<div className="ProjectItem" onClick={() => handleClick(project)}>
			<div className='ProjectItem-Image'>
				<img src={project.image} alt="" />
			</div>
			<div className="ProjectItem-info">
				<div>
					<p className='ProjectItem-title'>{project.project}</p>
					<p className='ProjectItem-description'><p className='subtitle'>Sector:</p>{project.Sector}.</p>
					<p className='ProjectItem-description '><p className='subtitle'>Verificador:</p>{project.verifier}.</p>
					<p className='ProjectItem-description '><p className='subtitle'>Criterio de evaluación:</p>{project.evaluation_criteria}.</p>
					<p className='ProjectItem-description '><p className='subtitle'>Método de cuantificación:</p>{project.Quantification_methodology}.</p>
				</div>
			</div>
		</div>
	);
}

export default ProjectItem;