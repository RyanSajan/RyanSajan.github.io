import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen relative bg-black text-white overflow-hidden transition-all">
      <div className='absolute inset-0'>
      <div className='absolute -top-32 -left-32
      w-[70vw] sm:w-[50vw] md:w-[40vw]
      h-[70vw] sm:h-[50vw] md:h-[40vw]
      max-w-[500px] max-h-[500px]
      rounded-full, blur-[100px]
      bg-linear-to-r from-[#1e3c72] to-[#2a5298]
      opacity-30
      animate-pulse'>
      </div>
      <div className='absolute bottom-0 right-0
      w-[70vw] sm:w-[50vw] md:w-[40vw]
      h-[70vw] sm:h-[50vw] md:h-[40vw]
      max-w-[500px] max-h-[500px]
      rounded-full, blur-[100px]
      bg-linear-to-r from-[#1e3c72] to-[#2a5298]
      opacity-30
      animate-pulse delay-1000
      '>
      </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center gap-12">

        
        {/* Image on the left */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/pfp.jpg"
            alt="My Photo"
            className="w-90 h-90 sm:w-90 sm:h-90 rounded-full object-cover border-4  border-indigo-500"
          />
        </motion.div>

        {/* Text on the right */}
        <motion.div
          className="flex-1 items-center text-center justify-centerflex-1 flex flex-col justify-center text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center text-transparent bg-clip-text text-8xl sm:text-5xl mb-6 bg-linear-to-r from-indigo-400 to bg-indigo-500">About Me
            <div className="w-20 h-1 bg-white mx-auto my-2 rounded-full"></div>
          </h2>
          <p className="text-gray-300 mb-4 text-justify font-medium">
            Hi! I’m Ryan Sajan Varughese. I am currently a student at the International Institute of Information Technology, Bangalore, where I am pursuing an Integrated M.Tech in Computer Science.
          </p>
          <p className="text-gray-300 mb-4 text-justify font-medium">
           I am passionate about chess and actively participate in competitions and club activities. I enjoy applying strategic thinking from chess to problem-solving in technology projects.
          </p>
          <p className="text-gray-300 mb-4 text-justify font-medium">
            I enjoy building websites and creating software projects, and I am eager to explore the field of AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
