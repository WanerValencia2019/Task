import React, { useState, useEffect } from "react";
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


function Login(props) {
  const signin = async (username, password) => {
    //await console.log(props);
    await props.dispatch(getLogin(username, password));
    //await console.log(props);
  };
  //console.log(props);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("");
  //console.log(props);

  const validatePassword = (value) => {
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
  };

  const styles = useStyles();
  return (
    <Grid container className={styles.container}>
      <Paper className={styles.paper}>
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
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item container direction="column" >
            <TextField
              required
              className={styles.inputPassword}
              error={passwordError}
              label="Contraseña"
              placeholder="Contraseña"
              value={password}
              helperText={passwordErrorText}
              type="password"
              onChange={(e) => validatePassword(e.target.value)}
            />
            <Typography onClick={()=>console.log("change your password")} variant="caption" style={{color:"#a23432",cursor:"pointer",marginTop:4,fontSize:13}}>¿Has olvidado tu contraseña? </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => signin(username, password)}
              fullwidth="true"
            >
              Iniciar sesión
            </Button>
          </Grid>
          <Divider />
          <Grid item container justify="center" direction="row">
            <Typography style={{fontSize:14}} variant="subtitle2">¿Todavía no tienes una cuenta? </Typography>
            <Typography variant="subtitle2" style={{fontSize:14,marginLeft:5, color:"blue",cursor:"pointer"}} onClick={() =>console.log("registrando")}>Regístrate</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(Login);
