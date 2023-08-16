import React, { FC } from "react";
import Section from "../../Section";
import Container from "../../Container";
import Button from "../../Button";

const HeroSpaces: FC = () => {
  return (
    <Section>
      <Container>
        <div className="pt-14 lg:pt-32 flex flex-col lg:flex-row gap-11 text-center lg:text-left">
          <div className="lg:w-2/5">
            <h1>A creative coworking space in New York</h1>
            <p>
              You can book personal office space across the country by the day,
              hour or month.
            </p>
            <form
              action=""
              className="flex gap-x-9 items-center justify-between border border-[#2E31354D] rounded-full py-3 pr-3 pl-5 lg:pl-10 w-full mx-auto !mt-16"
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full focus:outline-none"
                autoComplete="off"
                required
              />
              <Button variant="primary">Submit</Button>
            </form>
          </div>

          <div className="lg:w-3/5">
            <img src="images/hero-spaces.png" alt="hero spaces image" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSpaces;
