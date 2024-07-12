import React from 'react';
import TrailerTitle from './TrailerTitle';
import { useSelector } from 'react-redux';
import MovieTrailer from './MovieTrailer';

const MaincContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
     if(!movies) return;


     const trailerMovie=movies[12];
const { original_title, overview,id } = trailerMovie;


  return (
    <>
    <TrailerTitle title={original_title} overview={overview} />
    <MovieTrailer id={id}/>
    </>
  )
}

export default MaincContainer;