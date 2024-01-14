import React from 'react'
import Bannervideo from './Bannervideo'
import Bannertitle from './Bannertitle'
import { useSelector } from 'react-redux'

const Bannercontainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(!movies) return;
    const bannerMovie = movies[6]
    const {original_title,overview,id} = bannerMovie
  return <div className='h-[100vh] w-screen relative z-10'>
  <Bannervideo moviesId={id}/>
  <Bannertitle title={original_title} overview={overview}/>
  </div>
}

export default Bannercontainer