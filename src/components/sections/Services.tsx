import React from "react";
import { CardService } from "../Card";
import Container from "../Container";

const Services = () => {
  return (
    <section>
      <Container>
        <div className="text-left">
          <p className="uppercase text-primary font-bold">Our Services</p>
          <h1 className="max-w-6xl">
            Flexible Solutions for Your Business - Choose What Works Best for
            You
          </h1>
        </div>
        <div className="card box card-services flex-wrap">
          <CardService icon='icons/services.svg' title="Hot Desks" />
          <CardService icon='icons/services.svg' title="Starter Spaces" showBorder={true} />
          <CardService icon='icons/services.svg' title="Coworking Spaces" />
          <CardService icon='icons/services.svg' title="Virtual Office" />
          <CardService icon='icons/services.svg' title="Meeting Room" />
        </div>
      </Container>
    </section>
  );
};

export default Services;
