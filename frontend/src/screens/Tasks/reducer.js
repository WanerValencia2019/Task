import Actions from './../../redux/actionTypes';

const initialState = {
  tasks: [],
  error: false,
};

export function TasksReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_TASK_SUCCES:
      return { ...state, tasks: action.tasks };
      break;
    case Actions.GET_TASK_ERROR:
      return { ...state, error: true };
      break;
    case Actions.DELETE_SUCESS:
      return {
        ...state,
        id: action.id,
        tasks: state.tasks.filter((t) => t.id !== action.id),
      };
      break;
    case Actions.DELETE_ERROR:
      return { ...state, error: true };
      break;
    default:
      return state;
      break;
  }
}

/*export function deleteTaskReducer(state = { error: false, id: null }, action) {
  switch (action.type) {
    case Actions.DELETE_SUCESS:
      return { ...state, id: action.id };
      break;
    case Actions.DELETE_ERROR:
      return { ...state, error: true };
      break;
    default:
      return state;
      break;
  }
}
*/
