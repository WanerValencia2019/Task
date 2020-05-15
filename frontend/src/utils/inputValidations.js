function validateEmail(email) {
	const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	return regex.test(new String(email).toLowerCase());
}

function passwordLenght(password) {
	if (String(password).length >= 8) {
		return true;
	} else {
		return false;
	}
}

function usernameLenght(username){
	if (String(username).length >=6 ) {
		return true;
	} else {
		return false;
	}
}
function verifyPassword(password, passwordConfirm) {
	if (password === passwordConfirm) {
		return true;
	} else {
		return false;
	}
}
function emptyFields(email, password, passwordConfirm) {
	if (
		String(email) == "" ||
		String(password) == "" ||
		String(passwordConfirm) == ""
	) {
		return true;
	} else {
		return false;
	}
}

export const validate={
	email:validateEmail,
	passwordLenght,
	verifyPassword,
	emptyFields,
	usernameLenght
}
