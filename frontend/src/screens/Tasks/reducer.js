import Actions from "./../../redux/actionTypes"

const initialState={
  tasks:[],
  error:false
}

export default function TasksReducer(state=initialState, action){
  switch (action.type) {
    case Actions.GET_TASK_SUCCES:
      return {...state,tasks:action.tasks}
      break;
    case Actions.GET_TASK_ERROR:
      return {...state,error:true}
      break;
    default:
      return state
      break;
  }
}
