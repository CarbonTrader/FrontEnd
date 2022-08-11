import React from 'react';
import profile_pic_icon from '../../assets/icons/avatar_icon.svg'

const BasicInfoBanner = ({ name, userType }) => {
    return (
        <section className="BasicInfoBanner"
            style={{ backgroundImage: "linear-gradient(to right, #49B26D, #22E163 48%)" }}>
            <div className="gradientContainer"
                style={{
                    width: "100%",
                    display: "inline-block"
                }}>
                <div style={{ paddingTop: '15px' }}>
                    <div style={{ float: "left", paddingRight: '30px', paddingLeft: '15px', paddingBottom: '10px' }}>
                        <img src={profile_pic_icon} alt="" />
                    </div>
                    <div style={{ float: "left", paddingTop: '5px' }}>
                        <h2 className='investorName' style={{ color: "#FFFFFF" }}>{name}</h2>
                        <h3 className='userType' style={{ color: "#FFFFFF" }}>{userType}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BasicInfoBanner;