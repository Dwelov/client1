import React, { useState } from 'react';
import { triageSymptom, TriageProtocol } from '../utils/clinicLogic';

interface SymptomTriageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProtocol: (protocolTitle: string) => void;
}

const COMMON_AREAS = [
  { label: 'Back Pain (کمر درد)', query: 'Back pain lumbar spine disc problems' },
  { label: 'Neck Pain (گردن کا درد)', query: 'Neck pain cervical stiffness and headache' },
  { label: 'Shoulder Pain (کندھے کا درد)', query: 'Shoulder pain rotator cuff injury' },
  { label: 'Knee Pain (گھٹنے کا درد)', query: 'Knee pain stiffness bending difficulty' },
  { label: 'Stroke Rehab (فالج کے بعد بحالی)', query: 'Rehabilitation after stroke balance paralysis' },
  { label: 'Sports Injuries (اسپورٹس انجری)', query: 'Sports injury sprain muscle tear' },
  { label: 'Post-Surgery (سرجری کے بعد بحالی)', query: 'Post-surgery rehabilitation joint replacement' },
  { label: 'Posture Correction (پوسچر کی درستگی)', query: 'Posture correction walking sitting alignment' },
];

export const SymptomTriageModal: React.FC<SymptomTriageModalProps> = ({
  isOpen,
  onClose,
  onSelectProtocol,
}) => {
  const [userInput, setUserInput] = useState('');
  const [activeQuery, setActiveQuery] = useState('Back pain lumbar spine disc problems');

  if (!isOpen) return null;

  const currentResult: TriageProtocol = triageSymptom(userInput || activeQuery);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden my-8 transform transition-all animate-fadeIn"
        role="dialog"
        aria-modal="true"
        aria-labelledby="triage-title"
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#0050cb] via-blue-600 to-[#00b4d8] text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close triage"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-2">
            <span className="material-symbols-outlined text-[16px]">stethoscope</span>
            <span>Dr. M Hashaam • Clinical Triage</span>
          </div>
          <h3 id="triage-title" className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Check Your Condition &amp; Treatment Options
          </h3>
          <p className="text-xs text-blue-100 mt-1">
            Identify the recommended physiotherapy protocol at Shabbir Hospital, Daska.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quick Body Area Pills */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Select Your Concern (خدمات پر کلک کریں)
            </label>
            <div className="flex flex-wrap gap-2">
              {COMMON_AREAS.map((area) => (
                <button
                  key={area.label}
                  type="button"
                  onClick={() => {
                    setActiveQuery(area.query);
                    setUserInput('');
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeQuery === area.query && !userInput
                      ? 'bg-[#0050cb] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {area.label}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Symptom Input */}
          <div>
            <label htmlFor="custom-symptom-input" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Or Type What You Are Experiencing
            </label>
            <input
              id="custom-symptom-input"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="e.g. neck stiffness, difficulty bending knee, rotator cuff pain..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0050cb] focus:bg-white"
            />
          </div>

          {/* Matched Protocol Card */}
          <div className="p-5 rounded-2xl bg-[#f5f9ff] border border-blue-200/70 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00b4d8]">
                {currentResult.category}
              </span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0050cb]">
                {currentResult.titleUrdu}
              </span>
            </div>

            <h4 className="text-lg font-bold text-[#041945]">
              {currentResult.title}
            </h4>

            <p className="text-xs text-slate-600 leading-relaxed">
              {currentResult.recommendedAction}
            </p>

            <div className="pt-2 flex flex-wrap gap-1.5">
              {currentResult.methods.map((method, idx) => (
                <span key={idx} className="px-2.5 py-0.5 bg-white border border-slate-200 rounded-full text-[11px] font-medium text-slate-600">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectProtocol(currentResult.title);
            }}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0050cb] to-[#00b4d8] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Book Consultation For This Treatment</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
