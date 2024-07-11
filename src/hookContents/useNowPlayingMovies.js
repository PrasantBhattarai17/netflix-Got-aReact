import { APIoptions, NOW_PLAYING_API } from '../utils/constant';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovies } from '../utils/movieSlice';

const UseNowPlayingMovies=()=>{
    const dispatch=useDispatch();

const getNowPlayingMovies=async()=>{
    const response =await fetch(NOW_PLAYING_API,APIoptions);
    const json = await response.json();
    dispatch(addMovies(json?.results));
  }

  useEffect(()=>{
      getNowPlayingMovies();
    }
  ,[]);


};


export default UseNowPlayingMovies;