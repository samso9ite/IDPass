import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const tabs = ["Onboarding Screening", "KYC Verification", "Ongoing Monitoring"];

const datas = [
  {
    id: 0,
    title: "Perform Instant Onboarding Screening",
    content: `               With advancing technology, fraudsters use AI, too. Scrutinize
  all sign-ups to your platform, ensuring only legitimate users
  pass through.`,
    classProp: "onboarding",
  },
  {
    id: 1,
    title: "Simple KYC Verification Check",
    content: `Verify identities effortlessly with our KYC (Know Your Customer) Solution. Our fast, accurate, and reliable checks simplify your onboarding process and enhance your platform's security.`,
    classProp: "verification",
  },
  {
    id: 2,
    title: "Ongoing Monitoring and Transaction Monitoring",
    content: `Secure your transactions with automated and continous monitoring. Identify and block suspicious transactions in real-time while keeping your business integrity and customers trust.`,
    classProp: "monitoring",
  },
];

type Props = {
  handleToggleRequest: () => void;
};

const Solutions: React.FC<Props> = ({ handleToggleRequest }) => {
  return (
    <div className={`w-full mx-auto mt-5 md:mt-20 md:w-[85%]`} id="solutions">
      <div className="">
       <p className="text-[#B853E6]"> A PLATFORM YOU CAN TRUST</p>
        <div>
          <h3 className="text-[#0B0A0A] font-semibold text-5xl w-[50%] mx-auto mt-5 md:mx-0 md:text-5xl  md:leading-[1.2]">
          One Platform For All Your Verification Needs
          </h3>
          <div className="mt-10 grid gap-x-12 gap-y-7 grid-cols-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#420D59] text-[#fff] group relative" style={{height:"400px"}}>
            <div className="px-6 py-4 group-hover:hidden">
              <div className="text-2xl mb-2 font-semibold">Verify Identities <br />Quickly</div>
            </div>
            <div className="group-hover:hidden">
              <StaticImage
                src="../../../public/images/idPasss/Verify-identities.png"
                alt="Identity Verification"
                placeholder="blurred"
                objectFit="contain"
                layout="constrained"
              />
            </div>
            <div className="hidden group-hover:block px-4 py-6" style={{ backgroundImage:
             "linear-gradient(202.87deg,  #8D1BBF -1.85%, #420D59 91%",
             backgroundSize: "100%",
              color:"white",
              }}>
              <StaticImage
                src="../../../public/images/idPasss/data-verification-hover.svg"
                alt="Identity Verification"
                placeholder="blurred"
                objectFit="contain"
                layout="constrained"
              />
              <div className="text-2xl mb-2 font-semibold mt-4">Seamless Data Verification</div>
              <p className="mt-4">Quickly onboard only with the right customers across multiple countries, using their government identifiers.</p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#2F528E] text-[#fff]  group relative" style={{height:"400px"}}>
            <div className="px-6 py-4 group-hover:hidden">
              <div className=" text-2xl mb-2 font-semibold">Instant Document Verification</div>
            </div>
            <div className="group-hover:hidden">
              <StaticImage
                src="../../../public/images/idPasss/document-verification.png"
                alt="Document Verification"
                placeholder="blurred"
                objectFit="contain"
                layout="constrained"
                className="mt-30"
              />
            </div>

            <div className="hidden group-hover:block px-4 py-6 bg-[#2F528E] text-white">
              <StaticImage
                src="../../../public/images/idPasss/data-verification-hover.svg"
                alt="Identity Verification"
                placeholder="blurred"
                objectFit="contain"
                layout="constrained"
              />
              <div className="text-2xl mb-2 font-semibold mt-4">Instant Document Verification</div>
              <p className="mt-4">Verify more than 6000 documents across hundreds of regions 
                worldwide to ensure your users' data are accurate and authentic in just minutes.
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#420D59] text-[#fff] group relative" style={{height:"400px"}}>
            <div className="px-6 py-4 group-hover:hidden">
              <div className=" text-2xl font-semibold mb-2">Accurate Biometric Authentication</div>
            </div>
            <div className="group-hover:hidden">
              <StaticImage
                src="../../../public/images/idPasss/Biometric.png"
                alt="Peleza logo"
                placeholder="blurred"
                objectFit="contain"
                layout="constrained"
                width={250}
              />
            </div>
            <div className="hidden group-hover:block px-4 py-6" style={{ backgroundImage:
             "linear-gradient(202.87deg,  #8D1BBF -1.85%, #420D59 91%",
             backgroundSize: "100%",
              color:"white",
              }}>
              <StaticImage
                src="../../../public/images/idPasss/data-verification-hover.svg"
                alt="Identity Verification"
                placeholder="blurred"
                objectFit="contain"
                layout="constrained"
              />
              <div className="text-2xl mb-2 font-semibold mt-4">Accurate Biometric Authentication</div>
              <p className="mt-4">Quickly onboard only with the right customers across multiple countries, using their government identifiers.</p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#2F528E] text-[#fff]  group relative" style={{height:"400px"}}>
            <div className="px-6 py-4 group-hover:hidden">
              <div className=" text-2xl mb-2 font-semibold">Customizable Identity Checker Widget</div>
            </div>
            <div className="group-hover:hidden">
              <StaticImage
                src="../../../public/images/idPasss/checker-widget.png"
                alt="Document Verification"
                placeholder="blurred"
                objectFit="contain"
                layout="constrained"
                className="mt-30 mx-auto block"
                width={200}
              />
            </div>

            <div className="hidden group-hover:block px-4 py-6 bg-[#2F528E] text-white">
              <StaticImage
                src="../../../public/images/idPasss/data-verification-hover.svg"
                alt="Identity Verification"
                placeholder="blurred"
                objectFit="contain"
                layout="constrained"

              />
              <div className="text-2xl mb-2 font-semibold mt-4">Customizable Identity Checker Widget</div>
              <p className="mt-4">Onboard with complete confidence! Effortlessly welcome new customers and businesses using our simple 
                drag-and-drop feature, supported by our multi-language programming SDKs for seamless integration. 
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
