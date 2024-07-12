import React from 'react';


const TrailerTitle = (detail) => {
const {title,overview}=detail;
  return (
    <div className=' absolute pt-64 mx-12 p-6 w-2/6 '>
   <h1 className='font-bold text-6xl'>{title}</h1>
    <p className='text-md font-sans'>{overview}</p>
    <div className='m-4 p-4 space-x-4 text-white text-xl font-sans'>
        <button className='w-32 bg-gray-500 h-12 rounded-md '>▶  Play</button>
        <button className='w-32 bg-gray-500 h-12 rounded-md'>More Info</button>
    </div>
    </div>
  )
}

export default TrailerTitle;