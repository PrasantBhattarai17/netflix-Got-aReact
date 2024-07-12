import React from 'react';
import useMovieTrailervideo from '../hookContents/useMovieTrailerVideo';
import { useSelector } from 'react-redux';

const MovieTrailer = (info) => {
    useMovieTrailervideo(info?.id);
    const filteredTrailerData=useSelector((store)=>store.movies?.MainMovieTrailer);
    if(!filteredTrailerData) return;
  const Main=filteredTrailerData[0];
    
  return (
    <div className=' bg-gradient-to-tr from-black  '>
        <iframe
            className='  w-screen aspect-video pointer-events-none'
         src={"https://www.youtube.com/embed/"+Main?.key+"?&autoplay=1&mute=1&loop=1&controls=1" }
         title="YouTube video player"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default MovieTrailer;