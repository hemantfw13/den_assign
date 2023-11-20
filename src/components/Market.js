import React from "react";
import {
  HeadingLayout,
  SubHeadingLayout,
} from "../styles/HeadingSubHeadingLayout";
import { MarketImageWrapper } from "../styles/MarketLayout";
import ButtonLayout from "../styles/ButtonLayout";
import { StaticImage } from "gatsby-plugin-image";
const Market = () => {
  return (
    <>
      <HeadingLayout style={{ width: 794 }}>
        Explore the Markets like it is your <strong>Playground.</strong>
      </HeadingLayout>
      <SubHeadingLayout>
        Search for your favorite coins and stay ahead of the market
      </SubHeadingLayout>
      <MarketImageWrapper>
        <StaticImage
          src="../assets/Images/market.png"
          alt="phone"
          width={1135}
          height={671}
        />
      </MarketImageWrapper>
      <ButtonLayout
        style={{
          marginLeft: 600,
          padding: 13,
          paddingLeft: 48,
          paddingRight: 48,
        }}
      >
        Explore Markets
      </ButtonLayout>
    </>
  );
};

export default Market;
