import React from 'react';
import MoviesCard from './MoviesCard';

const MoviesCategory = ({title,movies}) => {
 if(!movies) return;
 console.log(movies)
  return (
    <div className='w-screen px-2'>
        <h1 className='m-1 p-1 font-bold text-2xl px-6'>{title}</h1>
      <div className='flex pl-4 overflow-x-scroll scrollbar-hide shadow-black shadow-2xl  '>
       {movies.map((movie)=> <MoviesCard key={movie.id} title={movie.title} poster_path={movie.poster_path}/>)}
        </div>
    </div>
  )
}

export default MoviesCategory;