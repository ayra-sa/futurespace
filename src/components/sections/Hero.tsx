import React from "react";
/* Import Component */
import Button from "../Button";
import Container from "../Container";

const Hero = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-between items-center gap-x-8 box">
          <div className="text-left text-black max-w-[420px]">
            <h1>The workspace that works for you & your team</h1>
            <p>
              A safe, comfortable, and hassle-free Coworking workspace increases
              productivity. Ideal workspaces make life easier and more
              productive.
            </p>
            <div className="flex gap-x-5 mt-12">
              <Button variant="primary">Discover now</Button>
              <Button variant="secondary">Book a tour</Button>
            </div>
          </div>
          <div>
            <img src='images/hero.svg' alt="Illustration Hero" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
