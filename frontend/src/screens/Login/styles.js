import { makeStyles } from "@material-ui/core/styles";

const height=window.screen.height
  console.log(window.screen.width);
export default makeStyles(theme => ({
  container: {
    background: "linear-gradient(to left,#007991,#78ffd6);",
    //background:"#000",
    height:height-20,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth:600
  },
  inputPassword:{
    [theme.breakpoints.up('md')]:{
      width:300
    }
  },
  inputEmail:{
    [theme.breakpoints.up('md')]:{
      width:300
    }
  },
  form:{
    marginTop:20
  }

}));
