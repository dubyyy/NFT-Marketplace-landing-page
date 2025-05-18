import Button from "../button/button"
import TextAnimation from "../hero-section/text-animation"

const SubscribeSection=()=>{
    return(
        <div className="flex flex-col gap-[20px] justify-center items-center w-full lg:gap-[37px]">
            <span className="text-[30px] font-bold py-4 lg:text-[48px]">
                <TextAnimation divideBy="letter" delay={0.5}>
                    Subscribe to our newsletter
                </TextAnimation>
            </span>

            <span className="text-10 lg:text-14">
                <TextAnimation divideBy="letter" delay={0.5}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </TextAnimation>
            </span>
            <div className="flex gap-4 lg:gap-2">
                <input type="email" placeholder="Enter your email" 
                className="w-full min-w-[216px] max-w-[320px] rounded-md border border-white/20 bg-white/10 px-16 lg:min-w-[554px]"  
                />
                <Button variant="filled">Subscribe</Button>
            </div>
        </div>         
    )
}
export default SubscribeSection