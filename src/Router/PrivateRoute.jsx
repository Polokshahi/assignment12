import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import Loading from '../Pages/Loading';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    
    const location = useLocation();

    if(loading) {
        return <Loading></Loading>
    }

    if(user){
        return children;
    }

    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>


    
};

