import React from 'react';
import '../App.css';
import HeroSection from '../components/Hero/HeroSection';
import Cards from '../components/Cards/Cards'

const Home = () => {
  return (
        <div>
          <HeroSection />
          <Cards />
        </div>
  )
}

export default Home;