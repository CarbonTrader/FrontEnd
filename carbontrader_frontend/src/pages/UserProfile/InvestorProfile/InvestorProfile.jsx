import React from "react";
import { useEffect, useState } from "react";

import BasicInfoBanner from "../../../components/UserProfile/BasicInfoBanner";
import UserProfileTabs from "../../../components/UserProfile/UserProfileTabs";
import ProfileInfo from "./ProfileInfo";
import InvestorTransactionList from "./InvestorTransactionList";
import MyWallet from "./MyWallet";

const InvestorProfile = ({ investor }) => {
  return (
    <section className = "investor-profile-container">
      <div>
        {/*¿Cómo se deberían documentar los tipos de usuario que existen en la plataforma*/}
        <BasicInfoBanner name={investor.name} userType={"Inversionista"} />
      </div>
      <div>
        <UserProfileTabs>
          <div label = "Perfil">
            <ProfileInfo
              investorName = {investor.name}
              investorEmail = {investor.email}
            />
          </div>
          <div label = "Transacciones">
            <InvestorTransactionList transactionList = {investor.transactions} />
          </div>
          <div label = "Mi billetera">
            <MyWallet />
          </div>
        </UserProfileTabs>
      </div>
    </section>
  );
};

export default InvestorProfile;
