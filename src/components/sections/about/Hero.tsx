import React from "react";
import Container from "../../Container";

const Hero = () => {
  return (
    <section className="bg-primary py-8">
      <Container>
        <div className="flex justify-between items-center gap-x-8 box">
         <div>
         <h1 className="text-white">
            About our <br /> company
          </h1>
         </div>
          <div className="text-white max-w-[45%]">
          <p>
            Our space is more than a shared office. It is a meeting ground for
            creatives and teams <br /> <br />
            Find focus and clarity space to do the things you need to do to grow
            your business in New York. Book by the month, daily or by the hour.
          </p>
          </div>
        </div>
        <div className="w-full pt-10">
          <img src="images/hero-about.svg" alt="Illustration Hero" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
