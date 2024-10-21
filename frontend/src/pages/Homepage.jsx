import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import AboutHero from '../components/AboutHero'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <AboutHero />
    </div>
  )
}

export default Homepage
