import React, { useState, useEffect } from "react";
//prop-types
import PropTypes from "prop-types";
//Componens material-ui
import {
	Grid,
	Typography,
	Container,
	Paper,
	TextField,
	Button,
	IconButton,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
} from "@material-ui/core";

//icons
import EditIcon from "@material-ui/icons/EditTwoTone.js";
//styles
import styles from "./styles";
//redux 
import {useDispatch} from "react-redux";
//validations js
import { validate } from "./../../utils/inputValidations.js";
//actions
import {updateNames,updateUsername,updateEmail,updatePassword} from "./actionCreator.js"
//Transicion para el modal
const Transition = React.forwardRef((props, ref) => {
	return <Slide direction="up" ref={ref} {...props}></Slide>;
});
const Configuration = (props) => {
	const { user,token } = props;
	const classes = styles();
	console.log(props);
	const dispatch = useDispatch();
	//ESTADOS
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");

	useEffect(()=>{
		setFirstName(user.first_name)
		setLastName(user.last_name)
		setEmail(user.email)
		setUsername(user.username)
	},[user])

	const [old_password, setOldPassword] = useState("");
	const [new_password, setNewPassword] = useState("");
	const [password_confirm, setPasswordConfirm] = useState("");
	//editar open modal
	const [editNames, setEditNames] = useState(false);
	const [editEmail, setEditEmail] = useState(false);
	const [editUsername, setEditUsername] = useState(false);
	//disabled buttons
	const [disableUpdateNames, setDisableUpdateNames] = useState(false);
	const [disableUpdateEmail, setDisableUpdateEmail] = useState(false);
	const [disableUpdateUsername, setDisableUpdateUsername] = useState(false);
	const [disableUpdatePassword, setDisableUpdatePassword] = useState(true);
	//error messages
	const [errorUsername,setErrorUsername]= useState(false)
	const [msgUsername,setMsgUsername]= useState("")
	const [errorPassword,setErrorPassword]= useState(false)
	const [msgPassword,setMsgPassword]= useState("")
	const [errorPasswordConfirm,setErrorPasswordConfirm]= useState(false)
	const [msgPasswordConfirm,setMsgPasswordConfirm]= useState("")
	const [errorEmail,setErrorEmail]=useState(false)
	const [msgErrorEmail,setMsgEmail]=useState("")
	/*useEffect(() => {
			setFirstName(user.first_name);
			setLastName(user.last_name);
			setEmail(user.email);
			setUsername(user.username);
	},[first_name,last_name,email,username])*/;
	
	const upNames=()=>{
		dispatch(updateNames(first_name,last_name,token))
	}
	const upUsername=()=>{
		dispatch(updateUsername(username,token))
	}
	const upEmail=()=>{
		dispatch(updateEmail(email,token))
	}
	const upPassword=()=>{
		dispatch(updatePassword(old_password,new_password,password_confirm,token))
	}

	const validateFirstName = (value) => {
		console.log(value)
		if (value.length >= 3) {
			setFirstName(value);
			setDisableUpdateNames(false);
		} else {
			setDisableUpdateNames(true);
		}
	};
	const validateLastName = (value) => {
		if (value.length >= 3) {
			setLastName(value);
			setDisableUpdateNames(false);
		} else {
			setDisableUpdateNames(true);
		}
	};
	const validateUsername = (value) => {
		if (validate.usernameLenght(value)) {
			setUsername(value);
			setErrorUsername(false)
			setMsgUsername("")
			setDisableUpdateUsername(false);
			
		} else {
			setDisableUpdateUsername(true);
			setErrorUsername(true)
			setMsgUsername("Debe contener minimo 6 caracteres")
		}
	};
	const validateEmail = (value) => {
		if (validate.email(value)) {
			setEmail(value);
			setErrorEmail(false)
			setMsgEmail("")
			setDisableUpdateEmail(false);
		} else {
			setDisableUpdateEmail(true);
			setErrorEmail(true)
			setMsgEmail("Correo Electrónico invalido")
		}
	};
	const validatePassword=(value)=>{
		setOldPassword(value)
		if(value.length > 0){

		}else{
			setDisableUpdatePassword(true)
		}
	}
	const validateNewPassword=(value)=>{
		setNewPassword(value)
		if(validate.passwordLenght(value)){
			setErrorPassword(false)
			setMsgPassword("")
		}else{
			setDisableUpdatePassword(true)
			setErrorPassword(true)
			setMsgPassword("La contraseña debe contener minimo 8 caracteres")
		}
	}

	const validatePasswordConfirm=(value)=>{
		setPasswordConfirm(value)
		if(validate.verifyPassword(new_password,value)){
			setErrorPasswordConfirm(false)
			setMsgPasswordConfirm("")
			setDisableUpdatePassword(false)
		}else{
			setDisableUpdatePassword(true)
			setErrorPasswordConfirm(true)
			setMsgPasswordConfirm("Las contraseñas no coinciden")
		}
	
	}
	const handleClose = () => {
		setEditEmail(false);
		setEditNames(false);
		setEditUsername(false);
	};

	const m_edit_names = (
		<Dialog
			open={editNames}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-labelledby="modal-delete"
			aria-labelledby="modal-update"
		>
			<DialogTitle>Nombre Completo</DialogTitle>
			<DialogContent
				style={{ overflow: "hidden", margin: 20, padding: 20 }}
			>
				<Grid container spacing={2} direction="column">
					<TextField
						label="Nombre"
						defaultValue={user.first_name}
						onChange={(e) => validateFirstName(e.target.value)}
					/>
					<TextField
						label="Apellidos"
						defaultValue={user.last_name}
						onChange={(e) => validateLastName(e.target.value)}
					/>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} variant="outlined">
					Cancelar
				</Button>
				<Button
					disabled={disableUpdateNames}
					color="primary"
					variant="contained"
					onClick={()=>upNames()}
				>
					Actualizar
				</Button>
			</DialogActions>
		</Dialog>
	);
	const m_edit_email = (
		<Dialog
			open={editEmail}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-labelledby="modal-delete"
			aria-labelledby="modal-update"
		>
			<DialogTitle>Correo electrónico</DialogTitle>
			<DialogContent style={{ overflow: "hidden", margin: 20 }}>
				<Grid container spacing={2} justify="center">
					<TextField
						label="Correo Electrónico"
						defaultValue={user.email}
						onChange={(e) => validateEmail(e.target.value)}
						error={errorEmail}
						helperText={msgErrorEmail}
					/>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} variant="outlined">
					Cancelar
				</Button>
				<Button
					disabled={disableUpdateEmail}
					color="primary"
					variant="contained"
					onClick={()=>upEmail()}
				>
					Actualizar
				</Button>
			</DialogActions>
		</Dialog>
	);
	const m_edit_username = (
		<Dialog
			open={editUsername}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-labelledby="modal-delete"
			aria-labelledby="modal-update"
		>
			<DialogTitle>Nombre de usuario</DialogTitle>
			<DialogContent style={{ margin: 20 }}>
				<Grid container spacing={2} justify="center" direction="column">
					<TextField
						required
						label="Nombre de usuario"
						defaultValue={user.username}
						onChange={(e) => validateUsername(e.target.value)}
						error={errorUsername}
						helperText={msgUsername}
					/>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} variant="outlined">
					Cancelar
				</Button>
				<Button
					disabled={disableUpdateUsername}
					color="primary"
					variant="contained"
					onClick={()=>upUsername()}
				>
					Actualizar
				</Button>
			</DialogActions>
		</Dialog>
	);

	return (
		<Container>
			<Grid
				container
				direction="row"
				justify="center"
				spacing={2}
				className={classes.container}
			>
				<Grid container item justify="center">
					<Typography variant="h3">Mi Cuenta</Typography>
				</Grid>
				<Grid
					item
					container
					direction="row"
					justify="space-around"

				>
					<Grid item>
						<Grid item container justify="center">
							<Typography variant="h6">
								Información personal
							</Typography>
						</Grid>
						<Grid style={{ margin: 10 }}>
							<Grid container item direction="column">
								<Typography
									style={{ color: "black" }}
									variant="subtitle2"
								>
									Nombre
								</Typography>
								<Grid
									item
									container
									justify="space-around"
									direction="row"
								>
									<Grid>
										<Typography
											style={{ color: "blue" }}
											variant="body1"
										>
											{user.first_name} {user.last_name}
										</Typography>
									</Grid>
									<Grid>
										<IconButton
											onClick={() => setEditNames(true)}
											size="small"
										>
											<EditIcon />
										</IconButton>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid style={{ margin: 10 }}>
							<Grid container item direction="column">
								<Grid item>
									<Typography
										style={{ color: "black" }}
										variant="subtitle2"
									>
										Correo Electrónico
									</Typography>
								</Grid>
								<Grid item container direction="row">
									<Typography
										style={{ color: "blue" }}
										variant="body1"
									>
										{user.email}
									</Typography>
									<Grid>
										<IconButton
											onClick={() => setEditEmail(true)}
											size="small"
										>
											<EditIcon />
										</IconButton>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid style={{ margin: 10 }}>
							<Grid container item direction="column">
								<Typography
									style={{ color: "black" }}
									variant="subtitle2"
								>
									Nombre de usuario
								</Typography>
								<Grid item container direction="row">
									<Typography
										style={{ color: "blue" }}
										variant="body1"
									>
										{user.username}
									</Typography>
									<Grid>
										<IconButton
											onClick={() =>
												setEditUsername(true)
											}
											size="small"
										>
											<EditIcon />
										</IconButton>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid item container justify="center">
							<Typography variant="h6">Seguridad</Typography>
						</Grid>
						<Grid style={{ margin: 10 }}>
							<Grid container item direction="column">
								<Grid>
									<Typography
										style={{ color: "black" }}
										variant="subtitle2"
									>
										Cambiar contraseña
									</Typography>
								</Grid>
							</Grid>
							<Grid item container direction="column">
								<TextField type="password" label="Contraseña actual" value={old_password} onChange={(e)=>validatePassword(e.target.value)} />
								<TextField error={errorPassword} helperText={msgPassword} type="password" label="Nueva contraseña" value={new_password} onChange={(e)=>validateNewPassword(e.target.value)} />
								<TextField error={errorPasswordConfirm} helperText={msgPasswordConfirm} type="password" label="Confirmar contraseña" value={password_confirm} onChange={(e)=>validatePasswordConfirm(e.target.value)} />
							</Grid>
							<Grid
								item
								container
								justify="center"
								direction="column"
								style={{ marginTop: "4%" }}
							>
								<Button onClick={()=>upPassword()} disabled={disableUpdatePassword} color="primary" variant="contained">
									Cambiar
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			{m_edit_names}
			{m_edit_email}
			{m_edit_username}
		</Container>
	);
};

Configuration.propTypes = {
	user: PropTypes.object.isRequired,
};


export default Configuration;
