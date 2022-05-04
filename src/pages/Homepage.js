import React from 'react'
import BigFeature from '../components/BigFeature'
import FeaturedSection from '../components/FeaturedSection'
import Jumbotron from '../components/Jumbotron'
import Partners from '../components/Partners'
import TopCoins from '../components/TopCoins'
import features from '../data/features'

export default function Homepage() {
  return (
    <div className="w-full min-h-screen bg-slate-900">
        <Jumbotron/>
        <TopCoins/>
        {features.map(item => <FeaturedSection key={item.text} heading={item.heading} text={item.text} image={item.image} reverse={item.reverse} path={item.path} />)}
        <BigFeature/>
        <Partners/>
    </div>
  )
}
