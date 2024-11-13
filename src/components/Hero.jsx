import Navbar from "./Navbar"


const Hero = () => {
  return (
    <section className='h-screen ' 
    style={{
        backgroundImage: "url('https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className=' bg-black bg-opacity-45 w-full h-screen'>
            <Navbar />
        <div className="flex items-center justify-center flex-col space-y-5 h-screen">
        <h1 className='text-white text-xl lg:text-4xl font-[600]'>Explore the Colourful World</h1>
        <p className='border border-primary w-20'></p>
        <h1 className='text-white text4xl lg:text-8xl font-[600]'>A Wonderful Gift</h1>
        <button className='btn'>Learn More</button>
        </div>
        </div>
    </section>
  )
}

export default Hero