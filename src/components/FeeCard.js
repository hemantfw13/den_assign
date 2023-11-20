import React from "react";
import {
  FeecardsLayout,
  CardNumberData,
  CardTextData,
  FeeCardData,
  DataWrapper,
  FeeCardWrapper,
  FeemiddlecardsLayout,
  CardNumbersData,
  CardTextsData,
} from "../styles/FeeCardLayout";
import { StaticImage } from "gatsby-plugin-image";

const FeeCard = () => {
  return (
    <FeeCardWrapper>
      <FeecardsLayout>
        <StaticImage
          src="../assets/Images/Frame.png"
          alt="phone"
          width={284}
          height={239}
          className="frame"
        />
        <FeeCardData>
          <StaticImage
            src="../assets/Images/coindcx.png"
            alt="phone"
            width={146}
            height={30}
            className="company"
          />
          <DataWrapper>
            <CardNumberData>0.025</CardNumberData>
            <CardTextData>Maker Fees</CardTextData>
          </DataWrapper>
          <DataWrapper>
            <CardNumberData>0.07</CardNumberData>
            <CardTextData>Taker Fees</CardTextData>
          </DataWrapper>
        </FeeCardData>
      </FeecardsLayout>
      <FeemiddlecardsLayout>
        <StaticImage
          src="../assets/Images/Frame.png"
          alt="phone"
          width={284}
          height={239}
          className="frame"
        />
        <FeeCardData>
          <StaticImage
            src="../assets/Images/density.png"
            alt="phone"
            width={146}
            height={30}
            className="company"
          />
          <DataWrapper>
            <CardNumbersData>0.002</CardNumbersData>
            <CardTextsData>Maker Fees</CardTextsData>
          </DataWrapper>
          <DataWrapper>
            <CardNumbersData>0.04</CardNumbersData>
            <CardTextsData>Taker Fees</CardTextsData>
          </DataWrapper>
        </FeeCardData>
      </FeemiddlecardsLayout>
      <FeecardsLayout>
        <StaticImage
          src="../assets/Images/Frame.png"
          alt="phone"
          width={284}
          height={239}
          className="frame"
        />
        <FeeCardData>
          <StaticImage
            src="../assets/Images/deltaExchange.png"
            alt="phone"
            width={146}
            height={30}
            className="company"
          />
          <DataWrapper>
            <CardNumberData>0.002</CardNumberData>
            <CardTextData>Maker Fees</CardTextData>
          </DataWrapper>
          <DataWrapper>
            <CardNumberData>0.05</CardNumberData>
            <CardTextData>Taker Fees</CardTextData>
          </DataWrapper>
        </FeeCardData>
      </FeecardsLayout>
    </FeeCardWrapper>
  );
};

export default FeeCard;
