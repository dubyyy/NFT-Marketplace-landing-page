'use client'
import { motion } from "framer-motion";
import React from "react";
import css from './hero-frame.module.css'

const animations = {
    scaleDown: {
      initial: { backgroundSize: "150%" },
      animate: { backgroundSize: "100%" },
      transition: { duration: 3.5, ease: "easeInOut" },
    },
    move: {
      initial: { backgroundPositionX: "100%"  }, 
      animate: { backgroundPositionX: "50%" }, 
      transition: { duration: 3, ease: "easeInOut" },
      
      },
  };

const HeroFrame=({
    height,
    width,
    bgImage,
    animationType="scaleDown"
}:{
    height:{
       base:number,
       lg:number
    },
    width:{
        base:number,
        lg:number
    },
    bgImage:string,
    animationType ?:"scaleDown" | "move"
})=>{

        const animation=animations[animationType];



    return(
      <motion.div
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition} 

      className={css.frame}
      
      style={{
        height:`${height.base}px`,
        width:`${width.base}px`,
        backgroundImage:`url(${bgImage})`,
        "--lg-width":`${width.lg}px`,
        "--lg-height":`${height.lg}px`,
        
      } as React.CSSProperties}>

      </motion.div>
    )
}
export default HeroFrame