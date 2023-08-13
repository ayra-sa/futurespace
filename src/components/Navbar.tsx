import React, { useState } from "react";
import Logo from ".././assets/icons/logo.svg";
import { Button } from "./Button";

const Navbar = () => {
  const Links = [
    { name: "About", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Offices", link: "/" },
    { name: "Spaces", link: "/" },
    { name: "Contact us", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="w-full fixed top-0 left-0 z-20">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div>
        <img src={Logo} alt="Logo" className="w-auto" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in gap-5 ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-black text-base hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button title="Sign Up"/>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;