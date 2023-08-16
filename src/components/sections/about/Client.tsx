import React from "react";
import Container from "../../Container";
import Section from "../../Section";

const Client = () => {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <h2 className="opacity-50 py-5">
            Trusted by top companies and startups around the world
          </h2>
          <img src="images/client-image.svg" alt="Image Client" />
        </div>
      </Container>
    </Section>
  );
};

export default Client;
