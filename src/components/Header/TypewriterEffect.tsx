import React from 'react'
import {TypewriterEffectSmooth } from '../ui/typewriter-effect';

function TypewriterEffect() {
    const words = [
        {
          text: "Dinesh",
          className: "text-white",

        },
        {
          text: "Prajapati",
          className: "text-white",

        },
        {
          text: "India",
          className: "text-[#eb5e28]  ",  
        }
      ];
  return (
    <div className='w-full mx-auto text-center'>
        <TypewriterEffectSmooth words={words}   />
    </div>
  )
}

export default TypewriterEffect