import React from "react";
import Navbar from "../components/Navbar";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Plans from "../components/sections/Plans";
import Services from "../components/sections/Services";

const HomePage = () => {
  return (
    <section>
      <Navbar/>
      <Hero />
      <Services/>
      <Features/>
      <Plans/>
    </section>
  );
};

export default HomePage;
