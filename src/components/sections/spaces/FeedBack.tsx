import React, { FC } from "react";
import Section from "../../Section";
import Container from "../../Container";
import InputField from "../../InputField";
import Button from "../../Button";

const FeedBack: FC = () => {
  return (
    <Section>
      <Container>
        <div className="bg-cta rounded-lg px-9 py-16 lg:px-36 lg:py-28 text-center">
          <h2 className="text-4xl text-black">
            One of our workspace experts will reach out to you based on your
            communication preferences.
          </h2>

          <div className="py-12 px-7 lg:p-12 bg-white rounded-3xl lg:w-4/5 lg:mx-auto shadow-md mt-10">
            <h1 className="!text-5xl">We'd love to hear from you</h1>
            <p>
              To book a complimentary private day office or desk, simply
              complete the form below.
            </p>

            <form action="" className="space-y-12 mt-10">
              <InputField type="text" placeholder="Enter yourname" />
              <InputField type="email" placeholder="Enter your email" />
              <textarea
                name="messageInput"
                id="messageInput"
                placeholder="Message"
                className="input-field"
              />

              <Button variant="primary" type="submit" width="full">Submit</Button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FeedBack;
