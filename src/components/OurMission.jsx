import React from 'react'

const OurMission = () => {
    return (
        <div className='w-[95%] px-5 my-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center py-10'>
                <div className='space-y-5 w-full lg:w-[80%]'>
                    <h1 className='text-3xl font-[600]'>Our Mission</h1>
                    <p className='border-t-2 border-primary w-20'></p>
                    <p className='text-tertiary'>Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit.</p>
                    <p className='text-tertiary'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className='w-full mt-5 lg:mt-0 lg:w-[90%]'>
                    <img src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2021/02/outdoor-image-02.jpg"
                        className='h-[350px]' alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center py-16'>
                <div className='w-full lg:w-[80%] space-y-5'>
                    <h1 className='text-2xl font-[600]'>Extraordinary Experiences</h1>
                    <p className='border-t-2 border-primary w-20'></p>
                    <p className='text-tertiary'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='text-tertiary'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className='w-full mt-5 lg:mt-0 lg:w-[70%] space-y-5'>
                    <h1 className='text-2xl font-[600]'>Our Core Values</h1>
                    <p className='border-t-2 border-primary w-20'></p>
                    <p className='text-tertiary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <p>
                        <span className='text-primary font-bold mr-3'>--</span>
                        <span>Locavit liberioris possedit</span>
                    </p>
                    <p>
                        <span className='text-primary font-bold mr-3'>--</span>
                        <span>Diremit mundi mare undae</span>
                    </p>
                    <p>
                        <span className='text-primary font-bold mr-3'>--</span>
                        <span>Spectent tonitrua mutastis</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurMission