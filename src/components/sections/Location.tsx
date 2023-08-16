import React, { FC } from "react";
import Container from "../Container";
import Label from "../Label";
import { locationData } from "../../data/data";
import Button from "../Button";

const Location: FC = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <img src={locationData.image} alt={locationData.title} />

          <div>
            <Label text={locationData.label} />
            <h1>{locationData.title}</h1>
            <p className="mt-6">{locationData.description}</p>

            <div className="space-y-6 my-16">
                {locationData.locations.map((location, id) => (
                <div key={id} className="flex gap-10 items-center">
                    <img src="icons/icon-location.svg" alt="icon location" />
                    <p className="text-[26px] !mt-0 font-bold text-[#2E3135]">
                    {location.location}
                    </p>
                </div>
                ))}
            </div>

            <Button variant="primary">View Locations</Button>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default Location;
