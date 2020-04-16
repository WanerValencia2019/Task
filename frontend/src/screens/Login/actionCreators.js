import axios from "axios"
import Actions from "../../redux/actionTypes"


export const getLogin=(username,password)=>async(dispatch)=>{
  //console.log(username,password);
  const params={
    "username":username,
    "password":password
  }
  axios.post('http://127.0.0.1:8000/api/login',params)
  .then((res)=>{
    console.log(res);
    return (dispatch)({
      type:Actions.LOGIN_SUCCES,
      user:res.data.User,
      token:res.data.Token
    })
  })
  .catch((error)=>{
    console.log(error);
    return (dispatch)({
      type:Actions.LOGIN_ERROR,
      status:error
    })
  })

}
export const logout=()=>{
  return {
    type:Actions.SIGN_OFF,
  }
}
