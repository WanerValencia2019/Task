import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types"
import { getTask, deleteTask } from './actionCreators';
import { connect, useDispatch } from 'react-redux';
import TaskView from './../../components/TaskView';
import { Grid, Paper,Container } from '@material-ui/core';
import TabsNav from '../../components/Tabs';
import { withRouter } from 'react-router';
import Modal from './../../litteComponents/Modal/index.js';
const Tasks = (props) => {
  const { getTask, idUser, token,history } = props;
  const { tasks } = props.tasks;
  console.log(history)
  const dispatch = useDispatch();
  //console.log(props.match.url == '/');
  useEffect(() => {
    async function getData() {
      await getTask(idUser, token);
    }
    getData();
  }, []);
  const deletet = (id, token) => {
    return dispatch(deleteTask(id, token));
  };


  return (
    <Container style={{ margin: 10 }}>
      <h4>Listando Tareas</h4>
      <Grid container direction="row" justify="center" spacing={2}>
        {tasks ? (
          tasks.map((task, i) => (
            <Grid key={i} item sm={6} md={4} lg={3} xs={12}>
              <TaskView
                key={i}
                title={task.title}
                description={task.Description}
                date={task.date}
                completed={task.completed}
                favorite={task.favorite}
                id={task.id}
                idUser={idUser}
                token={token}
                remove={() => deletet(task.id, token)}
                history={history}
              />
            </Grid>
          ))
        ) : (
          <p>No hay tareas</p>
        )}
      </Grid>
    </Container>
  );
};

Tasks.propTypes = {
  getTask:PropTypes.func.isRequired,
  idUser:PropTypes.number.isRequired,
  token:PropTypes.string.isRequired,
  tasks:PropTypes.object.isRequired,
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
const mapDispatchToProps = { getTask };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Tasks));
