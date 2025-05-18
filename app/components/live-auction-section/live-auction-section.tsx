'use client'
import React, { useRef } from "react";
import Image from "next/image";
import TextAnimation from "../hero-section/text-animation";
import Button from "../button/button";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const LiveAuctionSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["0 1", "1 0"]
  });
  const monkeyY = useTransform(scrollYProgress, [0, 0.7], [300, 0]);

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 lg:flex-row lg:gap-[89px]">
        {/* Left Side Image */}
        <div
          className="relative h-[243px] lg:h-[400px] xl:h-[500px] rounded-lg overflow-hidden bg-gradient-to-b from-[#EF962E] to-[#FFAF36] flex-shrink-0 w-full lg:w-[50%]"
          ref={container}
        >
          <motion.div style={{ y: monkeyY }} className="relative h-full w-full">
            <Image src='/images/black-monkey.png' alt="" fill />
          </motion.div>
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Section Title */}
          <div className="flex gap-[12px] items-center">
            <div className="w-[4px] h-5 lg:w-[7px] lg:h-7 bg-[#6351DB] rounded-md" />

            <span className="text-[14px] md:text-[16px] lg:text-[18px]">
              <TextAnimation divideBy={"word"}>Live Auction</TextAnimation>
            </span>
          </div>

          {/* Item Name */}
          <span className="text-[30px] md:text-[36px] lg:text-[42px] font-bold">
            <TextAnimation divideBy="word" delay={0.4}>
              Bored_Ape#333
            </TextAnimation>
          </span>

          {/* Creator & Collection Info */}
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <Block title="creator" image="/images/avatars/avatar-1.avif" name="@obsjduro" />
            <Block title="collection" image="/images/avatars/avatar-2.avif" name="Your dream" />
          </div>

          {/* Bidding Info */}
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <BidBlock title="Current Bid" content="1.23 ETH" />
            <BidBlock title="Ends in" content="12 : 50 : 23" />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="filled">Start mining</Button>
            <Button variant="outlined">and learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Block = ({ title, image, name }: { title: string; image: string; name: string }) => {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <span className="text-[14px] md:text-[16px]">
        <TextAnimation divideBy={"word"} delay={0.5}>
          {title}
        </TextAnimation>
      </span>
      <div className="flex items-center gap-3 rounded-lg bg-[#454448] px-4 py-3">
        <div className="relative w-[25px] h-[25px]">
          <Image src={image} fill alt="" className="rounded-full" />
        </div>
        <span className="text-[14px] md:text-[16px]">
          <TextAnimation divideBy={"word"} delay={0.5}>
            {name}
          </TextAnimation>
        </span>
      </div>
    </div>
  );
};

const BidBlock = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="flex flex-col flex-1 gap-1">
      <span className="text-[14px] md:text-[16px]">
        <TextAnimation divideBy={"word"} delay={0.5}>
          {title}
        </TextAnimation>
      </span>
      <span className="text-[27px] md:text-[32px] font-semibold">
        <TextAnimation divideBy={"word"} delay={0.5}>
          {content}
        </TextAnimation>
      </span>
    </div>
  );
};

export default LiveAuctionSection;
