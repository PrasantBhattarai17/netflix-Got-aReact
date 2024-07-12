import React from 'react';
import Header from './header';
import UseNowPlayingMovies from '../hookContents/useNowPlayingMovies';
import MaincContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from "../hookContents/useUpcomingMovies";
import useTopRatedMovies from '../hookContents/useTopRatedMovies';
import usePopularMovies from '../hookContents/usePopularMovies';

const Browse = () => {
  UseNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();
  return (
    <>
    <Header/>
    <MaincContainer/>
    <SecondaryContainer/>
    </>
  )
}

export default Browse;