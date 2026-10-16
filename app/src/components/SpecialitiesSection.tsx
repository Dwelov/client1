import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CLINIC_SERVICES, ServiceItem } from '../data/clinicData';
import { fadeRise, scrollCardVariants, viewportOnce } from '../utils/motionVariants';

interface SpecialitiesSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: (symptom?: string) => void;
  onOpenTriage: () => void;
}

export const SpecialitiesSection: React.FC<SpecialitiesSectionProps> = ({
  onSelectService,
  onOpenTriage,
}) => {
  const [filter, setFilter] = useState<'all' | 'spine_joints' | 'neuro_sports' | 'modalities'>('all');

  const filteredServices = CLINIC_SERVICES.filter((item) => {
    if (filter === 'spine_joints') {
      return ['back-pain', 'neck-pain', 'shoulder-pain', 'knee-pain', 'joint-rehabilitation'].includes(item.id);
    }
    if (filter === 'neuro_sports') {
      return ['stroke-rehab', 'sports-injuries', 'post-surgery-rehab', 'posture-correction'].includes(item.id);
    }
    if (filter === 'modalities') {
      return ['shockwave-therapy', 'electrotherapy', 'manual-therapy'].includes(item.id);
    }
    return true;
  });

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeRise(0)}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#00b4d8] uppercase tracking-widest block mb-2">
              Clinical Services &amp; Conditions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041945] tracking-tight">
              Comprehensive Physiotherapy &amp; Rehabilitation
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Services provided by Dr. M Hashaam at Shabbir Hospital, Bank Road, Daska.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenTriage}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0050cb] hover:text-[#00b4d8] transition-colors cursor-pointer"
            >
              <span>Interactive Symptom Checker</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeRise(0.1)}
          className="flex flex-wrap gap-2 mb-8 border-b border-slate-100 pb-4"
        >
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#0050cb] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Services ({CLINIC_SERVICES.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('spine_joints')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'spine_joints'
                ? 'bg-[#0050cb] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Spine &amp; Joints <span className="font-urdu text-[11px] font-normal opacity-80">(کمر، گردن، جوڑ)</span>
          </button>
          <button
            type="button"
            onClick={() => setFilter('neuro_sports')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'neuro_sports'
                ? 'bg-[#0050cb] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Stroke, Sports &amp; Post-Op <span className="font-urdu text-[11px] font-normal opacity-80">(فالج، اسپورٹس، سرجری)</span>
          </button>
          <button
            type="button"
            onClick={() => setFilter('modalities')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'modalities'
                ? 'bg-[#0050cb] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Therapies &amp; Modalities <span className="font-urdu text-[11px] font-normal opacity-80">(شاک ویو، الیکٹرو تھراپی)</span>
          </button>
        </motion.div>

        {/* Services Grid matching the exact layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((item: ServiceItem, index: number) => {
            const isCyan = index % 2 === 1;
            return (
              <motion.div
                key={item.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={scrollCardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group p-7 rounded-3xl bg-[#f5f9ff]/70 border border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-[background-color,box-shadow,border-color] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                        isCyan
                          ? 'bg-cyan-100 text-[#00b4d8] group-hover:bg-[#00b4d8] group-hover:text-white'
                          : 'bg-blue-100 text-[#0050cb] group-hover:bg-[#0050cb] group-hover:text-white'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[30px]">{item.icon}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-100 font-urdu">
                      {item.titleUrdu}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#041945] mb-2">{item.title}</h3>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {item.shortDesc}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs text-slate-500 font-medium">
                    {item.bulletPoints.map((bp) => (
                      <li key={bp} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#00b4d8] text-[16px]">
                          check_circle
                        </span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(item.id)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0050cb] group-hover:text-[#00b4d8] transition-colors text-left cursor-pointer pt-2 border-t border-slate-100/80"
                >
                  <span>View Details &amp; Therapy</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
