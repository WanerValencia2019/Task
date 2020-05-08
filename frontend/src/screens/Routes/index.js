import React from "react";
import { connect } from "react-redux";
import { logout } from "./../Login/actionCreators";

//NavBar SE DEBE REFACTORIZAR EN UN COMPONENTE HOME
import NavBar from "./../../components/NavBar/index";
import TaskCreate from "../TaskCreate";
import Configuration from "../Configuration";
import { Grid, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TabsNav from "../../components/Tabs";
import TaskUpdate from "./../TaskUpdate/index.js";
import Login from "./../Login/index.js";
import Register from "./../Register/index.js";
import styles from "./styles";
import PrivateRoutes from "./PrivateRoutes.js";
function Routes(props) {
  const { userInfo } = props;
  const classes = styles();
  console.log(userInfo);
  return (
    <Router>
      {userInfo.isAuthenticated ? (
        <NavBar
          first_name={userInfo.user.first_name}
          last_name={userInfo.user.last_name}
          token={userInfo.token}
          logout={props.logout}
        />
      ) : null}
      <div className={classes.content}>
        <CssBaseline />
        <Switch>
          <Route path="/register">
            <Register isAuthenticated={userInfo.isAuthenticated} />
          </Route>
          <Route path="/login"  >
            <Login isAuthenticated={userInfo.isAuthenticated}/>
          </Route>
          <PrivateRoutes
            isAuthenticated={userInfo.isAuthenticated}
            path="/"
            exact
            component={() => (
              <TabsNav idUser={userInfo.user.id} token={userInfo.token} />
            )}
          />

          <PrivateRoutes isAuthenticated={userInfo.isAuthenticated} path="/configuraciones" component={()=><Configuration user={userInfo.user} />} />

          <PrivateRoutes
            isAuthenticated={userInfo.isAuthenticated}
            path="/task/update/:id"
            component={() => (
              <TaskUpdate idUser={userInfo.user.id} token={userInfo.token} />
            )}
          />

          <PrivateRoutes
            path="/nuevaTarea"
            isAuthenticated={userInfo.isAuthenticated}
            component={() => (
              <Grid className={classes.gridNewTask} container>
                <TaskCreate idUser={userInfo.user.id} token={userInfo.token} />
              </Grid>
            )}
          />

          <Route path="/register" exact>
            <Register />
          </Route>
          <Route>
            <div>
              <h2>Pagina no encontrada</h2>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(Routes);
