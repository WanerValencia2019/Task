import React from 'react';
import PropTypes from 'prop-types';

const Configuration = (props) => {
	const { user } = props;
	console.log(user);
	return (
		<div>
			<h1>Configuraciones</h1>
		</div>
	);
};

Configuration.propTypes = {
	user: PropTypes.object.isRequired,
};

export default Configuration;
