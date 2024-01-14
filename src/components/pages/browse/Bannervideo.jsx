import React from "react";
import {useSelector } from "react-redux";
import useMovieTrailer from "../../../hooks/useMovieTrailer";

const Bannervideo = ({ moviesId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideos)
   
useMovieTrailer(moviesId)
  return (
    <>
      <div className="absolute  top-0 left-0 w-screen h-[100vh] -z-10 ">
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default Bannervideo;
