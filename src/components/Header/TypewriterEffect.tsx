import React from 'react'
import {TypewriterEffectSmooth } from '../ui/typewriter-effect';

function TypewriterEffect() {
    const words = [
        {
          text: "Dinesh",
          className: "text-white text-3xl md:text-5xl",

        },
        {
          text: "Prajapati",
          className: "text-white text-3xl md:text-5xl",

        },
        {
          text: 'based in',
          className: 'text-white text-3xl md:text-5xl'
        },
        {
          text: "India",
          className: "text-[#eb5e28] text-3xl md:text-5xl  ",  
        }
      ];
  return (
    <div className='w-full mx-auto text-center'>
        <TypewriterEffectSmooth words={words} className='text-wrap hidden md:flex'   />
    </div>
  )
}

export default TypewriterEffect