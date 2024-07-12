import React from 'react';
import { CDN_POSTER_URL } from '../utils/constant';

const MoviesCard = ({title,poster_path}) => {
  return (
    <div className="flex-none w-64 h-[16rem] px-1 hover:scale-105  ">
        <img className=" w-96 h-full  rounded   " alt="title" src={CDN_POSTER_URL+poster_path}/>
    </div>
  )
}

export default MoviesCard;