import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Login from './login';
import Browse from './browse';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
const Body = () => {
const dispatch =useDispatch();

    const appRouter=createBrowserRouter([
       { path:"/",
          element:<Login/>
         },
         {
            path:"/browse",
            element:<Browse/>
         }
    ])

   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email, displayName} = user;
        dispatch(addUser({uid:uid,emial:email,displayName:displayName}));
      } else {
        dispatch(removeUser());
      }
    });
   }, []);
   

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body;