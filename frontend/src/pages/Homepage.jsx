import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import AboutHero from '../components/AboutHero'
import OurPromise from '../components/OurPromise'
import Directors from '../components/Directors'
import Contact from '../components/Contact'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <AboutHero />
      <OurPromise />
      <Directors />
      <Contact />
    </div>
  )
}

export default Homepage
