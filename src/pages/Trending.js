import { useState, useEffect } from 'react';
import {NavLink } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size'
import { FaDollarSign, FaPercent, FaPercentage } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Trending() {
    const width = useWindowWidth();
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCoins = async () => {
        setLoading(true);
        // check if coins exists in local storage
        const check = localStorage.getItem('coins');
        // if coins do exist in local storage, parse items and set as state ELSE create new local storage items
        if(check) {
            setCoins(JSON.parse(check));
            setLoading(false);
            // console.log('coins in local storage', coins);
        }
        else {
            setLoading(true);
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
            const data = await response.json();

            // create new local storage
            localStorage.setItem('coins', JSON.stringify(data));
            setCoins(data);
            setLoading(false);
            // console.log('created coins in local storage', coins);
        }
    }

    useEffect(() => {
        fetchCoins();
    }, []);


        
  return (
    <div className="w-full bg-slate-900 min-h-screen relative">
        <div className="fixed bottom-0 w-full h-[15vh] bg-gradient-to-t from-slate-900" />
        <div id="container" className="max-w-[1500px] mx-auto p-5">
            <div className="max-w-5xl mx-auto my-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold"><span className="text-gray-200">The Easiest Way to</span> <br/> <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-green-300">Track Multiple Currencies</span></h2>
                <p className="my-6 text-xl text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Hic recusandae voluptatem aliquam.</p>
            </div>
            {/* input container */}
            <div className="my-12 max-w-sm mx-auto text-gray-300">
                <input className="w-full py-2 px-3 text-lg rounded bg-transparent outline-none border-b-2 border-cyan-400 border-opacity-50 focus:border-opacity-100 shadow-lg" type="text" placeholder="Search cryptocurrencies" />
            </div>
            {/* end input container */}
            <section className="py-6">
            {coins ? coins?.map((coin) => (
            <NavLink to={`/details/${coin.id}`} key={coin.id}>
                <div className="grid gap-2 grid-cols-3 md:grid-cols-4 text-left text-slate-50 font-light text-sm md:text-lg lg:text-xl my-6 py-6 px-2 rounded-xl cursor-pointer border-b-2 border-gray-800/70 hover:border-gray-700/70">
                    <div className="flex items-center space-x-4">
                        <img className="w-6 h-6 md:w-12 md:h-12 object-cover" src={coin.image} alt={`${coin.name} logo`} />
                        <div className="">
                            <p className="font-semibold uppercase">{coin.symbol}</p>
                            <p>{coin.name}</p>
                        </div>
                    </div>
                    {/* price */}
                    <div className="font-semibold flex flex-col items-start">
                        <p className="font-light">Current Price</p>
                        <p className={coin.price_change_24h > 0 ? "flex items-center text-green-300" : "flex items-center text-red-300"}><FaDollarSign/>{coin.current_price}</p>
                    </div>
                    {/* end prcice */}
                    {/* marketcap */}
                    <div className=" md:inline-block flex flex-col items-center">
                        <p>Market Cap</p>
                        <p className="font-semibold flex items-center">{coin.market_cap.toLocaleString()}</p>
                    </div>
                    {/* end marketcap */}
                    {/* 24h change */}
                    <div className="hidden md:inline-block flex-col items-center">
                        <p className="flex justify-end">24h change</p>
                        <p className={coin.market_cap_change_percentage_24h > 0 ? "font-semibold flex items-center justify-end text-green-200" : "font-semibold flex items-center justify-end text-red-300"}>% {" "}{coin.market_cap_change_percentage_24h.toFixed(2)}</p>
                    </div>
                    {/* end 24h change */}
                </div>
            </NavLink>
            )) : <div>
                <Skeleton count={3} baseColor="#cecece" />
            </div> }
            </section>
        </div>
    </div>
  )
}
