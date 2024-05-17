import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import useScrollTriggeredCountUp from "../../hooks/useScrollTriggerCount";

const CustomerSatisfaction: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const onboardedCustomersCount = useScrollTriggeredCountUp(ref, 166);
  const onboardingVerificationCount = useScrollTriggeredCountUp(ref, 1553);
  const checkTimeCount = useScrollTriggeredCountUp(ref, 50);

  return (
    <div className="bg-[#F2F4FD] relative h-[auto] w-full mx-auto mt-16 md:mt-32">
      <div className="w-[85%] m-auto py-16 md:py-20 ">
        <h2 className="w-full md:w-5/12 text-4xl md:text-6xl leading-tight">
          Our Numbers Speak Volume
        </h2>
        <p className="w-full md:w-5/12 text-base md:text-lg mt-6">
          Being a world class fraud detection product, we have been able to
          acheive successful with our various features on IdentityRadar.
        </p>
        <div className="flex gap-16 mt-20 flex-col items-center justify-center md:flex-row md:items-left md:justify-start">
          <div className="text-center md:border-r md:border-gray-300 md:pr-20 md:text-left">
            <h4 className="text-3xl font-semibold md:text-4xl" ref={ref}>
              {`${onboardedCustomersCount} +`}
            </h4>
            <p className="text-base md:text-xl font-bold mt-2 md:mt-4">
              Onboarded customers
            </p>
          </div>
          <div className="text-center md:border-r md:border-gray-300 md:pr-20 md:text-left">
            <h4 className="text-3xl font-semibold md:text-4xl">
              {`${onboardingVerificationCount} +`}
            </h4>
            <p className="text-base md:text-xl font-bold mt-2 md:mt-4">
              Onboarding verification
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-semibold md:text-4xl">
              {`${checkTimeCount} Secs`}
            </h4>
            <p className="text-base md:text-xl font-bold mt-2 md:mt-4">
              Check time
            </p>
          </div>
        </div>
      </div>
      <div className="hidden absolute -top-[350px] right-0  md:block">
        <StaticImage
          src="../../../static/images/circle.png"
          placeholder="blurred"
          layout="fixed"
          width={800}
          height={1000}
          alt=""
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
