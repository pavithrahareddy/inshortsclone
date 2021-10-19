import { useState, useEffect } from 'react';
import { getNews } from "../service/api";

import InfiniteScroll from 'react-infinite-scroll-component';

//components
import Article from './Article';

const Articles = (category) => {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);

    const dailyNews = async (category = "all") => {
        const response = await getNews(page,category);
        console.log(new Set([...news, ...response.data["data"]]));
        setNews([...new Set([...news, ...response.data["data"]])]);
    }

    useEffect(() => {   
        dailyNews();
    }, [page])

    useEffect(() => {
        console.log(news);
    }, [news])



    return (
        
        <InfiniteScroll
            dataLength={news.length}
            next={() => setPage(page => page + 1)}
            hasMore={true}
        >
            {
                news.map(article => (
                    <Article article={article}  />
                    
                ))
            }
        </InfiniteScroll>
    )
}

export default Articles;