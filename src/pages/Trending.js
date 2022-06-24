import { useState, useEffect } from 'react';
import {NavLink } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size'
import { FaDollarSign, FaPercent, FaPercentage } from 'react-icons/fa';
import { Sparklines, SparklinesLine } from 'react-sparklines';

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SpinnerCircular } from 'spinners-react';

export default function Trending() {
    const width = useWindowWidth();
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userQuery, setUserQuery] = useState('');
    const [max, setMax] = useState(50);

    const fetchCoins = async () => {
        setLoading(true);
        // check if coins exists in local storage
        // TODO const check = localStorage.getItem('coins');
        // if coins do exist in local storage, parse items and set as state ELSE create new local storage items
        // if(check) {
        //     setCoins(JSON.parse(check));
        //     setLoading(false);
        // }
        // else {
        //     setLoading(true);
        //     const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`);
        //     const data = await response.json();

        //     // create new local storage
        //     localStorage.setItem('coins', JSON.stringify(data));
        //     setCoins(data);
        //     setLoading(false);
        // }

        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${max}&page=1&sparkline=true`);
        const data = await response.json();
        setCoins(data);

    }

    useEffect(() => {
        fetchCoins();
    }, [max]);
    
    console.log(coins)

    // const filteredCoins = coins.filter(coin => 
    //     coin.name.toLowerCase().includes(userQuery.toLowerCase())
    // );

        
  return (
    <div className="w-full bg-slate-900 min-h-screen relative">
        <div className="fixed bottom-0 w-full h-[15vh] bg-gradient-to-t from-slate-900 z-20" />
        <div id="container" className="max-w-[1500px] mx-auto p-5">
            <div className="max-w-5xl mx-auto my-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold"><span className="text-gray-200">The Easiest Way to</span> <br/> <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-green-300">Track Multiple Currencies</span></h2>
                <p className="my-6 text-xl text-gray-400">Research cryptocurrencies, study meta data and charts.<br/></p>
            </div>
            {/* input container */}
            <div className="my-12 max-w-sm mx-auto text-gray-300">
                <input value={userQuery} onChange={(e) => setUserQuery(e.currentTarget.value)} className="w-full py-2 px-3 text-lg rounded bg-transparent outline-none border-b-2 border-cyan-400 border-opacity-50 focus:border-opacity-100 shadow-lg" type="text" placeholder="Search cryptocurrencies" />
            </div>
            {/* end input container */}
            <section className="py-6">
            {coins ? coins?.map((coin) => (
            <NavLink to={`/details/${coin.id}`} key={coin.id}>
                <div className="relative grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-left text-slate-50 font-light text-sm md:text-lg lg:text-xl my-6 py-6 px-2 rounded-xl cursor-pointer border-b-2 border-gray-800/70 hover:border-gray-700/70">
                    <div className="flex items-center space-x-4">
                        <img className="w-6 h-6 md:w-12 md:h-12 object-cover" src={coin.image} alt={`${coin.name} logo`} />
                        <div className="">
                            <p className="font-semibold uppercase">{coin.symbol}</p>
                            <p>{coin.name}</p>
                        </div>
                    </div>
                    {/* price */}
                    <div className="font-semibold flex flex-col items-center justify-center">
                        <p className="font-light">Current Price</p>
                        <p className={coin.price_change_24h > 0 ? "flex items-center text-green-300" : "flex items-center text-red-300"}><FaDollarSign/>{coin.current_price}</p>
                    </div>
                    {/* end prcice */}
                    {/* marketcap */}
                    <div className="hidden lg:inline-flex flex-col items-center justify-center">
                        <p>Market Cap</p>
                        <p className="font-semibold flex items-center">{coin.market_cap.toLocaleString()}</p>
                    </div>
                    {/* end marketcap */}
                    {/* Chart */}
                    <div className="md:inline-flex flex-col items-center justify-center">
                    {!coins ? (
                        <SpinnerCircular size={50} />
                    ) : (
                        // <Chart 
                        //     redraw={false}
                        //     className=""
                        //     type="line"
                        //     data={{
                        //         labels: ["24h low", "24h high", "Current price"],
                        //         datasets: [
                        //             {
                        //                 data: [coin.low_24h, coin.high_24h, coin.current_price],
                        //                 label: `(${coin.symbol}) 24h low and high`,
                        //                 borderColor: 'lightgreen'
                        //             }
                        //         ]
                        //     }}
                        // />
                        <div className="w-full">
                        <Sparklines data={coin.sparkline_in_7d.price}>
                            <SparklinesLine color="cyan" style={{ fill: "none" }} />
                        </Sparklines>
                        </div>
                    )}
                    </div>
                    {/* End chart */}
                    {/* 24h change */}
                    <div className="hidden md:inline-flex flex-col items-center justify-center">
                        <p className="flex justify-end">24h change</p>
                        <p className={coin.market_cap_change_percentage_24h > 0 ? "font-semibold flex items-center justify-end text-green-200" : "font-semibold flex items-center justify-end text-red-300"}>% {" "}{coin.market_cap_change_percentage_24h.toFixed(2)}</p>
                    </div>
                    {/* end 24h change */}
                </div>
            </NavLink>
            )) : (
            <div>
                <Skeleton baseColor="#555" />
            </div>
            )}
            {/* <div className="pb-16">
                {max === 50 ? (
                    <button value={100} onClick={(e) => setMax(e.currentTarget.value)} className="main-btn">View more</button>
                ) : (
                    <button value={50} onClick={(e) => setMax(e.currentTarget.value)} className="main-btn">View Less</button>
                )}
            </div> */}
            </section>
        {max === 100 ? (
            <button onClick={() => setMax(50)} className="main-btn mb-24">See less</button>
        ) : (
            <button onClick={() => setMax(100)} className="main-btn mb-24">See more</button>
        )}
        </div>
    </div>
  )
}
