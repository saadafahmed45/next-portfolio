import AboutPage from "./about/page";
import CardHover from "./components/CardHover";
import HeroPage from "./components/Hero";
import ContactPage from "./contact/page";
import PortfolioPage from "./portfolio/page";

export default function Home() {
  return (
    <main>
      <HeroPage />
      {/* <CardHover /> */}
      <AboutPage />
      <PortfolioPage />
      <ContactPage />
    </main>
  );
}
