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
import useTrending from '../hookContents/usetrending';
import SearchPage from './searchPage';
import { useSelector } from 'react-redux';
const Browse = () => {
  const isSearch=useSelector((store)=>store.search.showSearch);
  UseNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useTrendingMovies();
  useTrendingSeries();
  useTrending();
  return (
    <>
    <Header/>
    {isSearch?<SearchPage/>:<>
    <MaincContainer/>
    <SecondaryContainer/>
    </>}
    </>
  )
}

export default Browse;