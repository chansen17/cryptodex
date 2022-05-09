import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import moment from 'moment';
import Moment from 'react-moment';
import { SpinnerInfinity } from 'spinners-react';
import Select from 'react-select';
import News from '../components/News';

// const daysOptions = [
//     { value: '7', label: '7' },
//     { value: '14', label: '14' },
//     { value: '30', label: '30' },
// ]

export default function CoinDetails() {
    const params = useParams();

    const [coin, setCoin] = useState('');
    const [days, setDays] = useState('7');
    const [prices, setPrices] = useState([]);
    // const [loading, setLoading] = useState(false);


    const fetchCoinPrices = async (name) => {
        // setLoading(true);
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=${days}`);
        const data = await response.json();
        setPrices(data.prices);
        if(data) {
            // console.log('We got data', data.prices);
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
        // console.log('coin details', coin);
    }, [params.id, days]);


    if(!coin && !prices) (
        <div className="">
            <SpinnerInfinity className="z-20" enabled={true} size={200}/>
        </div>
    )

    
  return (
    <div className="w-full min-h-screen bg-slate-800 text-white relative overflow-x-hidden pb-12">
       <div className="max-w-[1360px] mx-auto p-5">
       <h2 className="text-3xl md:text-5xl heading-gradient font-semibold pt-12">{params.id}</h2>
        <p className="text-xl">({coin.symbol})</p>
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
                {/* {coin && <p className="text-center">{coin?.description.en && coin.description.en}</p>} */}
            </div>
        </div>
       </div>
        <div className="">
            <div className="flex flex-wrap justify-around items-start">
                <div className="w-full max-w-3xl">
                <h2 className="text-3xl md:text-4xl">Historical data for {coin.symbol}</h2> 
                    <div className="max-w-lg mx-auto mt-4 flex items-center justify-center space-x-4">
                        <button className="py-1 px-2 rounded-lg text-lg bg-gradient-to-tr from-cyan-500 to-slate-500 hover:animate-pulse" onClick={(e) => setDays(e.target.value)} value={7}>7 days</button>
                        <button className="py-1 px-2 rounded-lg text-lg bg-gradient-to-tr from-cyan-500 to-slate-500 hover:animate-pulse" onClick={(e) => setDays(e.target.value)} value={14}>14 days</button>
                        <button className="py-1 px-2 rounded-lg text-lg bg-gradient-to-tr from-cyan-500 to-slate-500 hover:animate-pulse" onClick={(e) => setDays(e.target.value)} value={30}>30 days</button>
                        <button className="py-1 px-2 rounded-lg text-lg bg-gradient-to-tr from-cyan-500 to-slate-500 hover:animate-pulse" onClick={(e) => setDays(e.target.value)} value={365}>1 Year</button>
                    </div>
                    <div className="w-full mx-auto p-5 my-12">
                        <Chart redraw={false} className="" type='line' data={{
                            labels: prices.map(date => new Date(date[0]).toLocaleDateString()),
                            datasets: [
                                {
                                    data: prices.map((coin) => coin[1]),
                                    label: `Price ( Past ${days} ) days in USD`,
                                    borderColor: 'cyan'
                                }
                            ]
                        }} />
                    </div>
                </div>
                <div className="">
                     <h2 className="text-4xl pb-12">News</h2> 
                     <News id={coin.id}/>          
                </div>
            </div>
        </div>
    </div>
  )
}
