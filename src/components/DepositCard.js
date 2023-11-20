import React from "react";
import {
  DepositCardWrapper,
  DepositCardLayout,
  DepositCardData,
  DepositCardHeader,
  DepositCardSubHeader,
} from "../styles/DepositLayout";
import {
  HeadingLayout,
  SubHeadingLayout,
} from "../styles/HeadingSubHeadingLayout";
import { StaticImage } from "gatsby-plugin-image";

const DepositCard = () => {
  return (
    <DepositCardWrapper>
      <DepositCardLayout>
        <StaticImage
          src="../assets/Images/depositFrame.png"
          alt="phone"
          width={305}
          height={272}
          className="frame"
        />
        <DepositCardData>
          <StaticImage
            src="../assets/Images/percent.png"
            alt="phone"
            width={185}
            height={117}
          />
          <DepositCardHeader>Deposit Bonus.</DepositCardHeader>
          <DepositCardSubHeader>
            Our assets' liquidity is unmatched in the market, with a small
            bid-ask spread and a well-balanced order book.
          </DepositCardSubHeader>
        </DepositCardData>
      </DepositCardLayout>
      <DepositCardLayout>
        <StaticImage
          src="../assets/Images/depositFrame.png"
          alt="phone"
          width={305}
          height={272}
          className="frame"
        />
        <DepositCardData>
          <StaticImage
            src="../assets/Images/Manager.png"
            alt="phone"
            width={141}
            height={101}
          />
          <DepositCardHeader
            style={{ width: "71%", display: "flex", flexWrap: "wrap" }}
          >
            Dedicated Relationship Manager.
          </DepositCardHeader>
          <DepositCardSubHeader>
            Our assets' liquidity is unmatched in the market, with a small
            bid-ask spread and a well-balanced order book.
          </DepositCardSubHeader>
        </DepositCardData>
      </DepositCardLayout>
    </DepositCardWrapper>
  );
};

export default DepositCard;
