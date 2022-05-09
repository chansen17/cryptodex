import React from 'react'
import { Link } from 'react-router-dom'

export default function FeaturedSection({heading, text, image, reverse, path, highlights, extendedText, subHeading, sectionTitle}) {

  return (
    <div className="w-full min-h-[50vh] my-6">
        <div className="max-w-[1360px] mx-auto">
          <div className="max-w-6xl mx-auto p-5">
            <h2 className="text-xl md:text-2xl font-semibold heading-gradient py-6  md:py-12">{sectionTitle}</h2>
              <div className={reverse ? "w-full h-full flex flex-col md:flex-row-reverse items-center justify-between" : "w-full h-full flex flex-col md:flex-row items-center justify-between "}>
                <div className="flex items-center justify-center">
                  <div className="max-w-sm md:max-w-md">
                    <img data-aos="fade-down" data-aos-duration="400" data-aos-delay="200" className="w-full object-cover" src={image} alt='..'/>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center text-left space-y-2">
                    <div data-aos="zoom-in-right" data-aos-duration="400" className="p-5 space-y-3 max-w-lg mx-auto">
                      <h2 className="text-4xl heading-gradient">{heading}</h2>
                      <p className="text-xl md:text-2xl text-gray-400">{text}</p>
                      <Link state={{heading, text, image, reverse, path, highlights, extendedText, subHeading}} to={path}><span className="text-pink-600 inline-block my-4 text-lg">Learn more</span></Link>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}
