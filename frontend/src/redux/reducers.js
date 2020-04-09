import {combineReducers} from  "redux"
import Login from "../screens/Login/reducer"
import TasksReducer from "../screens/Tasks/reducer"

export default combineReducers({
  login:Login,
  tasks:TasksReducer
})
