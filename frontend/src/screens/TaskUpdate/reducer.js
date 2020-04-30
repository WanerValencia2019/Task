import Actions from './../../redux/actionTypes.js';

const initialState = {
	data: null,
	error: false,
};

export const updateTask = (state = initialState, action) => {
	switch (action.type) {
		case Actions.UPDATE_SUCESS:
			return { ...state, data: action.data };
			break;
		case Actions.UPDATE_ERROR:
			return { ...state, error: true };
			break;
		default:
			return state;
			break;
	}
};
