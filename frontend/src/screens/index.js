import React from 'react';
import Routes from './Routes/index.js';
import Login from './Login';
import { useSelector } from 'react-redux';

const Screens = (props) => {
	const user = useSelector((state) => state.login);

	//console.log(user);
	return <div>{user.sign_in ? <Routes userInfo={user} /> : <Login />}</div>;
};

export default Screens;
