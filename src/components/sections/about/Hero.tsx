import React from "react";
import Container from "../../Container";

const Hero = () => {
  return (
    <div className="bg-primary py-32">
      <Container>
        <div className="flex justify-between items-center gap-x-8 box">
          <div className="max-w-[20%] content-hero">
            <h1 className="text-white text-center">About our company</h1>
          </div>
          <div className="text-white max-w-[45%] content-hero text-center lg:text-left">
            <p>
              Our space is more than a shared office. It is a meeting ground for
              creatives and teams <br /> <br />
              Find focus and clarity space to do the things you need to do to
              grow your business in New York. Book by the month, daily or by the
              hour.
            </p>
          </div>
        </div>
        <div className="w-full pt-10">
          <img src="images/hero-about.svg" alt="Illustration Hero" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
