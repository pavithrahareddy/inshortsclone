
import { AppBar, Toolbar, makeStyles, Box, Link } from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import { Bookmarks } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import React, { useState } from 'react';
import { HomeOutlined } from '@material-ui/icons';


import { NavLink } from 'react-router-dom';

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

    function responseGoogle (response){
        console.log(response);
        console.log(response.profileObj);
    }

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        // console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <div>
                { showloginButton ?
                    <GoogleLogin 
                    clientId="70498144699-lm9phgum53khgsarok4v2pdn8mlhrd4a.apps.googleusercontent.com"
                    buttonText="Login"
                    backgroundColor="#f44336"
                    

                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}

                    /> : null}

{ showlogoutButton ?
                    <GoogleLogout
                    clientId="70498144699-lm9phgum53khgsarok4v2pdn8mlhrd4a.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={onSignoutSuccess}
                    >
    </GoogleLogout>: null
            }
                </div>
            {/* <Button className={classes.buttons} variant="contained" color="success" onClick={() => {}}>Login</Button> */}
                <img src={url} alt="logo" className={classes.image} />
                
                <NavLink replace to="/"><HomeOutlined className={classes.menu}/></NavLink>
                { showlogoutButton ?<NavLink replace to="/bookmarks"><Bookmarks className={classes.menu} /></NavLink>: null
            }
                
            </Toolbar>
            {/* <NavBar/> */}
        </AppBar>
    )
}

export default Header;