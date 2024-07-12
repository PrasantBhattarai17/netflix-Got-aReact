import React from 'react';
import Header from './header';
import UseNowPlayingMovies from '../hookContents/useNowPlayingMovies';
import MaincContainer from './MaincContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  UseNowPlayingMovies();
  return (
    <>
    <Header/>
    <MaincContainer/>
    <SecondaryContainer/>
    </>
  )
}

export default Browse;