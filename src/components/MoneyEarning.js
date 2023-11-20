import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { MoneyEarningLayout } from "../styles/MoneyEarningLayout";
import MoneyCard from "./MoneyCard";
import ButtonLayout from "../styles/ButtonLayout";
import {
  HeadingLayout,
  SubHeadingLayout,
} from "../styles/HeadingSubHeadingLayout";
const MoneyEarning = () => {
  return (
    <MoneyEarningLayout>
      <StaticImage
        src="../assets/Images/sound.png"
        alt="sound"
        width={189}
        height={189}
      />
      <HeadingLayout>
        Earn Money. <strong>The Easy Way.</strong>
      </HeadingLayout>
      <SubHeadingLayout>
        No Complexity of Trading Fee, generate volume and win
      </SubHeadingLayout>
      <MoneyCard />
      <ButtonLayout style={{ padding: 14, paddingLeft: 48, paddingRight: 48 }}>
        start earning now
      </ButtonLayout>
    </MoneyEarningLayout>
  );
};

export default MoneyEarning;
