import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="flex w-full min-h-screen justify-center items-center relative bg-black text-white overflow-hidden transition-all px-6 sm:px-12 py-20">
      
      {/* Background Glows */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] bg-gradient-to-r from-[#1e3c72] to-[#2a5298] opacity-30 animate-pulse'></div>
        <div className='absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] bg-gradient-to-r from-[#1e3c72] to-[#2a5298] opacity-30 animate-pulse delay-1000'></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-col gap-10">
        {/* Heading */}
        <h2 className="w-full text-center mb-4
        font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-transparent bg-clip-text text-8xl sm:text-5xl bg-gradient-to-r from-indigo-400 to-indigo-500">
          Contact Me
        </h2>

        {/* Contact Form */}
        <form className="flex-1 flex flex-col gap-4 bg-gray-900 p-6 rounded-xl shadow-lg">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-400 transition-colors duration-300 px-6 py-2 rounded font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
