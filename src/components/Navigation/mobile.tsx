import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { MdClose, MdMenu } from "react-icons/md";

import Logo from "../../../static/images/logo.png";

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
  isOpenSidenav: boolean;
  handleToggleRequest: any;
  handleToggleMenu: any;
};

const MobileNav: React.FC<Props> = ({
  handleToggleMenu,
  handleToggleRequest,
  isOpenSidenav,
}) => {
  return (
    <div className="py-4 block md:hidden mb-8">
      <div className=" flex items-center justify-between w-[90%] m-auto">
        <a href="/">
          <img src={Logo} width={"120px"} height={"120px"} />
        </a>
        <MdMenu onClick={handleToggleMenu} />
      </div>

      {isOpenSidenav && (
        <div
          className="w-[100%]  border border-white py-4 px-4"
          style={{
            zIndex: 2,
            position: "fixed",
            height: "100vh",
            top: 0,
            left: 0,
            bottom: 0,
            background: "white",
          }}
        >
          <div className="flex flex-row items-center justify-between">
            <img src={Logo} width={"150px"} height={"150px"} />
            <MdClose onClick={handleToggleMenu} />
          </div>
          <ul className="flex flex-col items-left gap-5 w-[90%] mt-8">
            {Navs.map((nav: { name: string; path: string }) => (
              <AnchorLink to={nav.path} key={nav.name}>
                <li>{nav.name}</li>
              </AnchorLink>
            ))}
            <li className="border border-[#251169] rounded px-6 py-2 text-center">
              <button
                className="text-lg text-[#251169] text-center"
                onClick={() =>
                  window.open("https://account.prembly.com/login", "_blank")
                }
              >
                Login
              </button>
            </li>
            <li className="bg-[#251169] px-6 py-2 rounded text-center">
              <button
                className="text-lg text-white text-center"
                onClick={handleToggleRequest}
              >
                Request Demo
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
