import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface LinkItem {
  name: string;
  link: string;
}

const Navbar = () => {
  const Links: LinkItem[] = [
    { name: "About", link: "/about" },
    { name: "Pricing", link: "/pricing" },
    { name: "Offices", link: "#" },
    { name: "Spaces", link: "/spaces" },
    { name: "Contact us", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-20">
      <div
        className={`md:flex items-center justify-between py-4 md:px-10 px-7 ${
          isAboutPage ? "bg-primary" : "bg-white"
        }`}
      >
        <div>
          <NavLink to="/">
            <img
              src={isAboutPage ? "icons/logo-2.svg" : "icons/logo.svg"}
              alt="Logo"
              className="w-auto"
            />
          </NavLink>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 text-white top-6 w-8 h-8 cursor-pointer md:hidden"
        >
          {/* <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in gap-5 ${
            open ? "top-20 " : "top-[-490px]"
          } ${isAboutPage ? "text-white bg-primary" : "text-black bg-white"}`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to={link.link}
                className={`text-base hover:text-gray-400 duration-500 ${
                  location.pathname === link.link ? "font-bold" : ""
                } ${isAboutPage ? "text-white" : "text-black"}`}
                onClick={handleToggle}
                reloadDocument
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <Button variant={isAboutPage ? "white" : "primary"} size="small">
            Sign Up
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
