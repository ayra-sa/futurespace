import React from "react";
import Hero from "../components/sections/Hero";
import Location from "../components/sections/Location";
import Features from "../components/sections/Features";
import Plans from "../components/sections/Plans";
import Services from "../components/sections/Services";
import Cta from "../components/sections/Cta";
import Subscribe from "../components/sections/Subscribe";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Services/>
      <Features/>
      <Plans/>
      <Location />
      <Cta />
      <Subscribe />
    </Layout>
  );
};

export default HomePage;
