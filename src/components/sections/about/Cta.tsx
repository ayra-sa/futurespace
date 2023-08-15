import React, { FC } from "react";
import Section from "../../Section";
import Container from "../../Container";
import Button from "../../Button";

const Cta: FC = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col lg:flex-row bg-[#F0F6FF] p-12 gap-10 justify-between rounded-2xl">
          <div>
            <h1 className="mb-9">We have all the amenities you <br /> need to grow your business <br /> starting on day one</h1>
            <p className="pb-5">We strive to create a professional and welcoming environment in order to foster collaboration, creativity, and productivity.</p>
            <Button variant="primary">Get Started</Button>
          </div>

          <div className="relative">
            <img src="images/cta-about-image.svg" alt="cta image" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cta