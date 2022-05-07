import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

export default function News({id}) {
    const params = useParams();
    const [news, setNews] = useState([]);


    useEffect(() => {
        const controller = new AbortController();

        const options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: { q: id, lang: 'en', sort_by: 'relevancy', page: 1},
            signal: controller.signal,
            headers: {
                'x-api-key' : 'GMuumlwdvLTvjf3zvmkVhE5waFpjmgh3Owqd5C8Egiw'
            }
        }

        axios.request(options).then(response => {
            console.log(response.data.articles);
            setNews(response.data.articles);
        }).catch(error => {
            console.log(error);
        });

        return () => {
            controller.abort();
        }
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
            {news ? news.map(article => (
            <SplideSlide key={article?._id}>
                <div className="min-h-[150px] flex items-center justify-center cursor-grab w-full p-2 rounded-lg shadow-lg bg-gray-700">
                    <div className="p-2 flex flex-col items-center">
                        <h2 className="heading-gradient text-xl">{article?.title}</h2>
                        <p className="max-w-sm mx-auto overflow-hidden truncate">{article?.summary}</p>
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
