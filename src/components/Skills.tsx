import React from 'react'
import { HoverEffect } from "./ui/card-hover";
import { aws, vercel, reactjs, nodejs, js, html } from '@/assets/index';
import Image from 'next/image';
function Skills() {
  return (
        <div className="w-full mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
  )
}

export default Skills

export const projects = [
    {
      title: "JavaScript",
      imageUrl:(
        <Image 
        className='max-w-[60px] max-h-[60px]'
        src={js}
        alt='Javascript'
        />
      )
    },
    {
      title: "AWS",
      imageUrl:(
        <Image 
        className='max-w-[60px] max-h-[60px]'
        src={aws}
        alt='Javascript'
        />
      )
    },
    {
      title: "NodeJS",
      imageUrl:(
        <Image 
        className='max-w-[60px] max-h-[60px]'
        src={nodejs}
        alt='Javascript'
        />
      )
    },
    {
      title: "ReactJS",
      imageUrl:(
        <Image 
        className='max-w-[60px] max-h-[60px]'
        src={reactjs}
        alt='Javascript'
        />
      )
    },
    {
      title: "Vercel",
      imageUrl:(
        <Image 
        className='max-w-[60px] max-h-[60px]'
        src={vercel}
        alt='Javascript'
        />
      )
    },
    {
      title: "HTML",
      imageUrl:(
        <Image
        className='max-w-[60px] max-h-[60px]' 
        src={html}
        alt='Javascript'
        />
      )
    },
    {
        title: "JavaScript",
        imageUrl:(
          <Image 
          className='max-w-[60px] max-h-[60px]'
          src={js}
          alt='Javascript'
          />
        )
      },
      {
        title: "AWS",
        imageUrl:(
          <Image 
          className='max-w-[60px] max-h-[60px]'
          src={aws}
          alt='Javascript'
          />
        )
      },
      {
        title: "NodeJS",
        imageUrl:(
          <Image 
          className='max-w-[60px] max-h-[60px]'
          src={nodejs}
          alt='Javascript'
          />
        )
      },
      {
        title: "ReactJS",
        imageUrl:(
          <Image 
          className='max-w-[60px] max-h-[60px]'
          src={reactjs}
          alt='Javascript'
          />
        )
      },
      {
        title: "Vercel",
        imageUrl:(
          <Image 
          className='max-w-[60px] max-h-[60px]'
          src={vercel}
          alt='Javascript'
          />
        )
      },
      {
        title: "HTML",
        imageUrl:(
          <Image
          className='max-w-[60px] max-h-[60px]' 
          src={html}
          alt='Javascript'
          />
        )
      },
  ];
  