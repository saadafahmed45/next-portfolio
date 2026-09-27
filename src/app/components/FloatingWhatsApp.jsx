"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  Send,
  X,
  CheckCheck,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export function FloatingWhatsApp({
  phoneNumber = "+8801890195058",
  accountName = "Mohammad Haolader",
  avatar = "/profile2.jpeg",
  statusMessage = "Replies in minutes • Available for hire",
  chatMessage = "Hello! 👋 I'm Mohammad Haolader. Are you looking to build a modern web app, MERN platform, or custom Shopify store? Let's connect!",
  placeholder = "Type your message here...",
  notification = true,
  notificationSound = true,
  notificationDelay = 4,
  quickActions,
  buttonStyle = {},
  className = "",
  onSubmit,
  onClick,
  onClose,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);
  const [message, setMessage] = useState("");
  const [timeString, setTimeString] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const inputRef = useRef(null);
  const chatBoxRef = useRef(null);
  const buttonRef = useRef(null);

  // Suggested quick prompts tailored to Mohammad Haolader's expertise
  const defaultQuickActions = [
    {
      label: "💼 Hire for MERN Project",
      prompt:
        "Hi Mohammad, I came across your portfolio and would like to discuss hiring you for a MERN stack project.",
    },
    {
      label: "🛍️ Custom Shopify Store",
      prompt:
        "Hi Mohammad, I need a modern, high-converting Shopify store designed and launched.",
    },
    {
      label: "⚡ React / Next.js Web App",
      prompt:
        "Hi Mohammad, I have a React / Next.js web application project I'd like to collaborate on.",
    },
    {
      label: "☕ Quick Chat / Consultation",
      prompt:
        "Hello Mohammad, I would like to schedule a quick chat about an upcoming project.",
    },
  ];

  const actions = quickActions || defaultQuickActions;

  // Format current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
  }, []);

  // Web Audio chime generator (Zero external audio file dependency, no 404s)
  const playChime = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;

      // Note 1: D5 (587.33 Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(587.33, now);
      gain1.gain.setValueAtTime(0.08, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.28);

      // Note 2: A5 (880 Hz)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(880, now + 0.09);
      gain2.gain.setValueAtTime(0.1, now + 0.09);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.48);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.09);
      osc2.stop(now + 0.48);
    } catch {
      // Audio autoplay policy fallback
    }
  };

  // Notification timer trigger
  useEffect(() => {
    if (!notification) return;

    const delayMs = Math.min(Math.max(notificationDelay * 1000, 2000), 8000);
    const timer = setTimeout(() => {
      if (!isOpen) {
        setHasNotification(true);
        setShowTooltip(true);
        if (notificationSound) {
          playChime();
        }
      }
    }, delayMs);

    return () => clearTimeout(timer);
  }, [notification, notificationDelay, notificationSound, isOpen]);

  // Close on Escape & Outside click
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        if (onClose) onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (
        isOpen &&
        chatBoxRef.current &&
        !chatBoxRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
        if (onClose) onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleToggleOpen = () => {
    if (!isOpen) {
      setHasNotification(false);
      setShowTooltip(false);
      setIsOpen(true);
      if (onClick) onClick();
    } else {
      setIsOpen(false);
      if (onClose) onClose();
    }
  };

  const handleSend = (textToSend) => {
    const finalMsg = textToSend || message;
    if (!finalMsg.trim()) return;

    if (onSubmit) {
      onSubmit(finalMsg);
    }

    // Clean phone number (keep digits only)
    const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
    const encodedMsg = encodeURIComponent(finalMsg.trim());
    const waUrl = `https://wa.me/${cleanNumber}?text=${encodedMsg}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setMessage("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  const handleQuickAction = (prompt) => {
    setMessage(prompt);
    handleSend(prompt);
  };

  return (
    <div
      className={`fixed z-[9999] pointer-events-none flex flex-col items-end pb-[max(env(safe-area-inset-bottom),0px)] ${className}`}
      style={{
        bottom: buttonStyle.bottom || "20px",
        right: buttonStyle.right || "20px",
        ...buttonStyle,
      }}
    >
      {/* ── Chat Modal Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatBoxRef}
            role="dialog"
            aria-label={`Chat with ${accountName}`}
            initial={{ opacity: 0, scale: 0.88, y: 24, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="pointer-events-auto mb-4 w-[calc(100vw-2rem)] sm:w-[380px] max-w-[390px] max-h-[calc(100dvh-5.5rem)] sm:max-h-[580px] flex flex-col overflow-hidden rounded-2xl border border-emerald-500/25 bg-[#0B1120]/95 backdrop-blur-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8),0_0_35px_rgba(16,185,129,0.2)]"
          >
            {/* Header Glowing Top Gradient Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#25D366] via-[#14B8A6] to-[#0EA5E9] flex-shrink-0" />

            {/* Header Content */}
            <div className="flex items-center justify-between border-b border-slate-700/50 bg-gradient-to-r from-[#0d1627]/95 via-[#111e35]/95 to-[#0d1627]/95 px-4 py-3.5 flex-shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                {/* Avatar with Status Ring */}
                <div className="relative flex-shrink-0">
                  <div className="h-11 w-11 rounded-full ring-2 ring-emerald-400/50 p-0.5 bg-slate-800 flex items-center justify-center overflow-hidden shadow-inner">
                    {avatar ? (
                      <Image
                        src={avatar}
                        alt={accountName}
                        width={44}
                        height={44}
                        unoptimized
                        priority
                        className="h-full w-full object-cover object-top rounded-full"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                        {accountName.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Pulsing Online Green Indicator */}
                  <span className="absolute bottom-0 right-0 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#0B1120]" />
                  </span>
                </div>

                {/* Name & Live Status */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-sm tracking-tight text-white truncate">
                      {accountName}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                    <p className="text-[11px] text-slate-300 font-medium truncate">
                      {statusMessage}
                    </p>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleToggleOpen}
                aria-label="Close chat"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors ml-2 flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="relative flex-1 overflow-y-auto min-h-0 p-4 space-y-3.5 bg-[#070c18]/90 overscroll-contain">
              {/* Ambient Glow */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-44 h-44 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

              {/* Date Pill */}
              <div className="flex justify-center">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 bg-slate-800/80 border border-slate-700/60 px-3 py-0.5 rounded-full shadow-sm">
                  Today {timeString ? `• ${timeString}` : ""}
                </span>
              </div>

              {/* Welcome Message Bubble */}
              <div className="flex items-start gap-2 max-w-[92%]">
                <div className="rounded-2xl rounded-tl-sm bg-gradient-to-br from-slate-800/95 to-slate-800/75 border border-slate-700/80 p-3.5 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-1.5 mb-1.5 text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Mohammad Haolader
                    </span>
                  </div>
                  <p className="text-xs text-slate-100 leading-relaxed font-sans">
                    {chatMessage}
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-slate-400">
                    <span>{timeString || "Just now"}</span>
                    <CheckCheck className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Quick Action Suggestion Chips */}
              <div className="pt-2">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <MessageSquare className="w-3 h-3 text-emerald-400" />
                  Choose a topic or type below:
                </p>
                <div className="flex flex-col gap-1.5">
                  {actions.map((action, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleQuickAction(action.prompt)}
                      className="text-left text-[11px] font-medium text-slate-200 bg-slate-800/85 hover:bg-emerald-500/20 border border-slate-700/90 hover:border-emerald-400/50 px-3 py-2 rounded-xl transition-all duration-200 flex items-center justify-between gap-2 hover:translate-x-1 active:scale-[0.98] group shadow-sm"
                    >
                      <span className="truncate">{action.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Input Bar Form */}
            <form
              onSubmit={handleFormSubmit}
              className="border-t border-slate-800/90 bg-[#0d1627]/95 p-3 flex items-center gap-2 flex-shrink-0"
            >
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={placeholder}
                  className="w-full rounded-xl bg-slate-800/90 border border-slate-700/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={!message.trim()}
                className="flex items-center justify-center p-2.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#10B981] hover:from-[#22c55e] hover:to-[#059669] text-white shadow-lg shadow-emerald-500/25 disabled:opacity-40 disabled:hover:scale-100 hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>

            {/* Footer Trust Subtext */}
            <div className="bg-[#050812] px-3 py-1.5 border-t border-slate-800/60 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 flex-shrink-0">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Direct WhatsApp Chat • Mohammad Haolader</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Launcher Trigger Row ── */}
      <div className="relative flex items-center gap-3">
        {/* Preview invitation bubble */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 15, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={handleToggleOpen}
              className="pointer-events-auto cursor-pointer max-w-[240px] sm:max-w-[270px] rounded-2xl bg-[#0B1120]/95 border border-emerald-500/30 px-3.5 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.5),0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-xl flex items-center gap-2.5 text-left group hover:border-emerald-400 transition-all"
            >
              <div className="relative flex-shrink-0">
                <Image
                  src={avatar || "/profile2.jpeg"}
                  alt={accountName}
                  width={34}
                  height={34}
                  unoptimized
                  className="h-8 w-8 rounded-full object-cover object-top border border-emerald-400/50"
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0B1120]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-white tracking-tight truncate">
                    {accountName}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTooltip(false);
                    }}
                    className="text-slate-400 hover:text-white p-0.5 ml-1"
                    aria-label="Dismiss message preview"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-300 truncate mt-0.5">
                  Have a project in mind? Let&apos;s chat! 👋
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Action Button */}
        <div className="relative pointer-events-auto">
          {/* Ambient Glowing Radar Wave */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 opacity-50 blur-md animate-pulse pointer-events-none" />

          <motion.button
            ref={buttonRef}
            id="whatsapp-trigger-btn"
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleToggleOpen}
            aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#10B981] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45),0_0_20px_rgba(16,185,129,0.35)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(37,211,102,0.65),0_0_30px_rgba(16,185,129,0.5)] focus:outline-none"
          >
            {/* Glossy Sheen Overlay */}
            <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Smooth Icon Transition between WhatsApp and Close */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="w-6 h-6 text-white stroke-[2.5]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="whatsapp"
                    initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.18 }}
                  >
                    <FaWhatsapp className="w-8 h-8 text-white drop-shadow-md" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Notification Badge */}
            <AnimatePresence>
              {hasNotification && !isOpen && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center pointer-events-none"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex items-center justify-center h-5 w-5 rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-md border-2 border-[#0B1120]">
                    1
                  </span>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default FloatingWhatsApp;
