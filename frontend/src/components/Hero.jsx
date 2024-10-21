import React, { useState, useEffect } from 'react';
import img1 from '../assets/Hero Images/hero1.jpg';
import img2 from '../assets/Hero Images/hero2.jpg';
import img3 from '../assets/Hero Images/hero3.jpg';
import img4 from '../assets/Hero Images/hero4.jpg';

const Hero = () => {

  const images = [img1, img2, img3, img4];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* ----- Hero Images -------- */}
      <div className="relative">
        {/* Display the current image */}
        <img className="w-full h-[90vh] object-cover transition-opacity duration-1000" src={images[currentImageIndex]} alt="Hero" />

        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 flex justify-center items-center bg-black opacity-55"></div>

        {/* Text Container */}
        <div className="absolute inset-0 flex flex-col justify-center text-white items-start w-[80%] mx-auto">
          <h1 className="font-cursiveFont lg:text-8xl md:text-7xl sm:text-6xl text-4xl">
            Define Your Style,<br /> Elevate Your Wardrobe
          </h1>
          <p className="font-headingFont w-[80%] md:text-lg mt-2 sm:text-base text-sm">
            Discover the finest collections crafted for elegance, comfort, and sophistication. Your fashion, your choice.
          </p>
          <a href='#our-collections' className="bg-transparent sm:px-6 px-4 sm:py-2 py-1.5 text-sm sm:text-base mt-6 border-2 hover:text-black rounded font-headingFont hover:bg-white transition-all duration-300">
            Explore Our Collections
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
