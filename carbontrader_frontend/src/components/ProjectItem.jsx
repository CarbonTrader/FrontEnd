import React, { useState } from 'react';
import '../styles/ProjectItem.scss';
import Image from '../assets/img/ProjectExample.jpg'


const ProjectItem = () => {
	

	return (
		<div className="ProjectItem">
			<div className='ProjectItem-Image'>
				<img src={Image} alt="" />
			</div>
			<div className="ProjectItem-info">
				<div>
					<p className='ProjectItem-title'>Proyecto Alpha</p>
					<p className='ProjectItem-description'>Lorem ipsum dolor sit amet, i. Lorem ipsum dolor 
					sit amet, consectetur adipiscing elit. Nulla molestie, lorem sit amet dignissim viverra, est dolor dapibus dui, quis aliquet neque erat commodo arcu</p>
				</div>
			</div>
		</div>
	);
}

export default ProjectItem;