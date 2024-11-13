import React from 'react'
import EventCard from './EventCard'
import { upcomingEventCard } from '../constants'
upcomingEventCard

const UpcomingEvents = () => {
  return (
    <section className='my-10'>
        <div className='lg:w-[85%] flex gap-10 items-center justify-center'>
            <img src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/quote-1.png" alt="quote"
            className='w-[100px] items-start hidden lg:block' />
            <p className='text-center '>
                <span className='block text-xl mb-3'>"Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris."</span>
                <span>-Adam Sendler</span>
            </p>
        </div>
        <div className='my-10 flex items-center justify-center flex-col space-y-10'>
            <div className='space-y-4 flex items-center justify-center flex-col'>
            <h1 className='text-4xl font-[600]'>Upcoming Events</h1>
            <p className='w-20 text-center border-b-2 border-primary'></p>
            </div>

            <EventCard card={upcomingEventCard} btnText={'Learn More'}/>
        </div>
        
    </section>
  )
}

export default UpcomingEvents