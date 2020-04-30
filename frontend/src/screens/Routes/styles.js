import { makeStyles } from '@material-ui/core/styles';
const height = window.screen.height;
const width = window.screen.width;
export default makeStyles((theme) => ({
  gridNewTask: {
    height: height,
    //marginTop: '7%',
    [theme.breakpoints.up('md')]: {
      width: 600,
      height: 600,
      //marginTop: '3%',
      marginLeft: '30%',
    },
  },
  content: {
    //
    background: 'linear-gradient(to left,#00d2ff,#928DAB)',
    //background: '#00c853',
    //background: '#FF8056',
    //background: '#00184d',
    // background: '#ec3434',
    //background: '#F9BC04',
    height: '100%',
  },
}));
