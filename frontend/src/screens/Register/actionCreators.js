import Actions from "./../../redux/actionTypes"
import axios from "axios"

export const register=(first_name,last_name,username,email,password)=>(dispatch)=>{
  const params={
    first_name,
    last_name,
    username,
    email,
    password
  }
  const config={

  }
  axios.post('http://127.0.0.1:8000/api/v1/auth/register',params,config)
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err.response.data);
  })

}
