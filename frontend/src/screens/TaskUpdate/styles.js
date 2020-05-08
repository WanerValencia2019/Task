import { makeStyles } from '@material-ui/core/styles';
const {height} = window.screen
console.log(height);
export default makeStyles((theme) => ({
	root: {
		background: 'linear-gradient(to left,#007991,#78ffd6)',
		overflow:"hidden",
		//height:height
	},
	paper: {
		maxWidth: 800,
		margin:20
	},
}));
