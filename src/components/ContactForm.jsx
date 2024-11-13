import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ContactForm = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center my-10 space-y-5'>
            <form action="" className='w-[70%] space-y-5'>
                <h1 className='text-4xl font-[600] mb-5'>We're Ready, Let's Talk.</h1>
                <input type="text" placeholder='Your Name' className='input' />
                <input type="text" placeholder='Email Address' className='input' />
                <textarea cols={5} rows={5} className='input' placeholder='Massage'></textarea>
                <button className='btn'>Send Massage</button>
            </form>
            <div className='w-2/4 space-y-5'>
                <h1 className='text-2xl font-[700]'>Contact Info</h1>
                <div>
                    <p className='font-[600] text-xl mb-2'>Address</p>
                    <p className='text-tertiary'>123 Fifth Avenue, KB 10160, Kabul, AFG</p>
                </div>
                <div>
                    <p className='font-[600] text-xl mb-2'>Email Us</p>
                    <p className='text-tertiary'>contact@example.com</p>
                </div>
                <div>
                    <p className='font-[600] text-xl mb-2'>Call Us</p>
                    <p className='text-tertiary'>800-123-456</p>
                </div>
                <div>
                    <p className='font-[600] text-xl mb-2'>Follow Us</p>
                    <div className='flex gap-2'>
                        <Link to='#' className='text-white text-2xl bg-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-secondary'><FaFacebookF /></Link>
                        <Link to='#' className='text-white text-2xl bg-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-secondary'><FaTwitter /></Link>
                        <Link to='#' className='text-white text-2xl bg-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-secondary'><FaYoutube /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm