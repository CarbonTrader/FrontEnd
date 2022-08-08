import React from 'react';
import { useEffect, useState } from 'react';

import BasicInfoBanner from '../components/UserProfile/BasicInfoBanner'
import UserProfileTabs from '../components/UserProfile/UserProfileTabs'
import ProfileInfo from '../components/UserProfile/ProfileInfo'
import TraderTransactionList from '../components/UserProfile/TraderTransactionList'
import MyWallet from '../components/UserProfile/MyWallet'

const UserProfile = ({trader}) => {
    return (
        <section className = "user-profile-container">
            <div>
                <BasicInfoBanner name = {trader.name} userType = {"Comercializador"} />
            </div>
            <div>
                <UserProfileTabs>
                    <div label = "Perfil">
                        <ProfileInfo traderName={trader.name} traderEmail={trader.email}/>
                    </div>
                    <div label = "Transacciones">
                        <TraderTransactionList traderTransactionList = {trader.transactions}/>
                    </div>
                    <div label = "Mi billetera">
                        <MyWallet />
                    </div>
                </UserProfileTabs>
            </div>
        </section>
    );
}

export default UserProfile;