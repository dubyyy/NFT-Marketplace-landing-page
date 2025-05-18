import "./globals.css";
import {Inria_Sans} from 'next/font/google'
import { Metadata } from "next";
import Header from "./components/header/header";
const inriaSans=Inria_Sans({
  variable:'--font-inria-sans',
  weight:['300','400','700'],
  subsets:['latin']

})
export const metadata: Metadata = {
  title: "Dœbex Marketplace",
  description: "Mint, buy, and sell exclusive NFTs on Dubem's NFT Marketplace. A seamless and secure platform for digital asset trading.",
  keywords: ["NFT", "marketplace", "crypto", "blockchain", "minting", "digital assets", "Dubem"],
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inriaSans.variable} relative box-border mx-auto max-w-[1728px] px-[17px] py-[17px] antialiased lg:px-[100px] lg:py-[23px]`}>
       <Header />
        {children}
      </body>
    </html>
  );
}
