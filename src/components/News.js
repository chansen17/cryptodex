import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

export default function News() {
    const params = useParams();
    const [news, setNews] = useState([]);


    useEffect(() => {
        const controller = new AbortController();

        const options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: { q: `${params.id}`, lang: 'en', sort_by: 'relevancy', page: 1},
            signal: controller.signal,
            headers: {
                'x-api-key' : process.env.REACT_APP_NEWS_API
            }
        }

        axios.request(options).then(response => {
            // console.log(response.data.articles);
            setNews(response.data.articles);
        }).catch(error => {
            // console.log(error.message);
        });

        return () => {
            controller.abort();
        }
    }, []);

  return (
    <div className="max-w-sm md:max-w-lg mx-auto px-8">
    {news ? news.slice(0,10).map(article => (
        <a target="_blank" rel="noreferrer" href={article.link} className="brightness-95 hover:brightness-100">
            <div key={article._id} className="">
                <h2 className="text-xl md:text-2xl text-left my-2">{article.title}</h2>
                <p className="text-green-200 text-lg truncate">{article?.excerpt}</p>
            </div>
        </a>
    )) : 'loading..'}
    </div>
  )
}
