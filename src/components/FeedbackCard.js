import React from "react";
import {
  FeedbackCardWrapper,
  FeedbackCardLayout,
  FeedbackCardData,
  FeedbackTextInfo,
  FeedbackPersonWrapper,
  PersonInfo,
  Personname,
  PersonDesig,
} from "../styles/FeedbackLayout";
import {
  HeadingLayout,
  SubHeadingLayout,
} from "../styles/HeadingSubHeadingLayout";
import { StaticImage } from "gatsby-plugin-image";
const FeedbackCard = () => {
  return (
    <FeedbackCardWrapper>
      <FeedbackCardLayout>
        <StaticImage
          src="../assets/Images/depositFrame.png"
          alt="phone"
          width={305}
          height={272}
          className="frame"
        />
        <FeedbackCardData>
          <FeedbackTextInfo>
            As someone who's always looking for the next big thing, I was really
            excited to try out Density’s crypto futures trading platform. And I
            have to say, it definitely lived up to my expectations.
          </FeedbackTextInfo>
          <FeedbackPersonWrapper>
            <PersonInfo>
              <Personname>Prakash Jamatia.</Personname>
              <PersonDesig>Founder, Tradeshala</PersonDesig>
            </PersonInfo>
            <StaticImage
              src="../assets/Images/prakash.png"
              alt="prakash"
              width={126}
              height={187}
            />
          </FeedbackPersonWrapper>
        </FeedbackCardData>
      </FeedbackCardLayout>
      <FeedbackCardLayout>
        <StaticImage
          src="../assets/Images/depositFrame.png"
          alt="phone"
          width={305}
          height={272}
          className="frame"
        />
        <FeedbackCardData>
          <FeedbackTextInfo>
            I'm not a seasoned trader, but this website has made it easy for me
            to get started with crypto futures trading. Their KYC was very fast
            and the educational resources were really helpful.
          </FeedbackTextInfo>
          <FeedbackPersonWrapper>
            <PersonInfo>
              <Personname>Shambhavi Nayak.</Personname>
              <PersonDesig>Commodity Trader</PersonDesig>
            </PersonInfo>
            <StaticImage
              src="../assets/Images/shambhavi.png"
              alt="shambhavi"
              width={216}
              height={248}
            />
          </FeedbackPersonWrapper>
        </FeedbackCardData>
      </FeedbackCardLayout>
      <FeedbackCardLayout>
        <StaticImage
          src="../assets/Images/depositFrame.png"
          alt="phone"
          width={305}
          height={272}
          className="frame"
        />
        <FeedbackCardData>
          <FeedbackTextInfo>
            I've been using this platform for a few months now and it's been a
            great experience. I was delighted to see all the major crypto coins
            listed on Density Exchange.
          </FeedbackTextInfo>
          <FeedbackPersonWrapper>
            <PersonInfo>
              <Personname>Arjun Naik.</Personname>
              <PersonDesig>Equity Trader</PersonDesig>
            </PersonInfo>
            <StaticImage
              src="../assets/Images/arjunNayak.png"
              alt="arjunNayak"
              width={200}
              height={239}
            />
          </FeedbackPersonWrapper>
        </FeedbackCardData>
      </FeedbackCardLayout>
    </FeedbackCardWrapper>
  );
};

export default FeedbackCard;
