import { useDispatch } from "react-redux";
import { APIoptions, TRENDING_ALL_API } from "../utils/constant";
import { addTrendingAll} from "../utils/movieSlice";
import { useEffect } from "react";

const useTrending=()=>{
    const dispatch=useDispatch();

    const getTrendingAll=async()=>{
        const response =await fetch(TRENDING_ALL_API,APIoptions);
        const json = await response.json();
        dispatch(addTrendingAll(json?.results));
      }
    
      useEffect(()=>{
          getTrendingAll();
        }
      ,[]);
};
export default useTrending;