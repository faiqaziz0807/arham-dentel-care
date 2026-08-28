import { ServiceItem, BeforeAfterCase, HeroSlide, LanguageCode } from '../types';

export const CLINIC_INFO = {
  name: 'Arham Dental Care',
  doctorName: 'Dr. Samina Anjum',
  doctorCredentials: 'BDS, RDS | Dental Surgeon & Aesthetic Practitioner',
  doctorExperience: '12+ Years Clinical Experience',
  timings: '5:00 PM to 10:00 PM (Monday to Saturday)',
  daysOpen: 'Monday to Saturday',
  workingHoursShort: 'Mon - Sat: 5:00 PM – 10:00 PM',
  sundayStatus: 'Sunday: Closed (Emergency on Call)',
  address: 'Log Welfare Shopping Complex, Range Rd, Askari XI Askari 11, Rawalpindi, 46000, Pakistan',
  addressShort: 'Askari 11, Range Rd, Rawalpindi',
  mapsLink: 'https://share.google/vOXD1xti8qay1pPog',
  phone: '+92 333 5123456',
  phoneDisplay: '+92 (333) 512-3456',
  whatsappNumber: '923335123456',
  email: 'care@arhamdental.pk',
  establishedYear: '2014',
  totalPatientsTreated: '15,000+',
  satisfactionRate: '99.4%',
  colors: {
    primary: '#0C4A6E', // Deep Trust Blue
    accent: '#06B6D4',  // Soft Turquoise
    background: '#F8FAFC', // Clean Light Background
    white: '#FFFFFF',
  }
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80',
    title: 'Gentle & Professional Dental Care in Rawalpindi',
    subtitle: 'Dr. Samina Anjum | Mon-Sat (5 PM - 10 PM)',
    tagline: 'State-of-the-Art Sterile Clinic in Askari 11'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1920&q=80',
    title: 'Transform Your Smile with Modern Aesthetic Dentistry',
    subtitle: 'Pain-Free Laser Whitening & Invisible Aligners',
    tagline: 'Customized Smile Makeovers with Natural Results'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1920&q=80',
    title: 'Advanced Root Canal & Restorative Treatments',
    subtitle: 'Single-Visit Rotary Endodontics by Dr. Samina Anjum',
    tagline: 'Preserving Natural Teeth with Utmost Precision'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1920&q=80',
    title: 'Family & Pediatric Dental Care in Askari 11',
    subtitle: 'Relaxed, Child-Friendly & Anxiety-Free Environment',
    tagline: 'Comprehensive Oral Health for Every Generation'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'checkup',
    title: 'Dental Checkups & Scaling',
    titleUrdu: 'دانتوں کا معائنہ اور صفائی',
    shortDescription: 'Comprehensive oral diagnostic examination, digital intraoral imaging, and ultrasonic scaling & polishing.',
    fullDescription: 'Routine preventive care including full mouth ultrasonic plaque removal, stain removal, gum disease assessment, and high-resolution intraoral imaging to catch decay before it causes pain.',
    iconName: 'Sparkles',
    duration: '30 - 45 mins',
    painLevel: 'Zero Pain',
    category: 'Preventive',
    benefits: ['Ultrasonic deep cleaning', 'Zero enamel erosion', 'Fresh breath & stain removal', 'Early cavity detection'],
    recommendedFor: 'Recommended every 6 months for adults and children to ensure long-term gum & tooth health.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening & Brightening',
    titleUrdu: 'دانتوں کی چمک اور وائٹننگ',
    shortDescription: 'Medical-grade laser teeth whitening delivering 4-8 shades lighter in a single relaxed session.',
    fullDescription: 'In-office professional dental bleaching using hydrogen peroxide activation with cold blue LED light. Safely dissolves years of tea, coffee, smoking, and food stains without tooth sensitivity.',
    iconName: 'Sun',
    duration: '45 - 60 mins',
    painLevel: 'Zero Pain',
    category: 'Cosmetic',
    benefits: ['4 to 8 shades whiter', 'Immediate visible results', 'Sensitivity-protected formula', 'Safe for tooth enamel'],
    recommendedFor: 'Ideal before weddings, social events, or for anyone wanting to restore natural radiant whiteness.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment (RCT)',
    titleUrdu: 'روٹ کینال کا بے درد علاج',
    shortDescription: 'Modern painless rotary root canal therapy to relieve acute toothache and save infected teeth.',
    fullDescription: 'Utilizing nickel-titanium rotary systems, digital apex locators, and computerized local anesthesia to clear pulp infection, disinfect the root canal system, and seal it hermetically.',
    iconName: 'ShieldAlert',
    duration: '45 - 60 mins / session',
    painLevel: 'Local Anesthesia',
    category: 'Restorative',
    benefits: ['100% painless procedure', 'Saves the natural tooth', 'Single or dual visit convenience', 'Stops spreading infection'],
    recommendedFor: 'Patients experiencing throbbing toothache, sensitivity to hot/cold, or swelling in gums.',
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'orthodontics',
    title: 'Braces & Clear Aligners',
    titleUrdu: 'دانتوں کے بریسز اور الائنرز',
    shortDescription: 'Traditional metallic/ceramic braces and discreet clear aligners for crooked or spaced teeth.',
    fullDescription: 'Customized orthodontic treatment plans for children, teens, and adults. Corrects overcrowding, crossbites, overbites, and gaps to restore facial harmony and chewing efficiency.',
    iconName: 'Smile',
    duration: 'Monthly check-in',
    painLevel: 'Minimal / Mild',
    category: 'Orthodontic',
    benefits: ['Discreet transparent options', 'Corrects bite & jaw posture', 'Improves facial symmetry', 'Custom digital treatment plan'],
    recommendedFor: 'Irregular, crowded, protruding, or spaced teeth in children and adults.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fillings',
    title: 'Dental Fillings & Cavity Care',
    titleUrdu: 'دانتوں کی فلنگ اور کیویٹی کا علاج',
    shortDescription: 'Tooth-colored aesthetic composite fillings and pain-free cavity excavation to preserve natural teeth.',
    fullDescription: 'High-grade biocompatible composite resin fillings matched precisely to your natural tooth shade. Eliminates active decay, prevents pulp infection, seals food traps, and restores strong biting power with zero metal or mercury.',
    iconName: 'Bandage',
    duration: '30 - 45 mins',
    painLevel: 'Zero Pain',
    category: 'Restorative',
    benefits: ['Natural tooth-colored match', '100% Mercury-free composite', 'Prevents deep nerve infection', 'Immediate strong bite restoration'],
    recommendedFor: 'Recommended for cavities, dark spots, food packing between teeth, or repairing old worn-out fillings.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'crowns-bridges',
    title: 'Dental Crowns & Bridges',
    titleUrdu: 'دانتوں کے کراؤن اور برجز',
    shortDescription: 'Zirconia, E-Max, and porcelain fused to metal (PFM) crowns for damaged or missing teeth.',
    fullDescription: 'High-strength, aesthetic dental caps that reinforce cracked or root-canal-treated teeth, as well as fixed bridges that bridge gaps where teeth are missing.',
    iconName: 'Crown',
    duration: '2 visits',
    painLevel: 'Local Anesthesia',
    category: 'Restorative',
    benefits: ['Natural translucency (Zirconia)', 'Extreme bite strength', 'Custom shade matched', 'Protects brittle teeth'],
    recommendedFor: 'Teeth after root canal treatment, large broken fillings, or replacing missing teeth.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1',
    title: 'Laser Teeth Whitening & Polishing',
    category: 'Cosmetic Whitening',
    description: 'Deep yellow coffee & tea staining reversed to sparkling bright natural shade in a single 45-minute treatment.',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80',
    duration: '45 mins (Single Session)',
    sessions: 1,
    doctorNotes: 'Applied gingival barrier to protect gums, followed by 3x 15-min cycles of photo-activated bleaching gel.',
    tags: ['Whitening', 'Painless', 'Zero Sensitivity']
  },
  {
    id: 'case-2',
    title: 'Orthodontic Alignment & Gap Closure',
    category: 'Orthodontics',
    description: 'Severe maxillary midline spacing and mild protrusion corrected to ideal arch alignment.',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80',
    duration: '8 Months',
    sessions: 9,
    doctorNotes: 'Clear aligner therapy with sequential refinement. Patient achieved 100% midline symmetry without extractions.',
    tags: ['Aligners', 'Spacing Closed', 'Non-Surgical']
  },
  {
    id: 'case-3',
    title: 'Porcelain Veneers & Smile Makeover',
    category: 'Cosmetic Dentistry',
    description: 'Chipped central incisors with mottled fluorosis enamel restored with ultra-thin E-Max ceramic veneers.',
    beforeImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
    duration: '2 Visits',
    sessions: 2,
    doctorNotes: '0.3mm conservative preparation preserving maximum enamel, bonded with dual-cure aesthetic resin.',
    tags: ['Veneers', 'Fluorosis Fix', 'E-Max']
  },
  {
    id: 'case-4',
    title: 'Rotary RCT & Zirconia Crown Restoration',
    category: 'Restorative Care',
    description: 'Severely decayed lower molar restored to full functional occlusion and natural contour.',
    beforeImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80',
    duration: '2 Visits',
    sessions: 2,
    doctorNotes: 'Single sitting rotary instrumentation with biocompatible bioceramic sealer, crowned with monolithic translucent zirconia.',
    tags: ['Rotary RCT', 'Zirconia Crown', 'Pain Relief']
  }
];

export const CLINIC_HIGHLIGHTS = [
  {
    icon: 'ShieldCheck',
    title: '100% Sterilization Protocol',
    description: 'Class-B hospital autoclave sterilization and single-use disposable kits for every individual patient.'
  },
  {
    icon: 'Sparkles',
    title: 'Painless Gentle Technology',
    description: 'Computerized topical numbing, low-vibration rotary tools, and an empathetic approach to eliminate anxiety.'
  },
  {
    icon: 'Clock',
    title: 'Convenient Evening Hours',
    description: 'Open Monday to Saturday from 5:00 PM to 10:00 PM so you never need to miss work or school.'
  },
  {
    icon: 'MapPin',
    title: 'Prime Askari 11 Location',
    description: 'Located in Log Welfare Shopping Complex on Range Road with ample secure parking.'
  }
];

export const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      beforeAfter: 'Before & After',
      location: 'Location & Contact',
      bookAppointment: 'Book Appointment',
      callNow: 'Call Now'
    },
    hero: {
      heading: 'Gentle & Professional Dental Care in Rawalpindi',
      doctorLine: 'Dr. Samina Anjum | Mon-Sat (5 PM - 10 PM)',
      ctaBook: 'Book Appointment',
      ctaCall: 'Call / WhatsApp Now',
      ctaLocation: 'Find on Maps'
    },
    timings: {
      title: 'Clinic Timings & Working Hours',
      badge: 'Evening Clinic',
      monSat: 'Monday to Saturday',
      hours: '5:00 PM – 10:00 PM',
      sunday: 'Sunday: Closed (Emergency On-Call)',
      statusOpen: 'Clinic is Open Now',
      statusClosed: 'Clinic Opens at 5:00 PM',
      emergencyText: 'Need an emergency dental consultation? Contact us directly.'
    },
    services: {
      title: 'Our Specialized Dental Services',
      subtitle: 'Comprehensive dental solutions executed with sterile equipment, advanced technology, and utmost gentleness.',
      viewDetails: 'View Treatment Details',
      bookThis: 'Book This Service'
    },
    beforeAfter: {
      title: 'Real Patient Transformations',
      subtitle: 'Slide or toggle below to see actual Before & After dental outcomes treated at Arham Dental Care.',
      beforeLabel: 'Before Treatment',
      afterLabel: 'After Treatment',
      dragHint: 'Drag the slider to compare Before & After results'
    },
    about: {
      title: 'Meet Dr. Samina Anjum',
      role: 'Lead Dental Surgeon & Aesthetic Practitioner',
      experience: '12+ Years Dedicated Clinical Practice in Rawalpindi',
      bio: 'Dr. Samina Anjum is renowned for her calm, gentle demeanor and precision dental treatments. At Arham Dental Care, every patient receives unhurried, personalized attention in a modern, spotless clinic setting designed to make dental visits comfortable and anxiety-free.',
      philosophy: 'Our patient-first philosophy ensures zero rushed appointments, crystal-clear explanation of every step, and long-lasting dental health.'
    },
    location: {
      title: 'Clinic Location & Directions',
      addressTitle: 'Physical Address',
      addressText: 'Log Welfare Shopping Complex, Range Rd, Askari XI Askari 11, Rawalpindi, 46000, Pakistan',
      openMaps: 'Open in Google Maps',
      parkingInfo: 'Spacious & secure parking available directly outside the shopping complex.',
      landmark: 'Easily accessible from Range Road, adjacent to Askari 11 main gate.'
    },
    footer: {
      rights: 'All Rights Reserved. Arham Dental Care by Dr. Samina Anjum.',
      security: 'SSL Encrypted Patient Portal | Ministry of Health Guidelines Compliant'
    }
  },
  ur: {
    nav: {
      home: 'ہوم',
      about: 'ہمارے متعلق',
      services: 'طبی خدمات',
      beforeAfter: 'علاج سے پہلے اور بعد',
      location: 'پتہ اور رابطہ',
      bookAppointment: 'وقت لیں (اپوائنٹمنٹ)',
      callNow: 'کال کریں'
    },
    hero: {
      heading: 'راولپنڈی میں نرم اور معیاری دانتوں کا علاج',
      doctorLine: 'ڈاکٹر ثمینہ انجم | پیر تا ہفتہ (شام 5 تا رات 10 بجے)',
      ctaBook: 'اپوائنٹمنٹ بک کریں',
      ctaCall: 'کال / واٹس ایپ کریں',
      ctaLocation: 'گوگل میپ پر دیکھیں'
    },
    timings: {
      title: 'کلینک کے اوقات کار',
      badge: 'شام کا کلینک',
      monSat: 'پیر سے ہفتہ',
      hours: 'شام 5:00 بجے سے رات 10:00 بجے تک',
      sunday: 'اتوار: بند (ہنگامی صورت میں کال کریں)',
      statusOpen: 'کلینک اس وقت کھلا ہے',
      statusClosed: 'کلینک شام 5 بجے کھلے گا',
      emergencyText: 'ہنگامی حالت میں فوری رابطہ کریں۔'
    },
    services: {
      title: 'ہماری خصوصی ڈینٹل سروسز',
      subtitle: 'جدید ترین جراثیم سے پاک آلات اور بے درد ٹیکنالوجی کے ساتھ دانتوں کا مکمل علاج۔',
      viewDetails: 'تفصیلات دیکھیں',
      bookThis: 'یہ سروس بک کریں'
    },
    beforeAfter: {
      title: 'علاج کے حقیقی نتائج',
      subtitle: 'ارہم ڈینٹل کیئر پر علاج سے پہلے اور بعد کی تبدیلی ملاحظہ فرمائیں۔',
      beforeLabel: 'علاج سے پہلے',
      afterLabel: 'علاج کے بعد',
      dragHint: 'فرق دیکھنے کے لیے سلائیڈر کو دائیں بائیں ہلائیں'
    },
    about: {
      title: 'ڈاکٹر ثمینہ انجم سے ملیں',
      role: 'چیف ڈینٹل سرجن اور ایستھیٹک ماہر',
      experience: '12 سال سے زائد کا کلینیکل تجربہ',
      bio: 'ڈاکٹر ثمینہ انجم اپنے مشفقانہ اور بے درد علاج کے باعث جانی جاتی ہیں۔ ارہم ڈینٹل کیئر پر مریضوں کو پرسکون ماحول اور جدید آلات کے ساتھ مکمل توجہ دی جاتی ہے۔',
      philosophy: 'ہماری اولین ترجیح مریض کا آرام اور دانتوں کی پائیدار صحت ہے۔'
    },
    location: {
      title: 'کلینک کا پتہ اور رہنمائی',
      addressTitle: 'مکمل پتہ',
      addressText: 'لاگ ویلفیئر شاپنگ کمپلیکس، رینج روڈ، عسکری 11، راولپنڈی، پاکستان',
      openMaps: 'گوگل میپس پر کھولیں',
      parkingInfo: 'شاپنگ کمپلیکس کے باہر محفوظ پارکنگ کی سہولت دستیاب ہے۔',
      landmark: 'عسکری 11 کے مرکزی گیٹ اور رینج روڈ کے بالکل قریب۔'
    },
    footer: {
      rights: 'تمام جملہ حقوق محفوظ ہیں۔ ارہم ڈینٹل کیئر - ڈاکٹر ثمینہ انجم',
      security: 'ایس ایس ایل محفوظ پیشنٹ پورٹل | محکمہ صحت کے اصولوں کے مطابق'
    }
  },
  'ur-roman': {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      beforeAfter: 'Pehle & Baad',
      location: 'Location & Raabta',
      bookAppointment: 'Appointment Book Karein',
      callNow: 'Call Karein'
    },
    hero: {
      heading: 'Rawalpindi Mein Aasan Aur Painless Dental Care',
      doctorLine: 'Dr. Samina Anjum | Somwar se Hafta (5 PM - 10 PM)',
      ctaBook: 'Appointment Book Karein',
      ctaCall: 'Call / WhatsApp Karein',
      ctaLocation: 'Maps Par Dekhein'
    },
    timings: {
      title: 'Clinic Ke Auqaat (Timings)',
      badge: 'Evening Timings',
      monSat: 'Monday to Saturday',
      hours: '5:00 PM se 10:00 PM tak',
      sunday: 'Sunday: Closed (Emergency Call Available)',
      statusOpen: 'Clinic Abhi Khula Hai',
      statusClosed: 'Clinic Shaam 5:00 PM Par Khulay Ga',
      emergencyText: 'Emergency ki soorat mein direct call karein.'
    },
    services: {
      title: 'Hamari Dental Services',
      subtitle: 'Painless treatment, sterile machinery, aur friendly atmosphere.',
      viewDetails: 'Tafseelat Dekhein',
      bookThis: 'Yeh Book Karein'
    },
    beforeAfter: {
      title: 'Real Patients Ke Results',
      subtitle: 'Slider se check karein ilaaj se pehle aur baad ka farq.',
      beforeLabel: 'Pehle (Before)',
      afterLabel: 'Baad (After)',
      dragHint: 'Slider ko drag karke farq dekhein'
    },
    about: {
      title: 'Dr. Samina Anjum',
      role: 'Senior Dental Surgeon',
      experience: '12+ Saal Ka Tajurba',
      bio: 'Dr. Samina Anjum Askari 11 Rawalpindi mein painless dental treatments aur smile design ki specialist hain.',
      philosophy: 'Har mareez ko mukammal time aur comfortable ilaaj dena hamari pehli tarjeeh hai.'
    },
    location: {
      title: 'Clinic Ka Address',
      addressTitle: 'Address',
      addressText: 'Log Welfare Shopping Complex, Range Rd, Askari 11, Rawalpindi, Pakistan',
      openMaps: 'Google Maps Par Open Karein',
      parkingInfo: 'Complex ke bahir open parking mojood hai.',
      landmark: 'Range Road Askari 11 main gate ke bilkul paas.'
    },
    footer: {
      rights: 'All rights reserved. Arham Dental Care by Dr. Samina Anjum.',
      security: 'Safe & Verified Medical Practice'
    }
  }
};
