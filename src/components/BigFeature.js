import React from 'react'
import { Link } from 'react-router-dom'

export default function BigFeature() {
  return (
    <div className="w-full my-12 bg-slate-800 pb-12">
        <div className="h-full flex flex-col items-center justify-center p-5">
            <div className="my-9">
                <h2 className="text-3xl md:text-4xl lg:text-5xl heading-gradient">Research coins with real data</h2>
                <p className="text-xl text-gray-400 italic py-4">Informed decisions make for better investments.</p>
                <Link to="trending">
                    <button>Get started</button>
                </Link>
            </div>
            <div className="max-w-[960px]">
                <img className="rounded w-full shadow-lg shadow-cyan-400/20 object-cover" src="/assets/images/coins.png" alt="feature" />
            </div>
        </div>
    </div>
  )
}
