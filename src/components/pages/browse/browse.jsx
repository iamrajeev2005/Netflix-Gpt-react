import Browseheader from "./Browseheader"
import Footer from '../../Footer'
import useNowPlayingMovies from "../../../hooks/useNowPlayingMovies"
import Bannercontainer from "./Bannercontainer"
import Listcontainer from "./Listcontainer"

const Browse = () => {
  useNowPlayingMovies()
  return <div className='bg-zinc-900 min-h-[100vh] w-screen relative z-10'>
  <Browseheader/>
  <Bannercontainer/>
  <Listcontainer/>
  <Footer/>
  </div>
}

export default Browse;