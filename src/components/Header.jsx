import React from 'react'
import Navbar from './Navbar'

const Header = ({imgUrl, label}) => {
  return (
    <section className='h-[98vh]'
    style={{
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      
      <div className='h-full bg-black bg-opacity-30'>
      <Navbar />
      <div className='flex items-center justify-center h-full'>
        <h1 className='text-4xl lg:text-7xl text-white font-[600]'>{label}</h1>
        </div>
      </div> 
    </section>
  )
}

export default Header