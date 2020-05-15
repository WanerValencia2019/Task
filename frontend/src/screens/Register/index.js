import React,{useState} from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import {Grid,Paper,TextField,Button,Typography} from "@material-ui/core"
import {useDispatch} from "react-redux"
import {register} from "./actionCreators"

import styles from "./styles";
const Register = (props) => {
	const classes= styles();
	const dispatch=useDispatch();
	const [last_name,setLastName]=useState("");
	const [first_name,setFirstName]=useState("");
	const [email,setEmail]=useState("")
	const [username,setUsername]=useState("");
	const [password,setPassword]=useState("");
	const [password_confirm,setPasswordConfirm]=useState("");
	const { isAuthenticated } = props;

	if (isAuthenticated) {
		return <Redirect to="/" />;
	}
	const sign_up=async(e)=>{
		e.preventDefault()
		await dispatch(register(first_name,last_name,username,email,password_confirm))

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
							<TextField variant="outlined" label="Nombres" value={first_name} onChange={(e)=>setFirstName(e.target.value)}  placeholder="Nombres" name="firs_name" />
						<TextField variant="outlined" label="Apellidos" value={last_name} onChange={(e)=>setLastName(e.target.value)} placeholder="Apellidos" name="last_name"  />
						</Grid>
						<Grid item container direction="row" justify="space-evenly" style={{margin:20}}>
							<TextField variant="outlined" label="Nombre de usuario" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Nombre de usuario" name="username" />
						<TextField variant="outlined" type="email" placeholder="Correo Electrónico" value={email} onChange={(e)=>setEmail(e.target.value)}  label="Correo Electrónico" name="email"  />
						</Grid>
						<Grid item container direction="row" justify="space-evenly" style={{margin:20}}>
							<TextField variant="outlined" type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)} label="Contraseña"  name="password" />
							<TextField variant="outlined" type="password" placeholder="COnfirmar contraseña" value={password_confirm} onChange={(e)=>setPasswordConfirm(e.target.value)}  label="Confirmar contraseña" name="password_confirm"  />
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
