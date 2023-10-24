import React, { useState, useEffect } from "react";
import axios from "axios";


const UserList = () => {
    const[listOfUsers,setListOfUsers]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            setListOfUsers(response.data);
        })
        .catch(error=>{
            console.error("error searching data:",error);
        });
    },[]);
    
  return (
    <div>
      
    </div>
  )
}

export default UserList
