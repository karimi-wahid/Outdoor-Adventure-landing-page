import React from 'react'

const UpcomingTour = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 mt-10 w-[95%]'>
        <div className='space-y-5 w-full lg:w-[80%] pl-10 py-16'>
            <h1 className='text-4xl font-[600]'>Upcoming Tours <br /> & Destination</h1>
            <p className='border-t-2 border-primary w-20'></p>
            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris. Sinistra possedit litora ut nabataeaque. Setucant coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque constaque cepit sublime flexi nullus.</p>

            <button className='btn'>LEARN MORE</button>
        </div>
        <div className='grid grid-cols-2 gap-5 py-16'>
            <div className='w-full h-full'>
                <img src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2021/02/outdoor-image-01.jpg" alt="image1" />
            </div>
            <div className='row-span-2'>
                <img src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/snow-1.jpg" alt="image2" />
            </div>
            <div className='row-span-2'>
                <img src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/image-1.jpg" alt="image3" />
            </div>
            <div>
                <img src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2021/02/outdoor-image-04.jpg" alt="image4" />
            </div>
        </div>
    </div>
  )
}

export default UpcomingTour