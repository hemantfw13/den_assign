import React from "react";
import { FrontiersDataLayout, Data } from "../styles/FrontiersLayout";
import { StaticImage } from "gatsby-plugin-image";
const FrontiersData = () => {
  return (
    <FrontiersDataLayout>
      <Data>Same Strategies</Data>
      <StaticImage src="../assets/Images/line.png" alt="line" height={172} />
      <Data>Same Indicators</Data>
      <StaticImage src="../assets/Images/line.png" alt="line" height={172} />
      <Data>Better Leverage</Data>
      <StaticImage src="../assets/Images/line.png" alt="line" height={172} />
      <Data>24x7 Trading</Data>
    </FrontiersDataLayout>
  );
};

export default FrontiersData;
