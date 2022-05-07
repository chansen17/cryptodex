import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import moment from 'moment';
import Moment from 'react-moment';
import { SpinnerInfinity } from 'spinners-react';
import News from '../components/News';

export default function CoinDetails() {
    const params = useParams();

    const [coin, setCoin] = useState('');
    const [prices, setPrices] = useState([]);
    // const [loading, setLoading] = useState(false);


    const fetchCoinPrices = async (name) => {
        // setLoading(true);
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=7`);
        const data = await response.json();
        setPrices(data.prices);
        if(data) {
            console.log('We got data', data.prices);
            // setLoading(false);
        }
    }

    const fetchCoinDetails = async (name) => {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${name}`);
        const data = await response.json();
        setCoin(data);
    }
    
    useEffect(() => {
        fetchCoinPrices(params.id);
        fetchCoinDetails(params.id);
        console.log('coin details', coin);
    }, [params.id]);


    if(!coin && !prices) (
        <div className="">
            <SpinnerInfinity className="z-20" enabled={true} size={200}/>
        </div>
    )

    
  return (
    <div className="w-full min-h-screen bg-slate-800 text-white relative">
       <div className="py-12">
       <h2 className="text-3xl md:text-5xl heading-gradient font-semibold">{params.id}</h2>
        <p className="text-xl">({coin.symbol})</p>
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
                {/* <p className="text-center">{coin?.description.en && coin.description.en}</p> */}
            </div>
        </div>
       </div>
        <div className="max-w-[1500px] mx-auto p-5">
            <div className="grid gap-4 md:grid-cols-2">
                <div>
                <h2 className="text-4xl">Historical data for {coin.symbol}</h2> 
                    <div className="max-w-2xl mx-auto my-12">
                        <Chart className="" type='line' data={{
                            labels: prices.map(date => new Date(date[0]).toLocaleDateString()),
                            datasets: [
                                {
                                    data: prices.map((coin) => coin[1]),
                                    label: `Price ( Past 7 ) days in USD`,
                                    borderColor: 'violet'
                                }
                            ]
                        }} />
                    </div>
                </div>
                <div>
                     <h2 className="text-4xl">News</h2> 
                     <News id={coin.id}/>          
                </div>
            </div>
        </div>
    </div>
  )
}
