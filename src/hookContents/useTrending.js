import { useDispatch } from "react-redux";
import { APIoptions, TRENDING_ALL_API } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrending=()=>{
    const dispatch=useDispatch();

    const getUpcomingMovies=async()=>{
        const response =await fetch(TRENDING_ALL_API,APIoptions);
        const json = await response.json();
        dispatch(addUpcomingMovies(json?.results));
      }
    
      useEffect(()=>{
          getUpcomingMovies();
        }
      ,[]);
};
export default useTrending;