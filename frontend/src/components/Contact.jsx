import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import img1 from '../assets/contact/contact1.jpg';
import img2 from '../assets/contact/contact2.jpg';
import img3 from '../assets/contact/contact3.jpg';
import { toast } from 'react-toastify';

const images = [img1, img2, img3]; // Array of images

const Contact = () => {
  const form = useRef();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userSubject, setUserSubject] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [currentImage, setCurrentImage] = useState(0); // State to keep track of current image

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Cycle through images
    }, 3000);

    return () => clearInterval(imageInterval); // Cleanup on unmount
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!userName || !userEmail || !userSubject || !userMessage) {
      toast.error("Please fill all fields");
      return;
    }

    emailjs
      .sendForm(
        'service_bunjhld',
        'template_c1boh0s',
        form.current,
        'WYXQSE5AHKZn-rSzX'
      )
      .then(
        () => {
          toast.success("Mail Sent Successfully");
          setUserName('');
          setUserEmail('');
          setUserMessage('');
          setUserSubject('');
        },
        (error) => {
          toast.error("Error sending mail. Try again later.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="relative my-12">
      <img
        className="w-full h-[80vh] object-cover transition-opacity duration-1000"
        src={images[currentImage]} // Dynamically select image
        alt="Contact"
      />
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      <form ref={form} onSubmit={sendEmail} className="absolute inset-0 flex items-center text-white">
        <div className="text-center sm:max-w-[500px] max-w-[350px] mx-auto bg-black p-4 rounded-md bg-opacity-20 border border-white">
          <h1 className="font-cursiveFont sm:text-5xl text-4xl">Get in Touch with Us</h1>
          <p className="font-headingFont mt-2 text-xs sm:text-sm">
            We’d love to hear from you! Fill out the form below, and we’ll get back to you soon.
          </p>
          <div className="mt-6 font-medium flex flex-col gap-2">
            <input
              type="text"
              placeholder="Enter your name"
              name="user_name"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              className="p-2 pl-4 w-full bg-transparent font-medium text-sm border border-gray-500 rounded outline-black"
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="user_email"
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
              className="p-2 pl-4 w-full bg-transparent font-medium text-sm border border-gray-500 rounded outline-black"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={userSubject}
              onChange={(e) => setUserSubject(e.target.value)}
              className="p-2 pl-4 w-full bg-transparent font-medium text-sm border border-gray-500 rounded outline-black"
              required
            />
            <textarea
              placeholder="Type your message"
              name="message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="p-2 pl-4 text-sm w-full resize-none h-[120px] overflow-y-scroll border border-gray-500 rounded bg-transparent outline-black"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full mt-2 py-3 text-sm bg-white text-black rounded hover:opacity-60 duration-300 transition-all"
            >
              Submit Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
