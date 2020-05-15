import Actions from "./../../redux/actionTypes";
import axios from "axios";

const refreshUser = (token) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Token ${token}`,
		},
	};
	axios
		.get("http://localhost:8000/api/v1/auth/userInfo",config)
		.then((res) => {
			return dispatch({
				type: Actions.REFRESH_USER,
				user: res.data.User,
				token: res.data.Token,
			});
		})
		.catch((error) => {
			console.log(error.response);
		});
};

export const updateNames = (first_name, last_name, token) => (dispatch) => {
	const params = {
		first_name,
		last_name,
	};

	const config = {
		headers: {
			Authorization: `Token ${token}`,
		},
	};
	axios
		.put("http://localhost:8000/api/v1/auth/changeNames", params, config)
		.then((res) => {
			dispatch(refreshUser(token));
			return dispatch({
				type: Actions.CHANGE_NAME,
				data: res.data,
				message: "Nombre actualizado correctamente",
			});
		})
		.catch((error) => {
			console.log(error.response);
			return dispatch({
				type: Actions.CHANGE_NAME_ERROR,
				message: "No se pudo actualizar el nombre",
				error: true,
			});
		});
	
};
export const updateUsername = (username, token) => (dispatch) => {
	const params = {
		username,
	};
	const config = {
		headers: {
			Authorization: `Token ${token}`,
		},
	};
	axios
		.put("http://localhost:8000/api/v1/auth/changeUsername", params, config)
		.then((res) => {
			dispatch(refreshUser(token));
			return dispatch({
				type: Actions.CHANGE_USERNAME,
				data: res.data,
				message: "Nombre de usuario actualizado correctamente",
			});
		})
		.catch((error) => {
			console.log(error.response);
			return dispatch({
				type: Actions.CHANGE_NAME_ERROR,
				message: "No se pudo actualizar el nombre de usuario",
				error: true,
			});
		});
	
};
export const updateEmail = (email, token) => (dispatch) => {
	const params = {
		email,
	};
	const config = {
		headers: {
			Authorization: `Token ${token}`,
		},
	};
	axios
		.put("http://localhost:8000/api/v1/auth/changeEmail", params, config)
		.then((res) => {
			dispatch(refreshUser(token));
			return dispatch({
				type: Actions.CHANGE_EMAIL,
				data: res.data,
				message: "Correo electrónico actualizado correctamente",
			});
		})
		.catch((error) => {
			console.log(error.response);
			return dispatch({
				type: Actions.CHANGE_EMAIL_ERROR,
				message: "No se pudo actualizar el correo electrónico",
				error: true,
			});
		});
	
};
export const updatePassword = (
	old_password,
	password,
	password_confirm,
	token
) => (dispatch) => {
	const params = {
		old_password,
		password,
		password_confirm,
	};
	const config = {
		headers: {
			Authorization: `Token ${token}`,
		},
	};
	axios
		.put("http://localhost:8000/api/v1/auth/changePassword", params, config)
		.then((res) => {
			dispatch(refreshUser(token));
			return dispatch({
				type: Actions.CHANGE_PASSWORD,
				data: res.data,
				message: "Contraseña actualizada correctamente",
			});
		})
		.catch((error) => {
			console.log(error.response);
			return dispatch({
				type: Actions.CHANGE_PASSWORD_ERROR,
				message: "No se pudo actualizar la contraseña",
				error: true,
			});
		});
	
};
