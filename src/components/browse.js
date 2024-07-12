import React from 'react';
import Header from './header';
import UseNowPlayingMovies from '../hookContents/useNowPlayingMovies';
import MaincContainer from './MainContainer';
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