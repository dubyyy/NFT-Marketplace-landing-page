import CompaniesSection from "./components/CompaniesSection/CompaniesSection";
import HeroSection from "./components/hero-section/hero-section";
import LiveAuctionSection from "./components/live-auction-section/live-auction-section";
import PopupCollectionSection from "./components/popup-collection-section/PopupCollectionSectio";
import SubscribeSection from "./components/SubscribeSection/SubscribeSection";
import TopCollection from "./components/TopCollection/TopCollection";

export default function Home() {
  return (
    <div className="flex flex-col gap-[40px] pt-[40px] lg:gap-[145px] lg:py-[11px]">
        <HeroSection />
        <LiveAuctionSection />
        <PopupCollectionSection />
        <TopCollection />
        <SubscribeSection />
        <CompaniesSection />
    </div>
  );
}
