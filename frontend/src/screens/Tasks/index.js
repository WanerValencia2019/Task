import React, { useEffect, useState } from "react";
import { getTask } from "./actionCreators";
import { connect } from "react-redux";
import TaskView from "./../../components/TaskView";
import { Grid, Paper } from "@material-ui/core";
import TabsNav from "../../components/Tabs"
import {withRouter} from "react-router";

const Tasks = props => {
  const { getTask, idUser, token } = props;
  const { tasks } = props.tasks;
  console.log(props.match.url=="/");
  useEffect(() => {
    async function getData() {
      await getTask(idUser, token);
    }
    getData();
  }, []);

  return (
    <div style={{ margin: 10 }}>
      <h4>Listando Tareas</h4>
      <Grid container direction="row" justify="space-around" spacing={2}>
        {tasks ? (
          tasks.map((task, i) => (
            <Grid key={i} item sm={3} xs={12}>
              <TaskView
                key={i}
                title={task.title}
                description={task.Description}
                date={task.date}
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

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};
const mapDispatchToProps = { getTask };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Tasks));
