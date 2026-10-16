/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SpecialitiesSection } from './components/SpecialitiesSection';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { DoctorProfileSection } from './components/DoctorProfileSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SymptomTriageModal } from './components/SymptomTriageModal';
import { AppointmentSection } from './components/AppointmentSection';
import { AppointmentSuccessModal } from './components/AppointmentSuccessModal';
import { Footer } from './components/Footer';
import { AppointmentInput } from './utils/clinicLogic';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isTriageOpen, setIsTriageOpen] = useState(false);
  const [prefilledSymptom, setPrefilledSymptom] = useState<string>('');
  const [successBookingData, setSuccessBookingData] = useState<
    (AppointmentInput & { bookingId: string }) | null
  >(null);

  const handleOpenBooking = (symptom?: string) => {
    if (symptom) {
      setPrefilledSymptom(symptom);
    }
    const appointmentEl = document.getElementById('appointment');
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProtocolFromTriage = (protocolTitle: string) => {
    setPrefilledSymptom(protocolTitle);
    const appointmentEl = document.getElementById('appointment');
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookWithService = (serviceTitle: string) => {
    setPrefilledSymptom(serviceTitle);
    const appointmentEl = document.getElementById('appointment');
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // reducedMotion="user" degrades every transform animation to a plain
    // opacity fade for visitors with prefers-reduced-motion enabled.
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-[#f5f9ff] text-[#071638] antialiased flex flex-col selection:bg-[#00b4d8] selection:text-white">
      {/* Top Persistent Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenTriage={() => setIsTriageOpen(true)}
      />

      {/* Main View Flow */}
      <main className="w-full flex-grow overflow-hidden">
        {/* 1. Hero Section with 3D Anatomical Centerpiece */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onSelectService={(id) => setSelectedServiceId(id)}
        />

        {/* 2. All 12 Clinical Services from Flyer */}
        <SpecialitiesSection
          onSelectService={(id) => setSelectedServiceId(id)}
          onOpenBooking={handleOpenBooking}
          onOpenTriage={() => setIsTriageOpen(true)}
        />

        {/* 3. Dr. M Hashaam Consultant Profile */}
        <DoctorProfileSection
          onOpenBooking={() => handleOpenBooking('Consultation with Dr. M Hashaam')}
        />

        {/* 4. Clinical Standards & Verified Flyer Highlights */}
        <TestimonialsSection />

        {/* 5. Appointment Booking & Shabbir Hospital Details */}
        <AppointmentSection
          initialSymptom={prefilledSymptom}
          onAppointmentSuccess={(data) => setSuccessBookingData(data)}
        />
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <TreatmentDetailModal
        serviceId={selectedServiceId}
        onClose={() => setSelectedServiceId(null)}
        onBookWithService={handleBookWithService}
      />

      <SymptomTriageModal
        isOpen={isTriageOpen}
        onClose={() => setIsTriageOpen(false)}
        onSelectProtocol={handleSelectProtocolFromTriage}
      />

      <AppointmentSuccessModal
        data={successBookingData}
        onClose={() => setSuccessBookingData(null)}
      />
    </div>
    </MotionConfig>
  );
}
