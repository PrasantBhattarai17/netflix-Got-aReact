import { useDispatch } from "react-redux";
import { APIoptions, TRENDING_SERIES_API} from "../utils/constant";
import {addTrendingSeries } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingSeries=()=>{
    const dispatch=useDispatch();

    const getTrendingSeries=async()=>{
        const response =await fetch(TRENDING_SERIES_API,APIoptions);
        const json = await response.json();
        dispatch(addTrendingSeries(json?.results));
      }
    
      useEffect(()=>{
        getTrendingSeries();
        }
      ,[]);
};
export default useTrendingSeries;