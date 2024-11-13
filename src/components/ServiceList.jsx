import EventCard from "./EventCard"
import { serviceListCard } from "../constants"
import YourBenefit from "./YourBenefit"


const ServiceList = () => {
  return (
    <section className='my-10'>
      <div className='my-10 flex items-center justify-center flex-col space-y-10'>
        <div className='space-y-4 flex items-center justify-center flex-col mb-5'>
          <h1 className='text-2xl lg:text-5xl font-[600]'>It's Time to Start Your Adventures</h1>
          <p className='w-28 text-center border-b-4 border-primary'></p>
          <p className='text-center text-tertiary text-xl w-[70%]'>
            Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus ullamcorpe pulvinar.
          </p>
        </div>
        <EventCard  card={serviceListCard}/>

        <YourBenefit />
      </div>
    </section>
  )
}

export default ServiceList