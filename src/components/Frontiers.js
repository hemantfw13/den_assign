import React from "react";
import FrontiersData from "./FrontiersData";
import { FrontiersImageWrapper } from "../styles/FrontiersLayout";
import {
  HeadingLayout,
  SubHeadingLayout,
} from "../styles/HeadingSubHeadingLayout";
import { StaticImage } from "gatsby-plugin-image";

const Frontiers = () => {
  return (
    <>
      <HeadingLayout style={{ width: 846, marginTop: 80 }}>
        <strong>Unlock </strong>New Frontiers.
      </HeadingLayout>
      <SubHeadingLayout style={{ width: 660, marginLeft: 400 }}>
        Are you a stock trader looking for new opportunities to make money? We
        got you covered!
      </SubHeadingLayout>
      <FrontiersData />
      <FrontiersImageWrapper>
        <StaticImage
          src="../assets/Images/Nifty.png"
          alt="phone"
          width={1130}
          height={510}
        />
      </FrontiersImageWrapper>
    </>
  );
};

export default Frontiers;
