import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Login from './login';
import Browse from './browse';
import SearchPage from './searchPage';

const Body = () => {


    const appRouter=createBrowserRouter([
       { path:"/",
          element:<Login/>
         },
         {
            path:"/browse",
            element:<Browse/>
         },
         {
            path:"/search",
            element:<SearchPage/>
         }
    ])

  
   

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body;