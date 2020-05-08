import Actions from "./../../redux/actionTypes";
import axios from "axios";

export const createTask = (title, description, token, id) => async (
  dispatch
) => {
  const params = {
    title: title,
    Description: description,
    created_by: id,
  };
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  console.log(params)
  axios
    .post(`http://127.0.0.1:8000/api/v1/task/create/`,params,config)
    .then((res) => {
      console.log(res);
      return dispatch({
        type: Actions.CREATE_TASK_SUCCESS,
        statu: res.data.title,
      });
    })
    .catch((err) => {
      console.log(err.response.data.message[0])
      const message=err.response.data.message[0]
      return dispatch({
        type: Actions.CREATE_TASK_ERROR,
        message:message
      });
    });
};
export const snackOpen = () => {
  return {
    type: Actions.OPEN_SNACKBAR,
  };
};
