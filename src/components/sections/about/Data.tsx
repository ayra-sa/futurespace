import React from "react";
import { CardData } from "../../Card";
import Container from "../../Container";
import Section from "../../Section";

const Data = () => {
  return (
    <Section>
      <Container>
        <div>
          <h1>
            Our space is more than a shared office. <br />
            It is a meeting ground for creatives and teams.
          </h1>
          <p>
            Find focus and clarity space to do the things you need to do to grow
            your business in <br /> New York. Book by the month, daily or by the
            hour.
          </p>
          <div className="py-8">
            <hr />
          </div>
        </div>
        <div className="flex justify-between gap-9 box py-5">
            <CardData number="3,000+" title="Happy Members" desc="We offer offices for lease by the day, by the week, or by the year."/>
            <CardData number="12+" title="Locations across the globe" desc="We offer offices for lease by the day, by the week, or by the year."/>
            <CardData number="10+" title="Years of service" desc="We offer offices for lease by the day, by the week, or by the year."/>
        </div>
      </Container>
    </Section>
  );
};

export default Data;
