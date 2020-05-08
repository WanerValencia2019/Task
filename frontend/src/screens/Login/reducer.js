import Actions from "../../redux/actionTypes"


const initialState = {
  user:null,
  error:false,
  token:null,
  isAuthenticated:false,
  message:null
}


function Login(state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN_SUCCES:
      return {...state,user:action.user,token:action.token,isAuthenticated:true}
    case Actions.LOGIN_ERROR:
      return {...state,error:true,message:action.message};
      break;
    case Actions.SIGN_OFF:
      return {...state,isAuthenticated:false,user:null,token:null,error:false}
      break;
    default:
      return state;
      break;
  }
}

export default Login;
