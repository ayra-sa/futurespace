import React, { FC } from "react";
import Container from "./Container";
import { footerData } from "../data/data";
import clsx from "clsx";

interface SocialMediaGroupProps {
  mode?: "mobile" | "desktop";
}

const SocialMediaGroup: FC<SocialMediaGroupProps> = ({ mode = "mobile" }) => {
  const socialsClass = clsx(
    "items-center gap-x-8",
    mode === "mobile" ? "flex lg:hidden justify-between w-1/2" : "hidden lg:flex"
  );

  return (
    <div className={socialsClass}>
      {footerData.socials.map((social) => (
        <a href={social.link} key={social.social}>
          <img src={social.icon} alt={social.social} />
        </a>
      ))}
    </div>
  );
};



const Footer: FC = () => {
  return (
    <footer className="pb-16 lg:pt-16 lg:pb-5">
      <Container>
        <div className="mb-9 flex flex-col items-center lg:flex-row border-b lg:border-b-0 lg:border-t pb-16 lg:pb-0 border-opacity-30 border-b-black">
          <div className="flex-1">
            <div className="w-1/2 mx-auto lg:mx-0">
              <a href="#">
                <img src={footerData.logo} alt="logo" />
              </a>
              <p className="text-base hidden lg:block mt-4 mb-9">
                {footerData.about}
              </p>

              <SocialMediaGroup mode="desktop" />
            </div>
          </div>

          <div className="text-center lg:text-left flex-1 mt-16 mb-11">
            <div className="hidden lg:grid grid-cols-3">
              {footerData.menus.map((menu, id) => (
                <div key={id}>
                  <b>{menu.label}</b>
                  <ul className="space-y-4 mt-6">
                    {menu.menu.map((m, id) => (
                      <li key={id}>
                        <a href={m.link}>{m.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <ul className="space-y-9 lg:hidden">
              {footerData.menuMobile.map((menu) => (
                <li key={menu.menu}>
                  <a href={menu.link}>{menu.menu}</a>
                </li>
              ))}
            </ul>
          </div>

          <SocialMediaGroup mode="mobile" />
        </div>

        <div>
          <p className="text-base text-center lg:text-left mb-4 opacity-50">
            {footerData.copyright}
          </p>

          <div className="flex justify-between items-center opacity-50 lg:hidden">
            <p className="text-base">Term of Service</p>
            <p className="text-base">Privacy Policy</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
