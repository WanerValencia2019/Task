import Actions from './../../redux/actionTypes.js';
import axios from 'axios';

export const update_task = (
	idTask,
	idUser,
	title,
	description,
	token
) => async (dispatch) => {
	const params = {
		title: title,
		Description: description,
		created_by: idUser,
	};
	axios
		.put(`http://127.0.0.1:8000/api/task/self/update/${idTask}/`, params, {
			headers: {
				Authorization: `Token ${token}`,
			},
		})
		.then((res) => {
			return dispatch({
				type: Actions.UPDATE_SUCESS,
				data: res.data,
			});
		})
		.catch((err) => {
			return dispatch({
				type: Actions.UPDATE_ERROR,
			});
		});
};
