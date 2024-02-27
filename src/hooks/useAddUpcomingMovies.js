import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
function useAddUpcomingMovies() {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const res = await data.json();
    dispatch(addUpcomingMovies(res.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
}

export default useAddUpcomingMovies;
