import React from "react";
import { CardService } from "../Card";
import Container from "../Container";
import Label from "../Label";
import Section from "../Section";

const Services = () => {
  return (
    <Section>
      <Container>
        <div className="text-left">
          <Label text="Our Services"/>
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
    </Section>
  );
};

export default Services;
