import React from "react";
import { CardService } from "../Card";
import icon from "../../assets/icons/services.svg";
import icon2 from "../../assets/icons/services-2.svg";
import icon3 from "../../assets/icons/services-3.svg";
import icon4 from "../../assets/icons/services-4.svg";
import icon5 from "../../assets/icons/services-5.svg";

const Services = () => {
  return (
    <section>
      <div className="text-left">
        <p className="uppercase text-primary font-bold">Our Services</p>
        <h1 className="max-w-6xl">
          Flexible Solutions for Your Business - Choose What Works Best for You
        </h1>
      </div>
      <div className="card box card-services flex-wrap">
        <CardService icon={icon} title="Hot Desks" />
        <CardService icon={icon2} title="Starter Spaces" showBorder={true} />
        <CardService icon={icon3} title="Coworking Spaces" />
        <CardService icon={icon4} title="Virtual Office" />
        <CardService icon={icon5} title="Meeting Room" />
      </div>
    </section>
  );
};

export default Services;
