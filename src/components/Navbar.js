import React from "react";
import NavbarLayout from "../styles/NavbarLayout";
import { StaticImage } from "gatsby-plugin-image";
import ButtonLayout from "../styles/ButtonLayout";
const Navbar = () => {
  return (
    <NavbarLayout>
      <StaticImage src="../assets/Images/Logo.png" alt="logo" />
      <div className="navWrapper">
        <ul>
          <li>Career</li>
          <li>Blogs</li>
          <li>Leaderboard</li>
          <li>Fees</li>
        </ul>
        <ButtonLayout>TRADE NOW</ButtonLayout>
      </div>
    </NavbarLayout>
  );
};

export default Navbar;
