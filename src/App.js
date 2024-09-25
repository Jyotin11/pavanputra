import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import FeatureProperties from './components/Home/FeatureProperties'
import FindByLocations from './components/Home/FindByLocations'


export default function App() {
  return (
    <>
    <Navbar />
    <Banner/>
    <FeatureProperties/>
    <FindByLocations/>

    </>
  )
}
