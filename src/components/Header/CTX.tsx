import React from 'react'

function CTX() {
    const data = [
        {
            score:'03',
            name:'Certifciation'
        },
        {
            score:'40+',
            name:'Projects'
        },
        {
            score:'3',
            name:'Years Experience'
        },
        {
            score:'10+',
            name:'confrence attain'
        }
    ]
  return (
    <div className='w-full rounded-md bg-white text-black '>
        <div className='flex flex-row gap-4 flex-wrap justify-around'>
        {data.map((data: {score:string, name: string})=>(
            <div key={data.name} className='flex flex-col items-center justify-center gap-2 my-2 py-2'>
                <h2 className='text-4xl text-[#00A8E8] font-sans font-bold'>{data.score}</h2>
                <p className='font-bold'>{data.name}</p>
            </div>
        ))}
        </div>
        
    </div>
  )
}

export default  CTX
