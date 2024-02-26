import React from "react";

function Card({ item }) {
  return (
    <div className="h-[20vw] w-[13vw] rounded-md m-2 ">
      <img
        src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
        alt={item.title}
        className="h-[100%] w-[100%]"
      />
    </div>
  );
}

export default Card;
