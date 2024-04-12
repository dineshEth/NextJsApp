import React from 'react'
import {Roboto} from 'next/font/google'

const roboto = Roboto({
    subsets:['latin'],
    weight:'500',
    
})
function page() {
  return (
    <div className={`${roboto.className} text-4xl text-center`}>Contact Me</div>
  )
}

export default page