'use client'
import { useState } from "react"
import TextAnimation from "../hero-section/text-animation"
import CollectionCategory from "./collection-category"
import { COLLECTION_DATA } from '@/app/_data/collection'
import CollectionCard from "./collection-card"
import {motion, AnimatePresence } from "framer-motion"



const PopupCollectionSection=()=>{
    const [selectedCategory,setSelectedCategory] =useState<string>("all")
    return(
        <div className="flex flex-col gap-[29px] lg:gap-[76px]">
        <span className="text-[30px] px-[15px] lg:text-[54px] text-center ">
            <TextAnimation divideBy="letter" delay={0.2}>
                   Get popular collection here
            </TextAnimation>
        </span>

        <div>
            <CollectionCategory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </div>


        <div className="flex flex-col flex-wrap justify-start items-center gap-[29px] lg:min-w-[755px] lg:flex-row lg:justify-center lg:gap-x-[42px] lg:gap-y-[25px]">
            <AnimatePresence mode="popLayout">
            {(
                selectedCategory=== "all" ? COLLECTION_DATA : COLLECTION_DATA.filter((card)=>card.category===selectedCategory)
            ).map((card)=>(
                <motion.div   className="w-full lg:w-auto"
                initial={{opacity:0, scale:0.9}}
                animate={{opacity:1,scale:1}}
                exit={{opacity:0, scale:0.9}}
                transition={{
                    duration:0.3
                 }}
                 key={card.username}
                layout

                
                >
                        <CollectionCard card={card}/>
                </motion.div>
            ))
            }
            </AnimatePresence>
        </div>

            

        </div>

    )
}
export default PopupCollectionSection
