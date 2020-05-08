import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
//import LoginForm from "../../components/LoginForm";
import { connect } from "react-redux";
import {
  Input,
  TextField,
  Button,
  Typography,
  Paper,
  Divider,
} from "@material-ui/core";
import { getLogin } from "./actionCreators";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import SnackBarBase from "./../../litteComponents/SnackBar/index.js";
import {Redirect} from "react-router-dom"
import {withRouter} from "react-router"


function Login(props) {
  const {isAuthenticated,history,dispatch,login}= props
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("");

  const signin = async (e) => {

    e.preventDefault();
    //await console.log(props);
    await dispatch(getLogin(username, password));

    if (login.error) {
      setOpen(true);
      setMessage(login.message);
      setTimeout(() => {
        setOpen(false);
      }, 2500);
      console.log("hubo un error");
    }
    //await console.log(props);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("cerrando");
  };
  //console.log(props);

  //console.log(props);

  /*const validatePassword = (value) => {
    setPassword(value);
    console.log(value.length);
    if (value.length < 8) {
      //console.log('eentra');
      setPasswordError(true);
      setPasswordErrorText("Debe tener minimo 8 caracteres");
    } else {
      setPasswordError(false);
      setPasswordErrorText("");
    }
  };*/

  const styles = useStyles();
  if(isAuthenticated){
    return <Redirect to="/" />
  }
  return (
    <>
      <Grid container className={styles.container}>
        <Paper className={styles.paper}>
          <form onSubmit={signin}>
            <Grid
              spacing={2}
              container
              direction="column"
              alignItems="center" /*className={styles.container} */
              justify="center"
            >
              <Grid style={{}} item>
                <Typography variant="h5">Bienvenido</Typography>
              </Grid>

              <Grid item container direction="column">
                <TextField
                  required
                  label="Nombre de usuario"
                  placeholder="Nombre de usuario"
                  className={styles.inputEmail}
                  value={username}
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item container direction="column">
                <TextField
                  required
                  className={styles.inputPassword}
                  error={passwordError}
                  label="Contraseña"
                  placeholder="Contraseña"
                  name="password"
                  value={password}
                  helperText={passwordErrorText}
                  type="password"
                  //onChange={(e) => validatePassword(e.target.value)}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Typography
                  onClick={() => console.log("change your password")}
                  variant="caption"
                  style={{
                    color: "#a23432",
                    cursor: "pointer",
                    marginTop: 4,
                    fontSize: 13,
                    textAlign: "right",
                  }}
                >
                  ¿Has olvidado tu contraseña?{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  //onClick={() => signin(username, password)}
                  fullwidth="true"
                >
                  Iniciar sesión
                </Button>
              </Grid>
              <Divider />
              <Grid item container justify="center" direction="row">
                <Typography style={{ fontSize: 14 }} variant="subtitle2">
                  ¿Todavía no tienes una cuenta?{" "}
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{
                    fontSize: 14,
                    marginLeft: 5,
                    color: "blue",
                    cursor: "pointer",
                  }}
                  onClick={() => history.push('/register')}
                >
                  Regístrate
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
      <SnackBarBase
        setOpen={setOpen}
        open={open}
        message={message}
        onClose={handleClose}
        type="error"
      />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

Login.propTypes = {
  isAuthenticated:PropTypes.bool.isRequired,
  history:PropTypes.string.isRequired,
  dispatch:PropTypes.func.isRequired,
  login:PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(withRouter(Login));
