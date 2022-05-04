import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import partners from '../data/partners';

export default function Partners() {
  return (
    <div className="w-full min-h-[40vh] text-gray-500 py-12 overflow-hidden">
      <div className="max-w-[1360] mx-auto">
      <h2 className="text-center text-4xl pt-12 heading-gradient">Working with the best in the industry</h2>
        <div className="">
            <Splide className="max-w-2xl mx-auto" options={{
              pagination: false,
              perPage: 3,
              arrows: false,
              loop: true,
              autoplay: true,
              type: 'loop'
            }}>
            {partners.map(partner => (
              <SplideSlide key={partner.name}>
                <div className="flex flex-col items-center">
                <img className="w-full h-16 object-contain" src={partner.image} alt=".."/>
                <p className="capitalize my-2 text-gray-600">{partner.name}</p>
              </div>
            </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  )
}
