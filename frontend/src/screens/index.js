import React from 'react';
import Routes from './Routes/index.js';
import Login from './Login';
import { useSelector } from 'react-redux';

const Screens = (props) => {
	const user = useSelector((state) => state.login);
	//console.log(user);
	return <Routes userInfo={user} />
};

export default Screens;
