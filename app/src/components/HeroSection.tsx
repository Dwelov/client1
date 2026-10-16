import React from 'react';
import { DR_HASHAAM_INFO } from '../data/clinicData';

interface HeroSectionProps {
  onOpenBooking: (symptom?: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onSelectService,
}) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#f5f9ff] via-blue-50/50 to-white" id="hero">
      {/* Ambient light glowing blobs */}
      <div 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-tr from-cyan-200/40 via-blue-200/30 to-transparent rounded-full blur-[110px] animate-glow"
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute top-40 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-[90px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header text with Flyer Tagline */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-xs border border-blue-100 mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white">
              <span className="material-symbols-outlined text-[13px]">location_on</span>
            </span>
            <span className="text-xs font-semibold text-slate-700 tracking-wide">
              Shabbir Hospital, Bank Road, Daska • Mon - Fri (4:00 PM - 8:00 PM)
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#041945] leading-[1.15] mb-4">
            Move Better • Feel Better •{' '}
            <span className="bg-gradient-to-r from-[#0050cb] via-blue-600 to-[#00b4d8] bg-clip-text text-transparent">
              Live Better
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 font-semibold mb-2">
            Dr. M Hashaam <span className="font-normal text-slate-500 text-base">| Consultant Physiotherapist</span>
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Certified in Spine Mobilization, Kinesiology Taping &amp; Chest Physiotherapy. Providing modern, effective, and painless rehabilitation at Shabbir Hospital, Daska.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0050cb] to-[#00b4d8] text-white text-base font-bold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">calendar_today</span>
              <span>Schedule Evaluation</span>
            </button>

            <a
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-slate-800 text-base font-semibold shadow-md hover:bg-slate-50 border border-slate-200/80 transition-all"
              href={`https://wa.me/923165891778?text=Hello%20Dr.%20Hashaam,%20I%20would%20like%20to%20book%20a%20consultation%20at%20Shabbir%20Hospital,%20Daska`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-emerald-600 text-[22px]">chat</span>
              <span>WhatsApp: 0316 5891778</span>
            </a>
          </div>
        </div>

        {/* 3D Centerpiece Showcase Frame */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-white to-blue-50/80 p-3 sm:p-5 shadow-2xl border border-white/80 backdrop-blur-xl">
            {/* Inner Canvas area with high quality 3D muscular render */}
            <div className="relative w-full h-[380px] sm:h-[480px] md:h-[560px] rounded-2xl overflow-hidden bg-gradient-to-t from-blue-100/40 via-sky-50 to-white flex items-center justify-center">
              <img
                alt="3D Anatomical Muscular & Biomechanics Visualization"
                className="w-full h-full object-contain object-center select-none transform hover:scale-[1.02] transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDArcYbRbKgJ5yajcm49FLuzJgaTKJbDWnrbuDNoWGTgFx0j_opV3opyuoQkcKWFaialV9cE1yEuhJiKsfSYKdcfOuTyAAW36IW_VOEBgp5siXynAQ8OsBrzeGhx02RjVd4rwaWeV1u4-Viy6X7gJfDvwXyg3YMXCxxiqWF64LEzRDKrYYqerPyeSZ83HZpLgWhVu1gNrXmDOVlckx5GmmKuOe6q_rhkb2-bUwWdSfgTpa7IotzEWO9"
                loading="eager"
              />

              {/* Floating Contextual Certification Pills matching flyer */}
              <button
                type="button"
                onClick={() => onSelectService('manual-therapy')}
                className="animate-float absolute top-3 left-3 sm:top-10 sm:left-8 px-2.5 py-1.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white flex items-center gap-2 sm:gap-3 text-left hover:scale-105 transition-all cursor-pointer z-10"
                title="Certified in Spine Mobilization"
              >
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-100 flex items-center justify-center text-[#0050cb] shrink-0">
                  <span className="material-symbols-outlined text-[16px] sm:text-[22px]">airline_seat_recline_extra</span>
                </div>
                <div>
                  <p className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">Certified</p>
                  <p className="text-xs sm:text-sm font-bold text-[#041945]">Spine Mobilization</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onSelectService('sports-injuries')}
                className="animate-float-delayed absolute top-16 sm:top-16 right-3 sm:right-8 px-2.5 py-1.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white flex items-center gap-2 sm:gap-3 text-left hover:scale-105 transition-all cursor-pointer z-10"
                title="Certified in Kinesiology Taping"
              >
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-cyan-100 flex items-center justify-center text-[#00b4d8] shrink-0">
                  <span className="material-symbols-outlined text-[16px] sm:text-[22px]">healing</span>
                </div>
                <div>
                  <p className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">Certified</p>
                  <p className="text-xs sm:text-sm font-bold text-[#041945]">Kinesiology Taping</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onSelectService('stroke-rehab')}
                className="animate-float absolute bottom-3 left-3 sm:bottom-10 sm:left-10 px-2.5 py-1.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white flex items-center gap-2 sm:gap-3 text-left hover:scale-105 transition-all cursor-pointer z-10"
                title="Certified in Chest Physiotherapy"
              >
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-100 flex items-center justify-center text-[#ff7a00] shrink-0">
                  <span className="material-symbols-outlined text-[16px] sm:text-[22px]">cardiology</span>
                </div>
                <div>
                  <p className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">Certified</p>
                  <p className="text-xs sm:text-sm font-bold text-[#041945]">Chest Physiotherapy</p>
                </div>
              </button>

              {/* Official Hospital Badge */}
              <div className="hidden sm:flex absolute bottom-6 right-6 px-5 py-2.5 rounded-full bg-[#0050cb] text-white shadow-xl items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="text-xs font-bold tracking-wide">Shabbir Hospital, Daska</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Stat Metric Strip reflecting Dr. Hashaam flyer clinical pillars */}
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white shadow-xl shadow-blue-900/5 border border-blue-50">
          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0050cb] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">person_check</span>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#041945]">Experienced</div>
              <div className="text-xs text-slate-500 font-medium">Consultant Physiotherapist</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00b4d8] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">electric_bolt</span>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#041945]">Modern</div>
              <div className="text-xs text-slate-500 font-medium">Effective Methods &amp; Tech</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">health_and_safety</span>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#041945]">Safe &amp; Painless</div>
              <div className="text-xs text-slate-500 font-medium">Non-Invasive Care</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">schedule</span>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#041945]">4 - 8 PM</div>
              <div className="text-xs text-slate-500 font-medium">Mon - Fri Evening Clinic</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
