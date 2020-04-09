import React, {useState} from 'react';
//import LoginForm from "../../components/LoginForm";
import {connect} from "react-redux"
import { Input,Button,Typography} from "@material-ui/core";
import {getLogin,logout} from "./actionCreators"
import useStyles from "./styles"

function Login(props){
  const signin=async(username,password)=>{
      //await console.log(props);
      await props.dispatch(getLogin(username,password));
      //await console.log(props);
  }
  //console.log(props);
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const styles=useStyles();
  return (
      <div className={styles.container} >
          <Typography>Bienvenido A Seven Task</Typography>
          <p></p>
        <Input placeholder="Nombre de usuario" value={username} onChange={(e)=>setUsername(e.target.value)} />
          <br></br>
        <Input placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <br/>
          <br/>
        <Button variant='contained' color='primary' onClick={()=>signin(username,password)}  >Iniciar sesión</Button>
      </div>
  );
};

Login.propTypes = {

};
const mapStateToProps=(state)=>{
  return {
    login:state.login
  }
}
const mapDispatchToProps={
  getLogin,
  logout
}

export default connect(mapStateToProps)(Login);
