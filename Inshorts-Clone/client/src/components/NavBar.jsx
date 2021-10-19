import {  makeStyles, Box } from '@material-ui/core';
import { Category, Menu } from '@material-ui/icons'
import { Button } from '@material-ui/core';
import Articles from './Articles';
import { useState } from 'react';

const useStyles = makeStyles({
    header: {
        background: '#000',
        height: 500,
        display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px 30px"
    
    },
    buttons:{
        margin: "0 10px",
        background: "#f44336",
        color: "#fff"
    }
    
})

const NavBar = () => {
    const classes = useStyles();

    function ActionLink(cat) {
        alert(cat);
        
    }

    return (
        <Box className={classes.header}>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {ActionLink("all");}}>All</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {alert('world');}}>World</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {alert('national');}}>National</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {alert('politics');}}>Politics</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {alert('science');}}>Science</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {alert('entertainment');}}>Entertainment</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {alert('sports');}}>Sports</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {alert('technology');}}>Technology</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {alert('bussiness');}}>Bussiness</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {alert('startup');}}>Startup</Button>
        </Box>
    )
}

export default NavBar;