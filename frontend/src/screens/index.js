import React from 'react';
import Routes from "./Routes"
import Login from "./Login"
import {useSelector} from "react-redux"
import Ck from "./../components/TaskView/ckEditor"
const Screens = (props) => {
  const user=useSelector((state)=>state.login)

  //console.log(user);
  return (
    <div style={{ backgroundColor: "#fff"}}>
      {user.sign_in ? (
        <Routes userInfo={user} />
      ) : (
        <Login  />
      )}
    </div>
  );
/*  return(
    <div>
        <Ck/>
    </div>
  )*/
};


export default Screens;
