import Actions from './../../redux/actionTypes';

/*export const titleCreateReducer = (state = { text: "" }, action) => {
  switch (action.types) {
    case Actions.INPUT_TEXT_TITLE:
      return { ...state, text: action.value };
      break;
    default:
      return state;
      break;
  }
};
export const descriptionCreateReducer = (state = { text: "" }, action) => {
  switch (action.types) {
    case Actions.INPUT_TEXT_DESCRIPTION:
      return { ...state, text: action.value };
      break;
    default:
      return state;
      break;
  }
};*/
const initialState = {
  error: true,
  status: null,
};
export const createTask = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CREATE_TASK_SUCCESS:
      return { ...state, status: action.status, error: false };
      break;
    case Actions.CREATE_TASK_ERROR:
      return { ...state, status: action.status, error: true };
      break;
    default:
      return state;
      break;
  }
};

export const activeSnackBar = (state = { open: false }, action) => {
  switch (action.type) {
    case Actions.OPEN_SNACKBAR:
      return { ...state, open: true };
      break;
    case Actions.CLOSE_SNACKBAR:
      return { ...state, open: false };
      break;
    default:
      return state;
      break;
  }
};
