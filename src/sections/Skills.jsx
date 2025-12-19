import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { DiVisualstudio } from 'react-icons/di';
import { FaGit, FaGithub, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { SiC, SiCanva, SiCplusplus, SiExpress, SiFigma, SiJavascript, SiMongodb, SiMysql, SiNumpy, SiPandas, SiPython, SiScikitlearn, SiSpringboot, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  const skills = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <SiCplusplus/>, name: "C++" },
  { icon: <SiC/>, name: "C" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiSpringboot />, name: "Spring Boot" },
  { icon: <SiNumpy />, name: "NumPy" },
  { icon: <SiPandas />, name: "Pandas" },
  { icon: <SiScikitlearn />, name: "Scikit-learn" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "SQL" },
  ];
  const repeat = [...skills,...skills]
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth/3); // width of one set
    }
  }, []);

  return (
    <section id="skills" className="pt-10 pd-10 flex w-full h-[25vw] justify-center items-center relative bg-black text-white overflow-hidden transition-all">
      <div className='absolute inset-0'>
      <div className='absolute -top-32 -left-32
      w-[20vw] sm:w-[20vw] md:w-[20vw]
      h-[20vw] sm:h-[20vw] md:h-[20vw]
      max-w-[500px] max-h-[500px]
      rounded-full, blur-[100px]
      bg-linear-to-r from-[#1e3c72] to-[#2a5298]
      opacity-30
      animate-pulse'>
      </div>
      <div className='absolute bottom-0 right-0
      w-[20vw] sm:w-[20vw] md:w-[20vw]
      h-[20vw] sm:h-[20vw] md:h-[20vw]
      max-w-[500px] max-h-[500px]
      rounded-full, blur-[100px]
      bg-linear-to-r from-[#1e3c72] to-[#2a5298]
      opacity-30
      animate-pulse delay-1000
      '>
      </div>
      </div>
      <div>
          <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center text-transparent bg-clip-text text-8xl sm:text-5xl mb-6 bg-linear-to-r from-indigo-400 to-indigo-500 relative z-10">Skills</h2>
        <div className='relative w-full overflow-hidden py-3 pb-5'>
          <motion.div ref={containerRef} className='flex gap-10 text-5xl text-indigo-500'
          animate={{ x: [0, width] }}
    transition={{ repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }}>
            {
              repeat.map((s,i)=>(
                <div key={i} className='flex flex-col items-center gap-2 min-w-[120px]' title={s.name}>
                  <span className='hover:scale-125 transition-transform duration-300'>
                    {s.icon}
                  </span>
                  <span className='text-sm'>
                    {s.name}
                  </span>
                </div>
              ))
            }
          </motion.div>
        </div>
      </div>
      
    </section>
  )
}

export default Skills
