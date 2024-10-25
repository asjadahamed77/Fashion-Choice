import React from "react";
import Directors from "../components/Directors";

import img1 from '../assets/aboutUs/about1.jpeg'
import img2 from '../assets/aboutUs/about2.jpeg'
import img3 from '../assets/aboutUs/about3.jpeg'

const AboutUs = () => {
  return (
    <div className="py-8 sm:mx-auto mx-4 sm:w-[90%]">
      {/* Title Text */}
      <div className="text-center">
        <h1 className="font-cursiveFont sm:text-5xl text-4xl ">
          Welcome to Fashion Choice
        </h1>
        <p className="font-headingFont mt-2 sm:text-base text-sm">
          Empowering your journey with us
        </p>
      </div>
      {/*  Display Mission and Vision */}
      <div className="flex flex-col sm:gap-10 gap-4 mt-8">
        {/* Mission */}
        <div className="flex items-center gap-20 border-l-8 border border-black">
          <div className="p-8">
          <h1 className="font-semibold text-xl">Our Mission</h1>
          <hr className='w-12 h-1 bg-black rounded-full border-0 outline-0 mt-1' />
          <p className="text-gray-600 mt-4 sm:text-base text-sm ">At Fashion Choice, we aim to redefine fashion by blending elegance with comfort, offering curated collections that empower individuals to express their unique style. Our commitment is to provide quality, authenticity, and an inspiring shopping experience that connects with every customer’s distinct sense of fashion</p>
          </div>
          <div className="hidden xl:block">
            <img className="" src={img1} alt="" />
          </div>
        </div>
        {/* Vision */}
        <div className="flex items-center gap-20 border-r-8 border border-black">
        <div className="hidden xl:block">
          <img src={img2} alt="" />
        </div>
        <div className="p-8">
        <h1 className="font-semibold text-xl">Our Vision</h1>
        <hr className='w-12 h-1 bg-black rounded-full border-0 outline-0 mt-1' />
          <p className="text-gray-600 mt-4 sm:text-base text-sm ">Fashion Choice envisions a world where fashion transcends trends, fostering self-expression through timeless style and quality craftsmanship. We strive to build a sustainable future, inspiring confidence in every customer and redefining how style shapes personal identity and community connection</p>
        </div>
        </div>
      </div>
      {/* Our Story */}
      <div className="mt-6 flex items-center gap-20 border-l-8 border border-black">
    <div className="p-8">
    <h1 className="font-semibold text-xl">Our Story</h1>
        <hr className='w-12 h-1 bg-black rounded-full border-0 outline-0 mt-1' />
        <p className="text-gray-600 mt-4 sm:text-base text-sm ">Founded in 2007, Fashion Choice began as a small boutique driven by a desire to bring quality, style, and individuality into the lives of our customers. What started as a passion project has grown into a beloved brand known for blending classic elegance with contemporary flair. From day one, we committed to creating timeless pieces that empower personal expression, with each collection reflecting our dedication to quality craftsmanship. As we continue to grow, our mission remains rooted in inspiring confidence and connection through fashion, celebrating the uniqueness of every individual who wears our designs</p>
    </div>
    <div className="hidden xl:block">
      <img className="w-[1250px]" src={img3} alt="" />
    </div>
      </div>
      {/* Directors Section */}
      <div className="my-6">
        <Directors />
      </div>
    
    </div>
  );
};

export default AboutUs;
