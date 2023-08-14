import React from "react";
import Hero from "../components/sections/Hero";
import Location from "../components/sections/Location";
import Review from "../components/sections/Review";
import Cta from "../components/sections/Cta";
import Subscribe from "../components/sections/Subscribe";
// import Services from "../components/sections/Services";
// import Features from "../components/sections/Features";
// import Plans from "../components/sections/Plans";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Location />
      <Review />
      <Cta />
      <Subscribe />
    </>
  );
};

export default HomePage;
