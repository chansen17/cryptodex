import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCoins, FaBars, FaTimes, FaDotCircle } from 'react-icons/fa';

export default function Header({status}) {
    const [toggled, setToggled] = useState(false);

    const handleNavToggle = () => setToggled(!toggled);

  return (
    <nav className="w-full bg-slate-900 text-gray-400">
        <div className="max-w-[1700px] mx-auto flex items-center justify-between py-8 px-12">
            <div>
                <Link to="/">
                    <h2 className="text-2xl font-semibold flex items-center">
                        <FaCoins className="mr-2" color="cyan"/>
                        <span className="hidden md:flex">Cryptodex</span>
                    </h2>
                </Link>
            </div>
            <ul className="flex items-center justify-center space-x-4">
                <li className="hidden md:flex p-2 cursor-auto">
                    <span className="relative flex items-center">A<span className="mr-1">PI Status </span><FaDotCircle className="text-green-400 text-xs absolute -top-3 -right-3 animate-pulse" />{status.gecko_says}</span>
                </li>
                <li className="hidden md:flex p-2 cursor-pointer">
                    <Link to="/trending"><span className="font-medium tracking-wide text-lg :text-red-300">Trending</span></Link>
                </li>
                <li className="hidden md:flex p-2 cursor-pointer">
                    <Link to="/watchlist"><span className="font-medium tracking-wide text-lg :text-red-300">Watchlist</span></Link>
                </li>
                <li className="flex md:hidden p-2 cursor-pointer">
                    <div onClick={handleNavToggle} className="nav-btn"><FaBars/></div>
                </li>
            </ul>
            {/* mobile menu */}
            <div className={toggled ? "w-full h-[50vh] absolute top-0 left-0 flex justify-center items-center flex-col bg-slate-900 z-50 ease-in-out duration-200 py-6 shadow-lg shadow-green-200/20" : "absolute left-[-100%]"}>
                <div className="bg-slate-800 rounded-lg absolute top-5 right-5 flex items-center">
                    <span onClick={handleNavToggle} className="cursor-pointer p-4"><FaTimes className="text-white text-xl" /></span>
                </div>
                <ul className="flex flex-col">
                    <li onClick={() => handleNavToggle(!toggled)} className="p-2 cursor-pointer">
                        <Link to="/"><span className="text-green-300 font-medium tracking-wide text-3xl">Home</span></Link>
                    </li>
                    <li onClick={() => handleNavToggle(!toggled)} className="p-2 cursor-pointer">
                        <Link to="/trending"><span className="text-green-300 font-medium tracking-wide text-3xl">Trending</span></Link>
                    </li>
                    <li onClick={() => handleNavToggle(!toggled)} className="p-2 cursor-pointer">
                        <Link to="/watchlist"><span className="text-green-300 font-medium tracking-wide text-3xl">Watchlist</span></Link>
                    </li>
                    <li className="p-2 cursor-pointer">
                        <span className="relative flex items-center">A<span className="mr-1">PI Status </span><FaDotCircle className="text-green-400 text-xs absolute -top-3 -right-3 animate-pulse" />{status.gecko_says}</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
