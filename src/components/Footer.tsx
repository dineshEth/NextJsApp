import React from 'react'
import { MeteorsDemo } from './Meteros'
import Image from 'next/image'
import profile  from '@/assets/GTjIA0cB_3.jpg'
import TextReveal from './TextReveal'
import Link from 'next/link'

function Footer() {
  return (
    // <MeteorsDemo className='w-full' >
    <div className='bg-[#32174D] pt-10 flex flex-col gap-4'>
        <div className='w-full flex-wrap gap-y-8  flex flex-row items-center justify-evenly'>
            <div className='flex flex-col justify-start items-start'>
                <p className='text-orange-500 text-4xl'>India</p>
                <div className='flex flex-row gap-4 items-center'>
                    <Image 
                    src={profile}
                    alt=''
                    className='w-[40px] h-[40px] rounded-full'
                    />
                    <h1 className="text-2xl">Dinesh :)</h1>
                </div>
                <p className=''>Frontend Developer</p>
            </div>
            <div className='flex px-2 text-sm md:text-xl flex-row flex-wrap gap-4 md:flex-col '>
                <Link href={'/'}>
                    Home
                </Link>
                <Link href={'/projects'}>
                   Projects
                </Link>
                <Link href={'/contact'}>
                    Contact Me
                </Link>
            </div>
            <MeteorsDemo className='max-w-min hidden md:inline-block'>
            <div className=''>
                    <p className='text-white text-center'>Say Hello at</p>
                    <h1 className='text-4xl bg-black/45 p-4 rounded-3xl'>dineshqprajapati@gmail.com</h1>
            </div> 
           </MeteorsDemo>
        </div>
        <div className='flex flex-row flex-warp justify-around items-start'></div>
        <p className='text-lg md:text-3xl text-center bg-black w-full p-1'>Copyright &copy; 2024 Dinesh Prajapati. All rights reserved</p>
     </div>
    // </MeteorsDemo>
  )
}

export default Footer