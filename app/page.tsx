import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";
import SiteHeader from "./components/SiteHeader";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <TeamSection />
    </main>
  );
}
