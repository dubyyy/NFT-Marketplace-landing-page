'use client'
import React, { useState } from "react";
import Logo from "../logo/logo";
import MenuIcon from "../menuIcon/menu-Icon";
import Link from "next/link";
import Sidebar from "./sidebar";

const Header=()=>{
    const [isOpen,setIsOpen]=useState(false)
    return(
       <header> 
            <div className="flex justify-between items-center">
                <Logo />
                <div className="lg:hidden">
                    <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>

                <div className="hidden lg:flex gap-[25px] text-[18px]">
                    <Link href='/' className="hover:text-primary transition-colors">
                            Explore
                    </Link>
                    <Link href='/' className="hover:text-primary transition-colors">
                            Marketplace
                    </Link>
                    <Link href='/' className="hover:text-primary transition-colors">
                            Community
                    </Link>
                    <Link href='/' className="hover:text-primary transition-colors">
                           Creator 
                    </Link>
                    <Link href='/' className="hover:text-primary transition-colors">
                            Support
                    </Link>
                </div>


               
                    <button className="hidden bg-primary text-white px-[20px] py-[7px] lg:block rounded-[50px] cursor-pointer">
                        Connect wallet 
                    </button>
                
                    
                 
            </div>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
       </header>
    )
}
export default Header