import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { deleteTask } from './../Tasks/actionCreators.js';
import TaskView from './../../components/TaskView';
import { Grid, Paper } from '@material-ui/core';
import TabsNav from '../../components/Tabs';
import { withRouter } from 'react-router';

const TaskFavorites = (props) => {
  const { idUser, token } = props;

  const dispatch = useDispatch();
  console.log(props.match.url == '/');
  const tasks = useSelector((state) => state.tasks).tasks.filter(
    (t) => t.favorite === true
  );
  console.log(tasks);

  return (
    <div style={{ margin: 10 }}>
      <h4>
        La maravillosa posibilidad de preferir lo que nos interesa, es un arma
        muy poderosa
      </h4>
      <Grid container direction="row" justify="space-around" spacing={2}>
        {tasks ? (
          tasks.map((task, i) => (
            <Grid key={i} item sm={3} xs={12}>
              <TaskView
                key={i}
                title={task.title}
                description={task.Description}
                date={new Date()}
                completed={task.completed}
                favorite={task.favorite}
                id={task.id}
                remove={() => dispatch(deleteTask(task.id, token))}
              />
            </Grid>
          ))
        ) : (
          <p>No hay tareas completas</p>
        )}
      </Grid>
    </div>
  );
};

export default withRouter(TaskFavorites);
