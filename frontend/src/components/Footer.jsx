import React from 'react'
import fb_icon from "../assets/Logo and Icons/facebook.png";
import insta_icon from "../assets/Logo and Icons/instagram.png";
import whatsapp_icon from "../assets/Logo and Icons/whatsapp.png";

import logo from '../assets/Logo and Icons/Fashion Choice Logo.png'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='border-t mt-8 py-8 sm:px-12 px-8 grid  sm:gap-20 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]'>
      <div>
        <img className='w-[300px]' src={logo} alt="" />
        <p className='text-gray-700 mt-4 text-sm leading-6'>Fashion Choice is your destination for timeless elegance and contemporary style. We curate premium collections that blend tradition with modern trends, empowering you to express confidence and beauty in every outfit. Whether for everyday wear or special occasions, Fashion Choice ensures quality, versatility, and sustainability in every piece.</p>
      </div>
      <div>
        <p className='font-bold text-lg '>QUICK LINKS</p>
        <hr className='w-12 h-1 bg-black rounded-full border-0 outline-0 mt-1' />
        <ul className='mt-4 text-sm flex flex-col gap-2'>
          <li className='cursor-pointer hover:pl-4 duration-300 transition-all text-gray-700 hover:text-gray-500' onClick={()=>{navigate('/');window.scrollTo(0,0)}}>HOME</li>
          <li className='cursor-pointer hover:pl-4 duration-300 transition-all text-gray-700 hover:text-gray-500' onClick={()=>{navigate('/collections');window.scrollTo(0,0)}}>COLLECTIONS</li>
          <li className='cursor-pointer hover:pl-4 duration-300 transition-all text-gray-700 hover:text-gray-500' onClick={()=>{navigate('/gallery');window.scrollTo(0,0)}}>GALLERY</li>
          <li className='cursor-pointer hover:pl-4 duration-300 transition-all text-gray-700 hover:text-gray-500' onClick={()=>{navigate('/about-us');window.scrollTo(0,0)}}>ABOUT US</li>
          <li className='cursor-pointer hover:pl-4 duration-300 transition-all text-gray-700 hover:text-gray-500' onClick={()=>{navigate('/contact-us');window.scrollTo(0,0)}}>CONTACT US</li>
        </ul>
      </div>
      <div>
        <p className='font-bold text-lg '>GET IN TOUCH</p>
        <hr className='w-12 h-1 bg-black rounded-full border-0 outline-0 mt-1' />
        <div className='mt-4  gap-2 text-gray-700 flex flex-col'>
        
            <p className='font-semibold'>Email:  <span className='text-gray-500 text-sm font-normal'>fashionChoice45@gmail.com</span></p>
           
            <p className='font-semibold'>Phone:  <span className='text-gray-500 text-sm font-normal'>+94 77 783 0823
            </span></p>
           
            <p className='font-semibold'>Location: <span className='text-gray-500 text-sm font-normal'>No.13, Mathugama Road, <br />Dharga Town</span></p>
            
          
        
        </div>
      </div>
      <div>
        <p className='font-bold text-lg '>SOCIAL MEDIA</p>
        <hr className='w-12 h-1 bg-black rounded-full border-0 outline-0 mt-1' />
        <div className='flex gap-4 mt-4'>
          <img className='w-8 hover:border-black hover:border-2 transition-all duration-500 hover:p-1 hover:rounded-full ' src={fb_icon} alt="" />
          <img className='w-8 hover:border-black hover:border-2 transition-all duration-500 hover:p-1 hover:rounded-full ' src={insta_icon} alt="" />
          <img className='w-8 hover:border-black hover:border-2 transition-all duration-500 hover:p-1 hover:rounded-full ' src={whatsapp_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
