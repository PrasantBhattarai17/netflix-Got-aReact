import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { Avatar_PNG, Logo } from '../utils/constant';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);

  useEffect(() => {
      const unSubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email, displayName} = user;
        dispatch(addUser({uid:uid,emial:email,displayName:displayName}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unSubscribe();
   }, []);

   const handleSign=()=>{
    signOut(auth).then(() => {
     
    }).catch((error) => {
      navigate("/error");
    });
   };
  return (
     <>

    {user?
    <div className=' absolute   w-full top-0   bg-gradient-to-b from-black  flex  items-center justify-between '>
      <div className='flex justify-start space-x-8'>
      <img className='ml-10 p-4 size-[11%]' alt='logo' src={Logo}/>
      <ul className='flex justify-start items-center space-x-8 '>
       <Link to="/"> <li className='text-md text-white font-sans  '>Home</li></Link>
       <Link to="/">  <li className='text-md text-white font-sans  '>Tv shows</li></Link>
       <Link to="/">  <li className='text-md text-white font-sans  '>Movies</li></Link>
       <Link to="/"> <li className='text-md text-white font-sans  '>New & Popular</li></Link>
       <Link to="/">  <li className='text-md text-white font-sans  '>My List</li></Link>
       <Link to="/">  <li className='text-md text-white font-sans  '>Browse by Languages</li></Link>
      </ul>
      </div>
    <div className='m-3 p-2 mr-6 flex justify-end items-center w-1/3 space-x-6'>
    <span className='text-xl text-white font-sans '>🔍</span>
    <span className='text-xl text-white font-sans '>🔔</span>
    <span className='flex mr-2 p-1 space-x-1 items-center '>
      <img alt='avatar' className='w-10 h-10 rounded-sm cursor-pointer' src={Avatar_PNG}/>
      <span onClick={handleSign} className='text-xl text-white font-sans cursor-pointer '>🔻</span>
    </span>
    </div >

   
    </div>:
     <div className='absolute w-full top-0 z-10 bg-gradient-to-b from-black  '>
     <img className='ml-10 p-4 size-[11%]' alt='logo' src={Logo}/>
     
   </div>
  }
  </>
  )
}

export default Header;