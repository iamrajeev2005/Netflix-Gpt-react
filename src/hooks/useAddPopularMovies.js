import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
function useAddPopularMovies() {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const res = await data.json();
    dispatch(addPopularMovies(res.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
}

export default useAddPopularMovies;
