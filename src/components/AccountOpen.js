import React from "react";
import { HeadingLayout } from "../styles/HeadingSubHeadingLayout";
import { StaticImage } from "gatsby-plugin-image";
import ButtonLayout from "../styles/ButtonLayout";
import {
  AccountOpenWrapper,
  AccountWrapper,
  StepsWrapper,
  StepsHeader,
  StepsSubHeader,
} from "../styles/AccountopenLayout";
const AccountOpen = () => {
  return (
    <>
      <HeadingLayout style={{ width: 800, marginTop: 100 }}>
        Derivates made simple in <strong>3 Easy</strong> Steps
      </HeadingLayout>
      <AccountOpenWrapper>
        <AccountWrapper>
          <StaticImage
            src="../assets/Images/phon1.png"
            alt="phone"
            width={276}
            height={560}
          />
          <StepsWrapper>
            <StaticImage
              src="../assets/Images/user.png"
              alt="user"
              width={120}
              height={120}
            />
            <StepsHeader>Create an Account</StepsHeader>
            <StepsSubHeader>
              Register & Complete your Verification in less than 2 minutes
            </StepsSubHeader>
            <ButtonLayout
              style={{ padding: 13, paddingLeft: 48, paddingRight: 48 }}
            >
              Trade Now
            </ButtonLayout>
          </StepsWrapper>
        </AccountWrapper>
        <StaticImage
          src="../assets/Images/accountLine.png"
          alt="line"
          width={1134}
          height={2}
          className="lineImg"
        />

        <AccountWrapper>
          <StaticImage
            src="../assets/Images/iPhoneBlack.png"
            alt="phone"
            width={250}
            height={539}
          />
          <StepsWrapper>
            <StaticImage
              src="../assets/Images/deposit.png"
              alt="user"
              width={108}
              height={100}
            />
            <StepsHeader>Deposit Funds</StepsHeader>
            <StepsSubHeader>
              Add funds quickly using a variety of payment methods
            </StepsSubHeader>
            <ButtonLayout
              style={{ padding: 13, paddingLeft: 48, paddingRight: 48 }}
            >
              Trade Now
            </ButtonLayout>
          </StepsWrapper>
        </AccountWrapper>
        <StaticImage
          src="../assets/Images/accountLine.png"
          alt="line"
          width={1134}
          height={2}
          className="lineImg"
        />

        <AccountWrapper>
          <StaticImage
            src="../assets/Images/phone3.png"
            alt="phone"
            width={276}
            height={560}
          />
          <StepsWrapper>
            <StaticImage
              src="../assets/Images/deposit.png"
              alt="user"
              width={120}
              height={120}
            />
            <StepsHeader>Become a Trader</StepsHeader>
            <StepsSubHeader>
              Choose Your Trading Pair & Trade Seamlessly
            </StepsSubHeader>
            <ButtonLayout
              style={{ padding: 13, paddingLeft: 48, paddingRight: 48 }}
            >
              Trade Now
            </ButtonLayout>
          </StepsWrapper>
        </AccountWrapper>
      </AccountOpenWrapper>
    </>
  );
};

export default AccountOpen;
