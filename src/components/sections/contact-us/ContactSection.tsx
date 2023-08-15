import React, { FC } from "react";
import Section from "../../Section";
import Container from "../../Container";
import { contactData } from "../../../data/data";

interface ContactCardProps {
  title: string;
  information: string;
  textButton: string;
  icon: string;
}

const ContactCard: FC<ContactCardProps> = ({
  icon,
  information,
  textButton,
  title,
}) => {
  return (
    <div className="px-12 py-11 bg-white rounded-md shadow-md w-full lg:w-96 flex flex-col justify-between">
      <b className="text-[26px]">{title}</b>
      <p>{information}</p>
      <button className="flex gap-x-3 items-center text-primary font-bold text-xl mt-6">
        {textButton}
        <img src={icon} alt="icon button" />
      </button>
    </div>
  );
};

const ContactSection: FC = () => {
  return (
    <Section>
      <Container>
        <div className="flex justify-between flex-col gap-y-7 lg:flex-row">
          <ContactCard
            title={contactData.locationName}
            information={contactData.location}
            textButton="All Locations"
            icon="icons/icon-map.svg"
          />
          <ContactCard
            title={contactData.callName}
            information={contactData.call}
            textButton="Learn More"
            icon="icons/icon-arrow-button.svg"
            />
          <ContactCard
            title={contactData.customerName}
            information={contactData.customer}
            textButton="Email Us"
            icon="icons/icon-arrow-button.svg"
          />
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
