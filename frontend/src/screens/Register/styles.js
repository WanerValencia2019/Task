import { makeStyles } from "@material-ui/core/styles";

const height = window.screen.height;

export default makeStyles((theme) => ({
	container: {
		background: "linear-gradient(to left,#007991,#78ffd6);",
		//background:"#000",
		overflow: "hidden",
		height: height,
	},
	paper:{
		//background:"rgba(255,255,255,.5)",

		boxShadow:2,
		margin:"auto",
		maxWidth:1000,
		padding: theme.spacing(6),
	}
}));
