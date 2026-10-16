import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  navbarVariants,
  brandTextVariants,
  navLinksVariants,
  ctaButtonVariants,
  VIEWPORT_THRESHOLDS,
  hoverLift,
} from '../utils/motionVariants';
import { DR_HASHAAM_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: (symptom?: string) => void;
  onOpenTriage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenTriage,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('hero');

  const scrollTo = (id: string) => {
    setActiveNav(id);
    setDrawerOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'doctor', label: 'About' },
    { id: 'methods', label: 'Clinical Standards' },
    { id: 'location', label: 'Location' },
  ];

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] supports-[backdrop-filter]:bg-white/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 lg:gap-4">
        {/* Clinic Brand Logo & Doctor Name */}
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
          className="flex items-center gap-2 sm:gap-3 focus:outline-none min-w-0 flex-1 sm:flex-none"
          variants={brandTextVariants}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#0050cb] to-[#00b4d8]
            flex items-center justify-center text-white shadow-md shrink-0">
            <span className="material-symbols-outlined text-[20px] sm:text-[24px]">vital_signs</span>
          </div>
          <div className="flex flex-col justify-center min-w-0 leading-tight">
            <span className="text-sm sm:text-lg lg:text-xl font-extrabold tracking-tight text-[#041945] whitespace-nowrap leading-tight">
              DR. M HASHAAM
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium whitespace-nowrap leading-tight">
              Consultant Physiotherapist
            </span>
          </div>
        </motion.a>

        {/* Cool Desktop Navbar (Desktop Only: hidden on mobile & tablet) */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 xl:gap-2 !px-3 !py-1 rounded-full bg-white/60 backdrop-blur-xl backdrop-saturate-150 border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]"
        >
          {navLinks.map((link, i) => (
            <motion.button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-colors cursor-pointer"
              variants={navLinksVariants(i)}
              whileHover={{ scale: 1.05 }}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Quick Symptoms Triage Trigger */}
          <motion.button
            type="button"
            onClick={onOpenTriage}
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-blue-50 text-[#0050cb] hover:bg-blue-100 border border-blue-200/70 text-xs font-bold transition-colors cursor-pointer"
            title="Check condition & rehabilitation options"
            variants={ctaButtonVariants}
          >
            <span className="material-symbols-outlined text-[18px]">stethoscope</span>
            <span>Check Symptoms</span>
          </motion.button>

          {/* Quick WhatsApp Icon Button for 0316 5891778 */}
          <a
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-50 text-emerald-600 border border-slate-200/80 hover:bg-emerald-100 hover:scale-105 transition-all"
            href={`https://wa.me/923165891778?text=Hello%20Dr.%20Hashaam,%20I%20would%20like%20to%20inquire%20about%20a%20physiotherapy%20consultation%20at%20Shabbir%20Hospital,%20Daska`}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with Dr. Hashaam on WhatsApp"
            aria-label="Chat with Dr. Hashaam on WhatsApp"
          >
            <span className="material-symbols-outlined text-[18px] sm:text-[20px]">chat</span>
          </a>

          {/* Primary Consultation CTA */}
          <motion.button
            type="button"
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#0050cb] via-blue-600 to-[#00b4d8] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-[box-shadow] cursor-pointer"
            whileHover={hoverLift}
            whileTap={{ scale: 0.98 }}
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">calendar_month</span>
            <span className="hidden sm:inline">Book Consultation</span>
            <span className="sm:hidden">Book</span>
          </motion.button>

          {/* Mobile & Tablet Only Hamburger Trigger (HIDDEN on Desktop lg+) */}
          <motion.button
            type="button"
            aria-label="Open Navigation Menu"
            aria-expanded={drawerOpen}
            className="lg:hidden inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-slate-100/90 hover:bg-slate-200 border border-slate-200/60 text-[#041945] transition-colors focus:outline-none cursor-pointer"
            onClick={() => setDrawerOpen(!drawerOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <span className="material-symbols-outlined text-[20px] sm:text-[22px]">
              {drawerOpen ? 'close' : 'menu'}
            </span>
            <span className="hidden sm:inline-block text-xs font-bold tracking-wide uppercase text-slate-700">
              {drawerOpen ? 'Close' : 'Menu'}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Mobile & Tablet Slide-out Menu Drawer (Only renders when drawerOpen is true on mobile/tablet) */}
      {drawerOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden w-full bg-white/75 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.12)]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between gap-6">
            {/* Navigation Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              <motion.button
                type="button"
                className="p-3 rounded-2xl bg-slate-50 hover:bg-[#0050cb] hover:text-white transition-colors text-xs font-bold text-slate-700 flex flex-col items-center gap-1.5 text-center cursor-pointer"
                onClick={() => scrollTo('hero')}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-symbols-outlined text-[22px]">home</span>
                <span>Home</span>
              </motion.button>
              <motion.button
                type="button"
                className="p-3 rounded-2xl bg-slate-50 hover:bg-[#0050cb] hover:text-white transition-colors text-xs font-bold text-slate-700 flex flex-col items-center gap-1.5 text-center cursor-pointer"
                onClick={() => scrollTo('services')}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-symbols-outlined text-[22px]">medical_services</span>
                <span>All Services</span>
              </motion.button>
              <motion.button
                type="button"
                className="p-3 rounded-2xl bg-slate-50 hover:bg-[#0050cb] hover:text-white transition-colors text-xs font-bold text-slate-700 flex flex-col items-center gap-1.5 text-center cursor-pointer"
                onClick={() => scrollTo('doctor')}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-symbols-outlined text-[22px]">person</span>
                <span>Dr. Hashaam</span>
              </motion.button>
              <motion.button
                type="button"
                className="p-3 rounded-2xl bg-slate-50 hover:bg-[#0050cb] hover:text-white transition-colors text-xs font-bold text-slate-700 flex flex-col items-center gap-1.5 text-center cursor-pointer"
                onClick={() => scrollTo('methods')}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-symbols-outlined text-[22px]">verified</span>
                <span>Why Us</span>
              </motion.button>
              <motion.button
                type="button"
                className="p-3 rounded-2xl bg-slate-50 hover:bg-[#0050cb] hover:text-white transition-colors text-xs font-bold text-slate-700 flex flex-col items-center gap-1.5 text-center cursor-pointer"
                onClick={() => scrollTo('location')}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-symbols-outlined text-[22px]">pin_drop</span>
                <span>Hospital Location</span>
              </motion.button>
              <motion.button
                type="button"
                className="p-3 rounded-2xl bg-slate-50 hover:bg-[#0050cb] hover:text-white transition-colors text-xs font-bold text-slate-700 flex flex-col items-center gap-1.5 text-center cursor-pointer"
                onClick={() => scrollTo('appointment')}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-symbols-outlined text-[22px]">contact_support</span>
                <span>Book Appointment</span>
              </motion.button>
            </div>

            {/* Quick Helpline Contact in Drawer */}
            <div className="flex items-center justify-between md:justify-end gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 font-medium">WhatsApp / Helpline:</span>
                <a className="text-sm font-bold text-[#0050cb] hover:underline" href={`tel:${DR_HASHAAM_INFO.phoneInternational}`}>
                  {DR_HASHAAM_INFO.phone}
                </a>
              </div>
              <button
                type="button"
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                onClick={() => setDrawerOpen(false)}
                title="Close Menu"
                aria-label="Close Menu"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
