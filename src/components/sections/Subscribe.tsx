import React, { FC } from "react";
import Section from "../Section";
import Container from "../Container";
import Button from "../Button";

const Subscribe: FC = () => {
  return (
    <Section>
      <Container>
        <div className="hidden lg:block text-center space-y-6 w-4/5 mx-auto">
          <h1>
            We enable people to work where they want, when they want and how
            they want
          </h1>
          <p>
            We offer offices for lease by the day, by the week, or by the year.
            Choose from any of our 3000 locations. Get a free quote!
          </p>

          <form
            action=""
            className="flex gap-x-9 items-center justify-between border border-[#2E31354D] rounded-full py-3 pr-3 pl-10 w-3/5 mx-auto !mt-16"
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
          <i className="opacity-40 mt-4 block">No worries, we don’t do spam!</i>
        </div>
      </Container>
    </Section>
  );
};

export default Subscribe;
