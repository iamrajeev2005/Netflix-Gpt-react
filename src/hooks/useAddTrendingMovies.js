import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
function useAddTrendingMovies() {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day`,
      API_OPTIONS
    );
    const res = await data.json();
    dispatch(addTrendingMovies(res.results));
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
}

export default useAddTrendingMovies;
