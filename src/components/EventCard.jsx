import React from 'react'

const EventCard = ({card, btnText}) => {
    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 place-items-center px-3 space-y-5'>
            {card.map((item, index) => (
            <div className='lg:w-[500px] place-items-center' key={index}>
                <img src={item.imgUrl} alt={item.title}
                    className='w-full h-[300px] rounded-md mb-5 border-r-8 border-b-8 border-neutral-200' />
                <h1 className='text-xl font-[600] mb-2'>{item.title}</h1>
                <p className='mb-5 text-center text-tertiary'>{item.paragraph}</p>
                {btnText == 'Learn More' ? <button className='btn'>LEARN MORE</button> : ''}
                
            </div>
            ))}
        </div>
    )
}

export default EventCard