import React from 'react';
import { CDN_POSTER_URL } from '../utils/constant';

const MoviesCard = ({title,poster_path}) => {
  return (
    <div className="flex-none w-40 h-[10rem] px-1 hover:border-white hover:border-2   ">
        <img alt={title} className=" w-full h-full"  src={CDN_POSTER_URL+poster_path}/>
    </div>
  )
}

export default MoviesCard;