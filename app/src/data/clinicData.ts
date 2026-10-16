export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  titleUrdu: string;
  shortDesc: string;
  bulletPoints: string[];
  fullDesc: string;
  methods: string[];
  flyerCategory: string;
}

export const DR_HASHAAM_INFO = {
  name: 'Dr. M Hashaam',
  shortName: 'Dr. Hashaam',
  title: 'Consultant Physiotherapist',
  portraitImage: '/src/assets/images/dr_hashaam_portrait_1792133472100.jpg',
  tagline: 'Move Better • Feel Better • Live Better',
  taglineUrdu: 'بہتر حرکت • بہتر احساس • بہتر زندگی',
  hospital: 'Shabbir Hospital',
  address: 'Bank Road, Daska (Shabbir Road, Daska, Sialkot District, Punjab)',
  hours: 'Monday to Friday, 4:00 PM to 8:00 PM (Evening Clinic)',
  phone: '0316 5891778',
  phoneInternational: '+92 316 5891778',
  certifications: [
    'Certified in Spine Mobilization',
    'Certified in Kinesiology Taping',
    'Certified in Chest Physiotherapy',
  ],
  promotionalHighlights: [
    { title: 'Experienced Physiotherapist', desc: 'Personalized clinical care tailored to your unique condition and daily movement needs.' },
    { title: 'Modern & Effective Methods', desc: 'Utilizing advanced shockwave therapy, modern electrotherapy, and evidence-informed mobilization.' },
    { title: 'Safe & Painless Treatment', desc: 'Gentle, non-invasive rehabilitation focused on restoring comfort without aggressive measures.' },
    { title: 'Quick Recovery & Dedicated Care', desc: 'Focused on relieving pain, restoring functional mobility, and enhancing quality of life.' },
  ],
};

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'back-pain',
    icon: 'airline_seat_recline_extra',
    title: 'Back Pain & Vertebral Care',
    titleUrdu: 'کمر درد اور مہروں کے مسائل',
    shortDesc: 'Comprehensive relief for vertebral and spinal problems, lower back spasms, and sciatica discomfort.',
    bulletPoints: [
      'Vertebral & Spinal Problem Care',
      'Lower Back Stiffness Relief',
      'Targeted Spine Mobilization',
    ],
    fullDesc: 'Dedicated physical therapy protocol addressing lumbar vertebrae strain, disc compression, and radiating sciatica using specialized spine mobilization and gentle mechanical modalities.',
    methods: ['Spine Mobilization', 'Electrotherapy', 'Postural Exercises'],
    flyerCategory: 'Spine & Vertebral',
  },
  {
    id: 'neck-pain',
    icon: 'fitness_center',
    title: 'Neck Pain & Cervical Care',
    titleUrdu: 'گردن کا درد اور سر درد',
    shortDesc: 'Alleviating acute and chronic headache, cervical muscular tension, and persistent neck stiffness.',
    bulletPoints: [
      'Cervical Stiffness Relief',
      'Tension Headache Reduction',
      'Safe Manual Decompression',
    ],
    fullDesc: 'Customized therapeutic treatment targeting cervical spine misalignment, muscular spasms, and work-related neck tension to restore smooth, painless neck rotation.',
    methods: ['Manual Therapy', 'Kinesiology Taping', 'Electrotherapy'],
    flyerCategory: 'Cervical & Head',
  },
  {
    id: 'shoulder-pain',
    icon: 'accessibility_new',
    title: 'Shoulder Pain & Rotator Cuff',
    titleUrdu: 'کندھے کا درد اور روٹیٹر کف',
    shortDesc: 'Specialized management of rotator cuff injuries, frozen shoulder, and restricted arm movements.',
    bulletPoints: [
      'Rotator Cuff Injury Care',
      'Range of Motion Restoration',
      'Kinesiology Taping Stabilization',
    ],
    fullDesc: 'Evidence-informed rehabilitation to reduce shoulder inflammation, rebuild cuff strength, and eliminate pain during overhead reaching and daily tasks.',
    methods: ['Kinesiology Taping', 'Shockwave Therapy', 'Joint Mobilization'],
    flyerCategory: 'Upper Limb Joints',
  },
  {
    id: 'knee-pain',
    icon: 'directions_walk',
    title: 'Knee Pain & Mobility Care',
    titleUrdu: 'گھٹنے کا درد اور اکڑن',
    shortDesc: 'Treating knee joint stiffness, bending difficulty, and age-related cartilage wear.',
    bulletPoints: [
      'Overcoming Bending Difficulty',
      'Joint Lubrication & Flexibility',
      'Quadriceps Strengthening',
    ],
    fullDesc: 'Focused knee rehabilitation designed to restore pain-free walking, stair climbing, and prayer postures by improving joint mechanics and peri-articular muscle support.',
    methods: ['Electrotherapy', 'Manual Therapy', 'Shockwave Therapy'],
    flyerCategory: 'Lower Limb Joints',
  },
  {
    id: 'stroke-rehab',
    icon: 'psychology',
    title: 'Rehabilitation After Stroke',
    titleUrdu: 'فالج کے بعد بحالی',
    shortDesc: 'Dedicated neuromuscular recovery supporting patients to regain functional movement, balance, and independence.',
    bulletPoints: [
      'Regaining Limb Movement',
      'Balance & Coordination Retraining',
      'Chest Physiotherapy Support',
    ],
    fullDesc: 'Comprehensive stroke and neurological rehabilitation utilizing functional exercises, gait retraining, and chest physiotherapy to maximize daily living independence.',
    methods: ['Neuromuscular Retraining', 'Gait & Balance Drills', 'Chest Physiotherapy'],
    flyerCategory: 'Neurological Recovery',
  },
  {
    id: 'sports-injuries',
    icon: 'sprint',
    title: 'Sports Injuries & Sprains',
    titleUrdu: 'اسپورٹس انجری اور موچ',
    shortDesc: 'Fast-track recovery for athletic injuries, joint sprains, and acute muscle tears.',
    bulletPoints: [
      'Ligament & Tendon Sprain Relief',
      'Muscle Tear Conditioning',
      'Kinesiology Taping Support',
    ],
    fullDesc: 'Targeted athletic rehabilitation protocols designed to accelerate tissue healing, restore explosive stability, and safely return active individuals to sport.',
    methods: ['Kinesiology Taping', 'Shockwave Therapy', 'Functional Conditioning'],
    flyerCategory: 'Sports & Athletic',
  },
  {
    id: 'post-surgery-rehab',
    icon: 'healing',
    title: 'Post-Surgery Rehabilitation',
    titleUrdu: 'سرجری کے بعد بحالی',
    shortDesc: 'Structured therapeutic recovery to support healing following orthopedic, joint, or spinal surgery.',
    bulletPoints: [
      'Preventing Post-Surgical Stiffness',
      'Gradual Safe Load Progression',
      'Pain & Edema Reduction',
    ],
    fullDesc: 'Step-by-step physical rehabilitation initiated after surgery to guide patients safely through tissue remodeling, regain joint flexibility, and prevent adhesions.',
    methods: ['Manual Mobilization', 'Chest Physiotherapy', 'Active-Assisted Movement'],
    flyerCategory: 'Post-Operative Care',
  },
  {
    id: 'posture-correction',
    icon: 'boy',
    title: 'Posture Correction & Alignment',
    titleUrdu: 'پوسچر کی درستگی',
    shortDesc: 'Improving body posture, movement, and comfort while walking, sitting, and standing.',
    bulletPoints: [
      'Walking & Sitting Ergonomics',
      'Forward Head & Rounded Shoulder Care',
      'Spine Natural Balance Restoration',
    ],
    fullDesc: 'Comprehensive biomechanical evaluation and corrective exercise therapy to relieve chronic postural strain caused by prolonged sitting or irregular gait.',
    methods: ['Spine Mobilization', 'Kinesiology Taping', 'Postural Exercises'],
    flyerCategory: 'Postural Biomechanics',
  },
  {
    id: 'shockwave-therapy',
    icon: 'waves',
    title: 'Shockwave Therapy',
    titleUrdu: 'شاک ویو تھراپی',
    shortDesc: 'Modern acoustic waves applied for targeted pain reduction and accelerated tissue recovery.',
    bulletPoints: [
      'Deep Tissue Stimulation',
      'Chronic Tendonitis Treatment',
      'Safe & Non-Invasive',
    ],
    fullDesc: 'Advanced acoustic wave technology that stimulates microcirculation and triggers natural tissue regeneration for recalcitrant joint and tendon conditions.',
    methods: ['Radial Shockwave Therapy', 'Targeted Pain Relief', 'Acoustic Mobilization'],
    flyerCategory: 'Advanced Modalities',
  },
  {
    id: 'electrotherapy',
    icon: 'bolt',
    title: 'Electrotherapy Modalities',
    titleUrdu: 'الیکٹرو تھراپی',
    shortDesc: 'Modern electrical stimulation modalities to reduce pain intensity and relax hyperactive muscles.',
    bulletPoints: [
      'Rapid Pain Intensity Reduction',
      'Deep Muscle Relaxation',
      'Circulation Enhancement',
    ],
    fullDesc: 'Targeted therapeutic electrical currents that intercept pain signals, ease involuntary muscle spasms, and promote localized tissue healing.',
    methods: ['TENS / IFT Modalities', 'Therapeutic Ultrasound', 'Muscle Stimulation'],
    flyerCategory: 'Advanced Modalities',
  },
  {
    id: 'manual-therapy',
    icon: 'pan_tool',
    title: 'Manual Therapy & Mobilization',
    titleUrdu: 'مینوئل تھراپی اور اسپائن موبلائزیشن',
    shortDesc: 'Specialized hands-on mobilization techniques supporting the body’s natural mechanical balance.',
    bulletPoints: [
      'Certified Spine Mobilization',
      'Joint Articulation & Release',
      'Natural Biomechanical Balance',
    ],
    fullDesc: 'Expert manual manipulation and gentle mobilization of spinal vertebrae and peripheral joints to eliminate restrictions and restore effortless natural movement.',
    methods: ['Spine Mobilization', 'Passive Joint Glides', 'Myofascial Trigger Release'],
    flyerCategory: 'Hands-on Therapy',
  },
  {
    id: 'joint-rehabilitation',
    icon: 'self_improvement',
    title: 'Joint Rehabilitation & Strength',
    titleUrdu: 'جوڑوں کی بحالی',
    shortDesc: 'Restoring flexibility, strength, and range of motion across major and minor body joints.',
    bulletPoints: [
      'Flexibility & Range of Motion',
      'Strengthening Supporting Muscles',
      'Long-Term Joint Protection',
    ],
    fullDesc: 'Complete functional restoration for arthritic, stiff, or weakened joints to rebuild stability and prevent recurrent discomfort in day-to-day life.',
    methods: ['Dynamic Stretching', 'Resistance Conditioning', 'Manual Glides'],
    flyerCategory: 'Joint Mobility',
  },
];

export const CLINIC_LOCATION_INFO = {
  hospitalName: 'Shabbir Hospital',
  road: 'Bank Road, Daska',
  secondaryRoadNote: 'Shabbir Road, Daska',
  city: 'Daska, Punjab, Pakistan',
  timings: 'Monday to Friday: 4:00 PM - 8:00 PM (Evening)',
  weekendNote: 'Saturday & Sunday: Appointments & Inquiries via WhatsApp',
  consultant: 'Dr. M Hashaam (Consultant Physiotherapist)',
  helpline: '0316 5891778',
  helplineInternational: '+92 316 5891778',
  tagline: 'Move Better • Feel Better • Live Better',
};
