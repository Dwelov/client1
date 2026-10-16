import React from 'react';
import { DR_HASHAAM_INFO, CLINIC_LOCATION_INFO } from '../data/clinicData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#071638] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Practitioner Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0050cb] to-[#00b4d8] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">vital_signs</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">{DR_HASHAAM_INFO.name}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {DR_HASHAAM_INFO.title} delivering evidence-informed, modern, and painless physical rehabilitation at Shabbir Hospital, Daska.
            </p>
            <p className="text-xs text-cyan-400 font-semibold">
              “{DR_HASHAAM_INFO.tagline}”
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs">
              <span className="material-symbols-outlined text-[16px] text-emerald-400">verified</span>
              <span>Spine Mobilization • Kinesiology Taping • Chest PT</span>
            </div>
          </div>

          {/* Col 2: Hospital Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Hospital Location</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>
                <strong className="text-slate-200 block text-xs">{CLINIC_LOCATION_INFO.hospitalName}</strong>
                {CLINIC_LOCATION_INFO.road}
              </p>
              <p className="text-slate-500 italic">
                Note on records: {CLINIC_LOCATION_INFO.secondaryRoadNote}
              </p>
              <p className="text-slate-400">
                {CLINIC_LOCATION_INFO.city}
              </p>
            </div>
          </div>

          {/* Col 3: Clinic Timings */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Clinic Hours</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex justify-between py-1 border-b border-slate-800">
                <span>Monday - Friday</span>
                <span className="text-slate-200 font-semibold">04:00 PM - 08:00 PM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-slate-800">
                <span>Shift</span>
                <span className="text-cyan-400 font-semibold">Evening Clinic</span>
              </li>
              <li className="flex justify-between py-1 text-slate-400">
                <span>Saturday &amp; Sunday</span>
                <span className="text-amber-400">By WhatsApp Appointment</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Appointments & WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Appointments &amp; WhatsApp</h4>
            <div className="p-4 rounded-2xl bg-slate-800/80 space-y-2 border border-slate-700/60">
              <p className="text-[11px] text-slate-400 uppercase tracking-wider">Direct WhatsApp / Call</p>
              <a 
                href={`https://wa.me/923165891778?text=Hello%20Dr.%20Hashaam,%20I%20would%20like%20to%20book%20a%20physiotherapy%20consultation`}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-bold text-cyan-400 hover:underline block"
              >
                {DR_HASHAAM_INFO.phone}
              </a>
              <p className="text-xs text-slate-400">International: {DR_HASHAAM_INFO.phoneInternational}</p>
              <p className="text-xs text-slate-400">Location: {CLINIC_LOCATION_INFO.hospitalName}, Daska</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 {DR_HASHAAM_INFO.name} • Shabbir Hospital, Daska. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => scrollTo('services')}
              className="hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-0 text-slate-500 text-xs p-0"
            >
              All Services
            </button>
            <button
              type="button"
              onClick={() => scrollTo('doctor')}
              className="hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-0 text-slate-500 text-xs p-0"
            >
              Dr. Hashaam Credentials
            </button>
            <button
              type="button"
              onClick={() => scrollTo('location')}
              className="hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-0 text-slate-500 text-xs p-0"
            >
              Shabbir Hospital Directions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
