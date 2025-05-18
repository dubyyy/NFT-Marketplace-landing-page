import Image from 'next/image'


const CollectionCard=({card}:{
    card:{
        name: string
        username: string
        avatar: string
        category:string
        nfts: 
      {
        bg: string
        image: string
      }[]
    }
    
})=>{
    return(
        <div className="flex flex-col w-[100%] gap-10 bg-white/10 p-[10] lg:gap-20 lg:w-[380px] ">
        {/*head */}
         <div className="flex justify-between items-start">
                    <div className='relative w-[26px] h-[26px] lg:w-[47px] lg:h-[47px]'>
                        <Image src={card.avatar} alt='' className='rounded-full object-cover'fill/>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-12'>{card.name}</span>
                        <span className='text-10 text-white/50 lg:text-14'>{card.username}</span>
                    </div>
                    {/*Like */}
                    <div className='flex items-center gap-[4px]'>
                        <div className=" relative w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]">
                            <Image src='/images/heart.png' alt='' fill/>
                            
                        </div>
                        <span className='text-11 lg:text-19'>3</span>

                    </div>
         </div>


        {/*body */}
         <div className="grid grid-cols-2 gap-4">
            <div className='relative flex-1 w-full h-[257px] overflow-hidden'
            style={{ backgroundColor: card.nfts[0].bg}}>
                <Image src={card.nfts[0].image} alt='' fill className='object-cover'/>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='relative flex-1 w-full rounded-lg overflow-hidden'
                 style={{ backgroundColor: card.nfts[1].bg}}
                >
                    <Image src={card.nfts[1].image} alt='' fill className='object-contain'/>
                </div>
                <div className='relative flex-1 w-full rounded-lg overflow-hidden'
                  style={{ backgroundColor: card.nfts[2].bg}}
                >
                    <Image src={card.nfts[2].image} alt='' fill className='object-contain'/>
                </div>
            </div>
            
         </div>
        </div>
    )
}
export default CollectionCard