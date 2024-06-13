import React from 'react'



function Education() {
  return (
    <div className='my-8'>
        <h1 className='text-3xl my-10 lg:text-5xl'>Education & Certifications</h1>
        <div className='flex flex-row flex-wrap justify-around'>
          <div className='flex flex-col '>
            <div className='my-5 flex flex-col gap-1 hover:bg-blue-900/50 p-4  border-white rounded-3xl'>
              <h1 className=' text-sm md:text-2xl'>2020 - 2021 </h1>
              <h2 className='md:text-3xl text-lg font-bold'> Higher Secondary Education</h2>
              <h2 className='text-sm md:text-3xl'>Gyandeep English School</h2>
              <p className=' text-sm md:text-xl opacity-70 font-extralight'>Gujarat India</p>
            </div>
            <div className='my-5 flex flex-col hover:bg-blue-900/50 p-4 rounded-3xl gap-1'>
              <h1 className='md:text-2xl text-sm'>2021 - 2025 <span className='bg-blue-600 px-2 p-1 rounded-2xl'>present</span> </h1>
              <h2 className='md:text-3xl text-lg font-bold'>UnderGraduation</h2>
              <div className='-mt-3 -mb-2 md:m-0'>
                <span className='text-sm md:text-xl bg-pink-600 px-2 py-[2px] rounded-3xl'>B.Tech Computer Engineering</span>
              </div>
              <h2 className='text-sm md:text-xl'>Swarrnim Startup & Innovation University</h2>
              <p className='text-sm md:text-xl opacity-70 font-extralight'>Gujarat India</p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-start'>
            <div className='flex flex-col hover:bg-blue-900/50 p-4 rounded-3xl my-5 items-start gap-1'>
              <h1 className='text-sm md:text-2xl'>2022</h1>
              <h1 className='text-lg md:text-3xl font-bold'>React & Frontend Library</h1>
              <p className='text-sm md:text-xl '>FreeCodeCamp</p>
            </div>
            <div className='flex flex-col hover:bg-blue-900/50 p-4 rounded-3xl my-5 items-start'>
              <h1 className='text-sm md:text-2xl'>2022</h1>
              <h1 className='text-lg md:text-3xl font-bold'>JavaScript & DSA</h1>
              <p className='text-sm md:text-xl'>FreeCodeCamp</p>
            </div>
            <div className='flex flex-col hover:bg-blue-900/50 p-4 rounded-3xl my-5 items-start'>
              <h1 className='text-sm md:text-2xl'>2023</h1>
              <h1 className='text-lg md:text-3xl font-bold'>Web3 development</h1>
              <p className='text-sm md:text-xl'>Alchemy University</p>
            </div>
            <div className='flex flex-col hover:bg-blue-900/50 p-4 rounded-3xl my-5 items-start'>
              <h1 className='text-sm md:text-2xl'>2023</h1>
              <h1 className='text-lg md:text-3xl font-bold'>Solana Blockchain Bootcamp</h1>
              <p className='text-sm md:text-xl'>Nas Academy</p>
            </div>
          </div>
        </div>    
    </div>
  )
}

export default Education