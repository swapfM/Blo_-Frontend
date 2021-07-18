import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}));


const Header = () =>{


const classes = useStyles();
    return(
        <>
            <CssBaseline />
            <AppBar 
                position='static'
                color="white"
                elevation={0}
                className={classes.appBar}>

            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    BlogmeUp
                </Typography>
            </Toolbar>

            </AppBar>

        </>
    )

}

export default Header;