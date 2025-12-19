import React, { useMemo } from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'



const socials = [
  {Icon:FaLinkedin, label:"LinkedIn", href:"https://www.linkedin.com/in/ryan-sajan-varughese-811642394/"},
  {Icon:FaGithub, label:"GitHub", href:"https://github.com/RyanSajan"},

]

const Home = () => {
  const roles = useMemo(()=>["Software Engineer", "Full stack developer","Hopefully an AI engineer"],[])

  const [index,setIndex]= React.useState(0);
  const [subIndex,setSubIndex] = React.useState(0);
  const [deleting,setDeleting]= React.useState(false);
  React.useEffect(()=>{
    const currentRole = roles[index];
    const timeout = setTimeout(()=>{
      if(!deleting && subIndex<currentRole.length){
        setSubIndex(v=>v+1)
      }
      else if(!deleting && subIndex===currentRole.length){
        setTimeout(()=>{
          setDeleting(true)
        },1200)
      }
      else if(deleting && subIndex>0){
        setSubIndex(v=>v-1)
      }
      else if(deleting && subIndex===0){
        setTimeout(()=>{
          setIndex(v=>(v+1)%roles.length)
          setDeleting(false)
        },0)
      }

    }, deleting? 40:60)
    return ()=>{clearTimeout(timeout)}
  },[subIndex,index,deleting,roles])
  return (
    <section id="home" className='w-full h-screen overflow-hidden bg-black relative'>
    <ParticlesBackground/>
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
    {/* text and image */}
    <div className='relative flex w-full h-full max-w-7xl    mx-auto px-4 lg:grid-cols-1 md:grid-cols-2'>
      {/* text */}
      <div className='flex flex-col justify-center  h-full text-center lg:text-left relative'>

          <div className='w-full lg:pr-24  mx-auto max-w-3xl'>

              <motion.div className='text-xl mb-3 sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]'
              initial={{opacity:0, y:12}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6}}>

                <span>{roles[index].substring(0,subIndex)}
                </span>

                <span className='inline-block w-[2px] ml-1 bg-white animate-pulse align-middle'
                style={{height:"1em"}}>

                </span>
              </motion.div>
              <motion.h1 className='text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text bg-linear-to-r from-indigo-400 to bg-indigo-500' 
              initial={{opacity:0, y:40}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6}}>Welcome, I'm
                <br/>
                <span className='text-white font-bold text-5xl sm:text-6xl md:7xl lg:8xl'>
                  Ryan Sajan Varughese
                </span>
              </motion.h1>
              <motion.p className='mt-6 w-xl text-base text-gray-300 max-auto px-auto text-justify align-middle max-w-2xl'
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.4, duration:0.6}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint iure dicta laudantium veritatis distinctio eaque corporis, minus temporibus adipisci placeat eligendi debitis quis consequatur quasi repellat! Est, id hic.
              </motion.p>
              <motion.div className='mt-9 flex gap-7 items-center'
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:0.4, duration:0.6}}>
                  <a href="#projects" className='px-5 py-3 rounded-full font-medium bg-linear-to-r from-indigo-500 via-indigo-600 to-blue-600 hover:scale-102 transition-all'> 
                      View My Work
                  </a>
                  <a href='https://drive.google.com/file/d/1NP2AAshHH5RThz0ZO2WYq9nuw1G5ehjd/view?usp=sharing' target='_blank' className='px-5 py-3 rounded-full font-medium bg-white text-black hover:scale-102 transition-all'>
                      My Resume
                  </a>
              </motion.div>
              <motion.div className='mt-10 flex gap-5 text-2xl items-center'
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:0.4, duration:0.6}}>
                    {socials.map(({Icon,label,href})=>(
                      <motion.a href={href} key={label} target="_blank" rel="noopener noreferrer" className='text-white hover:scale-110 transition-all text-3xl hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                      >
                        <Icon/>
                      </motion.a>
                    ))}
              </motion.div>
          </div>
      </div>
      <div className='flex justify-center items-center ml-20'>
        <motion.img src="/pfp.jpg" alt="My Photo" className='w-110 h-110 rounded-full object-cover items-center align-middle'/>
      </div>
    </div>
    </section>
  )
}

export default Home
