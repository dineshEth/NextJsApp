import React from "react";
import { Meteors } from "./ui/meteors";
 
export function MeteorsDemo(
    {
        children,
        className,
    } : 
    {
        children? :React.ReactNode,
        className ?: string
    }
) {
  return (
    <div className={`w-full ${className}`} >
      <div className=" w-full relative ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          
          {children}
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={40}  />
        </div>
      </div>
    </div>
  );
}