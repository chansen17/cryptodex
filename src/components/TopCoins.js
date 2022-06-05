import { useEffect, useState } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import '@splidejs/react-splide/css/sea-green';

export default function TopCoins() {

  const [btc, setBtc] = useState('');
  const [eth, setEth] = useState('');
  const [xrp, setXrp] = useState('');

    const fetchBtc = async () => {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`);
        const data = await response.json();
        setBtc(data)
      }
    
      const fetchEth = async () => {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/ethereum`);
        const data = await response.json();
        setEth(data)
      }
    
      const fetchXrp = async () => {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/ripple`);
        const data = await response.json();
        setXrp(data)
      }
    
      useEffect(() => {
        fetchBtc();
        fetchEth();
        fetchXrp();
      }, []);
      
  return (
    <div className="w-full min-h-[40vh] bg-slate-800 text-gray-300 p-5">
          <h2 className="text-2xl md:text-3xl heading-gradient py-6">Top coins</h2>
        <section className="max-w-[1100px] mx-auto grid md:grid-cols-2 px-8">
        <div className="max-w-xl mx-auto md:text-left">
          <h2 className="text-3xl md:text-4xl">Top coins, alt coins, all coins</h2>
          <p className="text-xl md:text-2xl">Don't settle for Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="main-btn mx-auto my-4">Update price</button>
        </div>
        <div className="flex items-center justify-center flex-wrap space-x-6 my-6 md:my-0">
            <div className="">
                <div className="flex flex-col items-center space-y-2 relative">
                    <img className="w-8 h-8 md:w-12 md:h-12 object-cover" src={btc.image?.small} alt="" />
                    <h2 className="flex items-center text-gray-300 text-2xl md:text-3xl"><FaDollarSign/>{btc.market_data?.current_price?.usd.toLocaleString()}</h2>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col items-center space-y-2 relative">
                    <img className="w-8 h-8 md:w-12 md:h-12 object-cover" src={eth.image?.small} alt="" />
                    <h2 className="flex items-center text-gray-300 text-2xl md:text-3xl"><FaDollarSign/>{eth.market_data?.current_price?.usd.toLocaleString()}</h2>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col items-center space-y-2 relative">
                    <img className="w-8 h-8 md:w-12 md:h-12 object-cover" src={xrp.image?.small} alt="" />
                    <h2 className="flex items-center text-gray-300 text-2xl md:text-3xl"><FaDollarSign/>{xrp.market_data?.current_price?.usd.toLocaleString()}</h2>
                </div>
              </div>
          </div>
        </section>
    </div>
  )
}
