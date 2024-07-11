import React, {  useState } from 'react';
import { validateData } from '../utils/validate';
import {auth} from "../utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import HeaderForLogin from './loginHeader';



const Login = () => {
  const navigate=useNavigate();
  const [isLogedOut, setIsLogedOut] = useState(true);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpFullName, setSignUpFullName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpMobileNumber, setSignUpMobileNumber] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInError, setSignInError] = useState(null);
  const [signUpError, setSignUpError] = useState(null);

  const handleSignIn = () => {
    // handle sign-in logic here
    const signInerrorMessage= validateData(signInEmail,signInPassword);
    setSignInError(signInerrorMessage);
    if(signInerrorMessage==null){
      signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     navigate("/browse");
     })
    .catch((error) => {
       const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+" "+errorMessage)
     });
    }

    }
  

  const handleSignUp = () => {
    // handle sign-up logic here
    const signUperrorMessage= validateData(signUpEmail,signUpPassword);
    setSignUpError(signUperrorMessage);
    if(signUperrorMessage==null){
      createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
    
   
      };
  const handleToggle = () => {
    setIsLogedOut(!isLogedOut);
  };

  return (
    <>
    <HeaderForLogin/>
    <div className='relative flex flex-col min-h-screen'>
      <div className='absolute inset-0'>
        <img
          alt='bg'
          className='object-cover h-full w-full'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/ec7d4963-32a5-46e6-99ab-48d29d11b1a3/NP-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_065904e2-cb5a-4a21-8075-d1a67567f76a_large.jpg'
          />
      </div>
      <div className='relative mt-40 flex justify-center min-h-96 w-full'>
        {isLogedOut ? (
          <form
          onSubmit={(e) => e.preventDefault()}
          className='flex flex-col w-[27%] justify-center items-center rounded-md bg-black bg-opacity-80 gap-y-4'
          >
            <span className='self-start ml-20 py-2 my-2 text-3xl font-bold text-white'>Sign Up</span>
            <input
              value={signUpFullName}
              onChange={(e) => setSignUpFullName(e.target.value)}
              className='border-gray-400 border-2 text-white rounded bg-black bg-opacity-70 h-14 p-2 m-2 w-4/6'
              type='text'
              placeholder='Full Name'
            />
            <input
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
              className='border-gray-400 border-2 text-white rounded bg-black bg-opacity-70 h-14 p-2 m-2 w-4/6'
              type='text'
              placeholder='Email address'
              />
            <input
              value={signUpMobileNumber}
              onChange={(e) => setSignUpMobileNumber(e.target.value)}
              className='border-gray-400 border-2 text-white rounded bg-black bg-opacity-70 h-14 p-2 m-2 w-4/6'
              type='text'
              placeholder='Mobile number'
              />
            <input
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
              className='border-gray-400 border-2 text-white rounded bg-black bg-opacity-70 h-14 p-2 m-2 w-4/6'
              type='password'
              placeholder='Password'
              />
          <p className='text-red-500 font-bold'>{signUpError}</p>
            <button
              onClick={handleSignUp}
              className='border-white border-1 text-white bg-[red] w-4/6 h-[50px] rounded text-lg font-bold hover:bg-red-700'
              >
              Sign up
            </button>
            <span className='m-2 p-1 my-4'>
              <span className='text-gray-400 font-sans'>Already registered?</span>
              <span
                onClick={handleToggle}
                className='text-white font-bold cursor-pointer hover:underline'
                >
                Sign in now
              </span>
            </span>
          </form>
        ):(
          <form
          onSubmit={(e) => e.preventDefault()}
          className='flex flex-col w-[27%] justify-center items-center rounded-md bg-black bg-opacity-80 gap-y-4'
          >
            <span className='self-start ml-20 py-2 my-2 text-3xl font-bold text-white'>Sign In</span>
            <input
              value={signInEmail}
              onChange={(e) => setSignInEmail(e.target.value)}
              className='border-gray-400 border-2 text-white rounded bg-black bg-opacity-70 h-14 p-2 m-2 w-4/6'
              type='text'
              placeholder='Email or mobile Number'
              />
            <input
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
              className='border-gray-400 border-2 text-white rounded bg-black bg-opacity-70 h-14 p-2 m-2 w-4/6'
              type='password'
              placeholder='Password'
              />
            <p className='text-red-500 font-bold'>{signInError}</p>
            <button
              onClick={handleSignIn}
              className='border-white border-1 text-white bg-[red] w-4/6 h-[50px] rounded text-lg font-bold hover:bg-red-700'
              >
              Sign in
            </button>
            <span className='text-white cursor-pointer hover:underline hover:text-gray-400'>Forgot password?</span>
            <span className='flex items-center self-start ml-20'>
              <input type='checkbox' className='size-5' />
              <span className='text-white font-bold text-md'>Remember me</span>
            </span>
            <span className='m-2 p-1 my-4'>
              <span className='text-gray-400 font-sans'>New to Netflix?</span>
              <span
                onClick={handleToggle}
                className='text-white font-bold cursor-pointer hover:underline'
                >
                Sign Up now
              </span>
            </span>
          </form>
        )  }
      </div>
    </div>
        </>
  );
};

export default Login;
