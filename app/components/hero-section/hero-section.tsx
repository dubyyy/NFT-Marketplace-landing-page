
import React from "react";
import HeroFrame from "./hero-frame";
import HeroMovingFrame from "./hero-moving-frame"
import Stats from "./stats";
import TextAnimation from "./text-animation";

const HeroSection=()=>{
   
    return(
      <div className="flex flex-col gap-[38px] lg:gap-[16px] lg:py-[11px]">
        <div className="text-center px-[10px]">
        
            Dœbex is a platform for creating digital assets
           
        </div>


        <div className="flex flex-col text-25 justify-center items-center gap-[13px] font-bold mt-[20px] lg:text-60 lg:py-[25px]">
            <div className="flex gap-[10px] justify-center items-center">
               <span> <TextAnimation delay={0.8} divideBy="letter">Discover </TextAnimation></span>
                  <HeroFrame 
                      height={{
                        base:34,
                        lg:68
                      }}

                      width={{
                        base:123,
                        lg:326
                    }}

                    bgImage="/images/hero-frame-1.jpg"

                    animationType="scaleDown"
                   
                  />
                   
                            
               
               <span> <TextAnimation delay={0.8} divideBy="letter"> Collect </TextAnimation></span>
          </div>
            {/*Second section* */}



            <div className="flex items-center gap-[15px]">

           
                    <HeroFrame 
                              height={{
                                base:34,
                                lg:68
                              }}
                              width={{
                                base:123,
                                lg:326
                            }}
                            bgImage="/images/hero-frame-1.jpg"
                            animationType="move"
                          
                          />
                         
                         <span> <TextAnimation delay={1.1} divideBy="letter">& sell Extraordinary</TextAnimation></span>




            </div>
              <span>  <TextAnimation delay={1} divideBy="letter">Rare NFTs</TextAnimation></span>
        </div>


        {/*Third section*/}
        <div className="flex flex-col items-center justify-center gap-[25px] lg:flex-row lg:justify-between lg:items-start">
            <div className="order-2">
              <HeroMovingFrame />
            </div>

            <div className="order-3">
              <Stats />
            </div>
            <span className="flex items-center justify-center text-center w-[202px] text-[7px] leading-3 lg:leading-6 lg:text-start lg:text-14">
            <TextAnimation divideBy="word">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.

            </TextAnimation>

            </span>
        </div>

      </div>
    )
}
export default HeroSection