// A protected container for our route
import React, { useEffect } from "react";
import {useSelector} from 'react-redux'
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import authservice from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "./Store/Authslice";
export default function Authlayout({children}){
    const dispatch = useDispatch();
useEffect(() => {
  async function checkSession() {
    try {
      const user = await authservice.getuser(); // from Appwrite
      if (user) {
        dispatch(login(user));  // ✅ pass user payload
      } else {
        // optional: dispatch(logout());
      }
    } catch (error) {
      console.error("Session check failed:", error);
      // dispatch(logout()); // if you want to reset state on error
    }
  }
  checkSession();
}, []);
    const navigate = useNavigate();
    const [loader,setLoader] = useState(true);
    const authStatus= useSelector((state)=>state.Auth.status)
    console.log(authStatus);
    useEffect(()=>{
       if(authStatus===false){
        navigate('/Signup');
       }
        setLoader(false);
    },[authStatus,navigate])
    return(
        <>
        {loader ? <h1>Loading...</h1> : children}
        </>
    )
}