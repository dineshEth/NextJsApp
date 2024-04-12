import React from 'react'
import Image from 'next/image'
import  profile  from '@/assets/profile.png'
import CardStackCompo from '../CardStack'

function About() {
  return (
    <div className='w-full my-4 p-4 bg-[#000] text-white'>
        <div className='flex flex-row gap-8 justify-evenly items-start flex-wrap'>
            <div 
            className='w-full max-w-[300px] pt-3 -pl-3 bg-[#00A8E8] rounded-md'>
                <Image 
                src={profile}
                height={300}
                width={300}
                alt='Profile'
                className='bg-[#03C988] rounded-md '
                />
            </div>
            {/* <div className='py-4 relative left-0 right-0'>
                <CardStackCompo />
            </div> */}
            <div className='w-full max-w-[400px] flex flex-col justify-between items-stretch gap-2'>
                <h2 className='text-[#03C988] text-2xl'>About Me</h2>
                <h1 className='text-3xl md:text-4xl'> Why did you chooose me??</h1>
                <p className='text-white text-wrap text-xl'>Based in <span className='text-[#03C988]'>India,</span> I am a dedicated Frontend developer with 3 year of hands-on experience in crafting enagaging and responsive web applications.</p>
                <p className='text-white text-wrap text-xl'>My passion lies in desgining modern UI that not only look sleek but also enhance user interactions. Continuously seeking to expand my knowledge and skills, I am thrive on challenges and am committed to delivering top-notch user experiences. Explore my portfolios to see some of my latest projects and get in touch to collaborate on your next web development venture.</p>

                <button className='text-nowrap bg-[#03C988] hover:bg-[#03c987b0] text-black text-2xl px-4 py-1 rounded-md'>Download CV</button>

            </div>
        </div>
        
        

    </div>
  )
}

export default About