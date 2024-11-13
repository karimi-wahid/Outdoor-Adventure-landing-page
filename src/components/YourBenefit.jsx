import React from 'react'

const YourBenefit = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center py-10 px-5'>
      <div className='w-full mt-5 lg:mt-0 lg:w-[70%] space-y-5'>
        <h1 className='text-2xl font-[600]'>Why Outdoor Adventure</h1>
        <p className='border-t-4 border-primary w-20'></p>
        <p className='text-tertiary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <p>
          <span className='text-primary font-bold mr-3'>--</span>
          <span>Experience: Locavit liberioris possedit</span>
        </p>
        <p>
          <span className='text-primary font-bold mr-3'>--</span>
          <span>Reputation: Diremit mundi mare undae</span>
        </p>
        <p>
          <span className='text-primary font-bold mr-3'>--</span>
          <span>Guide Experience: Spectent tonitrua mutastis</span>
        </p>
      </div>
      <div className='w-full mt-5 lg:mt-0 lg:w-[70%] space-y-5'>
        <h1 className='text-2xl font-[600]'>What You Get</h1>
        <p className='border-t-4 border-primary w-20'></p>
        <p className='text-tertiary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <p>
          <span className='text-primary font-bold mr-3'>--</span>
          <span>Private Hike: Locavit liberioris possedit</span>
        </p>
        <p>
          <span className='text-primary font-bold mr-3'>--</span>
          <span>Transportation: Diremit mundi mare undae</span>
        </p>
        <p>
          <span className='text-primary font-bold mr-3'>--</span>
          <span>Great Facilities: Spectent tonitrua mutastis</span>
        </p>
      </div>
    </div>
  )
}

export default YourBenefit