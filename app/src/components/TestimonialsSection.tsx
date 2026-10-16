import React from 'react';
import { motion } from 'framer-motion';
import { DR_HASHAAM_INFO } from '../data/clinicData';
import { fadeRise, scrollCardVariants, scaleUp, viewportOnce } from '../utils/motionVariants';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="methods">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeRise(0)}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold text-[#00b4d8] uppercase tracking-widest block mb-2">
            Clinical Standards &amp; Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041945] tracking-tight mb-3">
            Why Choose Dr. Hashaam's Clinic?
          </h2>
          <p className="text-base text-slate-600">
            Dedicated non-surgical rehabilitation principles focused on your comfort, safety, and rapid return to daily living.
          </p>
        </motion.div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {DR_HASHAAM_INFO.promotionalHighlights.map((item, index) => {
            const icons = ['person_check', 'biotech', 'shield_with_heart', 'bolt'];
            const colors = ['bg-blue-50 text-[#0050cb]', 'bg-cyan-50 text-[#00b4d8]', 'bg-emerald-50 text-emerald-600', 'bg-amber-50 text-[#ff7a00]'];
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={scrollCardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-3xl bg-[#f5f9ff] border border-blue-100 hover:shadow-lg transition-[box-shadow,border-color]"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${colors[index % colors.length]}`}>
                  <span className="material-symbols-outlined text-[26px]">{icons[index % icons.length]}</span>
                </div>
                <h4 className="text-base font-bold text-[#041945] mb-2">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Card matching layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scaleUp(0.15, 0.94)}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#f5f9ff]/70 p-6 sm:p-10 rounded-3xl border border-blue-100 shadow-sm relative"
        >
          {/* Left Visual */}
          <div className="md:col-span-5 relative flex justify-center">
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 flex items-center justify-center">
              <img
                alt="Dr. M Hashaam Physiotherapy Practice"
                className="w-full h-full object-cover"
                src={DR_HASHAAM_INFO.portraitImage}
              />
            </div>
            <div 
              className="absolute -bottom-3 right-4 sm:right-8 w-12 h-12 rounded-full bg-gradient-to-tr from-[#ff7a00] to-amber-400 text-white flex items-center justify-center shadow-md"
              title="Verified Clinic Standards"
            >
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
          </div>

          {/* Right Text */}
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              <span className="material-symbols-outlined text-[15px]">verified</span>
              <span>Patient-Centered Physiotherapy • Shabbir Hospital, Daska</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#041945]">
              “Move Better • Feel Better • Live Better”
            </h3>

            <p className="text-sm sm:text-base text-slate-700 italic font-medium leading-relaxed">
              Every rehabilitation plan is formulated directly with the patient. From acute cervical pain to chronic disc compression and post-surgery mobility restoration, our treatments prioritize gentle hands-on mobilization and modern therapeutic modalities.
            </p>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-[#0050cb]">Dr. M Hashaam</p>
                <p className="text-xs text-slate-500">
                  Consultant Physiotherapist • Bank Road, Daska
                </p>
              </div>

              <a
                href={`https://wa.me/923165891778?text=Hello%20Dr.%20Hashaam,%20I%20would%20like%20to%20inquire%20about%20physiotherapy%20services%20and%20fees`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>Inquire on WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-400 pt-1">
              * Note: Consultation fees and individualized therapy plans are provided upon clinical inquiry at Shabbir Hospital reception or via direct WhatsApp.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
