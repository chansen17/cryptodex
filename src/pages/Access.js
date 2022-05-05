import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Access() {
  const location = useLocation();
  return (
    <div className="w-full h-screen bg-slate-900">
        <div className="max-w-[1360px] mx-auto p-5">
            <h2 className="text-5xl">{location.state.heading}</h2>
            <section className="flex items-center justify-between">
              <div className="max-w-lg mx-auto">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus odit tempora facilis fuga voluptatum ullam, excepturi quas reprehenderit assumenda veniam perferendis et atque non explicabo quasi ab! Voluptatem, labore? Nam?</p>
              </div>
              <div>
                <div>
                  <img src="" />
                </div>
              </div>
            </section>
        </div>
    </div>
  )
}
