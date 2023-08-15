import React, { FC } from "react";
import clsx from "clsx";
import Section from "../../Section";
import Container from "../../Container";
import Button from "../../Button";

const Contact: FC = () => {
  const buttonPlayClass = clsx(
    "bg-primary w-14 h-14 rounded-full opacity-60 transition duration-300",
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "flex place-content-center items-center",
    "hover:opacity-100"
  );

  return (
    <section>
      <Container>
        <div className="flex flex-col lg:flex-row bg-[#F0F6FF] p-12 gap-9 rounded-2xl">
          <div>
            <h1 className="mb-9">Confused about which plan <br /> would be most suitable for me?</h1>
            <Button variant="primary">Contact us</Button>
          </div>

          <div className="relative">
            <img src="images/contact-image.png" alt="cta image" />
            <button className={buttonPlayClass}>
              <img src="icons/icon-play.svg" alt="icon play" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
