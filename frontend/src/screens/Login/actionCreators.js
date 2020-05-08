import axios from "axios";
import Actions from "../../redux/actionTypes";

export const getLogin = (username, password) => async (dispatch) => {
  //console.log(username,password);
  const params = {
    username: username,
    password: password,
  };
  axios
    .post("http://127.0.0.1:8000/api/v1/auth/login", params)
    .then((res) => {
      console.log(res);
      return dispatch({
        type: Actions.LOGIN_SUCCES,
        user: res.data.User,
        token: res.data.Token,
      });
    })
    .catch((error) => {
      console.log(error.response.data.message[0]);
      const message=error.response.data.message[0]
      return dispatch({
        type: Actions.LOGIN_ERROR,
        message: message,
      });
    });
};
export const logout = (token) => (dispatch, getState) => {
  console.log(getState);
  console.log(token)
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  }
  axios
    .post("http://127.0.0.1:8000/api/v1/auth/logout",null,config)
    .then((res) => {
      return dispatch({
        type: Actions.SIGN_OFF,
      })
    })
    .catch((err)=>{
      console.log(err.response)
    })

};
