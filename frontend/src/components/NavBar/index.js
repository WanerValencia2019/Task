import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Menu, MenuItem, Divider ,List,Drawer } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import useStyles from "./styles";
import { NavLink } from "react-router-dom";
import DrawerNav from "./Drawer"
import { useTheme } from "@material-ui/core/styles";

function NavBar(props) {
  //console.log(props);
  const { logout } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorProfile, setAnchorProfile] = React.useState(null);
  const [isMenuOpen,setIsMenuOpen]=React.useState(false)
  const isMenuProfileOpen = Boolean(anchorProfile);
  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true)
  };
  const handleProfileMenuOpen = event => {
    setAnchorProfile(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setAnchorProfile(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false)
  };

  const renderMenuProfile = (
    <Menu
      open={isMenuProfileOpen}
      onClose={handleProfileMenuClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      anchorEl={anchorProfile}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <MenuItem>
        <NavLink
          to="/configuraciones"
          className={classes.link}
          activeStyle={{color:"rgb(218, 77, 36)"}}
        >
          Configuraciones
        </NavLink>
      </MenuItem>
      <MenuItem onClick={() => logout()}>Cerrar sesión</MenuItem>
    </Menu>
  );
/*  const renderMenu = (
    <Menu
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      anchorEl={anchorEl}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      //open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <NavLink
          to="/"
          className={classes.link}
          activeStyle={{color:"rgb(218, 77, 36)"}}
        >
          DashBoard
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="nueva-tarea/"
          className={classes.link}
          activeStyle={{color:"rgb(218, 77, 36)"}}
        >
          Nueva tarea
        </NavLink>
      </MenuItem>
    </Menu>
  );*/
  const drawer=(
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isMenuOpen}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleMenuClose}>
          <Typography variant="h5" style={{color:"#000"}}>Seven Task</Typography>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <MenuItem>
          <NavLink
            to="/"
            className={classes.link}
            activeStyle={{ color: "rgb(218, 77, 36)" }}
          >
            DashBoard
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/nueva-tarea"
            className={classes.link}
            activeStyle={{color:"rgb(218, 77, 36)"}}
          >
            Nueva tarea
          </NavLink>
        </MenuItem>
      </List>
      <Divider />
    </Drawer>
  )

  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{ backgroundColor: "#1da1f2" }}>
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
            Seven Tasks
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            DASHBOARD
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <IconButton
            onClick={handleProfileMenuOpen}
            className={classes.menuButton}
            color="inherit"
            aria-label="open profile menu"
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {drawer}
      {renderMenuProfile}

    </div>
  );
}

export default NavBar;
