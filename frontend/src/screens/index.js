import React, { PropTypes,useEffect,useState } from 'react';
import Home from "./Home"
import Login from "./Login"
import {connect, useSelector} from "react-redux"

const Screens = (props) => {
  const [logueado, setLogueado] = useState(null);
  const user=useSelector((state)=>state.login)

  //console.log(user);
  return (
    <div style={{ backgroundColor: "#fff" }}>
      {user.sign_in ? (
        <Home userInfo={user} />
      ) : (
        <Login  />
      )}
    </div>
  );
};

Screens.propTypes = {

};


export default Screens;
