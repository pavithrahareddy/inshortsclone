import { useState, useEffect } from 'react';
import { getNews } from "../service/api";
import { Button } from '@material-ui/core';
import {  makeStyles, Box } from '@material-ui/core';

import InfiniteScroll from 'react-infinite-scroll-component';

//components
import Article from './Article';


const useStyles = makeStyles({
    header: {
        background: '#000',
        height: 50,
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

const Articles = () => {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);

    const dailyNews = async (category = "all") => {
        console.log(category);
        const response = await getNews(page,category);
        console.log(response.data["data"]);
        setNews([]);
        // created a new array and passed json 
        let newArr = [...response.data["data"]];
        console.log(newArr);
        // set the new array with updated data
        setNews(newArr);
    }

    useEffect(() => {   
        dailyNews();
    }, [page])

    useEffect(() => {
        console.log(news);
    }, [news])

    const classes = useStyles();

    return (
        <Box >
            <Box className={classes.header}>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {dailyNews('all')}}>All</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {dailyNews('world');}}>World</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {dailyNews('national');}}>National</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {dailyNews('politics');}}>Politics</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {dailyNews('science');}}>Science</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {dailyNews('entertainment');}}>Entertainment</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {dailyNews('sports');}}>Sports</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {dailyNews('technology');}}>Technology</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {dailyNews('bussiness');}}>Bussiness</Button>
            <Button className={classes.buttons} variant="contained" color="success" onClick={() => {dailyNews('startup');}}>Startup</Button>
            </Box>
            
            <InfiniteScroll
            dataLength={news.length}
            next={() => setPage(page => page + 1)}
            hasMore={true}>
            {
                news.map(article => (
                    <Article article={article}  />
                    
                ))
            }
        </InfiniteScroll>
        </Box>
        
    )
}

export default Articles;