
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod_foundations',
    name: 'Dance Course',
    label: 'FOUNDATIONS',
    price: 1000,
    level: 1,
    tagline: 'Your first step onto the floor.',
    description: 'A focused starter program for curious learners taking their first step onto the floor.',
    features: [
      '6 private 1-on-1 sessions (60 min each)',
      'Personalised movement assessment',
      'Foundational technique & musicality',
      'Full session replays for self-review',
      'Curated practice playlist',
      'Direct message access between sessions'
    ],
    bestFor: 'Curious learners ready to begin their journey.',
    ctaLabel: 'Begin Your Journey'
  },
  {
    id: 'prod_starter',
    name: 'Dancing Starter Beginner',
    label: 'STARTER',
    price: 1500,
    level: 2,
    tagline: 'Build confidence. Build technique.',
    description: 'Designed for beginners committed to building a real foundation through deliberate practice.',
    features: [
      '10 private 1-on-1 sessions (60 min each)',
      'Posture, frame & musicality drills',
      'Custom 12-week practice plan',
      'Video breakdowns of every session',
      'Choreography starter for one routine',
      'Monthly progress review call'
    ],
    bestFor: 'Beginners committed to building a real foundation.',
    ctaLabel: 'Start Your Practice'
  },
  {
    id: 'prod_pro',
    name: 'Dancing Course Pro',
    label: 'PRO — MOST POPULAR',
    price: 2000,
    level: 3,
    tagline: 'Train like a professional.',
    description: 'A premium track for serious dancers ready to perform at their peak.',
    features: [
      '16 private 1-on-1 sessions (75 min each)',
      'Performance-grade technique coaching',
      'Two full choreographies built around you',
      'On-camera presence & stage craft',
      'Audition / showcase preparation',
      'Priority scheduling & WhatsApp support',
      'Filmed final performance reel'
    ],
    bestFor: 'Serious dancers ready to perform at their peak.',
    ctaLabel: 'Go Pro',
    featured: true
  },
  {
    id: 'prod_bespoke',
    name: 'Custom Consultation',
    label: 'BESPOKE',
    price: 0,
    level: 4,
    tagline: 'Your vision, tailored to you.',
    description: 'Whether it is wedding choreography, performance prep, audition coaching, or something entirely unique — we design a program built around your goals.',
    features: [
      'Discovery call to map your vision',
      'Bespoke program length & format',
      'In-person sessions on request (London)',
      'Choreography, styling & music selection',
      'Travel days available for events',
      'Custom invoicing & flexible payment'
    ],
    bestFor: 'Dancers, couples and performers with a specific moment in mind.',
    ctaLabel: 'Request a Quote',
    customPricing: true
  }
];

export const TESTIMONIALS = [
  {
    initials: 'AB',
    name: 'Amelia B.',
    role: 'Wedding First Dance',
    text: "I had never danced before. Six weeks later we walked onto our wedding floor and floated through a routine that felt like ours. Kitija made it feel effortless."
  },
  {
    initials: 'JR',
    name: 'Jordan R.',
    role: 'Audition Prep',
    text: "The Pro track changed how I move. Every detail — posture, breath, the pause before a turn — got attention. I booked the audition I'd been chasing for two years."
  },
  {
    initials: 'SM',
    name: 'Sofia M.',
    role: 'Returning Dancer',
    text: "I came back to dance after a decade away. The starter program rebuilt my confidence without ego. I leave every session smiling and a little sore."
  }
];

export const PAIN_POINTS = [
  'Group classes that never look at you',
  'Choreography you cannot remember the next day',
  'Wedding panic — three weeks out and still no routine',
  'Practising alone with no feedback loop',
  'Confidence dropping every time you watch the mirror',
  'Audition deadlines that keep slipping',
  'No one teaching you how to actually perform',
  'Burning out before you start enjoying it'
];

export const COUNTRIES = [
  'United Kingdom', 'United States', 'Germany', 'France', 'Italy',
  'Spain', 'Netherlands', 'Switzerland', 'Canada', 'Australia',
  'Japan', 'Singapore', 'United Arab Emirates', 'South Africa', 'Norway'
];

export const CURRENCIES: { code: string; symbol: string; label: string }[] = [
  { code: 'EUR', symbol: '€', label: 'Euro (€)' },
  { code: 'GBP', symbol: '£', label: 'British Pound (£)' }
];

export const getCurrencySymbol = (code?: string): string => {
  const match = CURRENCIES.find(c => c.code === (code || '').toUpperCase());
  return match ? match.symbol : '€';
};
