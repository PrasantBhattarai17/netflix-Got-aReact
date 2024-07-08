import React, { useState } from 'react'
import Header from './header';


const Login = () => {

  const [islogedin,setIsLogedIn]=useState(true);
  const handleSign=()=>{
   setIsLogedIn(!islogedin);
  };
  return (
    <div className='' >
        <Header/>
        <div className='flex flex-col    '>
        <div className='absolute brightness-50   '>
            <img alt='bg' className=' ' src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/ec7d4963-32a5-46e6-99ab-48d29d11b1a3/NP-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_065904e2-cb5a-4a21-8075-d1a67567f76a_large.jpg'/>
        </div>
        <div className='relative   mt-40 flex justify-center min-h-96 '>
           {islogedin? <form className='flex flex-col w-[27%]   justify-center  items-center rounded-md  bg-black bg-opacity-80 gap-y-4' >
           <span className='self-start ml-20 py-2 my-2 text-3xl font-bold text-white'>Sign In</span>
            <input className='border-gray-400 border-2 text-white rounded bg-black bg-opacity-70 h-14 p-2 m-2 w-4/6' type='text' placeholder='Email or mobile Number'/>
            <input className='border-gray-400 border-2 text-white rounded  bg-black bg-opacity-70 h-14 p-2 m-2 w-4/6' type='password' placeholder='Password'/>
        <button  className='border-white border-1  text-white bg-[red] w-4/6 h-[50px] rounded text-lg font-bold hover:bg-red-700'>Sign in</button>
        <span className='text-white cursor-pointer hover:underline hover:text-gray-400'>Forgot password?</span>
        <span className='flex items-center self-start ml-20'>
        <input type='checkbox' className='size-5 '/>
        <span  className='text-white  font-bold text-md'>Remember me</span>
        </span>
        <span className='m-2 p-1 my-4'>
<span className='text-gray-400 font-sans '>New to Netfilx?</span>
<span onClick={handleSign} className='text-white font-bold cursor-pointer hover:underline'>Sign Up now</span>
        </span>
        </form>:
            <form className='flex flex-col w-[27%]   justify-center  items-center rounded-md  bg-black bg-opacity-80 gap-y-4' >
            <span className='self-start ml-20 py-2 my-2 text-3xl font-bold text-white'>Sign Up</span>
            <input className='border-gray-400 border-2 text-white rounded bg-black bg-opacity-70 h-14 p-2 m-2 w-4/6' type='text' placeholder='Full Name'/>
           <input className='border-gray-400 border-2 text-white rounded  bg-black bg-opacity-70 h-14 p-2 m-2 w-4/6' type='text' placeholder='Email address'/>
           <input className='border-gray-400 border-2 text-white rounded  bg-black bg-opacity-70 h-14 p-2 m-2 w-4/6' type='number' placeholder='Mobile number'/>
           <button  className='border-white border-1  text-white bg-[red] w-4/6 h-[50px] rounded text-lg font-bold hover:bg-red-700'>Sign up</button>
           <span className='m-2 p-1 my-4'>
   <span className='text-gray-400 font-sans '>Already registered?</span>
   <span onClick={handleSign} className='text-white font-bold cursor-pointer hover:underline'>Sign in now</span>
           </span>
           </form>
           }
        </div>
        </div>
    </div>
  )
}

export default Login;