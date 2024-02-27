import Browseheader from "./Browseheader";
import Footer from "../../Footer";
import useNowPlayingMovies from "../../../hooks/useNowPlayingMovies";
import Bannercontainer from "./Bannercontainer";
import Listcontainer from "./Listcontainer";
import useAddTrendingMovies from "../../../hooks/useAddTrendingMovies";
import useAddPopularMovies from "../../../hooks/useAddPopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  useAddTrendingMovies();
  useAddPopularMovies();
  return (
    <div className="bg-zinc-900 min-h-[100vh] w-screen relative z-10">
      <Browseheader />
      <Bannercontainer />
      <Listcontainer />
      <Footer />
    </div>
  );
};

export default Browse;
