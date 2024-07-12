import { useEffect } from "react";
import { APIoptions, TRAILER_MOVIE_API, video } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerfiltered } from "../utils/movieSlice";

 const useMovieTrailervideo=(movieId)=>{
    const dispatch=useDispatch();
  const MainTrailerDetails=async()=>{

   const response=await fetch(TRAILER_MOVIE_API+movieId+video,APIoptions);
   const json =await response.json();
    const allMovieVideos=json?.results;

   const filteredTrailer=allMovieVideos?.filter((video)=>(video?.type=="Trailer"));
   const DoesHaveTrailer=(filteredTrailer)?filteredTrailer:allMovieVideos;
   dispatch(addTrailerfiltered(DoesHaveTrailer));
  }


  useEffect(()=>{
    MainTrailerDetails();
  },[]);


 };

 export default useMovieTrailervideo;