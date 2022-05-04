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
    <div className="w-full min-h-[30vh]">
        <h2 className="text-2xl md:text-3xl heading-gradient py-6">Top coins</h2>
        <div className="ax-w-[800px] md:max-w-[100%] mx-auto overflow-x-scroll scrollbar-hide whitespace-nowrap p-5 flex md:justify-center space-x-5">
            <div className="max-w-md w-full p-5">
                <div className="flex flex-col items-center space-y-2 relative">
                    <img className="w-8 h-8 md:w-12 md:h-12 object-cover" src={btc.image?.small} alt="" />
                    <h2 className="flex items-center text-gray-600 text-2xl md:text-3xl"><FaDollarSign/>{btc.market_data?.current_price?.usd.toLocaleString()}</h2>
                </div>
            </div>
            <div className="max-w-md w-full p-5">
                <div className="flex flex-col items-center space-y-2 relative">
                    <img className="w-8 h-8 md:w-12 md:h-12 object-cover" src={eth.image?.small} alt="" />
                    <h2 className="flex items-center text-gray-600 text-2xl md:text-3xl"><FaDollarSign/>{eth.market_data?.current_price?.usd.toLocaleString()}</h2>
                </div>
            </div>
            <div className="max-w-md w-full p-5">
                <div className="flex flex-col items-center space-y-2 relative">
                    <img className="w-8 h-8 md:w-12 md:h-12 object-cover" src={xrp.image?.small} alt="" />
                    <h2 className="flex items-center text-gray-600 text-2xl md:text-3xl"><FaDollarSign/>{xrp.market_data?.current_price?.usd.toLocaleString()}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
