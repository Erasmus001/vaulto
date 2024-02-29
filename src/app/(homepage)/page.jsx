import Hero from "@/components/homepage/Banner";
import CalltoActionBanner from "@/components/homepage/CallToActionBanner";
import Difference from "@/components/homepage/Difference";
import FeatureLists from "@/components/homepage/FeatureLists";
import Header from "@/components/homepage/Header";
import PlansAndPricing from "@/components/homepage/PlansAndPricing";
import Stats from "@/components/homepage/Stats";

export default function Homepage() {
  return (
    <main className="min-h-screen min-w-screen">
      <Header />
      <Hero />
      <Stats />
      <FeatureLists />
      <PlansAndPricing />
      <Difference />
      <CalltoActionBanner />
    </main>
  );
}
