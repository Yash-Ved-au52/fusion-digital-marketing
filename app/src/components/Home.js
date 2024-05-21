import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Contact from './Contact'; // Import the Contact component
import Service from './Service';

export default function Home() {
  return (
    <div>
{/* Hero Section */}
<section className="pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-between min-h-screen mt-8">
  {/* Top Heading */}
  <div className="text-center mb-10">
    <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
      <span className="text-pink-700">Welcome</span> to Our Digital Marketing Company
    </h1>
  </div>
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center flex-1">
    {/* Image */}
    <div className="mb-8 lg:mb-0 lg:mr-8 flex-shrink-0">
      <img
        className="h-96 w-auto"
        src="https://firebasestorage.googleapis.com/v0/b/fusion-digital-marketing.appspot.com/o/2918517.webp?alt=media&token=953bfcb9-f8bb-4a0c-919c-c1b67d0a788c" // Replace with your image URL
        alt="Digital Marketing Image"
      />
    </div>
    {/* Text and Button */}
    <div className="text-center lg:text-left max-w-lg">
      <p className="mt-4 text-xl text-gray-600">
        We help businesses grow with our innovative digital marketing strategies.
      </p>
      <div className="mt-8">
        <a
          href="#contact"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-pink-700"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </div>
</section>




{/* About Section */}
<section id="about" className="py-20 bg-white relative">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h4 className="text-3xl font-bold text-gray-900">About Us</h4>
      <p className="mt-4 text-lg text-gray-600">
        We are a team of dedicated professionals committed to helping your business succeed online.
      </p>
    </div>
    <div className="flex flex-wrap -mx-4 relative">
      <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
        <p className="text-gray-600">
          Our mission is to provide top-notch digital marketing services that drive results and help our clients achieve their business goals.
        </p>
      </div>
      <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
        <p className="text-gray-600">
          We envision a world where businesses of all sizes can leverage the power of digital marketing to reach their full potential.
        </p>
      </div>
      {/* Vertical Line */}
      <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 top-0 h-full border-l border-gray-300"></div>
    </div>
  </div>
</section>


{/* Services Section */}
<Service/>

{/*Contact section*/}
<Contact/>
        
  {/* Footer Section */}
  <footer className="py-16 bg-gray-800 text-white">
  <div className="mb-4 lg:mb-0 flex items-center justify-center">
  <a
    href="https://www.instagram.com/fusion.digital.marketing?igsh=czFodzQxOTBiY3Zl"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white mr-2 group"
    style={{ backgroundColor: 'transparent' }}
  >
    <FontAwesomeIcon
      icon={faInstagram}
      size="2x"
      className="transition duration-300 ease-in-out transform group-hover:scale-110"
      style={{ backgroundColor: 'transparent' }}
    />
  </a>
</div>


        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="text-left mb-4 lg:mb-0">
            <div className="my-1">
              <a href="tel:+919587291326" className="text-xs lg:text-sm text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out">Call Us: +919587291326</a>
            </div>
            <div className="my-1">
              <a href="https://wa.me/9587291326" target="_blank" rel="noopener noreferrer" className="text-xs lg:text-sm text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out underline">WhatsApp me</a>
            </div>
            <div className="my-1">
              <a href="mailto:fusion.digital.marketing01@gmail.com" className="text-xs lg:text-sm text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out">Email: fusion.digital.marketing01@gmail.com</a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-center lg:text-right">
            <div className="flex flex-col">
              <div className="my-1">
                <a href="#about" className="text-xs lg:text-sm text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out underline">About</a>
              </div>
              <div className="my-1">
                <a href="#services" className="text-xs lg:text-sm text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out underline">Services</a>
              </div>
              <div className="my-1">
                <a href="#contact" className="text-xs lg:text-sm text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out underline">Contact</a>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs lg:text-sm text-gray-300 mt-8">
          &copy; 2024 by Fusion digital marketing. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
   
