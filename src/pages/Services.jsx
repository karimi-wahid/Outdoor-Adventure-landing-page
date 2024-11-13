import Header from '../components/Header'
import ServiceList from '../components/ServiceList'

const Services = () => {
  return (
    <div className='bg-neutral-100'>
      <Header imgUrl={'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/services-bg.jpg'} label={'Services'} />
      <ServiceList />
    </div>
  )
}

export default Services