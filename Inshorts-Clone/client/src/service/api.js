import axios from 'axios'

const URL = 'https://inshorts-news.vercel.app/'

export const getNews = async (page,category, size = 5) => {
  try {
    console.log(category);
    return await axios.get(`/${category}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        crossdomain: true,
      },
    })
  } catch (error) {
    console.log('error while calling getNews API')
  }
}
