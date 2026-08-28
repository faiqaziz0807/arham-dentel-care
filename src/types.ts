export interface ServiceItem {
  id: string;
  title: string;
  titleUrdu?: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  duration: string;
  painLevel: 'Zero Pain' | 'Minimal / Mild' | 'Local Anesthesia';
  category: 'Preventive' | 'Cosmetic' | 'Restorative' | 'Orthodontic' | 'Surgical';
  benefits: string[];
  recommendedFor: string;
  image: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  sessions: number;
  doctorNotes: string;
  tags: string[];
}

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  tagline: string;
}

export interface ClinicTiming {
  days: string;
  hours: string;
  isOpenToday: boolean;
  note?: string;
}

export interface AppointmentData {
  patientName: string;
  phone: string;
  email?: string;
  serviceId: string;
  doctor: string;
  date: string;
  timeSlot: string;
  notes?: string;
  isConfirmed?: boolean;
}

export type LanguageCode = 'en' | 'ur' | 'ur-roman';
