import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    arrows: false,
  };

const Testimonials = () => {
    
    return (
        <div className={`w-full mx-auto mt-10 md:mt-20 md:w-[85%]`} id="solutions">
            <div className="">
                <p className="text-[#B853E6]"> TESTED AND TRUSTED</p>
                <div>
                    <h3 className="text-[#0B0A0A] font-semibold text-5xl w-[40%] mx-auto mt-5 md:mx-0 md:text-5xl  md:leading-[1.2]">
                        What Our Customers are Saying
                    </h3>
                    <section className="">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl w-[100%]  lg:py-16 lg:px-6">
                           <div className="grid mb-8 lg:mb-12 lg:grid-cols-1">
                            <Slider  {...settings}>
                               <div className="row  border-gray-200 md:p-1 lg:border-r dark:border-gray-700" > 
                                    <figcaption className="flex space-x-3 ">
                                        <StaticImage
                                            src="../../../public/images/idPasss/client1.png"
                                            alt="Peleza logo"
                                            width={60}
                                            placeholder="blurred"
                                            objectFit="contain"
                                            layout="constrained"
                                        />
                                         <span className="text-lg font-semibold text-gray-900 ">Union Bank</span>
                                    </figcaption>
                                    <figure className="flex flex-col justify-between">
                                        <blockquote className="mx-auto  max-w-2xl " >
                                            <p className=" w-[80%]" style={{marginLeft:"11.5%", fontSize:"18px"}}>
                                            Identitypass's customer service is outstanding; they respond to our complaints promptly 
                                            and efficiently. Despite our high transaction volume, we experienced no server issues upon onboarding. 
                                            Their reliability and performance exceeded our expectations.
                                            </p>
                                        </blockquote>
                                    </figure>
                                </div>
                                <div className=""> 
                                    <figcaption className="flex space-x-3 w-[23%] ml-8">
                                    <StaticImage
                                        src="../../../public/images/idPasss/client2.png"
                                        alt="Peleza logo"
                                        width={230}
                                        placeholder="blurred"
                                        objectFit="contain"
                                        layout="constrained"
                                        />
                                         <span className="text-lg font-semibold text-gray-900 ">Palmpay</span>
                                    </figcaption>
                                    <figure className="flex flex-col justify-between">
                                        <blockquote className="mx-auto  " >
                                            <p className=" w-[80%]" style={{marginLeft:"16%", fontSize:"18px"}}>
                                            We've partnered with Identitypass for our KYC/KYB verification, and their 
                                            customer service is exceptional. I highly recommend Identitypass to everyone.
                                            </p>
                                        </blockquote>
                                    </figure>
                                </div>
                                <div className="row  border-gray-200 md:p-1 lg:border-r dark:border-gray-700" > 
                                    <figcaption className="flex space-x-3">
                                    <StaticImage
                                        src="../../../public/images/idPasss/client1.png"
                                        alt="Peleza logo"
                                        width={60}
                                        placeholder="blurred"
                                        objectFit="contain"
                                        layout="constrained"
                                        />
                                         <span className="text-lg font-semibold text-gray-900 ">Quickcheck</span>
                                    </figcaption>
                                    <figure className="flex flex-col justify-between">
                                        <blockquote className="mx-auto  max-w-2xl " >
                                            <p className=" w-[80%]" style={{marginLeft:"13%", fontSize:"18px"}}>
                                            Identitypass's services are top-notch. We recall reaching out about issues we were experiencing and receiving prompt feedback and resolution. We at Palmpay highly recommend Identitypass
                                            </p>
                                        </blockquote>
                                    </figure>
                                </div>
                                <div className=""> 
                                    <figcaption className="flex space-x-3  ml-8">
                                    <StaticImage
                                        src="../../../public/images/idPasss/client2.png"
                                        alt="Peleza logo"
                                        width={60}
                                        placeholder="blurred"
                                        objectFit="contain"
                                        layout="constrained"
                                        />
                                         <span className="text-lg font-semibold text-gray-900 ">Fincra technologies ltd</span>
                                    </figcaption>
                                    <figure className="flex flex-col justify-between">
                                        <blockquote className="mx-auto  max-w-2xl " >
                                            <p className=" w-[80%]" style={{marginLeft:"17.5%", fontSize:"18px"}}>
                                            Prembly has streamlined the onboarding process for our team, ensuring a smooth and swift customer onboarding experience.”
                                            </p>
                                        </blockquote>
                                    </figure>
                                </div>
                                </Slider>
                            </div>
                           
                          
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Testimonials