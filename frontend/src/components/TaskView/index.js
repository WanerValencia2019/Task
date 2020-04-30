import React, { useState } from 'react';
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
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { NavLink } from 'react-router-dom';
import { formatDay, formatMonth } from './utils';
import Modal from './../../litteComponents/Modal/index.js';

const TaskView = (props) => {
  const { title, description, date, completed, favorite, remove, id } = props;
  const fecha = new Date(date);
  const [isCompleted, setIsCompleted] = useState(completed ? completed : false);
  console.log('esta completa' + isCompleted);
  const [isFavorite, setIsFavorite] = useState(favorite ? favorite : false);
  const [open, setOpen] = useState(false);

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
          <IconButton
            //onClick={() => alert("agregando a favoritos")}
            text="hla"
            aria-label="add-favorito"
          >
            <Checkbox
              icon={<FavoriteBorderOutlinedIcon />}
              checkedIcon={<FavoriteIcon />}
              onChange={() => setIsFavorite((prevCompleted) => !prevCompleted)}
              color="secondary"
              value={isFavorite}
              checked={isFavorite}
              name="checkbox-favorite"
            />
          </IconButton>
          <IconButton
            onClick={() => alert('agregando a completos')}
            style={{ marginLeft: 'auto' }}
          >
            <Checkbox
              value={isCompleted}
              checked={isCompleted}
              onChange={() => setIsCompleted((prevCompleted) => !prevCompleted)}
              color="primary"
              name="checkbox-completed"
            />
            {completed ? (
              <span style={{ fontSize: 13, color: '#000' }}>Completa</span>
            ) : (
              <span style={{ fontSize: 13, color: '#000' }}>Completar</span>
            )}
          </IconButton>
        </CardActions>
        {optionTask}
      </Card>
      <Modal
        setOpen={setOpen}
        open={open}
        accept={remove}
        title="Advertencia"
        message="Estas seguro que deseas eliminar está tarea?"
        message_accept="Eliminar"
        message_disclaim="Rechazar"
        color_accept="red"
        color_disclaim="blue"
      />
    </>
  );
};

export default TaskView;
