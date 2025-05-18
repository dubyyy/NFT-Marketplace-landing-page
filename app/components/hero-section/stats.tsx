'use client'
import React from "react";
import { easeInOut, motion } from "framer-motion";
import useWindowSize from "@/app/_hooks/useWindowSize";
const Stats=()=>{
    const isMobile=useWindowSize()
    return(
        <div className="flex justify-center align-center gap-[50px] lg:flex-col">
            <motion.div initial={{opacity:0}} animate={{opacity:1, x:isMobile?0:-205}} transition={{duration:0.4,delay:0.2,ease:easeInOut}}>
                 <StatsItem name={"Rare nfts"} number={"10k+"} />
            </motion.div>
            <motion.div initial={{opacity:0,}} animate={{opacity:1, x:isMobile?0:-105}} transition={{duration:0.4,delay:0.4,ease:easeInOut}}>
                <StatsItem name={"Products"} number={"20k+"} />
            </motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1, x:isMobile?0:-20 }} transition={{duration:0.4,delay:0.6,ease:easeInOut}}>
                <StatsItem name={"nft artists"} number={"05k+"} />
            </motion.div>
            
        </div>

    )
}

const StatsItem=({name,number}:{
    name:string;
    number:string;
})=>{
    return(
        <div className="flex flex-col items-center justify-center gap-[10px] uppercase">
            <span className="text-25 font-bold lg:text-45">
                {number}
            </span>
            
            <span className="text-10 lg:text-20">
                {name}
            </span>
        </div>
    )
}
export default Stats