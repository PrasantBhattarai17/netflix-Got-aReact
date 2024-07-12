import React from 'react';
import TrailerTitle from './TrailerTitle';
import { useSelector } from 'react-redux';

const MaincContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
     if(!movies) return;


     const trailerMovie=movies[0];
const { original_title, overview } = trailerMovie;

  return (
    <TrailerTitle title={original_title} overview={overview} />
  )
}

export default MaincContainer;