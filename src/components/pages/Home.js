import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Services from "../Services";
import Features from "../Features";
import Deatails from "../Deatails";

function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Services></Services>
      <Features></Features>
      <Deatails></Deatails>
      <Footer></Footer>
    </>
  );
}

export default Home;
