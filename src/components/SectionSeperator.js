import React from 'react'

export default function SectionSeperator({heading, btnText}) {
  return (
    <div className="w-full pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
            <h2 className="text-center text-4xl md:text-5xl lg:text-6xl heading-gradient">{heading}</h2>
            {/* <div className="text-2xl text-gray-400 mt-6 max-w-[200px] mx-auto">{btnText}</div> */}
        </div>
    </div>
  )
}
