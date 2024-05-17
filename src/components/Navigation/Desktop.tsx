import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Navs = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Solutions",
    path: "#solutions",
  },
  {
    name: "FAQ",
    path: "#faq",
  },
];

type Props = {
  handleToggleRequest: () => void;
};

const DesktopNav: React.FC<Props> = ({ handleToggleRequest }) => {
  return (
    <div className="py-8 hidden md:block">
      <div className="flex items-center justify-between w-[85%] m-auto">
        <a href="/">
          <StaticImage
            src="../../../static/images/logo.png"
            alt="logo"
            width={150}
            placeholder="blurred"
            objectFit="contain"
            layout="fixed"
          />
        </a>

        <ul className="flex items-center gap-5">
          {Navs.map((nav: { name: string; path: string }) => (
            <AnchorLink to={nav.path} key={nav.name}>
              <li>{nav.name}</li>
            </AnchorLink>
          ))}
          <li className="border border-[#251169]  rounded px-6 py-2">
            <button
              className="text-lg text-[#251169]"
              onClick={() =>
                window.open("https://account.prembly.com/login", "_blank")
              }
            >
              Login
            </button>
          </li>
          <li className="bg-[#251169] hover:bg-[#432f81] px-6 py-2 rounded">
            <button
              className="text-lg text-white"
              onClick={handleToggleRequest}
            >
              Request Demo
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopNav;
