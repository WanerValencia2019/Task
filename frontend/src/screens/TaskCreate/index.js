import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, TextField, Button, Paper, Typography } from "@material-ui/core";
import { useDispatch, connect } from "react-redux";
import styles from "./styles";
import SnackBarBase from "./../../litteComponents/SnackBar/index";
import { createTask } from "./actionsCreator";
import { withRouter } from "react-router";

function TaskCreate(props) {
  const { token, idUser, history, createdTask } = props;
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message,setMessage]= useState("");

  const dispatch = useDispatch();
  //const selector=useSelector();
  //console.log(props);
  const classes = styles();

  const initTask = async () => {
    await dispatch(createTask(title, description, token, idUser));
    /*console.log("Hola "+props.createdTask.error)
    if (props.createdTask.error) {
      setOpen(true);
      cleanState();
      await setMessage(props.createdTask.message)
      setTimeout(async () => {
        await handleClose();
        history.push("/");
      }, 2000);
    }*/
  };

  const cleanState = () => {
    setTitle("");
    setDescription("");
  };

  const handleClose = () => {
    setOpen(false);
    console.log("cerrando");
  };

  //console.log(props);
  /*if (props.createdTask.error === false) {
    setOpen(true);

    console.log('entra');
  }*/
  return (
    <>
      <Grid container direction="column">
        <Paper className={classes.paper}>
          <Typography style={{ textAlign: "center" }} variant="h5">
            Crear Tarea
          </Typography>
          <Grid item container direction="column">
            <TextField
              required
              label="Titúlo"
              placeholder="Titúlo"
              style={{ margin: 20 }}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </Grid>
          <Grid item container direction="column">
            <TextField
              required
              multiline
              rows={5}
              variant="outlined"
              label="Descripción"
              placeholder="Descripción"
              style={{ margin: 20 }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item container direction="column"></Grid>
          <Grid item container direction="column">
            <Button
              color="primary"
              variant="contained"
              onClick={initTask}
              style={{ margin: 20 }}
            >
              Crear
            </Button>
          </Grid>
        </Paper>
      </Grid>
      <SnackBarBase
        setOpen={setOpen}
        open={open}
        message={message}
        onClose={handleClose}
      />
    </>
  );
}

TaskCreate.propTypes = {
  token: PropTypes.string.isRequired,
  idUser:PropTypes.number.isRequired,
  history:PropTypes.object.isRequired,
  createdTask:PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    createdTask: state.createTask,
  };
};
export default connect(mapStateToProps)(withRouter(TaskCreate));
