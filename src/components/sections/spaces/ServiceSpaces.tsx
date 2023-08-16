import React, { FC } from "react";
import Section from "../../Section";
import Container from "../../Container";
import Label from "../../Label";
import { serviceSpacesData } from "../../../data/data";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ description, image, title }) => {
  return (
    <div className="px-16 py-14 rounded-3xl flex flex-col justify-between shadow-lg">
      <img src={image} alt={title} />
      <b className="text-3xl mt-5">{title}</b>
      <p>{description}</p>
      <button className="mt-6 flex items-center gap-x-3 text-primary text-2xl font-bold">
        Learn More
        <img src="icons/icon-arrow-button.svg" alt="icon arrow button" />
      </button>
    </div>
  );
};

const ServiceSpaces: FC = () => {
  return (
    <Section>
      <Container>
        <div>
          <div className="lg:w-3/4 lg:mx-auto text-center">
            <Label text="Why Serviced Office" />
            <h1>We've helped thousands of fast-growing startups and teams</h1>
            <p>
              Grow without restriction. By giving you space that can be changed
              as your business grows. Only pay for the space you use with
              everything you need to be included in one price.
            </p>
          </div>

          <div className="flex flex-col gap-14 lg:flex-row mt-20">
            {serviceSpacesData.map((service, id) => (
              <ServiceCard
                key={id}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ServiceSpaces;
