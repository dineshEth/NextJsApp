import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import profile from '@/assets/GTjIA0cB_3.jpg'
import Link from 'next/link'


function Project() {
    const router = useRouter()
  return (
    <div className='w-full'>
            <h1 className='text-5xl my-20'>Projects & Experience</h1>
        <div className='w-full my-8 flex flex-wrap flex-row justify-evenly items-center '>
            <div className='max-w-[320px] relative '>
            <div className='rounded-3xl flex flex-col p-4  transition-all duration-1000 text-[16px] absolute left-0 right-0 top-0 bottom-0 hover:backdrop-blur-lg'>
                    <h1 className=''>Title</h1>
                    <p>description</p>
                    <Link  href={'https://www.google.com'}>visit Project</Link>
                </div>
                <Image 
                src={profile}
                alt=''
                className='  rounded-3xl'
                />
            </div>
            <div className='max-w-[320px] relative'>
            <div className='rounded-3xl flex flex-col p-4  transition-all duration-1000 text-[16px] absolute left-0 right-0 top-0 bottom-0 hover:backdrop-blur-lg'>
                    <h1 className=''>Title</h1>
                    <p>description</p>
                    <Link  href={'https://www.google.com'}>visit Project</Link>
                </div>
            <Image 
                src={profile}
                alt=''
                className='rounded-3xl '
                />
            </div>
            <div className='max-w-[320px] relative rounded-3xl'>
                <div className='rounded-3xl flex flex-col p-4  transition-all duration-1000 text-[16px] absolute left-0 right-0 top-0 bottom-0 hover:backdrop-blur-lg'>
                    <h1 className=''>Title</h1>
                    <p>description</p>
                    <Link  href={'https://www.google.com'}>visit Project</Link>
                </div>
            <Image 
                src={profile}
                alt=''
                className='rounded-3xl '
                />
            </div>
        </div>
        <div className='bg-pink-600 mx-auto w-[90%] p-2 flex flex-row justify-between items-center'>
            <h1 className='text-md md:text-xl'>40+ Projects</h1>
            <button onClick={()=> router.push('/projects')} className='text-center bg-blue-600 text-black px-4 py-2 rounded-full'> Explore More</button>
        </div>
    </div>
  )
}

export default Project