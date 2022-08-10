import React, { useState } from 'react';
import profile_pic_icon from '../../assets/icons/avatar_icon.svg'

const BasicInfoBanner = ({name, userType}) => {
    return (
        <section className ="BasicInfoBanner">
            <div className="gradientContainer" 
                style={{
                    width: "100%",
                    height: "125px",
                    backgroundImage: "linear-gradient(to right, #49B26D, #22E163 48%)", 
                    float: 'top'
                }}>
                <div style = {{paddingTop: '15px'}}>
                    <div style={{float : 'left', paddingRight : '15px', paddingLeft : '15px'}}>
                        <img src={profile_pic_icon} alt = "" height = {100} width = {100}/>
                    </div>
                    <div style={{float: 'left', paddingTop: '5px'}}>
                        <h2 className='investorName' style = {{color: "#FFFFFF"}}>{name}</h2>
                        <h3 className='userType' style = {{color: "#FFFFFF"}}>{userType}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BasicInfoBanner;