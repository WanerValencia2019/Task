import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, Button, Paper, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import SnackBarBase from './../../litteComponents/SnackBar/index';
import { update_task } from './actionCreator.js';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
function TaskUpdate(props) {
  //props
  const { token, idUser, match, history } = props;
  const { id } = match.params;
  console.log(match);
  //variables
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const task = useSelector((state) => state.tasks).tasks.filter(
    (t) => t.id == id
  )[0];
  const dispatch = useDispatch();

  //inicializador
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.Description);
    }
  }, []);

  //console.log(props);
  //FUNCIONES
  const classes = styles();

  const handleClose = () => {
    setOpen(false);
  };
  const update = async () => {
    await dispatch(update_task(task.id, idUser, title, description, token));
    history.push('/');
  };
  console.log(props);
  return (
    <Grid container direction="column">
      <Paper className={classes.paper}>
        <Typography style={{ textAlign: 'center' }} variant="h5">
          Actualizar Tarea
        </Typography>
        <Grid item container direction="column">
          <TextField
            required
            label="Titúlo"
            placeholder="Titúlo"
            style={{ margin: 20 }}
            onChange={(e) => setTitle(e.target.value)}
            value={title ? title : ''}
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
            value={description ? description : ''}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item container direction="column"></Grid>
        <Grid item container direction="column">
          <Button
            color="primary"
            variant="contained"
            onClick={update}
            style={{ margin: 20 }}
          >
            Actualizar
          </Button>
        </Grid>
      </Paper>
      <SnackBarBase
        open={open}
        message="Tarea actualizada con éxito"
        type="info"
        onClose={() => handleClose}
      />
    </Grid>
  );
}
TaskUpdate.propTypes = {
  token: PropTypes.string.isRequired,
};

export default withRouter(TaskUpdate);
