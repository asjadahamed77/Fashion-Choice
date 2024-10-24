import React from 'react'
import img1 from '../assets/OurPromise/promise1.jpeg'
import img2 from '../assets/OurPromise/promise2.jpeg'
import img3 from '../assets/OurPromise/promise3.jpeg'

const OurPromise = () => {
  return (
    <div className='py-12'>
      {/* Title */}
      <div id="our-collections" className="text-center">
        <h1 className="font-cursiveFont sm:text-5xl text-4xl ">
          Crafted for Timeless Beauty
        </h1>
        <p className="font-headingFont mt-2 sm:text-base text-sm">
          Each piece is designed to make you feel confident and beautiful, blending tradition with contemporary style
        </p>
      </div>
      
      {/* Boxes with background images */}
      <div className='sm:mx-auto mx-12 sm:w-[90%] gap-4 md:gap-6 lg:gap-8 xl:gap-10 text-center mt-12 grid sm:grid-cols-3'>
        <div 
          className='relative bg-slate-50 p-8 lg:p-12 lg:px-10 rounded-xl text-white overflow-hidden'
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Black shadow overlay */}
          <div className='absolute inset-0 bg-black opacity-50'></div>
          
          <div className='relative z-10'>
            <h2 className='font-bold text-2xl mb-4'>Uncompromised Quality</h2>
            <p className='text-xs sm:text-sm italic text-gray-200 bg-black bg-opacity-50 p-2 rounded'>
              Every stitch, fabric, and detail reflects our commitment to excellence. We carefully select premium materials to ensure that each piece stands the test of time, both in style and durability.
            </p>
          </div>
        </div>

        <div 
          className='relative bg-slate-50 p-8 lg:p-12 lg:px-10 rounded-xl text-white overflow-hidden'
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Black shadow overlay */}
          <div className='absolute inset-0 bg-black opacity-50'></div>
          
          <div className='relative z-10'>
            <h2 className=' font-bold text-2xl mb-4'>Sustainable Style</h2>
            <p className='text-xs sm:text-sm italic text-gray-200 bg-black bg-opacity-50 p-2 rounded'>
              At Fashion Choice, we prioritize sustainability. Our pieces are designed with the environment in mind, blending timeless fashion with eco-conscious choices that look good and do good.
            </p>
          </div>
        </div>

        <div 
          className='relative bg-slate-50 p-8 lg:p-12 lg:px-10 rounded-xl text-white overflow-hidden'
          style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Black shadow overlay */}
          <div className='absolute inset-0 bg-black opacity-50'></div>
          
          <div className='relative z-10'>
            <h2 className='font-bold text-2xl mb-4'>Empowering Confidence</h2>
            <p className='text-xs sm:text-sm italic text-gray-200 bg-black bg-opacity-50 p-2 rounded'>
              We believe that fashion is not just about wearing clothes but expressing yourself with confidence. Our designs are crafted to help you feel empowered, elegant, and ready to own your moment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPromise;
