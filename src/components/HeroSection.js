import React from "react";
import { HeroLayout, HeroText } from "../styles/HeroLayout";
import {
  HeadingLayout,
  SubHeadingLayout,
} from "../styles/HeadingSubHeadingLayout";
import { StaticImage } from "gatsby-plugin-image";
const HeroSection = () => {
  return (
    <HeroLayout>
      <HeroText>
        It’s time to trade, the <strong>future.</strong>
      </HeroText>
      <section>
        Trade BTC, ETH Futures with 125x leverage and earn rewards.
      </section>
      <StaticImage
        src="../assets/Images/phones.png"
        alt="phone"
        width={779.594}
        height={668.698}
      />
    </HeroLayout>
  );
};

export default HeroSection;
