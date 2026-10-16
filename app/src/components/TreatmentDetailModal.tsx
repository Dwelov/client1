import React from 'react';
import { CLINIC_SERVICES, DR_HASHAAM_INFO } from '../data/clinicData';

interface TreatmentDetailModalProps {
  serviceId: string | null;
  onClose: () => void;
  onBookWithService: (serviceTitle: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  serviceId,
  onClose,
  onBookWithService,
}) => {
  if (!serviceId) return null;

  const service = CLINIC_SERVICES.find((s) => s.id === serviceId);
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden my-8 transform transition-all animate-fadeIn"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#0050cb] via-blue-700 to-[#00b4d8] text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-3">
            <span className="material-symbols-outlined text-[16px]">{service.icon}</span>
            <span>{service.flyerCategory}</span>
            <span className="opacity-70">•</span>
            <span>{service.titleUrdu}</span>
          </div>

          <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {service.title}
          </h3>
          <p className="text-sm text-blue-100 mt-2 max-w-xl">
            {service.shortDesc}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Clinical Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Therapeutic Focus */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Treatment Highlights &amp; Care
            </h4>
            <div className="space-y-2">
              {service.bulletPoints.map((bp, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-[#f5f9ff] border border-blue-100 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#0050cb] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">check</span>
                  </div>
                  <span className="text-sm font-semibold text-[#041945]">{bp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applied Methods */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#0050cb] text-[18px]">medical_services</span>
              Applied Techniques &amp; Modalities
            </h5>
            <div className="flex flex-wrap gap-2 pt-1">
              {service.methods.map((method, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Clinic Timings & Location Notice */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0050cb] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">{DR_HASHAAM_INFO.hospital} • Bank Road, Daska</p>
                <p className="text-sm font-bold text-[#041945]">{DR_HASHAAM_INFO.hours}</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#0050cb] bg-white px-2.5 py-1 rounded-full border border-blue-200">
              Evening
            </span>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookWithService(service.title);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0050cb] to-[#00b4d8] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span>Book Consultation For This Service</span>
          </button>
        </div>
      </div>
    </div>
  );
};
