'use client'
import React from "react";
import { twMerge } from "tailwind-merge";
const MenuIcon =({isOpen,setIsOpen}:{
    isOpen:boolean,
    setIsOpen:(value:boolean)=>void

})=>{
    return(
    <div data-menu-icon className="flex flex-col gap-[4px] cursor-pointer relative z-[51]" onClick={()=>{setIsOpen(!isOpen)}}>
        <div className={twMerge("w-[16px] h-[1.5px] bg-white transition-all duration-300",
            isOpen && "rotate-[45deg] translate-y-[6px]"
        )}></div>
        <div className={twMerge("w-[16px] h-[1.5px] bg-white transition-all duration-300",
            isOpen && "bg-opacity-0"
        )}></div>
        <div className={twMerge("w-[16px] h-[1.5px] bg-white transition-all duration-300",
             isOpen && "-rotate-[45deg] -translate-y-[6px]"
        )}></div>

    </div>
    )

}
export default MenuIcon