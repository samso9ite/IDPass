import * as React from "react";

import RadarVid from "../../../static/video/idradar_onboard_screen.mp4";

const FraudSimplification: React.FC = () => {
  return (
    <div className="w-full mx-auto mt-16 md:mt-32 md:w-[75%]">
      <h3 className="font-semibold text-4xl text-center w-[85%] md:text-6xl md:w-3/5 m-auto">
        We Simplify Fraud Prevention for All Businesses
      </h3>
      <p className="w-[90%] text-left md:w-[60%] mx-auto text-base mt-4 mb-20 font-normal md:text-lg md:text-center leading-tight text-[#353535]">
        Identityradar provides a wide range of fraud prevention tools to
        simplify identity verification and fraud detection for businesses
        worldwide. Our teams are always ready to support you and your customers,
        no matter where you are.
      </p>
      <div className="hidden md:block">
        <video controls className=" m-auto w-[100%]">
          <source src={RadarVid} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default FraudSimplification;
