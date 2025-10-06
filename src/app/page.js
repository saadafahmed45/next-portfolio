"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import AboutPage from "./about/page";
import HeroPage from "./components/Hero";
import ContactPage from "./contact/page";
import RecentProject from "./components/RecentProject";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      {/* WhatsApp Floating Button */}
      <FloatingWhatsApp
        phoneNumber="+8801890195058"
        accountName="Mohammad Haolader"
        chatMessage="Hello there! How can we assist you today?"
        statusMessage="Typically replies within 1 hour"
        placeholder="Type your message here..."
        notification
        notificationSound
      />

      {/* Hero Section */}
      <HeroPage />

      {/* About Section */}
      <AboutPage />

      {/* Skills Section */}
      <Skills />

      {/* Recent Projects */}
      <RecentProject />

      {/* Contact Section */}
      <ContactPage />
    </main>
  );
}
