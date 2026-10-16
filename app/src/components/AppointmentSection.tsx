import React, { useState, useEffect } from 'react';
import {
  AppointmentInput,
  validateAppointmentForm,
} from '../utils/clinicLogic';
import { DR_HASHAAM_INFO, CLINIC_LOCATION_INFO } from '../data/clinicData';

interface AppointmentSectionProps {
  initialSymptom?: string;
  onAppointmentSuccess: (bookingData: AppointmentInput & { bookingId: string }) => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialSymptom = '',
  onAppointmentSuccess,
}) => {
  const [formData, setFormData] = useState<AppointmentInput>({
    fullName: '',
    email: '',
    phone: '',
    location: 'Shabbir Hospital (Bank Road, Daska)',
    primarySymptom: initialSymptom,
    notes: '',
    preferredDate: '',
    preferredTimeSlot: 'Evening (04:00 PM - 08:00 PM)',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialSymptom) {
      setFormData((prev) => ({ ...prev, primarySymptom: initialSymptom }));
    }
  }, [initialSymptom]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateAppointmentForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const bookingId = `HASH-${Math.floor(100000 + Math.random() * 900000)}`;

      onAppointmentSuccess({
        ...formData,
        bookingId,
      });
    }, 450);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#f5f9ff] to-blue-50/60" id="appointment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Heading, Hospital Details & Timings */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#041945] tracking-tight mb-4">
                Let's Get in<br />Touch With Us
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Consult with Dr. M Hashaam at Shabbir Hospital, Bank Road, Daska, or book via WhatsApp.
              </p>

              {/* Mini Clinic Visual Container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-50 p-4 border border-blue-200/60 shadow-xs">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-white p-1 shadow-inner">
                    <img
                      alt="Anatomy & Biomechanics"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDArcYbRbKgJ5yajcm49FLuzJgaTKJbDWnrbuDNoWGTgFx0j_opV3opyuoQkcKWFaialV9cE1yEuhJiKsfSYKdcfOuTyAAW36IW_VOEBgp5siXynAQ8OsBrzeGhx02RjVd4rwaWeV1u4-Viy6X7gJfDvwXyg3YMXCxxiqWF64LEzRDKrYYqerPyeSZ83HZpLgWhVu1gNrXmDOVlckx5GmmKuOe6q_rhkb2-bUwWdSfgTpa7IotzEWO9"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#041945]">Physiotherapy Evaluation</h4>
                    <p className="text-xs text-slate-500">{DR_HASHAAM_INFO.name} • {DR_HASHAAM_INFO.title}</p>
                    <span className="text-xs font-bold text-[#0050cb]">Inquire Fee via WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shabbir Hospital Contact Cards */}
            <div className="space-y-4 pt-2" id="location">
              <div className="p-4 rounded-2xl bg-white shadow-xs border border-slate-100 space-y-1">
                <div className="flex items-center gap-2 text-[#0050cb] font-bold text-sm">
                  <span className="material-symbols-outlined text-[18px]">local_hospital</span>
                  <span>{CLINIC_LOCATION_INFO.hospitalName}</span>
                </div>
                <p className="text-xs text-slate-600 pl-6">{CLINIC_LOCATION_INFO.road}</p>
                <p className="text-[11px] text-slate-500 pl-6 italic">({CLINIC_LOCATION_INFO.secondaryRoadNote})</p>
                <p className="text-xs font-semibold text-slate-800 pl-6 mt-1 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-emerald-600">schedule</span>
                  <span>{CLINIC_LOCATION_INFO.timings}</span>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-xs border border-slate-100 space-y-1">
                <div className="flex items-center gap-2 text-[#0050cb] font-bold text-sm">
                  <span className="material-symbols-outlined text-[18px]">phone</span>
                  <span>Direct Appointments &amp; WhatsApp</span>
                </div>
                <p className="text-xs text-slate-700 pl-6 font-semibold">
                  {DR_HASHAAM_INFO.phone} <span className="text-slate-400 font-normal">({DR_HASHAAM_INFO.phoneInternational})</span>
                </p>
                <p className="text-[11px] text-slate-500 pl-6">
                  {CLINIC_LOCATION_INFO.weekendNote}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 bg-white/95 rounded-3xl p-6 sm:p-10 shadow-2xl border border-blue-100 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="patient-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Patient Full Name
                  </label>
                  <input
                    id="patient-name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-5 py-3 rounded-full bg-slate-50 border text-sm focus:outline-none focus:ring-2 focus:ring-[#0050cb] focus:bg-white transition-all ${
                      errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                    }`}
                    placeholder="e.g. Muhammad Usman"
                    required
                    type="text"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1 pl-3">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="patient-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    id="patient-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-3 rounded-full bg-slate-50 border text-sm focus:outline-none focus:ring-2 focus:ring-[#0050cb] focus:bg-white transition-all ${
                      errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                    }`}
                    placeholder="patient@example.com"
                    type="email"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 pl-3">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="patient-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    WhatsApp / Mobile Number
                  </label>
                  <input
                    id="patient-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-5 py-3 rounded-full bg-slate-50 border text-sm focus:outline-none focus:ring-2 focus:ring-[#0050cb] focus:bg-white transition-all ${
                      errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                    }`}
                    placeholder="0316 5891778"
                    required
                    type="tel"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1 pl-3">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="clinic-location" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Clinic Location
                  </label>
                  <select
                    id="clinic-location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-full bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0050cb] focus:bg-white transition-all text-slate-700"
                  >
                    <option value="Shabbir Hospital (Bank Road, Daska)">
                      Shabbir Hospital (Bank Road, Daska)
                    </option>
                    <option value="Shabbir Hospital (Evening Clinic 4:00 - 8:00 PM)">
                      Shabbir Hospital (Evening Clinic 4:00 - 8:00 PM)
                    </option>
                    <option value="Home Visit / Special Case Assessment">
                      Home Visit / Special Case Assessment
                    </option>
                  </select>
                </div>
              </div>

              {/* Symptoms / Condition Subject */}
              <div>
                <label htmlFor="primary-symptom" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Primary Condition or Pain Area
                </label>
                <input
                  id="primary-symptom"
                  name="primarySymptom"
                  value={formData.primarySymptom}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-full bg-slate-50 border text-sm focus:outline-none focus:ring-2 focus:ring-[#0050cb] focus:bg-white transition-all ${
                    errors.primarySymptom ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                  }`}
                  placeholder="e.g. Neck stiffness, back pain, knee difficulty bending, stroke rehab"
                  type="text"
                  required
                />
                {errors.primarySymptom && (
                  <p className="text-xs text-red-500 mt-1 pl-3">{errors.primarySymptom}</p>
                )}
              </div>

              {/* Message / Medical History */}
              <div>
                <label htmlFor="detailed-symptoms" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Brief Condition Details or X-Ray/MRI Notes
                </label>
                <textarea
                  id="detailed-symptoms"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0050cb] focus:bg-white transition-all text-slate-700"
                  placeholder="Describe how long you have had this pain, any previous surgeries, or medication..."
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-blue-600 via-[#0050cb] to-[#00b4d8] text-white font-bold text-base shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/45 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Processing Request...</span>
                ) : (
                  <>
                    <span>SEND CONSULTATION REQUEST</span>
                    <span className="material-symbols-outlined text-[20px]">send</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2 text-center">
                <span className="material-symbols-outlined text-emerald-600 text-[16px] shrink-0">lock</span>
                <span>Appointments are coordinated directly with Dr. Hashaam at Shabbir Hospital, Daska.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
