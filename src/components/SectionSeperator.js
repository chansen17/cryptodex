import React from 'react'

export default function SectionSeperator({heading, btnText}) {
  return (
    <div className="w-full py-24">
        <div className="max-w-2xl mx-auto">
            <h2 className="text-center text-6xl heading-gradient">{heading}</h2>
            <div className="text-2xl text-gray-400 mt-6 max-w-[200px] mx-auto">{btnText}</div>
        </div>
    </div>
  )
}
