import React,{useState} from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import {Grid,Paper,TextField,Button,Typography} from "@material-ui/core"

import styles from "./styles";
const Register = (props) => {
	const classes= styles();
	const [last_name,setLastName]=useState("");
	const [first_name,setFirstName]=useState("");
	const [username,setUsername]=useState("");
	const [password,setPassword]=useState("");
	const [password_confirm,setPasswordConfirm]=useState("");
	const { isAuthenticated } = props;

	if (isAuthenticated) {
		return <Redirect to="/" />;
	}
	const sign_up=(e)=>{
		e.preventDefault()
		
	}
	return (
		<Grid container justifycontent="center" className={classes.container}>
			<Paper className={classes.paper}>
				<form onSubmit={sign_up}>
					<Grid
						//spacing={3}
						container
						direction="column"
						alignItems="center"
						justifycontent="center"
						>
						<Grid item container 	justify="center">
							<Typography variant="h4">Registrarse</Typography>
						</Grid>
						<Grid item container direction="row" justify="space-evenly" style={{margin:20}}>
							<TextField variant="outlined" label="Nombres"  placeholder="Nombres" name="firs_name" />
						<TextField variant="outlined" label="Apellidos" placeholder="Apellidos" name="last_name"  />
						</Grid>
						<Grid item container direction="row" justify="space-evenly" style={{margin:20}}>
							<TextField variant="outlined" label="Nombre de usuario" placeholder="Nombre de usuario" name="username" />
						<TextField variant="outlined" type="email" placeholder="Correo Electrónico"  label="Correo Electrónico" name="email"  />
						</Grid>
						<Grid item container direction="row" justify="space-evenly" style={{margin:20}}>
							<TextField variant="outlined" type="password" placeholder="Contraseña" label="Contraseña"  name="password" />
						<TextField variant="outlined" type="password" placeholder="COnfirmar contraseña"  label="Confirmar contraseña" name="password_confirm"  />
						</Grid>
						<Button type="submit" variant="contained" color="primary">Registrarme</Button>
					</Grid>
				</form>
			</Paper>
	</Grid>
	);
};

Register.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
};

export default Register;
