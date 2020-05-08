import React, { useState,useEffect } from 'react';
import PropTypes from "prop-types"
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  CardActions,
  Checkbox,
  Menu,
  MenuItem,
} from '@material-ui/core';
import styles from './styles';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/es';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { NavLink } from 'react-router-dom';
import Modal from './../../litteComponents/Modal/index.js';
import { useDispatch } from 'react-redux';
import { update_task } from './../../screens/TaskUpdate/actionCreator.js';


const TaskView = (props) => {
  const {
    title,
    description,
    date,
    completed,
    favorite,
    remove,
    id,
    idUser,
    token,
    history
  } = props;
  const fecha = new Date(date);
  const [isCompleted, setIsCompleted] = useState(completed);
  console.log('esta completa' + isCompleted);
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [isChecked,setIsChecked]=useState(isCompleted)


  //console.log(fecha.toString());
  const classes = styles();

  const [anchor, setAnchor] = useState(null);
  const isMenuOpen = Boolean(anchor);

  const handleMenuOpen = (e) => {
    console.log(e.currentTarget);
    setAnchor(e.currentTarget);
  };
  const handleMenuClose = (e) => {
    setAnchor(null);
  };
  const ask_delete = () => {
    setOpen(true);
    handleMenuClose();
    console.log(open);
  };

  const path = `/task/update/${id}`;

  const changeComplete=async(e)=>{
      let value=e.target.checked
      setIsChecked(e.target.checked)
      console.log(e.target.checked)
      console.log(`hola entra a preferences ${isCompleted} ${isFavorite}`);
      setIsCompleted(value)
    await dispatch(
      update_task(
        id,
        idUser,
        token,
        title,
        description,
        e.target.checked,
        isFavorite
      )
    );

  }

  const changeFavorite = async (e) => {
    let value=e.target.checked
      console.log(e.target.checked)
      console.log(`hola entra a preferences ${isCompleted} ${isFavorite}`);
    await dispatch(
      update_task(
        id,
        idUser,
        token,
        title,
        description,
        isFavorite,
        e.target.checked
      )
    );
    await setIsFavorite(value)
    history.push("/")
  };

  const optionTask = (
    <Menu
      open={isMenuOpen}
      keepMounted
      onClose={handleMenuClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      anchorEl={anchor}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      <MenuItem>
        <NavLink
          style={{ color: 'black', textDecorationLine: 'none' }}
          to={path}
        >
          Editar
        </NavLink>
      </MenuItem>
      <MenuItem onClick={() => ask_delete()}>Eliminar</MenuItem>
    </Menu>
  );

  const moment2 = <Moment date={date} fromNow />;

  return (
    <>
      <Card className={classes.paper}>
        <CardHeader
          action={
            <IconButton onClick={handleMenuOpen} aria-label="Opciones">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={moment2}
        />
        <CardContent>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>

            <Checkbox
              icon={<FavoriteBorderOutlinedIcon />}
              checkedIcon={<FavoriteIcon />}
              onChange={changeFavorite}
              color="secondary"
              value={isFavorite}
              checked={isFavorite}
              name="checkbox-favorite"
              inputProps={{"aria-label":"add-favorito"}}
            />

            <Checkbox
             style={{ marginLeft: 'auto' }}
              value={isCompleted}
              checked={isCompleted}
              onChange={changeComplete}
              color="primary"
              name="checkbox-completed"
            />
            {isChecked ? (
              <span style={{ fontSize: 13, color: '#000' }}>Completa</span>
            ) : (
              <span style={{ fontSize: 13, color: '#000' }}>Completar</span>
            )}

        </CardActions>
        {optionTask}
      </Card>
      <Modal
        setOpen={setOpen}
        open={open}
        accept={remove}
        title="Advertencia"
        description="Estas seguro que deseas eliminar está tarea?"
        message_accept="Eliminar"
        message_disclaim="Rechazar"
        color_accept="red"
        color_disclaim="blue"
      />
    </>
  );
};


TaskView.propTypes = {
  token:PropTypes.string.isRequired,
  idUser:PropTypes.number.isRequired,
  id:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  completed:PropTypes.bool.isRequired,
  favorite:PropTypes.bool.isRequired,
  date:PropTypes.string.isRequired,
  remove:PropTypes.func.isRequired,
  history:PropTypes.object.isRequired,
}

export default TaskView;
