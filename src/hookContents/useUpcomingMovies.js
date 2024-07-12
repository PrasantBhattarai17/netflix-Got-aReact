import { useDispatch } from "react-redux";
import { APIoptions, UPCOMING_MOVIES_API } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies=()=>{
    const dispatch=useDispatch();

    const getUpcomingMovies=async()=>{
        const response =await fetch(UPCOMING_MOVIES_API,APIoptions);
        const json = await response.json();
        dispatch(addUpcomingMovies(json?.results));
      }
    
      useEffect(()=>{
          getUpcomingMovies();
        }
      ,[]);
};
export default useUpcomingMovies;