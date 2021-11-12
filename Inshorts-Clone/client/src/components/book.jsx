
import { Card, CardContent, Typography, Box, makeStyles, Grid, Button } from "@material-ui/core";
import { Share } from "@material-ui/icons";
import { AddBox } from "@material-ui/icons";
import axios from "axios";

const useStyles = makeStyles(theme => ({
    component: {
        boxShadow: '3px 2px 5px 3px rgb(0 0 0 / 16%), 3px 2px 10px 3px rgb(0 0 0 / 12%)',
        marginBottom: 20
    },
    container: {
        display: 'flex',
        padding: 10,
        paddingBottom: '4px!important'
    },
    image: {
        height: 268,
        width: '88%',
        borderRadius: 5,
        objectFit: 'cover'
    },
    rightContainer: {
        margin: '5px 0px 0 -25px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            margin: '5px 0'
        }
    },
    title: {
        fontWeight: 300,
        color: '#44444d',
        fontSize: 22,
        lineHeight: '27px'
    },
    author: {
        color: '#808290',
        fontSize: 12,
        lineHeight: '22px'
    },
    description: {
        lineHeight: '22px',
        color: '#44444d',
        marginTop: 5,
        fontFamily: "'Roboto',sans-serif",
        fontWeight: 300
    },
    short: {
        color: '#44444d',
        fontFamily: "'Convergence', sans-serif"
    },
    publisher: {
        fontSize: 12,
        marginTop: 'auto',
        marginBottom: 10,
        '& > *': {
            textDecoration: 'none',
            color: '#000',
            fontWeight: 900
        }
    },
    menu: {
        color: '#f44336',
        
    },
}))

const Book = ({ article }) => {
    const classes = useStyles();


    return (
        <Card className={classes.component}>
            <CardContent >
                
                    
                        <Typography className={classes.title}>{article.title}</Typography>
                        <br />
                        <Typography className={classes.description}>{article.content}</Typography>
                    
                    
                    
                
            </CardContent>
        </Card>
    )
}

export default Book;