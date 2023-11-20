import React from "react";
import { TradeFeeLayout } from "../styles/TradeFeeLayout";
import FeeCard from "./FeeCard";
import {
  HeadingLayout,
  SubHeadingLayout,
} from "../styles/HeadingSubHeadingLayout";
const TradeFee = () => {
  return (
    <TradeFeeLayout>
      <HeadingLayout>
        Trade More. <strong>Pay Less.</strong>
      </HeadingLayout>
      <SubHeadingLayout>Our low Fees Supercharge Your Profits</SubHeadingLayout>
      <FeeCard />
    </TradeFeeLayout>
  );
};

export default TradeFee;
