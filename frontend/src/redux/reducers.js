import { combineReducers } from 'redux';
import Login from '../screens/Login/reducer';
import { TasksReducer } from '../screens/Tasks/reducer';
import { createTask, activeSnackBar } from './../screens/TaskCreate/reducers';
import { updateTask } from './../screens/TaskUpdate/reducer.js';
export default combineReducers({
	login: Login,
	tasks: TasksReducer,
	createTask,
	snackbar: activeSnackBar,
	update: updateTask,
});

