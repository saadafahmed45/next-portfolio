"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import AboutPage from "./about/page";
import CardHover from "./components/CardHover";
import HeroPage from "./components/Hero";
import ContactPage from "./contact/page";
import PortfolioPage from "./portfolio/page";
import RecentProject from "./components/RecentProject";
export default function Home() {
  return (
    <main>
      <FloatingWhatsApp
        phoneNumber="+8801890195058"
        accountName="Mohammad Haolader"
        // avatar="/path/to/avatar.png" // Optional: You can add your custom avatar image
        chatMessage="Hello there! How can we assist you today?" // Default message
        statusMessage="Typically replies within 1 hour"
        placeholder="Type your message here..."
        // allowClickAway // Close chat when clicking outside
        notification // Show a notification bubble
        notificationSound // Play a sound for notifications
      />
      <HeroPage />
      {/* <CardHover /> */}
      <AboutPage />
      <RecentProject />
      {/* <PortfolioPage /> */}
      <ContactPage />
    </main>
  );
}
