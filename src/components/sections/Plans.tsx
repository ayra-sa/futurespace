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
      <div className="card box">
        <CardService icon={icon} title="Office Space" desc="Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier."/>
        <CardService icon={icon2} title="Coworking Space" desc="Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier." />
        <CardService icon={icon3} title="Meeting Space" desc="Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier." />
      </div>
    </section>
  );
};

export default Plans;
