import React from 'react';
import { motion } from 'framer-motion';
import { AppointmentInput, generateWhatsAppBookingUrl } from '../utils/clinicLogic';
import { DR_HASHAAM_INFO } from '../data/clinicData';
import { backdropVariants, modalPopVariants } from '../utils/motionVariants';

interface AppointmentSuccessModalProps {
  data: (AppointmentInput & { bookingId: string }) | null;
  onClose: () => void;
}

export const AppointmentSuccessModal: React.FC<AppointmentSuccessModalProps> = ({
  data,
  onClose,
}) => {
  if (!data) return null;

  const whatsappUrl = generateWhatsAppBookingUrl(data);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={backdropVariants}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-title"
        initial="hidden"
        animate="visible"
        variants={modalPopVariants}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden my-8 p-6 sm:p-8 text-center"
      >
        {/* Animated Checkmark Circle */}
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-[36px]">check_circle</span>
        </div>

        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Request Registered
        </span>

        <h3 id="success-title" className="text-2xl font-extrabold text-[#041945] mt-3">
          Appointment Request Received
        </h3>

        <p className="text-xs text-slate-500 mt-1">
          Reference ID: <strong className="text-slate-800">{data.bookingId}</strong>
        </p>

        {/* Voucher card */}
        <div className="my-6 p-5 rounded-2xl bg-[#f5f9ff] border border-blue-100 text-left space-y-2 text-xs">
          <div className="flex justify-between py-1 border-b border-blue-100/60">
            <span className="text-slate-500">Practitioner:</span>
            <span className="font-bold text-[#0050cb]">{DR_HASHAAM_INFO.name} ({DR_HASHAAM_INFO.title})</span>
          </div>
          <div className="flex justify-between py-1 border-b border-blue-100/60">
            <span className="text-slate-500">Patient:</span>
            <span className="font-bold text-slate-800">{data.fullName}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-blue-100/60">
            <span className="text-slate-500">Contact:</span>
            <span className="font-bold text-slate-800">{data.phone}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-blue-100/60">
            <span className="text-slate-500">Hospital:</span>
            <span className="font-bold text-slate-800 text-right">{data.location}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-blue-100/60">
            <span className="text-slate-500">Concern:</span>
            <span className="font-bold text-slate-800 text-right">{data.primarySymptom}</span>
          </div>
          <div className="flex justify-between py-1 pt-2">
            <span className="text-slate-600 font-semibold">Consultation Hours:</span>
            <span className="font-bold text-emerald-700">{DR_HASHAAM_INFO.hours}</span>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed mb-6">
          To confirm your consultation time and inquire about treatment fees, please forward your appointment details directly to Dr. Hashaam on WhatsApp:
        </p>

        {/* Action buttons */}
        <div className="space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Confirm on WhatsApp ({DR_HASHAAM_INFO.phone})</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
