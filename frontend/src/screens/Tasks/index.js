import React, { useEffect, useState } from 'react';
import { getTask, deleteTask } from './actionCreators';
import { connect, useDispatch } from 'react-redux';
import TaskView from './../../components/TaskView';
import { Grid, Paper } from '@material-ui/core';
import TabsNav from '../../components/Tabs';
import { withRouter } from 'react-router';
import Modal from './../../litteComponents/Modal/index.js';
const Tasks = (props) => {
  const { getTask, idUser, token } = props;
  const { tasks } = props.tasks;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  console.log(props.match.url == '/');
  useEffect(() => {
    async function getData() {
      await getTask(idUser, token);
    }
    getData();
  }, []);
  const deletet = (id, token) => {
    setOpen(true);
    return dispatch(deleteTask(id, token));
  };
  return (
    <div style={{ margin: 10 }}>
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
                remove={() => deletet(task.id, token)}
              />
            </Grid>
          ))
        ) : (
          <p>No hay tareas</p>
        )}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
const mapDispatchToProps = { getTask };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Tasks));
