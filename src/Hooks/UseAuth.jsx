import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const UseAuth = () =>{
    const auth = use(AuthContext);
    return auth;
}

export default UseAuth;