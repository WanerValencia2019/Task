import Actions from "./../../redux/actionTypes"



const initialState = {
		data:[],
		error:false,
		message:""
}


export const account=(state= initialState, action) => {
	switch(action.type){
		case Actions.CHANGE_NAME:
			return { ...state,data:action.data,message:action.message}

		case Actions.CHANGE_USERNAME:
			return { ...state,data:action.data,message:action.message}
		case Actions.CHANGE_EMAIL:
		return { ...state,data:action.data,message:action.message}

		case Actions.CHANGE_PASSWORD:
			return { ...state,data:action.data,message:action.message}
		case Actions.CHANGE_PASSWORD:
			return { ...state,data:action.data,message:action.message}
		case Actions.CHANGE_NAME_ERROR:
			return { ...state,data:action.data,message:action.message,error:true}
		case Actions.CHANGE_USERNAME_ERROR:
			return { ...state,data:action.data,message:action.message,error:true}
			case Actions.CHANGE_EMAIL_ERROR:
			return { ...state,data:action.data,message:action.message,error:true}
			case Actions.CHANGE_PASSWORD_ERROR:
			return { ...state,data:action.data,message:action.message,error:true}
		default:
		return state;
		break;
	}

}