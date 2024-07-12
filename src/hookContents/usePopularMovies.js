import { useDispatch } from "react-redux";
import { APIoptions, POPULAR_MOVIES_API} from "../utils/constant";
import { addPopularMovies} from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies=()=>{
    const dispatch=useDispatch();

    const getPopularMovies=async()=>{
        const response =await fetch(POPULAR_MOVIES_API,APIoptions);
        const json = await response.json();
        dispatch(addPopularMovies(json?.results));
      }
    
      useEffect(()=>{
          getPopularMovies();
        }
      ,[]);
};
export default usePopularMovies;