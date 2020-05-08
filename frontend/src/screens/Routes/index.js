import React from 'react';
import { connect } from 'react-redux';
import { logout } from './../Login/actionCreators';

//NavBar SE DEBE REFACTORIZAR EN UN COMPONENTE HOME
import NavBar from './../../components/NavBar/index';
import TaskCreate from '../TaskCreate';
import Configuration from '../Configuration';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TabsNav from '../../components/Tabs';
import TaskUpdate from './../TaskUpdate/index.js';
import Register from "./../Register/index.js"
import styles from './styles';
import PrivateRoutes from './PrivateRoutes.js'
function Routes(props) {
  const { userInfo } = props;
  const classes = styles();
  //console.log(userInfo);
  return (
    <Router>
      <NavBar
        first_name={userInfo.user.first_name}
        last_name={userInfo.user.last_name}
        token={userInfo.token}
        logout={props.logout}
      />
      <div className={classes.content}>
        <Switch>
          <PrivateRoutes path="/" exact>
            <TabsNav idUser={userInfo.user.id} token={userInfo.token} />
          </PrivateRoutes>

          <Route path="/configuraciones">
            <Configuration user={userInfo.user} />
          </Route>
          <Route path="/login">

          </Route>
          <PrivateRoutes path="/register">
            <Register />
          </PrivateRoutes>
          <Route path="/task/update/:id">
            <TaskUpdate idUser={userInfo.user.id} token={userInfo.token} />
          </Route>

          <Route path="/nuevaTarea">
            <Grid className={classes.gridNewTask} container>
              <TaskCreate idUser={userInfo.user.id} token={userInfo.token} />
            </Grid>
          </Route>
          <Route path="/register" exact>
            <Register/>
          </Route>
           <Route path="">
            <div><h2>Pagina no encontrada</h2></div>
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
