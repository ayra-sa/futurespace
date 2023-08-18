import React, { FC } from "react";
import Container from "../../Container";
import Section from "../../Section";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

const Join: FC = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col lg:flex-row bg-[#F0F6FF] p-12 gap-9 rounded-2xl text-left justify-between">
          <div>
            <h1>Join our team</h1>
          </div>

          <div className="relative">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sapien eget
              eu <br /> elementum velit nunc tortor pulvinar ornare at mi sed
              nisl in proin <br /> sollicitudin ultricies aliquet malesuada
              aliquet.
            </p>
            <div className="flex gap-2 items-center text-primary pt-4">
              <span className="font-semibold ">Explore jobs </span>
              <ArrowSmallRightIcon className="w-7 h-7" />
              {/* <ion-icon name="arrow-forward-outline" color="primary"></ion-icon> */}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Join;
