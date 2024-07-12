import React from 'react';
import MoviesCategory from './MoviesCategory';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
const movies = useSelector((store)=>store.movies);

  return (
    <div className='bg-black w-screen'>
      <div className='relative -mt-52 z-20 text-white'>
      <MoviesCategory title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
      <MoviesCategory title={"Trending TV Series"} movies={movies.TrendingSeries}/>
      <MoviesCategory title={"Trending Movies"} movies={movies.TrendingMovies}/>
      <MoviesCategory title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
      <MoviesCategory title={"Top Rated Movies"} movies={movies.TopRatedMovies}/>
      <MoviesCategory title={"Popular Movies"} movies={movies.PopularMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;