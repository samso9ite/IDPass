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
  const [selectedTab, setSelectedtab] = React.useState<number>(0);

  const handleSelect = (id: number) => {
    setSelectedtab(id);
  };

  return (
    <div className={`w-full mx-auto mt-5 md:mt-20 md:w-[85%]`} id="solutions">
      <div className="">
       <p className="text-[#B853E6]"> A PLATFORM YOU CAN TRUST</p>
        <div>
          <h3 className="text-[#0B0A0A] font-semibold text-5xl w-[50%] mx-auto mt-5 md:mx-0 md:text-5xl  md:leading-[1.2]">
          One Platform For All Your Verification Needs
          </h3>
          <div className="mt-10 grid gap-x-12 gap-y-7  grid-cols-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#420D59] text-[#fff]">
            <div className="px-6 py-4">
              <div className=" text-2xl mb-2 font-semibold">Verify Identities <br/>Quickly</div>
            </div>
            <StaticImage
              src="../../../public/images/idPasss/Verify-identities.png"
              alt="Identity Verification"
              placeholder="blurred"
              objectFit="contain"
              layout="constrained"
            />
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#2F528E] text-[#fff]">
            <div className="px-6 py-4">
              <div className=" text-2xl mb-2 font-semibold">Instant Document Verification</div>
            </div>
            <StaticImage
              src="../../../public/images/idPasss/document-verification.png"
              alt="Document Verification"
              placeholder="blurred"
              objectFit="contain"
              layout="constrained"
              className="mt-30"
            />
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#420D59] text-[#fff]">
            <div className="px-6 py-4">
              <div className=" text-2xl font-semibold mb-2">Accurate Biometric Authentication</div>
            </div>
            <StaticImage
              src="../../../public/images/idPasss/Biometric.png"
              alt="Peleza logo"
              placeholder="blurred"
              objectFit="contain"
              layout="constrained"
            />
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#2F528E] text-[#fff]">
            <div className="px-6 py-4">
              <div className=" text-2xl mb-2 font-semibold">Customizable Identity Checker Widget</div>
            </div>
            <StaticImage
             src="../../../public/images/idPasss/checker-widget.png"
              alt=""
              width={240}
              placeholder="blurred"
              objectFit="contain"
              layout="constrained"
              className="mx-auto block"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
