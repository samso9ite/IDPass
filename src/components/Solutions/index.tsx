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
    <div className={`w-full mx-auto mt-16 md:mt-32 md:w-[85%]`} id="solutions">
      <div className="">
        <h2 className="uppercase bg-[#F2F2F2] w-[fit-content] ml-5 rounded-lg py-4 px-6 text-[#0B0A0A] text-base font-light mb-8 md:ml-0">
          Our Solutions
        </h2>
        <div>
          <h2 className="text-[#0B0A0A] font-semibold text-3xl w-[90%] mx-auto md:mx-0 md:text-6xl md:w-2/5 md:leading-[1.2]">
            Beat Fraud With IdentityRadar
          </h2>
          <div className="bg-[#F2F4FD] pb-[40px] pt-[40px] px-[30px] mt-10 mb-[32] md:px-[80px] md:rounded-[25px] md:pb-[100px] md:pt-[50px] ">
            <div>
              <div className="flex items-start gap-4 mb-10 md:mb-20">
                {tabs.map((tab: string, index: number) => (
                  <button
                    key={index}
                    className={`${
                      selectedTab === index
                        ? "bg-[#251169] text-white font-medium"
                        : "bg-white text-[#0B0A0A]"
                    } rounded-full text-xs px-4 py-2 md:py-4 md:px-6 md:text-lg`}
                    onClick={() => handleSelect(index)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {datas
                .filter((data: any) => data.id === selectedTab)
                .map((data: any) => (
                  <div
                    className={`flex flex-col items-center mt-0 gap-20 md:flex-row md:justify-between`}
                    key={data.title}
                  >
                    <div className="w-full md:w-[50%]">
                      <h3 className="text-[#0B0A0A] text-3xl md:text-5xl">
                        {data.title}
                      </h3>
                      <p className="py-4">{data.content}</p>
                      <button
                        className="bg-[#251169] hover:bg-[#432f81] text-white px-8 py-4 rounded-lg text-base mt-3 md:text-xl"
                        onClick={handleToggleRequest}
                      >
                        Request Demo
                      </button>
                    </div>
                    <div className="w-full hidden md:w-[50%] md:block">
                      {selectedTab === 0 ? (
                        <StaticImage
                          src={"../../../static/images/onboard_kyc.png"}
                          placeholder="blurred"
                          layout="constrained"
                          width={500}
                          alt="Onboarding Screening"
                          objectFit="cover"
                        />
                      ) : selectedTab === 1 ? (
                        <StaticImage
                          src={"../../../static/images/verification_kyc.png"}
                          placeholder="blurred"
                          layout="constrained"
                          width={800}
                          alt="Onboarding Screening"
                          objectFit="cover"
                        />
                      ) : (
                        <StaticImage
                          src={"../../../static/images/ongoing_kyc.png"}
                          placeholder="blurred"
                          layout="constrained"
                          width={800}
                          alt="Onboarding Screening"
                          objectFit="cover"
                        />
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
