import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate=useNavigate();

   const handleSign=()=>{
    signOut(auth).then(() => {
    navigate("/");
    }).catch((error) => {
    });
   };
  return (
    <div className=' absolute   w-full top-0   bg-gradient-to-b from-black  flex  items-center justify-between '>
      <div className='flex justify-start space-x-8'>
      <img className='ml-10 p-4 size-[11%]' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'/>
      <ul className='flex justify-start items-center space-x-8 '>
        <li className='text-md text-white font-sans '>Home</li>
        <li className='text-md text-white font-sans '>Tv shows</li>
        <li className='text-md text-white font-sans '>Movies</li>
        <li className='text-md text-white font-sans '>New & Popular</li>
        <li className='text-md text-white font-sans '>My List</li>
        <li className='text-md text-white font-sans '>Browse by Languages</li>
      </ul>
      </div>
    <div className='m-3 p-2 mr-6 flex justify-end items-center w-1/3 space-x-6'>
    <span className='text-xl text-white font-sans '>🔍</span>
    <span className='text-xl text-white font-sans '>🔔</span>
    <span className='flex mr-2 p-1 space-x-1 items-center '>
      <img className='w-10 h-10 rounded-sm cursor-pointer' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'/>
      <span onClick={handleSign} className='text-xl text-white font-sans cursor-pointer '>🔻</span>
    </span>
    </div >

   
    </div>
  )
}

export default Header;