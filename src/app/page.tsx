import DontMiss from "../../components/DONTMISS";
import Essential from "../../components/ESSENTIAL";
import Featured from "../../components/FEATURED";
import GearUp from "../../components/GEARUP";
import Hero from "../../components/HERO";
import Navigation from "../../components/HEADER";
import { CarouselSize } from "../../components/BEST"


export default function Home() {
  return (
  <main className="bg-white">
 
    <Hero/>
    <CarouselSize/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
  </main>
  )
}