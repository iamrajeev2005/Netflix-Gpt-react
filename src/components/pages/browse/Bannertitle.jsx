import React from "react";

const Bannertitle = ({ title, overview }) => {
  return (
    <div className="absolute h-[100%] pt-[20vw] pl-[5vw] w-screen bg-gradient-to-r from-zinc-900 aspect-video">
      <h1 className="text-white text-[3.5vw] inline-block leading-tight overflow-hidden">
        {title}
      </h1>
      <p className="text-white text-[1.2vw] w-[40%] py-4 leading-tight">
        {overview.slice(0, 200) + "...more"}
      </p>
      <div className="text-black flex items-center gap-5 pt-4">
        <button className="bg-white px-4 py-2 rounded-lg">Play</button>
        <button className="bg-white px-4 py-2 rounded-lg">More Info</button>
      </div>
    </div>
  );
};

export default Bannertitle;
