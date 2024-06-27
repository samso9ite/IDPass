import * as React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import DesktopNav from "../Navigation/Desktop";
import MobileNav from "../Navigation/mobile";

import RadarVid from "../../../public/images/idPasss/heroImg.svg"
import { StaticImage } from "gatsby-plugin-image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  handleToggleRequest: any;
  isOpenSidenav: boolean;
  handleToggleMenu: any;
};

const IndexPage: React.FC<Props> = ({
  handleToggleRequest,
  isOpenSidenav,
  handleToggleMenu,
}) => {
  const refContainer: any = React.useRef();

  const tl1 = gsap.timeline();

  useGSAP(
    () => {
      tl1
        .fromTo(
          ".title",
          {
            y: 90,
            scale: 1.2,
          },
          {
            y: 0,
            duration: 1.1,
            ease: "back.inOut",
          }
        )
        .to(".title", {
          scale: -0.19,
          scrollTrigger: {
            scrub: true,
            start: "top 25%",
            end: "bottom 10%",
          },
        });
      tl1
        .fromTo(
          ".subtitle",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
          }
        )
        .to(".subtitle", {
          scale: -0.19,
          scrollTrigger: {
            scrub: true,
            start: "top 25%",
            end: "bottom 10%",
          },
        });
      tl1.fromTo(
        ".cta",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          ease: "circ.inOut",
        }
      );
    },
    { scope: refContainer }
  );

  return (
    <>
      <MobileNav
        isOpenSidenav={isOpenSidenav}
        handleToggleRequest={handleToggleRequest}
        handleToggleMenu={handleToggleMenu}
      />
      <DesktopNav handleToggleRequest={handleToggleRequest} />
      <div className="container mx-auto" style={{marginTop:"4%"}}>
        <div className="columns-2">
          <div className="colums-1">
            <span className="w-[85%] text-[32px] md:w-[38%] md:text-[54px]">
              Instantly Verify <span className="font-bold">Individuals</span> and <span className="font-bold">Businesses'</span> Identities Globally
            </span>

            <p className="mt-4 w-[95%] text-[20px]">
              Identitypass offers simplified KYC/KYB solutions, enabling digital businesses to acquire and onboard customers with ease through 
              tools that can be accessed for instant Data verification, Document Verification, and Biometric Authentication.
            </p>
          </div>
          <div className="columns-1">
          <StaticImage
            src={"../../../public/images/idPasss/hero.png"}
            alt=""
            layout="constrained"
            placeholder="blurred"
            // width={30}
            quality={100}
          />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default IndexPage;
