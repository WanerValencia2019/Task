import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ component: Component, sign_in, ...rest }) => (
	<Route
		{...rest}
		render={(params) => {
			if (5!=5) {
				return <Component {...params} />;
			}else{
				return <div><h1>Loading</h1></div>;
			}
		}}
	/>
);

export default PrivateRoutes;
