import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import Loading from '../Components/Loading';
import { Navigate } from 'react-router';

const PrivateRouts = ({children}) => {
    const {user , loading} = UseAuth();
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
   else{
    return <Navigate to='/login'></Navigate>
   }
};

export default PrivateRouts;