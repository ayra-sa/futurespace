import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

interface LinkItem {
  name: string;
  link: string;
}

const Navbar = () => {
  const Links: LinkItem[] = [
    { name: "About", link: "/about" },
    { name: "Pricing", link: "/pricing" },
    { name: "Offices", link: "/" },
    { name: "Spaces", link: "/spaces" },
    { name: "Contact us", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };


  return (
    <div className="w-full fixed top-0 left-0 z-20">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 whitespace-nowrap">
        <div>
        <img src='icons/logo.svg' alt="Logo" className="w-auto" />
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
            <NavLink
              to={link.link}
              activeClassName="actived"
              className="text-black text-base hover:text-gray-400 duration-500"
              onClick={handleToggle}
            >
              {link.name}
            </NavLink>
          </li>
          ))}
          <Button variant="primary" size="small">Sign Up</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;