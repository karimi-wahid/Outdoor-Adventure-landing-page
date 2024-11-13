import React from 'react'
import Header from '../components/Header'
import ProjectList from '../components/ProjectList'
import { campingSlides, campingTexts, waterSlides, waterTexts ,winterSlides, winterTexts } from '../constants'
const Projects = () => {
  return (
    <div>
      <Header imgUrl={'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/project-background.jpg'} label={'Our Projects'}/>
      <ProjectList Slides={waterSlides} Texts={waterTexts} />
      <ProjectList Slides={winterSlides} Texts={winterTexts} />
      <ProjectList Slides={campingSlides} Texts={campingTexts} />
    </div>
  )
}

export default Projects