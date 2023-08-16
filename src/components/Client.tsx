import React, { FC } from "react";
import Section from "./Section";
import Container from "./Container";

const Client: FC = () => {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <p className="text-2xl opacity-50 mb-11">
            Trusted by top companies and startups around the world
          </p>

          <div className="lg:w-4/5 lg:mx-auto">
            <img src="images/client-logo.png" alt="client logo" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Client;
