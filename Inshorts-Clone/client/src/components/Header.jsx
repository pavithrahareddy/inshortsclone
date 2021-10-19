
import { AppBar, Toolbar, makeStyles, Box } from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import { Bookmarks } from '@material-ui/icons';
import NavBar from './NavBar';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    header: {
        background: '#fff',
        height: 70
    },
    menu: {
        color: '#f44336',
        height: 100
    },
    image: {
        height: 65,
        margin: 'auto',
        paddingRight: 70
    },
    buttons:{
        background: "#f44336",
        color: "#fff",
        '&:hover': {
            backgroundColor: '#000',
            color: '#fff',
        },
    },
    
})

const Header = () => {
    const classes = useStyles();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
        <AppBar className={classes.header}>
            <Toolbar>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {}}>Login</Button>
                <img src={url} alt="logo" className={classes.image} />
                <Bookmarks className={classes.menu} />
            </Toolbar>
            <NavBar/>
        </AppBar>
    )
}

export default Header;