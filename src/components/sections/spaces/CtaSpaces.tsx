import React, { FC } from "react";
import Section from "../../Section";
import Container from "../../Container";
import Button from "../../Button";

const CtaSpaces: FC = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col lg:flex-row-reverse bg-cta p-12 gap-9 rounded-2xl">
          <div className="lg:w-2/5">
            <img src="images/cta-spaces.png" alt="cta image" />
          </div>

          <div className="space-y-6 lg:w-3/5">
            <h2 className="text-3xl">
              We have all the amenities you need to grow your business starting
              on day one
            </h2>
            <p>
              We strive to create a professional and welcoming environment in
              order to foster collaboration, creativity, and productivity.
            </p>

            <Button variant="primary">Get Started</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CtaSpaces;
