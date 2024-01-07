import React, { useState } from 'react'

const Accordian = ({title,para}) => {
const [isActive, setIsActive] = useState(false)

  return (
    <div className="flex items-center justify-center">
      <div className="w-[1000px] min-h-[50px] bg-zinc-800 my-1">
        <div
          className="text-white flex items-center text-[2vw] justify-between p-4 cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          {title}
          <div className="text-white text-[3vw]">
            {isActive ? <button>-</button> : <button>+</button>}
          </div>
        </div>

        {isActive && <p className="text-[2vw] text-white p-4 border-t-2 border-black">{para}</p>}
      </div>
    </div>
  );
}

export default Accordian