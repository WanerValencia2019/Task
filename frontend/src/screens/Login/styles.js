import {makeStyles} from "@material-ui/core/styles"

export default makeStyles(theme=>({
    container:{
        marginTop:"50%",
        marginLeft:"20%",
        [theme.breakpoints.up('md')]:{
            marginLeft:"42%",
            marginTop:"15%",
        }
    }
}))
