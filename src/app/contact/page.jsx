"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_vb711xa", // Replace with your EmailJS service ID
        "template_zxz08jk", // Replace with your EmailJS template ID
        formData,
        "rbNdBpyeZV6QThnkZ" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fdf6e3] px-4 lg:px-16 py-6 lg:py-8">
      <section className="w-full max-w-6xl bg-[#EDE8DC] rounded-xl shadow-lg p-8 lg:p-16">
        <div className="lg:flex lg:items-center lg:space-x-12">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">
              Let’s Contact
            </h1>
            <p className="text-gray-500 mb-6">
              Ask us everything and we would love to hear from you
            </p>

            <form onSubmit={sendEmail}>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="flex-1 px-5 py-3 mb-4 md:mb-0 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B966A]"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="flex-1 px-5 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B966A]"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full mt-4 h-32 md:h-40 px-5 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B966A]"
              />

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-[#3B966A] text-white font-medium rounded-md hover:bg-[#33b86a] transition-colors duration-300"
              >
                Get in touch
              </button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex flex-col items-center text-center space-y-8">
            <div className="space-y-4">
              <p className="flex items-center justify-center space-x-2 text-gray-700">
                <FaMapMarkerAlt className="w-6 h-6 text-[#3B966A]" />
                <span>Dhaka, Bangladesh</span>
              </p>
              <p className="flex items-center justify-center space-x-2 text-gray-700">
                <FaPhoneAlt className="w-6 h-6 text-[#3B966A]" />
                <span>+8801890195058</span>
              </p>
              <p className="flex items-center justify-center space-x-2 text-gray-700">
                <FaEnvelope className="w-6 h-6 text-[#3B966A]" />
                <span>mohammadhaolader1@gmail.com</span>
              </p>
            </div>

            <div className="flex space-x-6 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#3B966A] transition-colors duration-300"
              >
                <FaFacebookF className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#3B966A] transition-colors duration-300"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#3B966A] transition-colors duration-300"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#3B966A] transition-colors duration-300"
              >
                <FaGithub className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
