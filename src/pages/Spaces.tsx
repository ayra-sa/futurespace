import React, { FC } from "react";
import Layout from "../components/Layout";
import HeroSpaces from "../components/sections/spaces/HeroSpaces";
import ServiceSpaces from "../components/sections/spaces/ServiceSpaces";
import CtaSpaces from "../components/sections/spaces/CtaSpaces";
import Review from "../components/sections/Review";
import FeedBack from "../components/sections/spaces/FeedBack";
import Client from "../components/Client";

const Spaces: FC = () => {
  return (
    <Layout>
      <HeroSpaces />
      <ServiceSpaces />
      <CtaSpaces />
      <Review />
      <FeedBack />
      <Client />
    </Layout>
  );
};

export default Spaces;
