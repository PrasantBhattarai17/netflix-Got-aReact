import React from 'react'
import Header from './header';

const Login = () => {
  return (
    <div >
        <Header/>
        <div className='absolute '>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/ec7d4963-32a5-46e6-99ab-48d29d11b1a3/NP-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_065904e2-cb5a-4a21-8075-d1a67567f76a_large.jpg'/>
        </div>
        <div className='relative m-auto top-0 bottom-0 '>
            <form className='flex flex-col  justify-center items-center' >
                <input className='border-black border-2 p-2 m-2 ' type='text' placeholder='Enter email address'/>
                <input className='border-black border-2 p-2 m-2 ' type='password' placeholder='Enter password'/>
            </form>
        </div>
    </div>
  )
}

export default Login;