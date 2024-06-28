import * as React from "react";

import IdPassVid from "../../../static/video/id_pass_vid.mp4";

const Video: React.FC = () => {
  return (
    <div className="w-full mx-auto mt-16 md:mt-20 md:w-[75%]">
      <div className="hidden md:block">
        <video controls className=" m-auto w-[100%]" autoPlay>
          <source src={IdPassVid} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
