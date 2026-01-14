import React from 'react'
import { useEffect, useState } from "react";

export default function CustomCursor() {
   const [ripples, setRipples] = useState([]);

   function handleMove(e){
     const ripple = {
       x: e.clientX,
       y: e.clientY,
       id: Date.now() + Math.random(),
     };

     setRipples((prev) => [...prev.slice(-8), ripple]);
   };
  useEffect(() => {

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
   

  return (
    <>
    {ripples.map((r ) => (
        <div 
          key={r.id}
          className="pointer-events-none fixed z-[9999]
            w-8 h-8 rounded-full text-white
            border border-cyan-400 dark:border-cyan-800
            shadow-[0_0_15px_rgba(34,211,238,0.6)]
            animate-ripple flex items-center justify-center"
          style={{ left: r.x - 10, top: r.y - 10}}
        >
          <span className='block w-2 h-2 bg-white rounded-full'/>
        </div>
      ))}
        
    </>
  )
}
