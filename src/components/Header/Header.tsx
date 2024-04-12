import React from 'react'
import TypewriterEffect from './TypewriterEffect'
import AnimatedTooltipCompo from './AnimatedTooltip'
import Image from 'next/image'
import profile from '@/assets/profile.png'

// 007C77  - grren color
// F092DD --pink
// ACC3A6 grren
function Header() {
  return (
    <div className=' w-full  justify-between items-center'>
      <div className='w-full  flex flex-col gap-8 justify-start items-start text-center'>
        <div className='flex flex-col mx-auto justify-center items-center'>
          <h2 className=' w-full text-3xl md:text-6xl max-w-[961px] mx-auto'>Creative <span className='bg-[#00A8E8] px-4 py-1 rounded-full'>Frontend</span> Enginner by
          </h2>
          <div className=''>
            <TypewriterEffect />
          </div>
        </div>
        <div className='flex flex-row mx-auto gap-4 justify-center items-center'>
          <button className='text-nowrap bg-[#03C988] hover:bg-[#03c987b0] text-black text-2xl px-4 py-1 rounded-md'>Hire me</button>
          <button className='text-nowrap border-[#03C988] border-[1px]  text-2xl px-4 py-1 rounded-md hover:bg-[#03C988] hover:text-white'>Portfolio</button>
        </div>
        <div className='my-10 flex mx-auto flex-row flex-wrap justify-center items-center gap-8'>
            <div className='mx-auto flex flex-col items-center gap-4'>
              <p className='bg-[#00A8E8] px-2 max-w-min text-nowrap rounded-full' >Our clients</p>
              <AnimatedTooltipCompo />
            </div>
            <div className='flex justify-center items-center rounded-md w-[460px] mx-atuo h-[360px] bg-[#03c9876c] -py-2 '>
              <Image 
              src={profile}
              // height={300}
              width={400}
              alt='Profile picture'
              className='rounded-md bg-[#03C988]'
               />
            </div>
            <div className='bg-[#00A8E8] pl-4 pr-8 flex  items-center  rounded-full'>
              <h1 className='text-8xl px-2 '>3 </h1>
              <p className='max-w-[100px] text-2xl px-2 '>Years of Experience</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header