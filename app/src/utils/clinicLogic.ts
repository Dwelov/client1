/**
 * Core clinical appointment, triage, and formatting logic for
 * Dr. M Hashaam (Consultant Physiotherapist at Shabbir Hospital, Daska).
 */

export interface AppointmentInput {
  fullName: string;
  email?: string;
  phone: string;
  location: string;
  primarySymptom: string;
  notes?: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface TriageProtocol {
  id: string;
  title: string;
  titleUrdu: string;
  category: string;
  recommendedAction: string;
  methods: string[];
}

/**
 * Validates Pakistani phone numbers:
 * Supports +92 3XX XXXXXXX, 0316 5891778, 03XXXXXXXXX, 3XXXXXXXXX
 */
export function validatePakistanPhone(phone: string): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  const regex = /^(?:\+92|0092|0)?3[0-4]\d{8}$/;
  return regex.test(cleaned);
}

/**
 * Normalizes phone number into international format: +923XXXXXXXXX
 */
export function normalizePakistanPhone(phone: string): string {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  if (cleaned.startsWith('+92')) return cleaned;
  if (cleaned.startsWith('0092')) return `+${cleaned.slice(2)}`;
  if (cleaned.startsWith('03')) return `+92${cleaned.slice(1)}`;
  if (cleaned.startsWith('3') && cleaned.length === 10) return `+92${cleaned}`;
  return phone;
}

/**
 * Validates consultation form inputs
 */
export function validateAppointmentForm(input: AppointmentInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.fullName || input.fullName.trim().length < 3) {
    errors.fullName = 'Please enter patient full name (at least 3 characters)';
  }

  if (input.email && input.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email.trim())) {
      errors.email = 'Please provide a valid email address';
    }
  }

  if (!input.phone || !validatePakistanPhone(input.phone)) {
    errors.phone = 'Please provide a valid mobile number (e.g. 0316 5891778 or +92 316 5891778)';
  }

  if (!input.location || input.location.trim().length === 0) {
    errors.location = 'Please select a clinic location';
  }

  if (!input.primarySymptom || input.primarySymptom.trim().length < 3) {
    errors.primarySymptom = 'Please select or describe the primary symptom or reason for visit';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Triage engine matching symptoms to Dr. Hashaam's flyer services
 */
export function triageSymptom(query: string): TriageProtocol {
  const q = query.toLowerCase();

  if (q.includes('neck') || q.includes('گردن') || q.includes('headache') || q.includes('cervical')) {
    return {
      id: 'neck-pain',
      title: 'Neck Pain & Cervical Stiffness Therapy',
      titleUrdu: 'گردن کا درد اور سر درد',
      category: 'Cervical Spine Care',
      recommendedAction: 'Targeted cervical mobilization, posture correction, and myofascial release for headache and neck stiffness relief.',
      methods: ['Manual Therapy', 'Electrotherapy', 'Kinesiology Taping'],
    };
  }

  if (q.includes('shoulder') || q.includes('کندھ') || q.includes('rotator') || q.includes('frozen')) {
    return {
      id: 'shoulder-pain',
      title: 'Shoulder Pain & Rotator Cuff Care',
      titleUrdu: 'کندھے کا درد اور روٹیٹر کف انجری',
      category: 'Upper Limb Joint Care',
      recommendedAction: 'Gentle joint mobilization, kinesiology taping, and targeted exercise therapy to restore full arm range of motion.',
      methods: ['Spine Mobilization', 'Kinesiology Taping', 'Shockwave Therapy'],
    };
  }

  if (q.includes('stroke') || q.includes('فالج') || q.includes('paralysis') || q.includes('balance') || q.includes('weakness')) {
    return {
      id: 'stroke-rehab',
      title: 'Rehabilitation After Stroke & Paralysis Care',
      titleUrdu: 'فالج کے بعد بحالی اور توازن',
      category: 'Neurological Rehabilitation',
      recommendedAction: 'Comprehensive motor re-learning, gait training, and neuromuscular facilitation to regain independent movement and balance.',
      methods: ['Neuromuscular Facilitation', 'Gait & Balance Training', 'Chest Physiotherapy'],
    };
  }

  if (q.includes('knee') || q.includes('گھٹن') || q.includes('bending') || q.includes('osteoarthritis')) {
    return {
      id: 'knee-pain',
      title: 'Knee Pain & Joint Mobility Restoration',
      titleUrdu: 'گھٹنے کا درد اور جوڑوں کی اکڑن',
      category: 'Lower Limb Care',
      recommendedAction: 'Non-invasive decompression, joint mobilization, and quadriceps conditioning to overcome stiffness and bending difficulty.',
      methods: ['Shockwave Therapy', 'Manual Therapy', 'Electrotherapy'],
    };
  }

  if (q.includes('sport') || q.includes('اسپورٹس') || q.includes('sprain') || q.includes('tear') || q.includes('athletic')) {
    return {
      id: 'sports-injuries',
      title: 'Sports Injury & Ligament Recovery',
      titleUrdu: 'اسپورٹس انجری اور موچ',
      category: 'Athletic Recovery',
      recommendedAction: 'Rapid injury triage, kinesiology taping support, and progressive functional rehabilitation for sprains and muscle strains.',
      methods: ['Kinesiology Taping', 'Electrotherapy', 'Functional Loading'],
    };
  }

  if (q.includes('post-surg') || q.includes('سرجری') || q.includes('replacement') || q.includes('fracture') || q.includes('operation')) {
    return {
      id: 'post-surgery-rehab',
      title: 'Post-Surgery Rehabilitation Protocol',
      titleUrdu: 'سرجری کے بعد بحالی',
      category: 'Post-Operative Recovery',
      recommendedAction: 'Safe early-mobilization protocol following orthopedic or joint surgery to restore natural walking and prevent joint stiffness.',
      methods: ['Manual Therapy', 'Chest Physiotherapy', 'Active-Assisted Mobility'],
    };
  }

  if (q.includes('posture') || q.includes('پوسچر') || q.includes('walk') || q.includes('sitting') || q.includes('ergonomic')) {
    return {
      id: 'posture-correction',
      title: 'Posture Correction & Ergonomics Retraining',
      titleUrdu: 'پوسچر کی درستگی',
      category: 'Biomechanics & Posture',
      recommendedAction: 'Comprehensive evaluation of walking, sitting, and standing posture with custom biomechanical alignment routines.',
      methods: ['Spine Mobilization', 'Kinesiology Taping', 'Ergonomic Guidance'],
    };
  }

  // Default Back Pain / Spine Care
  return {
    id: 'back-pain',
    title: 'Back Pain & Spine Mobilization Therapy',
    titleUrdu: 'کمر درد اور مہروں کے مسائل',
    category: 'Spine & Vertebral Care',
    recommendedAction: 'Gentle spinal mobilization, vertebral decompression, and modern electrotherapy for relief of lower back stiffness and sciatica.',
    methods: ['Spine Mobilization', 'Shockwave Therapy', 'Electrotherapy'],
  };
}

/**
 * Creates WhatsApp booking link for Dr. M Hashaam's clinic desk (+92 316 5891778)
 */
export function generateWhatsAppBookingUrl(input: AppointmentInput): string {
  const clinicNumber = '923165891778';
  const lines = [
    'السلام علیکم Dr. M Hashaam,',
    `I would like to book a physiotherapy consultation at Shabbir Hospital, Daska.`,
    `• Patient Name: ${input.fullName}`,
    `• Contact Number: ${input.phone}`,
    input.email ? `• Email: ${input.email}` : '',
    `• Location: ${input.location}`,
    `• Primary Concern / Condition: ${input.primarySymptom}`,
    input.preferredDate ? `• Preferred Day: ${input.preferredDate}` : '',
    input.preferredTimeSlot ? `• Preferred Time: ${input.preferredTimeSlot}` : '',
    input.notes ? `• Details: ${input.notes}` : '',
    '',
    'Clinic Hours: Monday to Friday (4:00 PM - 8:00 PM)',
  ].filter(Boolean);

  const encoded = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${clinicNumber}?text=${encoded}`;
}
