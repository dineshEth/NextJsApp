"use client";
import React from "react";
import {
  TextRevealCard,
} from "./ui/text-reveal";

function TextReveal() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10]  rounded-2xl">
    <TextRevealCard
    className=""
      text="You don't know me until you hover"
      revealText="dineshqprajapati@gmail.com"
    >
    </TextRevealCard>
  </div>
  )
}

export default TextReveal