import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context'
import Services from "./Services"
import Contact from "./Contact"



function Home() {
  
  const {updateHomepage} =useGlobalContext();

  useEffect(()=>
    updateHomepage(),
   []);
  return (
   <>
    <HeroSection />
    <Services/>
    <Contact/>
   </>
  )
}

export default Home
