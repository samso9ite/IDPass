import * as React from "react";

const LevelUp:React.FC = () => {
    return (
        <div className="bg-[#2D2B2B] text-[#fff] justify-center w-[75%] mx-auto p-12" style={{borderRadius:"20px"}}>
            <center>
                <p >SEE THE MAGIC OF IDENTITY VERIFICATION</p>
                <h3 className=" text-center text-2xl w-[80%]  mx-auto mt-5  md:mx-0 md:text-5xl  md:leading-[1.3] font-medium" style={{fontWeight:"400"}}>
                    Get The Ball Rolling Quickly and Level Up Your Business
                </h3>
                <div className="mt-5">
                <button
                    className="bg-[#ECD2F9] text-[#420D59] hover:bg-[#b395c2] px-8 py-4 rounded-lg mt-2 text-base  md:mt-3 md:text-xl text-white"
                    >
                        Request Demo
                    </button> <button
                            className="bg-[transparent] hover:bg-[transparent] px-8 py-4  md:mt-3 md:text-xl text-white"
                            >
                      Talk to Sales
                    </button>
                </div>
          </center>
        </div>
    )
}

export default LevelUp