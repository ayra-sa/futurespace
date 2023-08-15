import React, { FC } from "react";
import clsx from "clsx";
import Section from "../../Section";
import Container from "../../Container";
import Button from "../../Button";

const CtaContact: FC = () => {
  const buttonPlayClass = clsx(
    "bg-primary w-20 h-20 rounded-full opacity-60 transition duration-300",
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "flex place-content-center items-center",
    "hover:opacity-100"
  );

  return (
    <Section>
      <Container>
        <div className="flex flex-col w lg:flex-row bg-cta p-12 gap-9 rounded-2xl">
          <div className="relative flex-1">
            <img src="images/cta-contact-image.png" alt="cta image" />
            <button className={buttonPlayClass}>
              <img src="icons/icon-play.svg" alt="icon play" />
            </button>
          </div>

          <div className="space-y-2 flex-1">
            <h1>Coworking, Private Offices and More</h1>
            <p>
              Your membership at is all-inclusive, providing amenities designed
              to allow you to focus on your business instead of logistics.
            </p>

            <div className="flex flex-wrap gap-5 items-center">
                <Button variant="primary">Discover now</Button>
                <Button variant="secondary">Book Tour</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CtaContact;
