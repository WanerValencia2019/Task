import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ component: Component, isAuthenticated, ...rest }) => (
	<Route
		{...rest}
		render={(params) => {
			if (isAuthenticated) {
				return <Component {...params} />;
			}else{
				return <Redirect  to="/login" />
			}
		}}
	/>
);

export default PrivateRoutes;
