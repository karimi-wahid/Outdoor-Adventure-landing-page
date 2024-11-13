import React from 'react'
import ImageSlider from './ImageSlider'

const ProjectList = ({Slides, Texts}) => {
  return (
    <div className='px-10 my-10'>
        <div>
        <div className='flex items-center gap-5 mb-5'>
        <p className='font-[600]'>{Texts.type}</p>
        <p className='border-t-4 border-primary w-20'></p>
        </div>

        <h1 className='text-4xl font-[700] mb-2'>{Texts.title}</h1>
        <p className='text-tertiary'>{Texts.text}</p>

        <ImageSlider slides={Slides}/>
        </div>
    </div>
  )
}

export default ProjectList