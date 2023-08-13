import React from "react";
/* Import Component */
import { Button, ButtonBorder } from "../Button";
import Illus from "../../assets/images/hero.svg";

const Hero = () => {
  return (
    <section className="flex justify-between items-center gap-x-8 box">
      <div className="text-left text-black max-w-[420px]">
        <h1>The workspace that works for you & your team</h1>
        <p>A safe, comfortable, and hassle-free Coworking workspace increases
          productivity. Ideal workspaces make life easier and more productive.</p>
        <div className="flex gap-x-5 mt-16">
          <Button title="Discover now" />
          <ButtonBorder />
        </div>
      </div>
      <div>
        <img src={Illus} alt="Illustration Hero" />
      </div>
    </section>
  );
};

export default Hero;
