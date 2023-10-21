import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const About = () => {
  const { updateAboutpage} =useGlobalContext();
  
  useEffect(()=>
    updateAboutpage(),
   []);

  return <HeroSection />;
};

export default About;