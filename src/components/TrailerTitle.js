import React from 'react';


const TrailerTitle = (detail) => {
const {title,overview}=detail;
  return (
    <div className='  absolute pt-64 mx-12 p-6 w-2/6 font-sans text-white'>
   <h1 className='m-2 font-bold text-6xl'>{title}</h1>
    <p className='text-md '>{overview}</p>
    <div className='m-4 p-4 space-x-2 text-xl '>
        <button className='w-32 bg-white h-12 rounded text-center text-black hover:bg-opacity-75 text-2xl '> Play</button>
        <button className='w-32 bg-gray-700 h-12 rounded text-center text-white bg-opacity-70'>More Info</button>
    </div>
    </div>
  )
}

export default TrailerTitle;