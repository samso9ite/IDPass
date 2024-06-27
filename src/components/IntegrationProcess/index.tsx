import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const IntegrationProcess = () => {
  return (
    <div
      className="flex flex-col items-start justify-between w-[90%] mx-auto mt-16 md:mt-32 md:w-[85%] md:flex-row gap-2"
      // id="faq"
    >
      <div className="w-full mb-8 md:w-[50%] md:mr-20">
        <p className="text-[#B853E6]">
              SEAMLESS INTEGRATION FOR YOU
            </p>
            <h3 className="text-[#0B0A0A] font-semibold text-5xl w-[77%] mx-auto mt-5 md:mx-0 md:text-5xl  md:leading-[1.2]">
              Get Started With Identitypass in 4 Easy Steps
            </h3>
            <StaticImage
              src="../../../public/images/idPasss/get-started.png"
              alt="Identity Verification"
              placeholder="blurred"
              objectFit="contain"
              layout="constrained"
              width={500}
              className="mt-10"
            />
      </div>
      <div className="rounded  md:w-[40%] px-5 overflow-hidden shadow-lg mx-auto">
        <div className="px-6 py-4">
          <ol style={{listStyleType:"number"}}>
            <li>
              <span style={{fontSize:"20px", fontWeight:"400"}}>Get Started With Our SDKs</span>
              <p className="mt-2 mb-5 text-[18px]">
                Integrate with our SDKs for effortless user onboarding directly on your app or website, 
                custom-made for your existing tech stack. 
              </p> 
            </li>
            <hr className="mb-5" />

            <li>
              <span style={{fontSize:"20px", fontWeight:"400"}}>Integrate With Our APIs</span>
              <p className="mt-2 mb-5  text-[18px]">
                  Seamlessly connect to our verification solutions with our robust APIs, unlocking seamless
                  verifications with smooth integration.
              </p> 
            </li>
            <hr className="mb-5" />

            <li>
              <span style={{fontSize:"18px", fontWeight:"400"}}>Play With Our Portal Directly</span>
              <p className="mt-2 mb-5  text-[18px]">
                With our user-friendly portal, you can easily prevent fake identities, onboard genuine customers, 
                collaborate with trustworthy businesses, and safeguard your platform against fraud.
              </p> 
            </li>
          </ol>
        </div>
      </div>
      </div>
    );
};

export default IntegrationProcess;
