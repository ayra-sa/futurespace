import React, { useState } from "react";
import { dataPricing } from "../../../data/data";
import Button from "../../Button";
import Container from "../../Container";
import Section from "../../Section";

const Price: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("month");

  const handleToggle = (id: string) => {
    setActiveId(id);
  };

  return (
    <Section>
      <Container>
        <div className="flex bg-switch rounded-full mx-auto justify-between p-3 cursor-pointer items-center w-full lg:w-1/3">
          <div
            id="month"
            onClick={() => handleToggle("month")}
            className={`btn-switch ${
              activeId === "month" ? "switch-active" : ""
            }`}
          >
            Monthly
          </div>
          <div
            id="years"
            onClick={() => handleToggle("years")}
            className={`btn-switch ${
              activeId === "years" ? "switch-active" : ""
            }`}
          >
            Annual (save 15%)
          </div>
        </div>

        <div className="my-16">
          {activeId === "month" && (
            <div id="contentMonth" className="flex justify-between gap-8 box">
              {dataPricing.price.map((price, id) => (
                <div
                  className={`price ${
                    id === 1 ? "border border-primary" : ""
                  }`}
                  key={id}
                >
                  <img src={price.img} className="h-10" alt="Icons Image" />
                  <h2>{price.paket}</h2>
                  <h1>${price.price}/mth</h1>
                  <p>{price.desc}</p>
                  <div className="w-full">
                    <hr />
                  </div>
                  <ul>
                    {price.fitur.map((fitur, id) => (
                      <li key={id}>
                        <img src="icons/ic-check.svg" alt="Icons Image" />
                        <p>{fitur.title}</p>
                      </li>
                    ))}

                    {price.nonFitur.map((non, id) => (
                      <li key={id}>
                        <img src="icons/ic-nocheck.svg" alt="Icons Image" />
                        <p>{non.title}</p>
                      </li>
                    ))}
                  </ul>
                  <center>
                    <Button variant="primary">Get Started</Button>
                  </center>
                </div>
              ))}
            </div>
          )}

          {activeId === "years" && (
            <div id="contentYears" className="flex justify-between gap-8 box">
              {dataPricing.price.map((price, id) => (
                <div
                  className={`price ${
                    id === 1 ? "border border-primary" : ""
                  }`}
                  key={id}
                >
                  <img src={price.img} className="h-10" alt="Icons Image" />
                  <h2>{price.paket}</h2>
                  <h1>${(price.price * 12 * 15) / 100}/mth</h1>
                  <p>{price.desc}</p>
                  <div className="w-full">
                    <hr />
                  </div>
                  <ul>
                    {price.fitur.map((fitur, id) => (
                      <li key={id}>
                        <img src="icons/ic-check.svg" alt="Icons Image" />
                        <p>{fitur.title}</p>
                      </li>
                    ))}

                    {price.nonFitur.map((non, id) => (
                      <li key={id}>
                        <img src="icons/ic-nocheck.svg" alt="Icons Image" />
                        <p>{non.title}</p>
                      </li>
                    ))}
                  </ul>
                  <center>
                    <Button variant="primary">Get Started</Button>
                  </center>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Price;
