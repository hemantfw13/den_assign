import React from "react";
import {
  FooterLayout,
  FooterLinkWrapper,
  FooterLink,
  FooterText,
  SocialMediaWrapper,
} from "../styles/FooterLayout";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <FooterLayout>
      <StaticImage
        src="../assets/Images/Logo.png"
        alt="logo"
        width={128}
        height={30}
      />
      <FooterLinkWrapper>
        <FooterLink>Blog</FooterLink>
        <FooterLink>Fees</FooterLink>
        <FooterLink>Leaderboard</FooterLink>
        <FooterLink>Careers</FooterLink>
        <FooterLink>Contact Us</FooterLink>
        <FooterLink>Privacy Policy</FooterLink>
      </FooterLinkWrapper>
      <FooterText>
        Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
        Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och
        pesask vyfisat. Viktiga poddradio har un mad och inde.
      </FooterText>
      <SocialMediaWrapper>
        <StaticImage
          src="../assets/Images/facebooklogo.png"
          alt="logo"
          width={32}
          height={32}
        />
        <StaticImage
          src="../assets/Images/Twitter logo.png"
          alt="logo"
          width={32}
          height={32}
        />
        <StaticImage
          src="../assets/Images/linkedin logo.png"
          alt="logo"
          width={32}
          height={32}
        />
        <StaticImage
          src="../assets/Images/instagram logo.png"
          alt="logo"
          width={32}
          height={32}
        />
      </SocialMediaWrapper>
    </FooterLayout>
  );
};

export default Footer;
