"use client";

import FloatingWhatsApp from "./components/FloatingWhatsApp";
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
        avatar="/profile2.jpeg"
        chatMessage="Hello! 👋 I'm Mohammad Haolader. Looking to build a modern web app, MERN platform, or custom Shopify store? Let's discuss your project!"
        statusMessage="Replies in minutes • Available for hire"
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
