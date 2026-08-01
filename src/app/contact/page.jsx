"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
  FaLinkedin, FaGithub, FaFacebookF, FaInstagram,
} from "react-icons/fa";
import { Send, CheckCircle } from "lucide-react";

const socials = [
  { Icon: FaGithub,    href: "https://github.com/saadafahmed45",                          label: "GitHub"    },
  { Icon: FaLinkedin,  href: "https://www.linkedin.com/in/mohammadh-/",                   label: "LinkedIn"  },
  { Icon: FaFacebookF, href: "#",                                                          label: "Facebook"  },
  { Icon: FaInstagram, href: "#",                                                          label: "Instagram" },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus]     = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .send("service_vb711xa", "template_zxz08jk", formData, "rbNdBpyeZV6QThnkZ")
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus("idle"), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  return (
    <div id="contact" className="bg-[#fdf6e3] flex justify-center items-center px-4 lg:px-16 py-16 lg:py-24">
      <section className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

        {/* ── Left: Contact Info ── */}
        <div className="lg:w-2/5 bg-gradient-to-br from-[#3B966A] to-[#2d7554] p-10 flex flex-col justify-between text-white">
          <div>
            <h2 className="text-3xl font-bold mb-2">Let's Talk</h2>
            <p className="text-white/70 text-sm mb-10 leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>

            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-white" />
                </span>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-0.5">Location</p>
                  <p className="font-medium text-sm">Dhaka, Bangladesh</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-white" />
                </span>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-0.5">Phone</p>
                  <a href="tel:+8801890195058" className="font-medium text-sm hover:text-white/80 transition-colors">
                    +880 1890 195058
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-white" />
                </span>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-0.5">Email</p>
                  <a href="mailto:mohammadhaolader1@gmail.com" className="font-medium text-sm hover:text-white/80 transition-colors break-all">
                    mohammadhaolader1@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="mt-12">
            <p className="text-xs text-white/60 uppercase tracking-widest mb-4">Follow Me</p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon className="text-white text-base" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="lg:w-3/5 p-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Get In Touch</h1>
          <p className="text-slate-500 text-sm mb-8">
            Fill out the form below and I'll get back to you within 24 hours.
          </p>

          {/* Success banner */}
          {status === "success" && (
            <div className="flex items-center gap-3 mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-[#3B966A] text-sm font-medium">
              <CheckCircle size={18} /> Message sent successfully! I'll be in touch soon.
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-3 mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-medium">
              Failed to send. Please try again or email me directly.
            </div>
          )}

          <form onSubmit={sendEmail} className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Mohammad Haolader"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3B966A]/40 focus:border-[#3B966A] bg-gray-50 transition"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3B966A]/40 focus:border-[#3B966A] bg-gray-50 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3B966A]/40 focus:border-[#3B966A] bg-gray-50 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md
                ${status === "sending"
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#3B966A] text-white hover:bg-[#2d7554] hover:shadow-lg hover:scale-[1.01]"
                }`}
            >
              {status === "sending" ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
