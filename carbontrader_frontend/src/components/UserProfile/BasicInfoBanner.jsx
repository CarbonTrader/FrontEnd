import React, { useState } from 'react';
import profile_pic_icon from '../../assets/icons/avatar_icon.svg'

const BasicInfoBanner = ({name, userType}) => {
    return (
        <section className ="BasicInfoBanner">
            <div className="gradientContainer">
                <div style={{float : 'left'}}>
                    <img src={profile_pic_icon} alt = "" height = {100} width = {100}/>
                </div>
                <div>
                    <h2 className='traderName'>{name}</h2>
                    <p className='userType'>{userType}</p>
                </div>
            </div>
        </section>
    );
}

export default BasicInfoBanner;