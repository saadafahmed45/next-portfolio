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
        "service_vb711xa",
        "template_zxz08jk",
        formData,
        "rbNdBpyeZV6QThnkZ"
      )
      .then(
        () => {
          alert("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#fdf6e3] flex justify-center items-center px-4 lg:px-16 py-12">
      <section className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-8 lg:p-16 flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Get in Touch
          </h1>
          <p className="text-gray-500 mb-8">
            Have a project or question? Send me a message and I’ll get back to
            you promptly.
          </p>

          <form onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="flex-1 px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B966A] transition"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="flex-1 px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B966A] transition"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full h-36 px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B966A] transition"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-green-400 transition-all duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Socials */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center text-center space-y-8">
          <div className="space-y-4">
            <p className="flex items-center justify-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="w-6 h-6 text-[#3B966A]" />
              Dhaka, Bangladesh
            </p>
            <p className="flex items-center justify-center gap-3 text-gray-700">
              <FaPhoneAlt className="w-6 h-6 text-[#3B966A]" />
              +8801890195058
            </p>
            <p className="flex items-center justify-center gap-3 text-gray-700">
              <FaEnvelope className="w-6 h-6 text-[#3B966A]" />
              mohammadhaolader1@gmail.com
            </p>
          </div>

          <div className="flex gap-6 mt-4">
            {[FaFacebookF, FaInstagram, FaLinkedin, FaGithub].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-[#3B966A] transition-transform duration-300 hover:scale-110"
                >
                  <Icon className="w-8 h-8" />
                </a>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
