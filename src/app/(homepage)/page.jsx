import Hero from "@/components/homepage/Banner";
import Header from "@/components/homepage/Header";
import Stats from "@/components/homepage/Stats";

export default function Homepage() {
  return (
    <main className="h-screen">
      <Header />
      <Hero />
      <Stats />
    </main>
  );
}
