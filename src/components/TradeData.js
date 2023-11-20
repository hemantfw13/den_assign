import React from "react";
import { TradeDataLayout, DataContainer } from "../styles/TradeDataLayout";
import { StaticImage } from "gatsby-plugin-image";
const TradeData = () => {
  return (
    <TradeDataLayout>
      <DataContainer>
        <div className="numberD">00%</div>
        <div className="textD">Conversion Fee</div>
      </DataContainer>
      <StaticImage src="../assets/Images/line.png" alt="line" height={172} />
      <DataContainer>
        <div className="numberD">500 Mn+</div>
        <div className="textD">Lifetime Volume Traded</div>
      </DataContainer>
      <StaticImage src="../assets/Images/line.png" alt="line" height={172} />
      <DataContainer>
        <div className="numberD">250+</div>
        <div className="textD">Total Tradable Pairs</div>
      </DataContainer>
      <StaticImage src="../assets/Images/line.png" alt="line" height={172} />
      <DataContainer>
        <div className="numberD">15,000+</div>
        <div className="textD">Traders</div>
      </DataContainer>
    </TradeDataLayout>
  );
};

export default TradeData;
