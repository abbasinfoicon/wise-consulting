import React from 'react'
import About from '../components/home/About'
import Slider from '../components/home/Slider'
import About2 from '../components/home/About2'
import CTA from '../components/home/CTA'
import Project from '../components/home/Project'
import Quote from '../components/home/Quote'
import Services from '../components/home/Services'
import Testimonial from '../components/home/Testimonial'
import Partner from '../components/home/Partner'
import Blog from '../components/home/Blog'


const Home = () => {
  return (
    <>
    <div className="main-content">
        <Slider />
        
        <About />
        
        <Services />
        
        <About2 />
        
        <Project />

        <Quote />
        
        <CTA />
        
        <Testimonial />

        <Blog />

        <Partner />
    </div> 
    </>
  )
}

export default Home