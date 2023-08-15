import React, { FC } from "react";
import Button from "../../Button";
import Container from "../../Container";
import Section from "../../Section";

const Subscribe: FC = () => {
  return (
    <Section>
      <Container>
        <div className="hidden lg:block text-center space-y-6 w-4/5 mx-auto">
          <h1>Modern workspaces that fits your needs</h1>
          <p>
            No subscriptions or lousy monthly fees. Only pay for the space and
            time you need
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
