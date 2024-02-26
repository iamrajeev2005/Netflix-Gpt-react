import React from "react";
import Bannervideo from "./Bannervideo";
import Bannertitle from "./Bannertitle";
import { useSelector } from "react-redux";

const Bannercontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const bannerMovie = movies[Math.floor(Math.random() * 12)];
  const { original_title, overview, id, backdrop_path } = bannerMovie;
  return (
    <div className="h-[100vh] w-screen relative z-10">
      <Bannervideo moviesId={id} bg_path={backdrop_path} />
      <Bannertitle title={original_title} overview={overview} />
    </div>
  );
};

export default Bannercontainer;
