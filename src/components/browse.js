import React from 'react';
import Header from './header';
import UseNowPlayingMovies from '../hookContents/useNowPlayingMovies';
import MaincContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from "../hookContents/useUpcomingMovies";
import useTopRatedMovies from '../hookContents/useTopRatedMovies';
import usePopularMovies from '../hookContents/usePopularMovies';
import useTrendingMovies from '../hookContents/useTrendingMovies';
import useTrendingSeries from '../hookContents/useTrendingSeries';

const Browse = () => {
  UseNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useTrendingMovies();
  useTrendingSeries();
  return (
    <>
    <Header/>
    <MaincContainer/>
    <SecondaryContainer/>
    </>
  )
}

export default Browse;