import Actions from './../../redux/actionTypes';
import axios from 'axios';

/*export const setTitle=(text)=>{
  return{
    type:Actions.INPUT_TEXT_TITLE,
    value:text
  }
}
export const setDescription=(text)=>{
  return{
    type:Actions.INPUT_TEXT_DESCRIPTION,
    value:text
  }
}*/

export const createTask = (title, description, token, id) => async (
  dispatch
) => {
  const params = {
    title: title,
    Description: description,
    created_by: id,
  };
  axios
    .post(`http://127.0.0.1:8000/api/task/create/`, params, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      return dispatch({
        type: Actions.CREATE_TASK_SUCCESS,
        statu: res.data.title,
      });
    })
    .catch((err) => {
      return dispatch({
        type: Actions.CREATE_TASK_ERROR,
      });
    });
};
export const snackOpen = () => {
  return {
    type: Actions.OPEN_SNACKBAR,
  };
};
