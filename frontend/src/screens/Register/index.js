import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
const Register = (props) => {
	const { isAuthenticated } = props;
	if (isAuthenticated) {
		return <Redirect to="/" />;
	}
	return (
		<div>
			<h3>Registrando</h3>
		</div>
	);
};

Register.propTypes = {};

export default Register;
