import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types"
import { connect, useDispatch, useSelector } from 'react-redux';
import { deleteTask,getTask } from './../Tasks/actionCreators.js';
import TaskView from './../../components/TaskView';
import { Grid, Paper,Container } from '@material-ui/core';
import TabsNav from '../../components/Tabs';
import { withRouter } from 'react-router';

const TaskCompletes = (props) => {
  const { getTask,idUser, token } = props;
  const {tasks}=props.tasks
  const dispatch = useDispatch();
  //console.log(props.match.url == '/');
  //console.log(tasks);
   useEffect(() => {
    async function getData() {
      await getTask(idUser, token);
    }
    getData();
  }, []);
     const deletet = (id, token) => {
    return dispatch(deleteTask(id, token));
  };


  const show=tasks.filter(t=>t.completed==true)
  return (
    <Container style={{ margin: 10 }}>
      <h4>Listando Tareas</h4>
      <Grid container direction="row" direction="row" justify="center" spacing={2}>
        {show ? (
          show.map((task, i) => (
            <Grid key={i}  item sm={6} md={4} lg={3} xs={12}>
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

              />
            </Grid>
          ))
        ) : (
          <p>No hay tareas completas</p>
        )}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
const mapDispatchToProps = { getTask };

TaskCompletes.propTypes = {
  getTask:PropTypes.func.isRequired,
  idUser:PropTypes.number.isRequired,
  token:PropTypes.string.isRequired,
  tasks:PropTypes.object.isRequired,
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TaskCompletes));
