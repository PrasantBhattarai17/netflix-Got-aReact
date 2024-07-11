import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Login from './login';
import Browse from './browse';

const Body = () => {


    const appRouter=createBrowserRouter([
       { path:"/",
          element:<Login/>
         },
         {
            path:"/browse",
            element:<Browse/>
         }
    ])

  
   

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body;