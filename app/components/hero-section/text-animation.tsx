'use client'
import React from "react";
import { motion } from 'framer-motion'

const TextAnimation=({children,delay=0,divideBy="word"}:{
    children:string,
    delay?:number,
    divideBy:"word" | "letter"


})=>{
  if (divideBy==="letter"){

    return <span>{children.split("").map((letter,i)=>(
      <motion.span
        key={i}
        className="inline-block overflow-hidden relative"
        initial={{
          clipPath:"polygon(0 100%, 100% 100%,100% 100%, 0 100%)",
          y:-5
        }}
          whileInView={{
            clipPath:"polygon(0 0, 100% 0,100% 100%, 0 100%)",
            y:0
          }}
          viewport={{once:true}}
          transition={{
              duration:0.8,
              delay:delay+i*0.02,
              ease:"easeInOut"
          }}
      >
        <span className="inline-block">
          {letter ===" "? "\u00A0":letter}
        </span>
      </motion.span>
  ))}</span>
  }else{
    return <span>{children.split(" ").map((word,i)=>(
      <motion.span
        key={i}
        className="inline-block overflow-hidden relative"
        initial={{
          clipPath:"polygon(0 100%, 100% 100%,100% 100%, 0 100%)",
          y:-5
        }}
          whileInView={{
            clipPath:"polygon(0 0, 100% 0,100% 100%, 0 100%)",
            y:0
          }}
          viewport={{once:true}}
          transition={{
              duration:0.5,
              delay:delay+i*0.05,
              ease:"easeInOut"
          }}
      >
        
          {word + "\u00A0"}
        
      </motion.span>
  ))}</span>
  }
    
}
export default TextAnimation