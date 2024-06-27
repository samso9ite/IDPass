import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

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
                        <div className="py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-6">
                           <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                               <div className="row  border-gray-200 md:p-1 lg:border-r dark:bg-gray-800 dark:border-gray-700" > 
                                    <figcaption className="flex space-x-3 w-[20%]">
                                    <StaticImage
                                        src="../../../public/images/idPasss/client1.png"
                                        alt="Peleza logo"
                                        width={180}
                                        placeholder="blurred"
                                        objectFit="contain"
                                        layout="constrained"
                                        />
                                         <span className="text-lg font-semibold text-gray-900 dark:text-white">Bundle</span>
                                    </figcaption>
                                    <figure className="flex flex-col justify-between">
                                        <blockquote className="mx-auto  max-w-2xl dark:text-gray-400 " >
                                            <p className=" w-[80%]" style={{marginLeft:"10.5%", fontSize:"18px"}}>
                                                Identitypass's customer service is outstanding; they respond to our complaints promptly and efficiently. 
                                                Despite our high transaction volume, we experienced no server issues upon onboarding. 
                                                Their reliability and performance exceeded our expectations.
                                            </p>
                                        </blockquote>
                                    </figure>
                                </div>
                                <div className=""> 
                                    <figcaption className="flex space-x-3 w-[20%] ml-8">
                                    <StaticImage
                                        src="../../../public/images/idPasss/client2.png"
                                        alt="Peleza logo"
                                        width={230}
                                        placeholder="blurred"
                                        objectFit="contain"
                                        layout="constrained"
                                        />
                                         <span className="text-lg font-semibold text-gray-900 dark:text-white">Lendigo</span>
                                    </figcaption>
                                    <figure className="flex flex-col justify-between">
                                        <blockquote className="mx-auto  max-w-2xl dark:text-gray-400 " >
                                            <p className=" w-[80%]" style={{marginLeft:"14.5%", fontSize:"18px"}}>
                                                Identitypass verification product has been great so far. My team and I enjoy 
                                                the services we receive and we don’t have compliants.
                                            </p>
                                        </blockquote>
                                    </figure>
                                </div>
                                
                            </div>

                          
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Testimonials