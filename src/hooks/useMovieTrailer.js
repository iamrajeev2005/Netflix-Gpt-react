import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addtrailerVideos } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (moviesId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/`+ moviesId +`/videos?language=en-US`,
      API_OPTIONS
    );
    const res = await data.json();
    const filterVideos = res.results.filter((video) => video.type == "Trailer");
    const trailer = filterVideos.length ? filterVideos[0] : res.results[0];
    dispatch(addtrailerVideos(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
