import React from "react";
import {
  MoneyCardWrapper,
  MoneyCardLayout,
  MoneyCardData,
  CardText,
} from "../styles/MoneyEarningLayout";
import { StaticImage } from "gatsby-plugin-image";

const MoneyCard = () => {
  return (
    <MoneyCardWrapper>
      <MoneyCardLayout>
        <StaticImage
          src="../assets/Images/Frame.png"
          alt="phone"
          width={284}
          height={239}
          className="frame"
        />
        <MoneyCardData>
          <StaticImage
            src="../assets/Images/share.png"
            alt="phone"
            width={104}
            height={91}
          />
          <CardText>Share your your referral link</CardText>
        </MoneyCardData>
      </MoneyCardLayout>
      <MoneyCardLayout>
        <StaticImage
          src="../assets/Images/Frame.png"
          alt="phone"
          width={284}
          height={239}
          className="frame"
        />
        <MoneyCardData>
          <StaticImage
            src="../assets/Images/friend.png"
            alt="phone"
            width={108}
            height={96}
          />
          <CardText>Invite Friends to Trade on Density</CardText>
        </MoneyCardData>
      </MoneyCardLayout>
      <MoneyCardLayout>
        <StaticImage
          src="../assets/Images/Frame.png"
          alt="phone"
          width={284}
          height={239}
          className="frame"
        />
        <MoneyCardData>
          <StaticImage
            src="../assets/Images/trade.png"
            alt="phone"
            width={97}
            height={104}
          />
          <CardText style={{ width: 140 }}>Trade and Earn</CardText>
        </MoneyCardData>
      </MoneyCardLayout>
    </MoneyCardWrapper>
  );
};

export default MoneyCard;
