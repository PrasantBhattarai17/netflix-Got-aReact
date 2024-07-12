import { useDispatch } from "react-redux";
import { APIoptions, TOP_RATED_MOVIES_API, TRENDING_API} from "../utils/constant";
import {addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies=()=>{
    const dispatch=useDispatch();

    const getTrendingMovies=async()=>{
        const response =await fetch(TRENDING_API,APIoptions);
        const json = await response.json();
        dispatch(addTrendingMovies(json?.results));
      }
    
      useEffect(()=>{
        getTrendingMovies();
        }
      ,[]);
};
export default useTrendingMovies;