
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';


const PrivateRoute = ({children}) => {
    const {user, loading } = useContext(AuthContext)
    const location = useLocation();
    //console.log(location)

    if(loading){
        return    <progress className="progress progress-error w-56" value="100" max="100"></progress>
    }
   

    if(user){
        return children;
    }
    return <Navigate state ={{from: location}} to='/login' replace></Navigate>
    
};

export default PrivateRoute;