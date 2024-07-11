import React from 'react';
import Header from './header';
import UseNowPlayingMovies from '../hookContents/useNowPlayingMovies';

const Browse = () => {
  UseNowPlayingMovies();
  return (
    <>
    <Header/>
    <div className='m-2 p-2 flex mt-16 min-h-screen items-center justify-center'><h1 className='text-2xl font-bold text-red-900'>Browse page</h1></div>
    </>
  )
}

export default Browse;