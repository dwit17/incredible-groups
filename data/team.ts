// Leadership & Group Directors Data Store
// Incredible Groups Leadership Team

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: string;
  bio: string;
  portrait: string;
  shapeKey: 'circle' | 'squircle' | 'organic' | 'hexagon';
  quote: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 't1',
    name: 'Vikramaditya Singhania',
    role: 'Chairman & Managing Director',
    division: 'Group Strategy & Capital Allocation',
    bio: 'Pioneering sovereign-grade real estate development and strategic alternative investments across India and Southeast Asia for over 25 years.',
    portrait: '/placeholders/team-1.svg',
    shapeKey: 'circle',
    quote: 'Architecture is not merely structural enclosure; it is the enduring choreography of light, permanence, and human elevation.'
  },
  {
    id: 't2',
    name: 'Ananya Deshmukh',
    role: 'Partner & Chief Creative Officer',
    division: 'Masterplanning & Architectural Curation',
    bio: 'Former principal at top international ateliers, championing biophilic design philosophies and sustainable structural minimalism.',
    portrait: '/placeholders/team-2.svg',
    shapeKey: 'squircle',
    quote: 'We sculpt spaces that converse gently with their ecological context while standing unyielding against time.'
  },
  {
    id: 't3',
    name: 'Rohit K. Varma',
    role: 'Chief Investment Officer',
    division: 'Structured Assets & Venture Portfolio',
    bio: 'Oversees ₹3,500+ Cr in real estate private equity, cross-border venture capital, and institutional joint ventures.',
    portrait: '/placeholders/team-3.svg',
    shapeKey: 'organic',
    quote: 'Disciplined capital compounding requires looking beyond cyclical market noise to anchor into foundational urban realities.'
  },
  {
    id: 't4',
    name: 'Dr. Evelyn Chen-Bose',
    role: 'Head of ConTech & Sustainable Engineering',
    division: 'Advanced Materials & Net-Zero R&D',
    bio: 'Leading the transformation towards carbon-negative materials, modular robotic construction, and autonomous energy grids.',
    portrait: '/placeholders/team-4.svg',
    shapeKey: 'hexagon',
    quote: 'True luxury today is the mastery of environmental harmony and energetic self-reliance.'
  }
];
