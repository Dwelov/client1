import React from 'react';
import { motion } from 'framer-motion';
import { DR_HASHAAM_INFO } from '../data/clinicData';
import { fadeRise, slideIn, scaleUp, viewportOnce } from '../utils/motionVariants';

interface DoctorProfileSectionProps {
  onOpenBooking: (doctorName?: string) => void;
}

export const DoctorProfileSection: React.FC<DoctorProfileSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section className="py-20 bg-[#f5f9ff]" id="doctor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeRise(0)}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041945] tracking-tight mb-3">
            Lead Consultant Dedicated to Your Recovery
          </h2>
          <p className="text-base text-slate-600">
            Consultant Physiotherapist • Shabbir Hospital, Bank Road, Daska
          </p>
        </motion.div>

        {/* 3-Block Grid matching reference composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Info Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideIn('left', 0.1)}
            className="lg:col-span-4 rounded-3xl p-8 bg-gradient-to-br from-[#0050cb] via-blue-600 to-[#00b4d8] text-white shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-6">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                <span>Certified Clinical Care</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-4">Relieve Pain &amp; Restore Mobility</h3>
              <p className="text-sm text-blue-100 leading-relaxed mb-6 font-normal">
                Dedicated to helping patients relieve acute &amp; chronic pain, restore functional joint mobility, and enhance overall quality of life through modern, safe, and effective methods.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-blue-100">Spine Mobilization</span>
                <span className="font-bold text-white">Certified</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-100">Kinesiology Taping</span>
                <span className="font-bold text-white">Certified</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-100">Chest Physiotherapy</span>
                <span className="font-bold text-white">Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Center: Doctor Visual with portrait */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={scaleUp(0.2, 0.92)}
            className="lg:col-span-4 rounded-3xl overflow-hidden bg-slate-100 relative min-h-[380px] shadow-lg flex items-center justify-center group border border-blue-100"
          >
            <img
              alt="Dr. M Hashaam - Consultant Physiotherapist"
              className="w-full h-full object-cover object-top select-none transition-transform duration-500 group-hover:scale-105"
              src={DR_HASHAAM_INFO.portraitImage}
            />
            <div className="absolute bottom-4 left-4 right-4">
              <button
                type="button"
                onClick={() => onOpenBooking('Dr. M Hashaam')}
                className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 hover:opacity-95 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>MAKE APPOINTMENT</span>
              </button>
            </div>
          </motion.div>

          {/* Right: Details Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideIn('right', 0.25)}
            className="lg:col-span-4 rounded-3xl p-8 bg-white border border-blue-50 shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-[#041945] mb-1">{DR_HASHAAM_INFO.name}</h3>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider mb-4">
                {DR_HASHAAM_INFO.title}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Practicing at Shabbir Hospital, Bank Road, Daska. Dr. Hashaam delivers personalized physical therapy for neck stiffness, spinal disc problems, stroke rehabilitation, sports injuries, and post-surgical recovery.
              </p>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100 mb-6">
                <div>
                  <span className="text-xs text-[#ff7a00] font-semibold block mb-0.5">Location:</span>
                  <span className="text-sm font-bold text-[#041945]">Shabbir Hospital, Daska</span>
                </div>
                <div>
                  <span className="text-xs text-[#ff7a00] font-semibold block mb-0.5">Clinic Hours:</span>
                  <span className="text-sm font-bold text-[#041945]">4:00 PM - 8:00 PM</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Mon - Fri Evening</span>
              <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                Accepting Patients
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
