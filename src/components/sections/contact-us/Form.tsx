import React, { FC } from "react";
import Section from "../../Section";
import Container from "../../Container";
import InputField from "../../InputField";
import Button from "../../Button";

const Form: FC = () => {
  return (
    <Section>
      <Container>
        <div className="text-center lg:w-4/5 mx-auto">
          <h1>Take a tour & try a day of coworking for free</h1>
          <p>
            We offer offices for lease by the day, by the week, or by the year.
            Choose from any of our 3000 locations. Get a free quote!
          </p>

          <form action="" className="space-y-12 mt-16">
            <InputField type="text" placeholder="First Name" />
            <InputField type="text" placeholder="Last Name" />
            <div className="flex flex-col lg:flex-row gap-x-8 items-center space-y-12 lg:space-y-0">
              <InputField type="email" placeholder="Your Email" />
              <InputField type="select" placeholder="Select Option" />
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="input-field"
            />
            <div className="flex items-center gap-x-8">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <p className="text-sm lg:text-xl text-left mt-0">By clicking the below button you agree to our Terms of Service.</p>
            </div>

            <Button variant="primary" width="full">Submit</Button>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default Form;
