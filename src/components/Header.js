import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCoins, FaBars } from 'react-icons/fa';

export default function Header() {

  return (
    <nav className="w-full bg-slate-900 text-gray-400">
        <div className="max-w-[1700px] mx-auto flex items-center justify-between p-5">
            <div>
                <Link to="/">
                    <h2 className="text-3xl font-semibold tracking-wide flex items-center">
                        <FaCoins className="mr-2" color="cyan"/>
                        <span className="hidden md:flex">Cryptodex</span>
                    </h2>
                </Link>
            </div>
            <ul className="flex items-center justify-center space-x-4">
                <li className="hidden md:flex p-2 cursor-pointer">
                    <Link to="/trending"><span className="font-medium tracking-wide text-lg">Trending</span></Link>
                </li>
                <li className="hidden md:flex p-2 cursor-pointer">
                    <Link to="/watchlist"><span className="font-medium tracking-wide text-lg">Favorites</span></Link>
                </li>
                <li className="hidden md:flex p-2 cursor-pointer">
                    <Link to="/faq"><span className="font-medium tracking-wide text-lg"><button className="text-white">F.A.Qs</button></span></Link>
                </li>
                <li className="flex md:hidden p-2 cursor-pointer">
                    <button className="text-white text-2xl"><FaBars/></button>
                </li>
            </ul>
        </div>
    </nav>
  )
}
