import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ParticlesBackground from '../components/ParticlesBackground';
import Swal from 'sweetalert2';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "e980b632-5468-44a7-b31f-e7aee200ce0e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    if(data.success){
      Swal.fire({
        title: "Success",
        text: "Message sent successfully",
        icon: "success"
      })
    }
    else{
      Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
    }
  };
  return (
    <section id="contact" className="flex w-full min-h-screen justify-center items-center relative bg-black text-white overflow-hidden transition-all px-6 sm:px-12 py-20">
      <ParticlesBackground/>
      {/* Background Glows */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] bg-gradient-to-r from-[#1e3c72] to-[#2a5298] opacity-30 animate-pulse'></div>
        <div className='absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] bg-gradient-to-r from-[#1e3c72] to-[#2a5298] opacity-30 animate-pulse delay-1000'></div>
      </div>
      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-col gap-8">
        <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center text-transparent bg-clip-text text-8xl sm:text-5xl bg-linear-to-r from-indigo-400 to-indigo-500 relative z-10">Get In Touch
        <div className="w-30 h-1 bg-white mx-auto my-2 rounded-full"></div>
        </h2>
        {/* Contact Form */}
        <form onSubmit={onSubmit} className="flex-1 flex flex-col gap-4 bg-gray-900 p-6 rounded-xl shadow-lg">
          <div className="text-center mb-4">
             <h2 className="font-black text-[30px] sm:text-[36px] text-transparent bg-clip-text bg-gradient-to-r          from-indigo-400 to-indigo-500">
               Let’s Connect
             </h2>
          </div>

          <input name="name" type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
          <input name="email" type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
          <textarea name="message" placeholder="Your Message" rows={5} className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-400 transition-colors duration-300 px-6 py-2 rounded font-semibold">
            Send Message
          </button>
        </form>
        <p className="text-white/70 text-sm       leading-relaxed text-center">
          © 2025 Ryan.
          <br />
          Built with React, Tailwind CSS, and Framer Motion.
          </p>
      </div>
    </section>
  );
};

export default Contact;
