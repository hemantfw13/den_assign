import React from "react";
import { DepositLayout } from "../styles/DepositLayout";
import DepositCard from "./DepositCard";
import {
  HeadingLayout,
  SubHeadingLayout,
} from "../styles/HeadingSubHeadingLayout";
const Deposit = () => {
  return (
    <DepositLayout>
      <HeadingLayout
        style={{
          color: "#0E0E0F",
          marginTop: 117,
          position: "absolute",
          marginLeft: 400,
        }}
      >
        Start Small. Earn Big.
      </HeadingLayout>
      <SubHeadingLayout
        style={{
          width: 660,
          position: "absolute",
          color: "#32333A",
          marginLeft: 400,
          marginTop: 227,
        }}
      >
        Deposity a minimum of 1000 and get a Deposit bonus + dedicagted
        relationship manager
      </SubHeadingLayout>
      <DepositCard />
    </DepositLayout>
  );
};

export default Deposit;
