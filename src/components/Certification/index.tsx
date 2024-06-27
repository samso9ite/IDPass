import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import image from "../../../public/images/idPasss/"

import useScrollTriggeredCountUp from "../../hooks/useScrollTriggerCount";

const Certification: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const onboardedCustomersCount = useScrollTriggeredCountUp(ref, 166);
  const onboardingVerificationCount = useScrollTriggeredCountUp(ref, 1553);
  const checkTimeCount = useScrollTriggeredCountUp(ref, 50);

  return (
    <div className="bg-[#821AB2] relative h-[auto] w-full mx-auto mt-16 md:mt-32">
      <div className="w-[85%] pb-4 pt-4 mx-auto">
        <p className="text-[#251169] text-center text-[#fff] font-bold text-[20px]">
          We are Globally Certified
        </p>
        <div className="mt-7">
          <StaticImage
            src="../../../public/images/idPasss/NDPR.png"
            alt=""
            width={80}
            placeholder="blurred"
            objectFit="contain"
            layout="constrained"
            className="px-7"
          />
           <StaticImage
            src="../../../public/images/idPasss/ISO.png"
            alt=""
            width={80}
            placeholder="blurred"
            objectFit="contain"
            layout="constrained"
            className="px-7"
          />
           <StaticImage
            src="../../../public/images/idPasss/PCI.png"
            alt=""
            width={80}
            placeholder="blurred"
            objectFit="contain"
            layout="constrained"
            className="px-7"
          />
           <StaticImage
            src="../../../public/images/idPasss/PECB.png"
            alt=""
            width={80}
            placeholder="blurred"
            objectFit="contain"
            layout="constrained"
            className="px-7"
          />
           <StaticImage
            src="../../../public/images/idPasss/SOC2.png"
            alt=""
            width={80}
            placeholder="blurred"
            objectFit="contain"
            layout="constrained"
            className="px-7"
          />
           <StaticImage
            src="../../../public/images/idPasss/GDPR.png"
            alt=""
            width={80}
            placeholder="blurred"
            objectFit="contain"
            layout="constrained"
            className="px-7"
          />
            <StaticImage
            src="../../../public/images/idPasss/PECB.png"
            alt=""
            width={80}
            placeholder="blurred"
            objectFit="contain"
            layout="constrained"
            className="px-7"
          />
           <StaticImage
            src="../../../public/images/idPasss/SOC2.png"
            alt=""
            width={80}
            placeholder="blurred"
            objectFit="contain"
            layout="constrained"
            className="px-7"
          />
           <StaticImage
            src="../../../public/images/idPasss/GDPR.png"
            alt=""
            width={80}
            placeholder="blurred"
            objectFit="contain"
            layout="constrained"
            className="px-7"
          />
        </div>
      </div>
    </div>
  );
};

export default Certification;
