import * as React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import DesktopNav from "../Navigation/Desktop";
import MobileNav from "../Navigation/Mobile";

import RadarVid from "../../../static/video/hero_section_radar.mp4";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  isOpen: boolean;
  handleToggleRequest: any;
  isOpenSidenav: boolean;
  handleToggleMenu: any;
};

const IndexPage: React.FC<Props> = ({
  isOpen,
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
      <DesktopNav isOpen={isOpen} handleToggleRequest={handleToggleRequest} />
      <div className="bg-[url('/images/banner.png')] bg-bottom bg-no-repeat bg-cover">
        <div className="text-center mt-12 md:mt-0 md:py-12 " ref={refContainer}>
          <h1 className="title w-[85%] mx-auto px-1 text-[26px] leading-tight font-semibold md:w-[70%] md:text-8xl md:leading-none md:h-[auto] md:pt-[4rem] md:pb-[3rem] md:px-0 ">
            Discover And Prevent{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,17,105,1) 0%, rgba(207,25,160,1) 100%)",
                backgroundClip: "text",
                backgroundSize: "100%",
                WebkitTextFillColor: "transparent",
              }}
            >
              Fraud
            </span>{" "}
            Patterns In <span className="text-[#251169]">Real-</span>
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,17,105,1) 0%, rgba(207,25,160,1) 100%)",
                backgroundClip: "text",
                backgroundSize: "100%",
                WebkitTextFillColor: "transparent",
              }}
            >
              Time
            </span>
          </h1>
          <p className="w-[95%] mx-auto mt-2 py-6 text-sm  md:w-[55%]  md:text-xl  text-[#353535] md:leading-8 md:py-0 md:mt-0 subtitle">
            Transform your transaction monitoring, onboarding checks, and AML
            screenings with our easy-to-integrate APIs, swiftly identifying and
            managing fraud risks.
          </p>
          <button
            className="bg-[#251169] text-white px-8 py-4 rounded-lg mt-3 text-base md:text-xl cta"
            onClick={handleToggleRequest}
          >
            Request Demo
          </button>
        </div>
        <video
          autoPlay
          loop
          muted
          className="w-full mt-8 m-auto md:w-[80%] md:mt-0"
        >
          <source src={RadarVid} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default IndexPage;
