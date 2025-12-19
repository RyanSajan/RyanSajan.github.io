import React, { useEffect, useRef } from 'react'

const ParticlesBackground = () => {
    const canvasRef=useRef(null);
    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx= canvas.getContext("2d")
        let particles=[]
        const particleCount = 40
        const colours = "white"
        class Particle{
            constructor(){
                this.x=Math.random()*canvas.width
                this.y=Math.random()*canvas.height
                this.radius=Math.random()*2+1;
                this.color = colours
                this.speedX = (Math.random()-0.5)*0.5
                this.speedY = (Math.random()-0.5)*0.5
            }
            draw(){
                ctx.beginPath();
                ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
                ctx.shadowBlur =10;
                ctx.shadowColor=this.color;
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            update(){
                this.x+=this.speedX;
                this.y+=this.speedY;
                //wrap around
                if(this.x<0){
                    this.x=canvas.width;
                }
                if(this.x>canvas.width){
                    this.x=0
                }
                if(this.y<0){
                    this.y=canvas.height;
                }
                if(this.y>canvas.height){
                    this.y=0;
                }
                this.draw();
            }
        }
        function createParticle(){
            particles=[]
            for(let i=0;i<particleCount;i++){
                particles.push(new Particle());
            }
        }
        function canvasResize(){
            canvas.width=window.innerWidth;
            canvas.height=window.innerHeight;
            createParticle();
        }
        canvasResize();
        window.addEventListener('resize',canvasResize);
        let animationId;
        function animate(){
            ctx.clearRect(0,0,canvas.width,canvas.height);//erases the previous frame // start canvasx,y,w,h
            particles.forEach((p)=>p.update())
            animationId = requestAnimationFrame(animate);//call animate again in queue
        }
        animate();
        return ()=>{
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize',canvasResize);
        }

    },[])
  return (
    
    <canvas ref={canvasRef} className='w-full h-full pointer-events-none absolute top-0 left-0 z-0'/>
  )
}

export default ParticlesBackground
