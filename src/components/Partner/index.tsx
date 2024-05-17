import * as React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";

const settings = {
  dots: false,
  infinite: true,
  autoplaySpeed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};

const Partner: React.FC = () => {
  return (
    <div className="w-[85%] mx-auto mt-20">
      <h2 className="text-[#251169] font-semibold mb-10 text-xl w-[90%] md:text-3xl md:w-2/5">
        Trusted Worldwide by Leading Businesses{" "}
      </h2>
      <Slider {...settings}>
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
  );
};

export default Partner;
