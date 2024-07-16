import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../Pages/Error_Page/ErrorPage";
import Dashboard from "../Layout/Dashboard";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      errorElement:<ErrorPage/>  ,
      children: [
        {
            index: true,
            
        }, 
       
       
    ]
    },
   
    

]);