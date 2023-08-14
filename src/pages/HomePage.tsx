import React from "react";
import Hero from "../components/sections/Hero";
import Location from "../components/sections/Location";
import Review from "../components/sections/Review";
// import Services from "../components/sections/Services";
// import Features from "../components/sections/Features";
// import Plans from "../components/sections/Plans";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Location />
      <Review />
      {/* <Cta /> */}
    </>
  );
};

export default HomePage;
