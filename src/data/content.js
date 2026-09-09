export const nav = [
  { label: 'AusHFG Parts', href: '#parts' },
  { label: 'Health Planning Units', href: '#hpu' },
  { label: 'Standard Components', href: '#components' },
  { label: 'Resources', href: '#resources' },
  { label: 'Updates', href: '#news' },
  { label: 'About', href: '#about' },
]

export const hero = {
  title: 'Evidence-based guidance for better health facilities',
  body:
    'Practical planning, design and data resources that help teams across Australia and New Zealand create safe, efficient and future-ready healthcare environments.',
  bodyCta: 'Search AusHFG resources today.',
  searchPlaceholder: 'Search guidelines, planning units, rooms and resources',
}

export const entryCards = [
  {
    id: 'components',
    title: 'Standard Components',
    body: 'Find Room Layout Sheets and Room Data Sheets for individual healthcare rooms and spaces.',
    cta: 'Search Standard Components',
    tone: 'pink',
    wide: true,
  },
  {
    id: 'hpu',
    title: 'Health Planning Units',
    body: 'Explore planning guidance, schedules of accommodation and functional relationships for clinical departments and services.',
    cta: 'View Resources',
    tone: 'green',
  },
  {
    id: 'parts',
    title: 'AusHFG Parts',
    body: 'Access overarching guidance covering briefing, planning, access, safety, infection prevention and other facility-wide considerations.',
    cta: 'Explore AusHFG Parts',
    tone: 'blue',
  },
]

export const principles = [
  {
    id: 'evidence',
    eyebrow: '01 Evidence-led',
    title: 'Decisions grounded in evidence and experience',
    body: 'Developed through research, clinical expertise, consumer input, relevant standards and experience from real health infrastructure projects.',
    cta: 'Watch how the AusHFG are developed',
    ctaTone: 'teal',
    image: `${import.meta.env.BASE_URL}img/illus-evidence.jpg`,
    imageAlt: 'Illustration of research charts, floor plans and consultation feeding into a completed room layout.',
  },
  {
    id: 'aligned',
    eyebrow: '02 Industry-aligned',
    title: 'One shared language across every project',
    body: 'A common reference point that helps government, healthcare, planning, design and construction teams work with greater clarity and consistency.',
    cta: 'About the Australasian Health Infrastructure Alliance',
    ctaTone: 'forest',
    image: `${import.meta.env.BASE_URL}img/illus-aligned.jpg`,
    imageAlt: 'Illustration of planning documents connected across a map of Australia and New Zealand.',
  },
  {
    id: 'future',
    eyebrow: '03 Future ready',
    title: 'Guidance designed to evolve with healthcare',
    body: 'Flexible resources that respond to changing models of care, clinical practice and technology—helping facilities remain fit for purpose now and into the future.',
    cta: 'Watch how the AusHFG are applied',
    ctaTone: 'teal',
    image: `${import.meta.env.BASE_URL}img/illus-future.jpg`,
    imageAlt: 'Three connected floor plans progressing from outline to completed room layout.',
  },
]

export const howItWorks = {
  eyebrow: 'How it works',
  title: 'Connected guidance,\nwherever you begin',
  body: 'AusHFG resources work together across the planning and design process.',
  marker: 'Your entry point',
  steps: [
    {
      id: 'parts',
      name: 'AusHFG Parts',
      title: 'Facility-wide guidance',
      body: 'Overarching principles and requirements for planning, design, safety, access and infection prevention.',
      cta: 'Browse AusHFG Parts',
    },
    {
      id: 'hpu',
      name: 'Health Planning Units',
      title: 'Service-level planning',
      body: 'Planning guidance, schedules of accommodation and functional relationships for clinical departments and services.',
      cta: 'Explore Health Planning Units',
    },
    {
      id: 'components',
      name: 'Standard Components',
      title: 'Room-level detail',
      body: 'Room Layout Sheets and Room Data Sheets that describe individual healthcare rooms and spaces.',
      cta: 'Search Standard Components',
    },
    {
      id: 'bim',
      name: 'BIM Resources',
      title: 'Data-driven design',
      body: 'Models, schedules and structured resources that help project teams apply AusHFG information consistently.',
      cta: 'View BIM Resources',
    },
  ],
}

export const resources = {
  eyebrow: 'Resources',
  title: 'Take guidance into data-driven design',
  body: 'Access models, schedules and structured resources that help project teams apply AusHFG information consistently, reduce duplication and improve coordination.',
  items: [
    { title: 'BIM Return on Investment paper', tag: 'New' },
    { title: 'AusHFG Model Resources', tag: 'Updated' },
    { title: 'AusHFG Item Control Schedule' },
    { title: 'Standard Components file for import' },
  ],
  supportingTitle: 'Supporting resources',
  supporting: ['Document Registers', 'Project Resources', 'Arts and Culture', 'External Resources'],
}

export const news = {
  eyebrow: 'Stay up-to-date',
  title: 'News',
  cta: 'View all News & Updates',
  image: `${import.meta.env.BASE_URL}img/illus-news.png`,
  items: [
    { date: 'August 25, 2026', kind: 'Content update', title: 'HPU 170 Cardiac Investigation Unit' },
    { date: 'August 5, 2026', kind: 'Content update', title: 'HPU 136 Mental Health Inpatient Unit – Subacute and Non-Acute (MHIPU-SANA)' },
    { date: 'June 9, 2026', kind: 'Content update', title: 'HPU 137 Mental Health Intensive Care Unit' },
    { date: 'April 9, 2026', kind: 'Content update', title: 'Isolation Rooms - Engineering and Design Requirements' },
  ],
}

export const underReview = {
  eyebrow: 'Under review',
  title: 'Currently reviewing & pending',
  cta: 'View all currently under review',
  items: [
    { title: 'Part D: Infection Prevention and Control', tag: 'AusHFG Parts', tone: 'cream' },
    { title: 'Part C: Design for Access, Mobility, Safety and Security', tag: 'AusHFG Parts', tone: 'cream' },
    { title: 'Inpatient Accommodation', tag: 'Standard Components', tone: 'sage' },
    { title: 'Intensive Care Unit', tag: 'Health Planning Unit', tone: 'teal' },
  ],
}

export const subscribe = {
  title: 'Get notified when AusHFG resources are updated',
  body: 'Receive the latest news and resources delivered to your inbox every month.',
  label: 'Subscribe',
  placeholder: 'Your email address',
  cta: 'Subscribe',
}

export const about = {
  eyebrow: 'Trans-Tasman collaboration',
  title: 'Advancing healthcare design',
  body: 'The Australasian Health Infrastructure Alliance (AHIA) is the custodian of the AusHFG, bringing together public-sector knowledge and practical experience from every Australian jurisdiction and New Zealand. Through evidence review, expert consultation and collaborative approval, AHIA ensures the guidelines continue to reflect changing healthcare practice, technology and models of care.',
  ctas: [
    { label: 'About AusHFG', variant: 'white' },
    { label: 'About AHIA', variant: 'ghost' },
  ],
  tiles: [
    { text: 'Est. 2004', tone: 'green' },
    { text: 'First released\nin 2007', tone: 'blue' },
    { text: 'Collaboration and shared success', tone: 'base' },
    { text: 'Evidence, expertise & consultation', tone: 'pink' },
  ],
}

export const faq = {
  title: 'Find answers',
  items: [
    'What is the difference between AusHFG Parts, Health Planning Units and Standard Components?',
    'How do I find guidance for a specific room or space?',
    'Where can I find guidance for a particular healthcare service or department?',
    'How do I download Room Layout Sheets, Room Data Sheets or other files?',
  ],
  contactTitle: 'Get in touch',
  contacts: [
    { title: 'Ask the AusHFG Team', body: 'Submit a specific question about the guidelines.' },
    { title: 'Suggest an improvement', body: 'Provide feedback on a resource or contribute to its review.' },
  ],
}

export const footer = {
  name: 'Australasian Health Facility Guidelines',
  intro:
    'Evidence-based guidance and practical resources supporting health facility planning and design across Australia and New Zealand.',
  columns: [
    {
      title: 'Find guidance',
      links: ['AusHFG Parts', 'Health Planning Units', 'Standard Components', 'BIM Resources', 'Search all resources'],
    },
    {
      title: 'Updates and participation',
      links: ['Latest updates', 'Currently under review', 'Subscribe for alerts', 'Provide feedback'],
    },
    {
      title: 'About and support',
      links: ['About the AusHFG', 'About AHIA', 'Frequently asked questions', 'Ask a question', 'Contact us'],
    },
    {
      title: 'Governance and information',
      links: ['Governance and approvals', 'Reports and publications', 'Accessibility', 'Privacy', 'Terms of use', 'Sitemap'],
    },
  ],
  signpost: {
    title: 'Stay informed',
    body: 'Get notified when AusHFG resources are updated or opened for review.',
    cta: 'Subscribe for alerts',
  },
  custodian: 'The Australasian Health Infrastructure Alliance is the custodian of the AusHFG.',
  copyright: 'Copyright © 2026 Australasian Health Infrastructure Alliance (AHIA)',
  utility: ['Privacy', 'Accessibility', 'Terms of use', 'Sitemap'],
}
