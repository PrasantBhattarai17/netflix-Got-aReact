import React, { useState } from 'react';
import Header from './header';
import { BG_Login } from '../utils/constant';

const SearchPage = () => {
  const[searchTxt,setSearchTxt]=useState("Which genre movies/Tv shows are you looking to watch?");
  return (
    <>
    <Header/>
    <div className='absolute -z-20 inset-0 brightness-50'>
        <img
          alt='bg'
          className='object-cover h-full w-full'
          src={BG_Login}
          />
      </div>
  <div className='flex justify-center mt-80 text-white'>
<input className=' h-11 rounded w-1/3 border-2 border-black text-black ' value={searchTxt} onChange={(e)=>setSearchTxt(e.target.value)}   placeholder=''/>  
<button className='w-[12%] text-xl font-bold bg-red-700 rounded hover:bg-red-800 shadow border-white border-2 '>Search</button> 
    </div>
    </>

  )
}

export default SearchPage;