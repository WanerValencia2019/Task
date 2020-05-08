import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';

import {
  Menu,
  MenuItem,
  Divider,
  List,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

function NavBar(props) {
  //console.log(props);
  const { logout, history, first_name, last_name,token } = props;
  //console.log(props)
  const classes = useStyles();
  const theme = useTheme();
  //const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorProfile, setAnchorProfile] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  //const isMenuProfileOpen = Boolean(anchorProfile);
  const handleMenuOpen = (event) => {
    //setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };
  /*const handleProfileMenuOpen = (event) => {
    setAnchorProfile(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setAnchorProfile(null);
  };*/
  const handleMenuClose = () => {
   // setAnchorEl(null);
    setIsMenuOpen(false);
  };
  const navigateTask = (index) => {
    switch (index) {
      case 0:
        history.push('/');
        break;
      case 1:
        history.push('/nuevaTarea');
        break;
      default:
        history.push('/');
        break;
    }
  };
  const navigateConfig = (index) => {
    console.log(index);
    switch (index) {
      case 0:
        history.push('/configuraciones');
        break;
      case 1:
        // history.push('/configuraciones');
        break;
      default:
        //history.push('/configuraciones');
        break;
    }
  };

  /*const renderMenuProfile = (
    <Menu
      open={isMenuProfileOpen}
      onClose={handleProfileMenuClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      anchorEl={anchorProfile}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      <MenuItem onClick={() => history.push('/configuraciones')}>
        Configuraciones
      </MenuItem>
      <MenuItem onClick={() => logout(token)}>Cerrar sesión</MenuItem>
    </Menu>
  );
*/
  const drawer = (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isMenuOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleMenuClose}>
          <Typography variant="h5" style={{ color: '#000' }}>
            Only Task
          </Typography>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <h3 style={{ padding: 10 }}>Tareas</h3>
        {['Inicio', 'Crear Tarea'].map((text, i) => (
          <ListItem
            className={classes.cursor_pointer}
            key={i}
            onClick={() => navigateTask(i)}
          >
            <ListItemIcon>
              {i == 0 ? <HomeOutlinedIcon /> : <AddOutlinedIcon />}{' '}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <h4 style={{ padding: 10 }}>Configuración y privacidad</h4>
        {['Cuenta', 'Idioma'].map((text, i) => (
          <ListItem
            className={classes.cursor_pointer}
            key={i}
            onClick={() => navigateConfig(i)}
          >
            <ListItemIcon>
              {i == 0 ? <SettingsIcon /> : <LanguageIcon />}{' '}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Cerrar Sesión'].map((text, i) => (
          <ListItem
            className={classes.cursor_pointer}
            key={i}
            onClick={() => logout(token)}
          >
            <ListItemIcon>
              {i == 0 ? (
                <PowerSettingsNewIcon color="secondary" />
              ) : (
                <LanguageIcon />
              )}{' '}
            </ListItemIcon>
            <ListItemText
              style={{ color: i == 0 ? 'red' : 'black' }}
              primary={text}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <div className={classes.root}>
      <AppBar
        position="relative"
        style={{ backgroundColor: '#1da1f2', backgroundColor: '#5647B2' }}
      >
        <Toolbar>
          <IconButton
            onClick={handleMenuOpen}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            ONLY-TASKS
          </Typography>
          {/*
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        */}
          <Typography
            className={classes.title}
            variant="button"
            className={(classes.menuButton, classes.cursor_pointer)}
            onClick={() => navigateConfig(0)}
          >
            {first_name} {last_name}
          </Typography>

          <PowerSettingsNewIcon
            onClick={() => logout(token)}
            color="secondary"
            className={classes.cursor_pointer}
            style={{ marginLeft: 10 }}
          />
        </Toolbar>
      </AppBar>
      {drawer}
      {/*renderMenuProfile*/}
    </div>
  );
}

export default withRouter(NavBar);
