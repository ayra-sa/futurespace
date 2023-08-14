import React from "react";
import Hero from "../components/sections/Hero";
import Location from "../components/sections/Location";
import Navbar from "../components/Navbar";
import Features from "../components/sections/Features";
import Plans from "../components/sections/Plans";
import Services from "../components/sections/Services";
import Cta from "../components/sections/Cta";
import Subscribe from "../components/sections/Subscribe";

const HomePage = () => {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Services/>
      <Features/>
      <Plans/>
      <Location />
      <Cta />
      <Subscribe />
    </main>
  );
};

export default HomePage;
