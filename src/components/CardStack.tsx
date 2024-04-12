"use client";
import React from 'react'
import { CardStack } from "./ui/card-stack";
import { cn } from "@/utils/cn";
import Image from 'next/image';
import profile from '@/assets/profile.png'

export const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
          className
        )}
      >
        {children}
      </span>
    );
  };


const CARDS = [
    {
      id: 0,
      name: "",
      designation: "",
      content: (
        <Image 
        src={profile}
        // height={100}
        // width={100}
        alt='Profile'
        />
      ),
    },
    {
      id: 1,
      name: "",
      designation: "",
      content: (
        <Image 
        src={profile}
        // height={100}
        // width={100}
        alt='Profile'
        />
      ),
    },
    {
      id: 2,
      name: "",
      designation: "",
      content: (
        <Image 
        src={profile}
        // height={100}
        // width={100}
        alt='Profile'
        />
      ),
    },
  ];

function CardStackCompo() {
  return (
    <div className='flex   items-center justify-center w-full'>
        <CardStack items={CARDS}  className={'min-h-max min-w-max p-0'} />
    </div>
  )
}

export default CardStackCompo