import React from "react";
import Container from "../../Container";
import { dataTeam } from "../../../data/data";
import Label from "../../Label";
import Section from "../../Section";

const Leadership = () => {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <Label text="Our Leadership team" />
          <h1 className="py-6">Meet the great team behind Futurspace</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sapien
            vestibulum quam massa viverra blandit sit <br /> auctor vestibulum
            semper viverra aliquet sit.
          </p>
        </div>
        <div className="card box flex gap-9 justify-between items-center">
          {dataTeam.teams.map((team, id) => (
            <div key={id}>
              <img src={team.image} alt="Image Team" />
              <h2>{team.name}</h2>
              <p className="mt-2">{team.job}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Leadership;
