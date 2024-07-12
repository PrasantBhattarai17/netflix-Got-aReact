import React from 'react';
import MoviesCategory from './MoviesCategory';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
const nowMovies = useSelector((store)=>store.movies.nowPlayingMovies);
const movies=nowMovies;
const upMovies=useSelector((store)=>store.movies.UpcomingMovies);
const TopMovies=useSelector((store)=>store.movies.TopRatedMovies);
const PopularMovies=useSelector((store)=>store.movies.PopularMovies);
  return (
    <div className='bg-black w-screen'>
      <div className='relative -mt-52 z-20 text-white'>
      <MoviesCategory title={"Now Playing"} movies={movies}/>
      <MoviesCategory title={"Upcoming"} movies={upMovies}/>
      <MoviesCategory title={"Top Rated"} movies={TopMovies}/>
      <MoviesCategory title={"Popular now"} movies={PopularMovies}/>
      <MoviesCategory title={"Romantic"} movies={movies}/>
      <MoviesCategory title={"Horror"} movies={movies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;