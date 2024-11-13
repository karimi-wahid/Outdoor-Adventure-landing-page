
import Explore from '../components/Explore'
import Hero from '../components/Hero'
import UpcomingEvents from '../components/UpcomingEvents'
import UpcomingTour from '../components/UpcomingTour'

const Home = () => {
  return (
    <div className='bg-neutral-100 '>
      <Hero />
      <UpcomingEvents />
      <Explore />
      <UpcomingTour />
    </div>
  )
}

export default Home