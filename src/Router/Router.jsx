import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/HomePage/Home/Home";
import Navber from "../Components/HomePage/Navbar/Navber";
import Footer from "../Components/HomePage/Footer/Footer";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        }
      ]
    },
    {
        path: '/navbar',
        element: <Navber/>
      },
      {
        path: '/footer',
        element: <Footer></Footer>
      },
  ]);

  export default router;