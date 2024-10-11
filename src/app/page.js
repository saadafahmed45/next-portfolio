import AboutPage from "./about/page";
import HeroPage from "./components/Hero";
import ContactPage from "./contact/page";
import PortfolioPage from "./portfolio/page";

export default function Home() {
  return (
    <main>
      <HeroPage />
      <AboutPage />
      <PortfolioPage />
      <ContactPage />
    </main>
  );
}
