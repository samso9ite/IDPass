import * as React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";

const settings = {
  dots: false,
  infinite: true,
  autoplaySpeed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};

const Partner: React.FC = () => {
  return (
    <div className="w-[100%] mx-auto mt-20 bg-[#821AB2] py-3 mt-2">
      <div className="w-[85%]  mx-auto">
      <p className="text-[#251169] text-center text-[#fff] font-bold text-[24px]">
        Trusted by 50+ Companies{" "}
      </p>
      <Slider {...settings} className="pt-3">
        <StaticImage
          src="../../../static/images/peleza_logo.png"
          alt="Peleza logo"
          width={180}
          placeholder="blurred"
          objectFit="contain"
          layout="constrained"
        />
        <StaticImage
          src="../../../static/images/upfield.png"
          alt=""
          width={150}
          placeholder="blurred"
          objectFit="contain"
          layout="constrained"
        />
        <StaticImage
          src="../../../static/images/soko-fresh-logo.png"
          alt=""
          width={180}
          placeholder="blurred"
          objectFit="contain"
          layout="constrained"
        />
        <StaticImage
          src="../../../static/images/Stanbic-logo.webp"
          alt=""
          width={180}
          placeholder="blurred"
          objectFit="contain"
          layout="constrained"
        />
        <StaticImage
          src="../../../static/images/fedEx_logo.png"
          alt=""
          width={180}
          placeholder="blurred"
          objectFit="contain"
          layout="constrained"
        />
      </Slider>
      </div>
    </div>
  );
};

export default Partner;
