import ContactForm from '../components/ContactForm'
import Header from '../components/Header'


const Contact = () => {
  return (
    <div>
      <Header imgUrl={'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/about-bg-2.jpg'} label={'Contact Us'}/>
      <ContactForm />
    </div>
  )
}

export default Contact