import Actions from "./../../redux/actionTypes";
import axios from "axios";

const getTask = (idUser, token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  axios
    .get(`http://127.0.0.1:8000/api/v1/task/list/?id=${idUser}`, config)
    .then((res) => {
      console.log(res.data);
      return dispatch({
        type: Actions.GET_TASK_SUCCES,
        tasks: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: Actions.GET_TASK_ERROR,
      });
    });
};
const deleteTask = (idTask, token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  axios
    .delete(`http://127.0.0.1:8000/api/v1/task/delete/${idTask}/`, config)
    .then((res) => {
      return dispatch({
        type: Actions.DELETE_SUCESS,
        id: idTask,
      });
    })
    .catch((err) => {
      return dispatch({
        type: Actions.DELETE_ERROR,
      });
    });
};

export { getTask, deleteTask };
