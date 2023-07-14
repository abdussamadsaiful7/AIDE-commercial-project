import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/HomePage/Home/Home";
import Footer from "../Components/HomePage/Footer/Footer";
import SignUp from "../Components/SignUp/SignUp";
import Navbar from "../Components/HomePage/Navbar/Navbar";
import Login from "../Components/LogIn/Login";
import AddEmployee from "../Components/Admin/AddEmployee";
import AllEmployee from "../Components/Admin/AllEmployee";
import AllProducts from "../Components/Admin/AllProducts";
import Dashboard from "../Components/Dashdoard/Dashboard";
import AddProduct from "../Components/Admin/AddProduct";
import Order from "../Components/Order/Order";

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
          path: '/order',
          element: <Order/>,
         // loader: ()=>fetch('http://localhost:5050/order')
        }
      ]
    },
    {
      path: 'dashBoard',
      element: <Dashboard/>,
      children:[
        {
          path: "addEmployee",
          element: <AddEmployee/>
        },
        {
          path: 'allEmployee',
          element: <AllEmployee/>,
          loader: ()=>fetch('http://localhost:5050/allEmployee'),

        },
        {
          path: 'allProducts',
          element:<AllProducts/>,
          loader: ()=>fetch('http://localhost:5050/products'),
        },
        {
          path: 'addProduct',
          element:<AddProduct/>
        },
        
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