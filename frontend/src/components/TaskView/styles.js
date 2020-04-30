import { makeStyles } from '@material-ui/core/styles';
const width = window.screen.width;
const colores = ['#FF7D4A', '#2A5ADC', '#81E4F7', '#ADD100'];
let i = Math.random() * 5;
let rounded = Math.floor(i);
let c = colores[rounded];

console.log(colores[rounded]);
export default makeStyles((theme) => ({
	root: {
		flex: 1,
	},
	paper: {
		//background: "linear-gradient(to left,  #add100, #7b920a )",
		//background: 'rgba(132, 217, 163, 0.69)',
		background: 'white',
		//background: '#9AE6FC',
		//background: '#DFE3E5',
		//
		//background: '#C3B09C',
		padding: theme.spacing(1),
	},
}));
