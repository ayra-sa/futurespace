import React from "react";
import { CardService } from "../Card";
import icon from "../../assets/images/plans.svg";
import icon2 from "../../assets/images/plans-2.svg";
import icon3 from "../../assets/images/plans-3.svg";

const Plans = () => {
  return (
    <section className="text-center">
      <div>
        <p className="text-primary font-bold uppercase">Why Serviced Office</p>
        <h1 className="py-6">
          We've helped thousands of <br />
          fast-growing startups and teams
        </h1>
        <p>
          Grow without restriction. By giving you space that can be changed as
          your business grows. Only pay for <br /> the space you use with
          everything you need to be included in one price.
        </p>
      </div>
      <div className="mt-12 flex gap-x-12">
        <CardService icon={icon} title="Office Space" />
        <CardService icon={icon2} title="Coworking Space" />
        <CardService icon={icon3} title="Meeting Space" />
      </div>
    </section>
  );
};

export default Plans;
