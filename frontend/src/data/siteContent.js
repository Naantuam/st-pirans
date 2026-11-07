/*
 * All editable site copy lives here.
 * Items marked TODO still need the school's real details.
 */

export const school = {
  name: "St. Piran's High School",
  shortName: "St. Piran's",
  location: 'Jos, Plateau State',
  founded: 2006,
  motto: 'Let your light shine',
  fees: '₦160,000', // approximate school fees — TODO: confirm (per term / per session?)
  address: 'Zarazong, along Fobur Road, Jos, Plateau State, Nigeria',
  socials: {
    facebook: 'https://www.facebook.com/stpiranshighschoolzarazong/',
  },
}

/* Phone + WhatsApp contacts. Numbers are written in local format; links are built from `intl`. */
export const contacts = [
  {
    name: 'Mr. Olubodun Olayinka',
    role: 'Principal',
    phone: '0703 210 1964',
    intl: '2347032101964',
    staffPhoto: 'principal', // src/assets/staff/principal.jpg
  },
  {
    name: 'Mrs. Vivian Austine',
    role: 'Vice Principal (Academics)',
    phone: '0803 523 5923',
    intl: '2348035235923',
    staffPhoto: 'vice-principal', // src/assets/staff/vice-principal.jpg
  },
]

export const whatsappLink = (intl, text = "Hello, I'd like to make an enquiry about St. Piran's High School.") =>
  `https://wa.me/${intl}?text=${encodeURIComponent(text)}`

export const announcements = [
  'Admissions are now open — call or WhatsApp 0703 210 1964',
  'Skill Acquisition Programme hosted by Set 020 Elites — see the gallery',
  'Over 700 students and counting since 2006',
  'Let your light shine — Matthew 5:16',
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#offerings' },
  { label: 'Skills', href: '#skills' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

/* Hero copy rotates with the hero images (src/assets/hero). */
export const heroSlides = [
  {
    eyebrow: "Welcome to St. Piran's, Jos",
    title: ['Raising Minds', 'that'],
    highlight: 'Shine',
    text: 'Since 2006, a nurturing secondary school where academic excellence, strong character and faith come together to prepare every student for life.',
  },
  {
    eyebrow: 'Talent & Creativity',
    title: ['Discover Your', 'Unique'],
    highlight: 'Gift',
    text: 'From music to fashion design and photography, our students are encouraged to explore their talents beyond the classroom.',
  },
  {
    eyebrow: 'Skills for Life',
    title: ['Learning that', 'Opens'],
    highlight: 'Doors',
    text: 'Our Skill Acquisition Programme equips students with practical, real-world skills — from web development to catering and agriculture.',
  },
]

export const offerings = [
  {
    icon: 'cap',
    title: 'Academic Excellence',
    text: 'A broad, balanced curriculum across the junior and senior secondary years, preparing students for WAEC, NECO and beyond.',
  },
  {
    icon: 'tools',
    title: 'Skill Acquisition',
    text: 'Hands-on training in eight practical skills, giving every student confidence and a head start in life.',
  },
  {
    icon: 'trophy',
    title: 'Leadership Training',
    text: 'Prefectship, house leadership and community service build confident, responsible young leaders.',
  },
  {
    icon: 'heart',
    title: 'Values & Character',
    text: 'Guided by our motto, we nurture honesty, discipline, compassion and a love for learning.',
  },
]

export const welcome = {
  eyebrow: 'Welcome Address',
  lead: "Since 2006, St. Piran's High School has raised well-rounded young people — sound in learning, strong in character and ready to let their light shine in the world.",
  paragraphs: [
    'Our aim is to provide a safe, disciplined and inspiring environment in which every child is known, encouraged and challenged to grow.',
    'From the first day of JSS 1 to graduation in SS 3, our teachers walk closely with students and parents through a continuous, nurturing educational journey.',
  ],
  quote: 'Every child carries a light. Our calling is to help it shine brightly.',
}

export const stats = [
  { value: 2006, suffix: '', label: 'Year founded' },
  { value: 700, suffix: '+', label: 'Students' },
  { value: 8, suffix: '', label: 'Practical skills taught' },
  { value: 6, suffix: '', label: 'Year groups (JSS 1 – SS 3)' },
]

/* Skill Acquisition Programme. `slug` matches the folder in src/assets/gallery. */
export const skillsProgramme = {
  eyebrow: 'Skill Acquisition Programme',
  title: 'Skills for',
  highlight: 'Life',
  text: 'A hands-on Skill Acquisition Programme hosted by the Set 020 Elites, where students learned directly from practitioners across eight trades and creative fields.',
}

export const skills = [
  { slug: 'agric', title: 'Agric', text: 'Planting, nursery care and sustainable farming.' },
  { slug: 'web-development', title: 'Web Development', text: 'Building web pages and understanding how the internet works.' },
  { slug: 'photography', title: 'Photography', text: 'Camera handling, composition and photo editing.' },
  { slug: 'fashion-design', title: 'Fashion Design', text: 'Measurement, pattern drafting and sewing.' },
  { slug: 'catering', title: 'Catering', text: 'Baking, pastries and food presentation.' },
  { slug: 'nails-and-hairstyle', title: 'Nails & Hairstyle', text: 'Nail care, nail art and hair styling.' },
  { slug: 'barbing', title: 'Barbing', text: 'Clipper skills, grooming and hygiene.' },
  { slug: 'music', title: 'Music', text: 'Guitar, bass, keyboard and drums.' },
]
