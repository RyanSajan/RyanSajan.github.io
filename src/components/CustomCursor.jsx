import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position,setPosition]=useState({x:0,y:0});
  useEffect(()=>{
      function moveHandler(e){
        setPosition({x:e.clientX,y:e.clientY});
      }
      window.addEventListener('mousemove',moveHandler);
      return ()=>{
        window.removeEventListener('mousemove',moveHandler);
      }
  })
  return (
    <div className='top-0 left-0 z-9999 pointer-events-none fixed' 
      style={{transform:`translate(${position.x}px,${position.y}px)`}}>
      <div className='h-10 w-10 rounded-full bg-linear-to-r from-white to-blue-400 blur-2xl'>

      </div>
      
    </div>
  )
}

export default CustomCursor
