import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TradeData from "./TradeData";
import TradeBody from "./TradeBody";
import Footer from "./Footer";
import GlobalStyle from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    colorblack: "#000000",
    colorYellowGreen: "#e2ff6f",
    colorlightGray: "#fcfcfc",
  },
};
const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <HeroSection />
      <TradeData />
      <TradeBody />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
