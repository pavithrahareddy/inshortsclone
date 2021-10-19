import axios from 'axios';

const URL = 'http://localhost:8000';


export const getNews = async (page, size = 5) => {
    try {
        return await axios.get(`https://inshot.herokuapp.com/v1/all`);
    } catch (error) {
        console.log('error while calling getNews API');
    }
}