import React from 'react';
import MoviesCategory from './MoviesCategory';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
const movies = useSelector((store)=>store.movies.nowPlayingMovies);
  return (
    <div className='bg-black w-screen'>
      <div className='relative -mt-52 z-20 text-white'>
      <MoviesCategory title={"Now Playing"} movies={movies}/>
      <MoviesCategory title={"Trending"} movies={movies}/>
      <MoviesCategory title={"Latest"} movies={movies}/>
      <MoviesCategory title={"Popular now"} movies={movies}/>
      <MoviesCategory title={"Romantic"} movies={movies}/>
      <MoviesCategory title={"Horror"} movies={movies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;