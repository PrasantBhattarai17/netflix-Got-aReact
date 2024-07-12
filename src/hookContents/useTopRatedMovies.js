import { useDispatch } from "react-redux";
import { APIoptions, TOP_RATED_MOVIES_API} from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies=()=>{
    const dispatch=useDispatch();

    const getTopRatedMovies=async()=>{
        const response =await fetch(TOP_RATED_MOVIES_API,APIoptions);
        const json = await response.json();
        dispatch(addTopRatedMovies(json?.results));
      }
    
      useEffect(()=>{
          getTopRatedMovies();
        }
      ,[]);
};
export default useTopRatedMovies;