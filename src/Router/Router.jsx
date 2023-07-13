import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/HomePage/Home/Home";
import Footer from "../Components/HomePage/Footer/Footer";
import SignUp from "../Components/SignUp/SignUp";
import Navbar from "../Components/HomePage/Navbar/Navbar";
import Admin from "../Components/Admin/Admin";
import Login from "../Components/LogIn/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/signUp',
            element: <SignUp/>
        },
        {
            path: "/admin",
            element: <Admin/>
        }
      ]
    },
    {
        path: '/navbar',
        element: <Navbar/>
      },
      {
        path: '/footer',
        element: <Footer></Footer>
      },
  ]);

  export default router;