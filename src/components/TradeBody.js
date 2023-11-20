import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { PhoneWrapper } from "../styles/TradeBodyLayout";
import TradeFee from "./TradeFee";
import Market from "./Market";
import Frontiers from "./Frontiers";
import Deposit from "./Deposit";
import AccountOpen from "./AccountOpen";
import Partnership from "./Partnership";
import Feedback from "./Feedback";
import MoneyEarning from "./MoneyEarning";
import Community from "./Community";
import Visionaries from "./Visionaries";
const TradeBody = () => {
  return (
    <>
      <PhoneWrapper>
        <StaticImage
          src="../assets/Images/phoneGroup.png"
          alt="phones"
          height={1500}
          width={280}
        />
      </PhoneWrapper>
      <TradeFee />
      <Market />
      <Frontiers />
      <Deposit />
      <AccountOpen />
      <Partnership />
      <Feedback />
      <MoneyEarning />
      <Community />
      <Visionaries />
    </>
  );
};

export default TradeBody;
