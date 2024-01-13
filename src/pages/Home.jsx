import React from 'react'
// import Card from '../components/Card'
import HeartSection from '../components/HeartSection'
import DiabetesSection from '../components/DiabetesSection'
import NeuroSection from '../components/NeuroSection'
import Slider from '../components/Slider'
import Team from '../components/Team'

const Home = () => {
  return (
    <>
    {/* <Card/> */}
    <Slider/>
    <HeartSection/>
    <DiabetesSection/>
    <NeuroSection/>
    <Team/>
    </>
  )
}

export default Home