import React from 'react'

const Explore = () => {
  return (
    <div className='h-[90vh] flex justify-end items-center'
    style={{
        backgroundImage: "url('https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/section-bg-img.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}> 
      <div className='w-full h-full bg-black bg-opacity-50 flex justify-end items-center pr-10'>
       <div className='space-y-7 w-full px-3 lg:w-[50%]'>
            <h1 className='text-4xl text-white font-[600]'>Explore The World</h1>
            <p className='w-20 border-primary border-t-2'></p>
            <p className='text-white w-[95%] lg:w-[80%]'>Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi. Fert his. Recessit mentes praecipites locum caligine sui egens erat. Silvas caeli regna.</p>
            <button className='btn'>LEARN MORE</button>
        </div>
        </div>
    </div>
  )
}

export default Explore