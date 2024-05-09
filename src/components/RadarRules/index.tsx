import * as React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NameIntelligence from "../../../static/images/name-intelligence.gif";
import IPIntelligence from "../../../static/images/ip-intelligence.gif";
import PhoneIntelligence from "../../../static/images/phone-intelligence.gif";
import EmailIntelligence from "../../../static/images/email-intelligence.gif";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const RadarRules = () => {
  const ruleRef: any = React.useRef(null);

  // const panels = document.querySelectorAll(".panel");

  // const tl = gsap.timeline();

  // useGSAP(
  //   () => {
  //     panels.forEach((panel) => {
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: panel,
  //           scrub: true,
  //           start: "top 40%",
  //           end: "top 80%",
  //           pin: true,
  //         },
  //       });

  //       tl.fromTo(
  //         panel,
  //         {
  //           opacity: 0.7,
  //           ease: "none",
  //         },
  //         {
  //           opacity: 1,
  //           ease: "none",
  //         }
  //       );
  //     });
  //   },
  //   { scope: ruleRef }
  // );

  return (
    <div className="w-full mx-auto mt-16 md:mt-32 md:w-[85%]">
      <h2 className="uppercase bg-[#F2F2F2] w-[fit-content] rounded-lg py-4 px-6 text-[#0B0A0A] text-base font-light mb-8">
        Radar Rules
      </h2>
      <h3 className="text-[#0B0A0A] font-semibold text-3xl w-[90%] mx-auto md:text-5xl md:w-9/12 md:mx-0">
        Swift Fraud Prevention With Machine Learning Rules
      </h3>
      <p className="w-[90%] mx-auto md:w-[55%] font-normal py-4 text-base leading-[1.4em] md:text-lg md:mx-0">
        Leverage our machine data rules and insights to combat cyber security
        threats. Discover suspicious activity using behavioral risk scores for
        added security using data around your users.
      </p>

      <div
        ref={ruleRef}
        className="parent-wrapper"
        style={{
          overflow: "",
        }}
      >
        <div className="parent-container panels-wrapper">
          <div className="panel email-intelligence-wrapper fum flex flex-col md:flex-row h-[auto] mt-80px md:mt-[50px]">
            <div
              className="bg-[#F6F3FF] w-full md:w-[50%] py-32 md:py-24 md:rounded-tl-xl md:rounded-bl-xl"
              style={{
                position: "relative",
              }}
            >
              <h4
                className="font-semibold text-4xl md:text-6xl w-[80%] md:w-[50%] text-center mx-auto text-[#4F4F4F] leading-tight"
                style={{
                  transform: "translate(-50%, -50%)",
                  top: "50%",
                  left: "50%",
                  position: "absolute",
                }}
              >
                <span className="text-[#706AF5]"> Email Intelligence</span> Rule
              </h4>
            </div>
            <div className=" w-full md:w-[50%] bg-[#706AF5] text-center mx-auto py-16 md:py-24 md:rounded-tr-xl md:rounded-br-xl">
              <div className="mx-auto text-center">
                <img
                  src={EmailIntelligence}
                  alt=""
                  className="w-full md:w-[80%] mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="panel name-intelligence-wrapper fum flex flex-col md:flex-row h-[auto] mt-80px md:mt-[50px]">
            <div
              className="bg-[#FCDDEC] w-full md:w-[50%] py-32 md:py-24 md:rounded-tl-xl md:rounded-bl-xl"
              style={{
                position: "relative",
              }}
            >
              <h4
                className="font-semibold text-4xl md:text-6xl w-[80%] md:w-[50%] text-center mx-auto text-[#4F4F4F] leading-tight"
                style={{
                  transform: "translate(-50%, -50%)",
                  top: "50%",
                  left: "50%",
                  position: "absolute",
                }}
              >
                <span className="text-[#CF19A0]">Name Intelligence</span> Rule
              </h4>
            </div>
            <div className="w-full md:w-[50%] bg-[#CF19A0] text-center mx-auto py-16 md:py-24 md:rounded-tr-xl md:rounded-br-xl">
              <div className="mx-auto text-center">
                <img
                  src={NameIntelligence}
                  alt=""
                  className="w-full md:w-[80%] mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="panel name-intelligence-wrapper fum flex flex-col md:flex-row h-[auto] mt-60px md:mt-[50px]">
            <div
              className="bg-[#DDF3F1] w-full md:w-[50%] py-32 md:py-24 md:rounded-tl-xl md:rounded-bl-xl"
              style={{
                position: "relative",
              }}
            >
              <h4
                className="font-semibold text-4xl md:text-6xl w-[80%] md:w-[50%] text-center mx-auto text-[#4F4F4F] leading-tight"
                style={{
                  transform: "translate(-50%, -50%)",
                  top: "50%",
                  left: "50%",
                  position: "absolute",
                }}
              >
                <span className="text-[#000]"> Phone Intelligence </span> Rule
              </h4>
            </div>
            <div className="w-full md:w-[50%] bg-[#37B6AA] text-center mx-auto py-16 md:py-24 md:rounded-tr-xl md:rounded-br-xl">
              <div className="mx-auto text-center">
                <img
                  src={PhoneIntelligence}
                  alt=""
                  className="w-full md:w-[80%] mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="panel name-intelligence-wrapper fum flex flex-col md:flex-row h-[auto] mt-60px md:mt-[50px]">
            <div
              className="bg-[#D3DBF8] w-full md:w-[50%] py-32 md:py-24 md:rounded-tl-xl md:rounded-bl-xl"
              style={{
                position: "relative",
              }}
            >
              <h4
                className="font-semibold text-4xl md:text-6xl w-[80%] md:w-[50%] text-center mx-auto text-[#4F4F4F] leading-tight"
                style={{
                  transform: "translate(-50%, -50%)",
                  top: "50%",
                  left: "50%",
                  position: "absolute",
                }}
              >
                <span className="text-[#251169]"> IP Intelligence </span> Rule
              </h4>
            </div>
            <div className="w-full md:w-[50%] bg-[#251169] text-center mx-auto py-16 md:py-24 md:rounded-tr-xl md:rounded-br-xl">
              <div className="mx-auto text-center">
                <img
                  src={IPIntelligence}
                  alt=""
                  className="w-full md:w-[80%] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadarRules;
