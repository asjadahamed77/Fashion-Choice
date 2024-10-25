import React, { useState, useEffect } from "react";
import img1 from "../assets/about hero/about1 Large.jpeg";
import img2 from "../assets/about hero/about2 Large.jpeg";
import img3 from "../assets/about hero/about3 Large.jpeg";
import { useNavigate } from "react-router-dom";

const images = [img1, img2, img3];

const AboutHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full sm:h-[50vh] h-[75vh]"> 
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 z-10">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="font-cursiveFont xl:text-7xl md:text-5xl sm:text-3xl text-4xl text-center leading-[50px] font-bold">
            Elevate Your Style with Timeless Fashion
          </h1>
          <p className="font-headingFont font-light mt-4 text-center lg:w-[60%] md:w-[70%] sm:text-base text-xs leading-[22px] w-[80%]">
            At Fashion Choice, we believe in the art of fashion—where every piece tells a story. Our curated collections celebrate the beauty of tradition while embracing modern aesthetics, ensuring that you find the perfect outfit for every occasion.
          </p>
          <button onClick={()=>{navigate('/collections');window.scrollTo(0,0)}} className="bg-transparent sm:px-6 px-4 sm:py-2 py-1.5 text-sm sm:text-base mt-6 border-2 hover:text-black rounded font-headingFont hover:bg-white transition-all duration-300">
            Explore Our Collections
          </button>
        </div>
      </div>
      
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={images[currentImageIndex]}
        alt="Fashion Choice Background"
      />
    </div>
  );
};

export default AboutHero;
