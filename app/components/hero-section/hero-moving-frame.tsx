"use client";
import React, { useEffect, useState } from "react";
import {easeInOut, motion} from 'framer-motion'
import Image from "next/image";
import useWindowSize from "@/app/_hooks/useWindowSize";
const HeroMovingFrame = () => {
  const [currentIndex,setCurrentIndex]=useState(0)

  const frames = [
    { src: "/images/hero-monkey-1.png", position: "left" },
    { src: "/images/hero-monkey-2.png", position: "center" },
    { src: "/images/hero-monkey-3.png", position: "right" },
  ];

  useEffect(()=>{
   let interval=setInterval(()=>{
    setCurrentIndex((prev:number)=>(prev +1) % frames.length)
        
    },2000)
    return ()=>clearInterval(interval)
  },[])

  const getPosition =(index:number)=>{

    const position={
      left:{x:isMobile?-50:-120,opacity:0.65,scale:0.8},
      center:{x:0,opacity:1,zIndex:1,scale:1},
      right:{x:isMobile ? 50:120,opacity:0.65,scale:0.8}
    }

    let diff =(index-currentIndex+3)% 3;
    if (diff === 0) return position.center;
    if (diff === 1) return position.right;
    return position.left
  }
  const isMobile=useWindowSize();
 
  return (
    <div className="relative flex flex-col h-[200px] items-center justify-center lg:h-[506px]">
      {frames.map((frame,i)=>(
          <motion.div key={i} initial={false} animate={getPosition(i)} transition={{ x:{duration:0.8,ease:easeInOut}, opacity:{duration:0.3,ease:easeInOut} }} className="absolute h-[200px] w-[102px] overflow-hidden rounded-[45px] bg-[#CDCDCD] lg:w-[292px] lg:rounded-[165px] lg:h-[506px]">
             <Image src={frame.src} alt="monkey" width={isMobile?187:292} height={isMobile?183:506} className="h-full w-full object-cover"/>
          </motion.div>
      ))}
    
    </div>
  );
};

export default HeroMovingFrame;
