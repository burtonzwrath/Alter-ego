import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const ProfilePage = () =>{
    const navigate = useNavigate()
    const isLogged = localStorage.getItem("auth")

useEffect(()=>{
 if(!isLogged) navigate("/")
},[ isLogged])

  return <div>profile</div>;
}

export default ProfilePage;
