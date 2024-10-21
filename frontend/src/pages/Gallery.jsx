import React from 'react';
import { collections } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate()
  return (
    <div className='sm:w-[90%] sm:mx-auto mx-4 py-12'>
      {/* Text */}
      <div className='text-center mb-12'>
        <h1 className='md:text-5xl text-3xl font-cursiveFont font-semibold'>
          Explore the Look: Fashion Choice Gallery
        </h1>
        <p className='font-headingFont font-light sm:text-lg text-xs mt-2'>
          From casual to couture, explore collections that define your wardrobe
        </p>
      </div>

      {/* Show Images in Grid */}
      <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
        {collections.slice(0,28).map((item, index) => (
          <div
            key={index}
            className='relative overflow-hidden group cursor-pointer'
            onClick={(()=>{navigate(`/product/${item._id}`)})}
          >
            <img
              src={item.productImage}
              alt={item.productName}
              className='w-full h-[300px] object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500 ease-in-out'
            />
            {/* Overlay for Product Name */}
            <div className='absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center'>
              <p className='text-white font-headingFont text-lg'>
                {item.productName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
