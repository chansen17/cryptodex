import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CoinDetails() {
    const params = useParams();

    const [coin, setCoin] = useState({});

    const fetchCoin = async (name) => {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${name}`);
        const data = await response.json();
        setCoin(data);
        console.log(data)
    }

    useEffect(() => {
        fetchCoin(params.id);
    }, [params.id]);

  return (
    <div className="w-full min-h-screen">
        <div className="max-w-[1500px] mx-auto p-5">
            <h2>{coin.name}</h2>
        </div>
    </div>
  )
}
