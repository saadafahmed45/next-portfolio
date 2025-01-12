import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import FullScreenNavbar from "./shared/FullScreenNavbar ";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata = {
  title: "Mohammad Haolader | Frontend Developer | MERN Stack & Shopify Expert",
  description:
    "Hi, I’m Mohammad Haolader, a professional Frontend Developer with expertise in the MERN stack and Shopify development. I specialize in building dynamic, responsive web applications and scalable eCommerce platforms.",
  keywords:
    "Frontend Developer, MERN stack, Shopify development, React Developer, Node.js, MongoDB, responsive web applications, scalable websites, modern web design, eCommerce platforms, GitHub portfolio, LinkedIn profile",
  author: "Mohammad Haolader",
  charset: "UTF-8",
  robots: "index, follow",
  "og:title":
    "Mohammad Haolader | Frontend Developer | MERN Stack & Shopify Expert",
  "og:description":
    "Discover the work of Mohammad Haolader, a professional Frontend Developer specializing in React, Node.js, MongoDB, and Shopify for dynamic, modern websites.",
  "og:type": "profile",
  "og:url": "https://yourwebsite.com", // Replace with your website URL
  "og:image": "https://yourwebsite.com/og-image.jpg", // Replace with an image (e.g., your photo or project showcase)
};

export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FullScreenNavbar />
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
