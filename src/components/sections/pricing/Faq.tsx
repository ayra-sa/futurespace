import React, { useState } from "react";
import { dataFaq } from "../../../data/data";
import Container from "../../Container";
import Section from "../../Section";

const Faq = () => {
    const [selected, setSelected] = useState(null);
    const toggle = (id) => {
        if (selected == id){
            return setSelected(null)
        }

        setSelected(id)
    }
  return (
    <Section>
      <Container>
        <div className="lg:block text-center space-y-6 w-4/5 mx-auto">
          <h1>Frequently asked questions about coworking</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit cursus
            commodo at sit mi sed <br /> gravida et imperdiet sagittis euismod
            tortor fringilla amet.
          </p>
        </div>
        <div className="flex flex-col gap-8 pt-14">
          {dataFaq.faqs.map((faq, id) => (
            <div key={id} className="shadow-md p-8 rounded-xl mx-auto cursor-pointer w-full lg:w-3/4">
              <div className="flex items-center justify-between" onClick={() => toggle(id)}>
                <h2>{faq.question}</h2>
                <div className="h-5 w-5">{selected=== id ? 
                (
                    <img src="icons/ic-min.svg" alt="" />
                ): (<img src="icons/ic-plus.svg" alt="" />)
            }</div>
              </div>
              <div className={selected=== id ? 'show':'hidden'}>
                <p className="text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Faq;
