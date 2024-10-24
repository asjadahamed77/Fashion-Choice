import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import AboutHero from '../components/AboutHero'
import OurPromise from '../components/OurPromise'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <AboutHero />
      <OurPromise />
    </div>
  )
}

export default Homepage
