import React from "react";
import {connect} from "react-redux";
import {logout} from "./../Login/actionCreators"
import Tasks from "../Tasks"
import NavBar from "./../../components/NavBar/index"
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"

function Home(props) {
  const {userInfo}=props
  //console.log(userInfo);
  return(
    <Router>
      <div>
        <NavBar logout={props.logout} />
        <Switch>
          <Route path="/" exact component={()=><Tasks idUser={userInfo.user.id}/>} />
          <Route path="/configuraciones" component={()=>(<div><h2>configuraciones de tu cuenta</h2></div>)} />
        <Route path="/nueva-tarea"  component={()=>(<div><h2>Crea una nueva tarea</h2></div>)} />
        </Switch>
      </div>
    </Router>
  )
}



const mapDispatchToProps={
  logout
}

export default connect(null,mapDispatchToProps)(Home);
