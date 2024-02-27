import React from "react";
import Card from "../../Card";
import { useSelector } from "react-redux";

const Listcontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const trending = useSelector((store) => store.movies?.trendingMovies);
  const popular = useSelector((store) => store.movies?.popularMovies);
  const upcoming = useSelector((store) => store.movies?.upcomingMovies);
  console.log(upcoming)
  return (
    <>
      <div className="relative z-10 -mt-20">
        <div>
          <h1 className="text-white font-semibold text-2xl ml-2">
            Now Playing
          </h1>
          <div className="card-scroll overflow-x-auto">
            <div className="flex w-fit items-center gap-4">
              {movies?.map((item, index) => {
                return <Card key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-white font-semibold text-2xl ml-2">Trending</h1>
          <div className="card-scroll overflow-x-auto">
            <div className="flex w-fit items-center gap-4">
              {trending?.map((item, index) => {
                return <Card key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-white font-semibold text-2xl ml-2">
            Popular Movies
          </h1>
          <div className="card-scroll overflow-x-auto">
            <div className="flex w-fit items-center gap-4">
              {popular?.map((item, index) => {
                return <Card key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-white font-semibold text-2xl ml-2">
            Upcoming Movies
          </h1>
          <div className="card-scroll overflow-x-auto">
            <div className="flex w-fit items-center gap-4">
              {upcoming?.map((item, index) => {
                return <Card key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listcontainer;
