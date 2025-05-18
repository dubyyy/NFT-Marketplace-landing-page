import { CATEGORY_DATA  } from '@/app/_data/category'
import { twMerge } from 'tailwind-merge'
import {delay, motion} from 'framer-motion'
const CollectionCategory= ({selectedCategory,setSelectedCategory}:{
    selectedCategory:string,
    setSelectedCategory:(category:string)=> void
})=>{
    
    return(
        <div 
       
        className='flex flex-wrap justify-center gap-[14px]'>
            {CATEGORY_DATA.map((category,i)=>(
                <motion.div key={category.value} className={twMerge("cursor-pointer rounded-full lg:min-w-[100px] lg:px-[40px] lg:py-[11px] lg:text-[13px] border-white border text-10 px-[20px] py-[8px]", 
                selectedCategory=== category.value ? "border-0 bg-primary":"" 
            )}
             onClick={()=>setSelectedCategory(category.value)}
             initial={{opacity:0,y:-40}}
             whileInView={{opacity:1,y:0,transition:{
                 delay:0.1*i,
             }}}
             viewport={{once:true}}
            >
                    {category.name}
                </motion.div>
            ))}
        </div>
    )
}
export default CollectionCategory