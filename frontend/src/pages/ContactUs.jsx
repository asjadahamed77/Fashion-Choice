import React from 'react'
import Contact from '../components/Contact'

const ContactUs = () => {
  return (
    <div className='py-6 sm:mx-auto mx-4 sm:w-[90%]'>
      {/* Contact Details */}
      <div>
        {/* Title */}
        <div className="text-center">
        <h1 className="font-cursiveFont sm:text-5xl text-4xl ">
        Connect with Fashion Choice 
        </h1>
        <p className="font-headingFont mt-2 sm:text-base text-sm">
        We’re here to help! Reach out to us for any inquiries, and we’ll be in touch soon
        </p>
      </div>
      <div className='grid sm:grid-cols-2 mt-12 border gap-8'>
        <div className='flex flex-col gap-4 sm:p-12 p-4 pt-8'>
        <div>
          <p className='font-semibold text-xl'>Contact Information</p>
          <div className='text-gray-700 mt-2 text-sm sm:text-base '>
            <p className='font-medium'>Email: <span className='font-normal'>fashionChoice@gmail.com</span></p>
            <p className='font-medium'>Phone: <span className='font-normal'>+94 77 783 0823</span></p>
          </div>
        </div>
        <div>
          <p className='font-semibold text-xl'>Our Location</p>
          <div className='text-gray-700 mt-2 text-sm sm:text-base '>
            <p>13, Mathugama Road,</p>
            <p>Dharga Town</p>
          </div>
        </div>
        <div>
          <p className='font-semibold text-xl'>Opening Hours</p>
          <div className='text-gray-700 mt-2 text-sm sm:text-base '>
            <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 9:00 AM - 8:00 PM</p>
          </div>
        </div>
        </div>
        <div className='flex-1 h-[400px] sm:h-auto'>
       <iframe className='w-full h-full' src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=13,Mathugama%20Road,%20Dharga%20Town+(Fashion%20Choice)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
        </div>
      </div>
      </div>
      {/* Get in Touch */}
      <div>
        <Contact />
      </div>
    </div>
  )
}

export default ContactUs
