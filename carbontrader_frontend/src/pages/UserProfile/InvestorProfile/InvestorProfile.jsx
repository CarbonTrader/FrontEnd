import React from "react";
import { useEffect, useState } from "react";

import BasicInfoBanner from "../../../components/UserProfile/BasicInfoBanner";
import UserProfileTabs from "../../../components/UserProfile/UserProfileTabs";
import ProfileInfo from "./ProfileInfo";
import InvestorTransactionList from "./InvestorTransactionList";
import MyWallet from "./MyWallet";
import * as investorProfileService from '../../../services/investorProfileService'

const InvestorProfile = () => {

  const credit_records = investorProfileService.getAllInvestorCreditRecords()
  const investor = investorProfileService.getInvestorProfileInfo()

  return (
    <section className="investor-profile-container">
      <BasicInfoBanner name={investor.first_name + ' ' + investor.last_name} userType={"Inversionista"} />
      <UserProfileTabs>
        <div label="Perfil">
          <ProfileInfo
            investorName={investor.first_name + ' ' + investor.last_name}
            investorEmail={investor.email}
          />
        </div>
        <div label="Transacciones">
          <InvestorTransactionList transactionList={investor.transactions} />
        </div>
        <div label="Mi billetera">
          <MyWallet credit_records={credit_records} />
        </div>
      </UserProfileTabs>
    </section>
  );
};

export default InvestorProfile;
