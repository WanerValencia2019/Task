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

import styles from './styles';
function Routes(props) {
  const { userInfo } = props;
  const classes = styles();
  //console.log(userInfo);
  return (
    <Router>
      <NavBar logout={props.logout} />
      <div className={classes.content}>
        <Switch>
          <Route path="/" exact>
            <TabsNav idUser={userInfo.user.id} token={userInfo.token} />
          </Route>

          <Route path="/configuraciones">
            <Configuration />
          </Route>

          <Route path="/task/update/:id">
            <TaskUpdate idUser={userInfo.user.id} token={userInfo.token} />
          </Route>

          <Route path="/nuevaTarea">
            <Grid className={classes.gridNewTask} container>
              <TaskCreate idUser={userInfo.user.id} token={userInfo.token} />
            </Grid>
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
