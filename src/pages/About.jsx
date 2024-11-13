import React from 'react'
import Header from '../components/Header'
import OurMission from '../components/OurMission'

const About = () => {
  return (
    <div className='bg-slate-100'>
      <Header imgUrl={'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/about-bg-5.jpg'} label={'Who We Are ?'}/>
      <OurMission />
    </div>
  )
}

export default About