'use client'
import {motion} from 'framer-motion'
import TextAnimation from "../hero-section/text-animation";
import { TOP_COLLECTION_DATA } from "../../_data/top-collection";
import Image from "next/image";
const TextCollection=()=>{
    return(
        <div className="flex flex-col gap-[20px]">
            <span className="text-center px-10  text-30 font-bold">
                <TextAnimation divideBy="letter" delay={0.5}>
                    Our Top Collections
                </TextAnimation>
            </span>

            <div className="flex flex-col gap-[10px] lg:flex-row lg:flex-wrap lg:gap-x-16 lg:mt-4">
                {
                    TOP_COLLECTION_DATA.map((item,index)=>{
                        return(
                            <motion.div key={index} className="flex items-center gap-[10px] py-8 border-b border-b-white/10"
                            initial={{opacity:0,y:20}}
                            whileInView={{opacity:1,y:0}}
                            transition={{duration:0.5,delay:index*0.1,ease:"easeOut"}}
                            viewport={{once:true}}
                            >
                                <span>{index+1}</span>
                                <Image src={item.image} alt=""
                                width={35}
                                height={35}
                                className="rounded-full"
                                />
                                <div className="flex flex-col">
                                    <div className="text-12 font-bold">{item.name}</div>
                                    <div className="text-10 font-bold text-white/40">{item.price}</div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
            
        </div>      
    )
}
export default TextCollection