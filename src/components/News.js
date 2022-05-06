import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

export default function News({id}) {
    const params = useParams();
    const [news, setNews] = useState([]);

    const fetchNews = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${id}&apiKey=${process.env.REACT_APP_NEWS_API}`);
        const data = await response.json();
        setNews(data.articles);
        console.log(news);
    }

    useEffect(() => {
        fetchNews();
    }, [id]);

  return (
    <div className="">
        <Splide className="max-w-2xl mx-auto" options={{
            pagination: false,
            perPage: 1,
            arrows: true,
            loop: true,
            autoplay: true,
            type: 'loop',
            padding: "1rem"
            }}>
            {news.length ? news.map(article => (
            <SplideSlide>
                <div className="min-h-[150px] flex items-center justify-center cursor-grab w-full p-2 rounded-lg shadow-lg bg-gray-700">
                    <div className="p-2 flex flex-col items-center">
                        <h2 className="text-xl">{article.title}</h2>
                        <p className="max-w-sm mx-auto overflow-hidden truncate">{article.description}</p>
                    </div>
                </div>
            </SplideSlide>
            )) : (
                <div>Loading or not found</div>
            )}
        </Splide>
        </div>
  )
}
