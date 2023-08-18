import React from "react";
/* Import Component */
import Button from "../Button";
import Container from "../Container";
import Section from "../Section";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div className="pt-24 flex justify-between items-center gap-x-8 box">
          <div className="text-left text-black max-w-[40%] content-hero">
            <h1>The workspace that works for you & your team</h1>
            <p>
              A safe, comfortable, and hassle-free Coworking workspace increases
              productivity. Ideal workspaces make life easier and more
              productive.
            </p>
            <div className="flex gap-5 mt-12 box">
              <Button variant="primary">Discover now</Button>
              <Button variant="secondary">Book a tour</Button>
            </div>
          </div>
          <div>
            <img src='images/hero.svg' alt="Illustration Hero" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
