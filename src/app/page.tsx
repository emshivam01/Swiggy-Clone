import RestaurantContainer from "@/components/RestaurantContainer";
import TopRestaurantChains from "@/components/TopRestaurantChain";
import WhatsOnYourMind from "@/components/WhatsOnYourMind";

export default function Home() {
  return (
    <div className="">
      <WhatsOnYourMind />
      <TopRestaurantChains />
      <RestaurantContainer />
    </div>
  );
}
