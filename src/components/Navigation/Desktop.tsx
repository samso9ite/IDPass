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
    <div className="hidden md:block mt-5">
      <div className="flex items-center justify-between w-[90%] m-auto">
        <a href="/">
          <StaticImage
            src="../../../static/images/logo.png"
            alt="logo"
            placeholder="blurred"
            objectFit="contain"
            layout="fixed"
            width={350}
          />
        </a>

        <ul className="flex items-center gap-5">
          {Navs.map((nav: { name: string; path: string }) => (
            <AnchorLink to={nav.path} key={nav.name} >
              <li className="text-[#420D59] text-lg">{nav.name}</li>
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
          <li className="bg-[#420D59] hover:bg-[#821AB2] px-6 py-2 rounded">
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
