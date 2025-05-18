'use client'
import React from "react";

import { twMerge } from "tailwind-merge";
const Button=({children,variant}:{
    children:React.ReactNode;
    variant:"filled" | "outlined";
})=>{
    return(
    <button className={twMerge(
        "flex w-full items-center justify-center rounded-md px-[24px] py-[9px] font-semibold text-white",
        variant==="filled"? "bg-primary" : "border-primary border-2 bg-transparent  hover:bg-[#454448]"
    )}>       
                {children}  
    </button>

    )
}
export default Button 