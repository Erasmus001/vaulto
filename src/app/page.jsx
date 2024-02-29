import Hero from "@/components/homepage/Banner";
import CallToActionBanner from "@/components/homepage/CallToActionBanner";
import Difference from "@/components/homepage/Difference";
import FeatureLists from "@/components/homepage/FeatureLists";
import { Footer } from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import PlansAndPricing from "@/components/homepage/PlansAndPricing";
import Stats from "@/components/homepage/Stats";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <Header />
      <Hero />
      <Stats />
      <FeatureLists />
      <PlansAndPricing />
      <Difference />
      <CallToActionBanner />
      <Footer />
    </main>
  );
}
