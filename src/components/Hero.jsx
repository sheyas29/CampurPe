'use client';

// HeroSection.jsx — Next.js (App Router) + Tailwind CSS. No other dependencies.
//
// Usage (app/page.jsx):
//   import HeroSection from "@/components/HeroSection";
//   export default function Page() { return <HeroSection />; }
//
// Fonts (app/layout.jsx) — UI text is Inter, card titles are a bold serif:
//   import { Inter, Source_Serif_4 } from "next/font/google";
//   const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
//   const serif = Source_Serif_4({ subsets: ["latin"], weight: ["700"], variable: "--font-serif" });
//   <body className={`${inter.variable} ${serif.variable} font-[family-name:var(--font-inter)]`}>
//
// Measurements below were taken from the 1366px Figma frame (card row = 1150px wide).

const BLUE = '#0B8CFF'; // buttons / icons
const LINK_BLUE = '#1A6CF0'; // "What are you looking for?"

/* ------------------------------------------------------------------ */
/* icons                                                               */
/* ------------------------------------------------------------------ */
const stroke = (c, w = 2) => ({
  fill: 'none',
  stroke: c,
  strokeWidth: w,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

const BellIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...stroke('#fff', 2)}>
    <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 01-3.4 0" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...stroke('#fff', 2.2)}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);
const CheckIcon = ({ color }) => (
  <svg width="8" height="8" viewBox="0 0 24 24" {...stroke(color, 4)}>
    <path d="M5 12.5l5 5L19.500 7" />
  </svg>
);




/* stat icons */
const statStroke = (c) => stroke(c, 1.8);
const StudentsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" {...statStroke('#8B5CF6')}>
    <circle cx="9" cy="8" r="3.500" />
    <path d="M2.500 20c0-3.500 3-6 6.500-6s6.500 2.500 6.500 6" />
    <circle cx="18" cy="9" r="2.500" />
    <path d="M17 14.200c3 .2 5 2.300 5 5.800" />
  </svg>
);
const CollegeStatIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" {...statStroke('#3B82F6')}>
    <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M9 11h.01M15 11h.01" />
  </svg>
);
const JobsStatIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" {...statStroke('#22C55E')}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" />
  </svg>
);
const ShieldStatIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" {...statStroke('#F97316')}>
    <path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* card illustrations (positioned inside each card)                    */
/* ------------------------------------------------------------------ */
const CollegeArt = () => (
  <svg
    aria-hidden
    className="pointer-events-none absolute bottom-0 right-0 z-0"
    width="252"
    height="132"
    viewBox="0 0 252 132"
    fill="none"
  >
    <path d="M52 34L126 4l48 30z" fill="#FFF5EA" />
    <rect y="32" width="252" height="100" fill="#FFF2E2" />
    <circle cx="126" cy="19" r="8.500" fill="#FFDDB8" />
    <rect x="106" y="94" width="10" height="38" fill="#FFE7CC" />
    <rect x="134" y="94" width="10" height="38" fill="#E8F0FC" />
  </svg>
);

const JobArt = () => (
  <svg
    aria-hidden
    className="pointer-events-none absolute right-[17px] top-[173px] z-0"
    width="104"
    height="124"
    viewBox="0 0 104 124"
    fill="none"
  >
    <rect
      x="0.750"
      y="0.750"
      width="92"
      height="120"
      rx="6"
      fill="#F6F1FF"
      stroke="#C9B9F1"
      strokeWidth="1.500"
    />
    <rect x="16" y="18" width="30" height="5" rx="2.500" fill="#F8C99A" />
    <rect x="16" y="31" width="62" height="3" rx="1.500" fill="#A9DCBB" />
    <rect x="16" y="40" width="62" height="3" rx="1.500" fill="#A9DCBB" />
    <rect x="16" y="50" width="50" height="3" rx="1.500" fill="#A9DCBB" />
    <rect x="16" y="65" width="36" height="4" rx="2" fill="#C6ABF1" />
    <rect x="16" y="76" width="56" height="3" rx="1.500" fill="#A9DCBB" />
    <rect x="16" y="87" width="56" height="3" rx="1.500" fill="#A9DCBB" />
    <circle
      cx="79"
      cy="78"
      r="21"
      fill="#fff"
      fillOpacity=".92"
      stroke="#F7C48A"
      strokeWidth="3.500"
    />
    <circle
      cx="77.500"
      cy="76"
      r="6.500"
      fill="none"
      stroke="#5DB88A"
      strokeWidth="2"
    />
    <path
      d="M82.500 81l4 4"
      stroke="#5DB88A"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const HireArt = () => (
  <svg
    aria-hidden
    className="pointer-events-none absolute bottom-0 right-0 z-0"
    width="140"
    height="177"
    viewBox="0 0 140 177"
    fill="none"
  >
    <rect x="51" width="89" height="177" fill="#E6EFFF" />
    {[30, 58, 86, 120].map((y) => (
      <rect key={y} x="51" y={y} width="89" height="1.500" fill="#D5E4FB" />
    ))}
    <rect y="29" width="140" height="148" fill="#DCE9FE" />
    <rect x="19" y="42" width="64" height="42" rx="6" fill="#F2F4FC" />
    <text
      x="51"
      y="70"
      textAnchor="middle"
      fontSize="22"
      fontWeight="700"
      fill="#F7BE85"
      fontFamily="ui-monospace, monospace"
    >
      {'</>'}
    </text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* default content                                                     */
/* ------------------------------------------------------------------ */
const DEFAULT_CARDS = [
  {
    key: 'college',
    icon: <img src="College Pillar Icon Badge.svg" alt="college" />,
    title: 'College',
    badge: 'Coming Soon',
    desc: 'Explore colleges, courses,fees, placements & more',
    points: [
      'Search by course, location, fees',
      'Connect directly with colleges',
      'Improve student placements',
    ],
    cta: { label: 'Join Waitlist', icon: <BellIcon /> },
    art: <CollegeArt />,
    tick: { bg: '#E9EBEF', fg: '#6B7280' },
  },
  {
    key: 'job',
    icon: <img src="scholar-cap.svg" alt="scholar-cap" />,
    title: "I'm Looking for a Job",
    badge: 'Available Now',
    desc: "Upload your resume. We'll find jobs that fit you.",
    points: [
      'Jobs from 1000+ sources',
      'AI powered matching',
      'WhatsApp & email alerts',
    ],
    cta: { label: 'Explore Jobs', icon: <ArrowIcon /> },
    art: <JobArt />,
    tick: { bg: '#FDE4E4', fg: '#E5484D' },
  },
  {
    key: 'hire',
    icon: <img src="Briefcase Icon Badge.svg" alt="hire" />,
    title: "I'm Hiring",
    badge: 'Coming Soon',
    desc: 'Connect with colleges and find candidates — from students to graduates.',
    points: [
      'Connect directly with colleges',
      'Find the right candidates',
      'Simplify your hiring',
    ],
    cta: { label: 'Join Waitlist', icon: <BellIcon /> },
    art: <HireArt />,
    tick: { bg: '#E9EBEF', fg: '#6B7280' },
  },
];

const DEFAULT_STATS = [
  { value: '800+', label: 'Students', icon: <StudentsIcon />, bg: '#F1ECFF' },
  {
    value: '130+',
    label: 'colleges',
    icon: <CollegeStatIcon />,
    bg: '#E4EEFF',
  },
  {
    value: '100+',
    label: 'jobs & internships',
    icon: <JobsStatIcon />,
    bg: '#E1F7EA',
  },
  {
    value: '100%',
    label: 'Safe & Trusted',
    icon: <ShieldStatIcon />,
    bg: '#FFEBDD',
  },
];

const DEFAULT_PARTNERS = [
  'Ginserv',
  'Startup Karnataka',
  'Govt. Emblem',
  'TalentSpotify',
  'Radiant Info',
  'D#',
];

const FLOAT_SHADOW = 'shadow-[0_6px_24px_rgba(30,64,175,0.08)]';

/* ------------------------------------------------------------------ */
/* component                                                           */
/* ------------------------------------------------------------------ */
export default function HeroSection({
  cards = DEFAULT_CARDS,
  stats = DEFAULT_STATS,
  partners, // [{ name, src }] — falls back to text placeholders
  onCardClick = () => { },
  className = '',
}) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-white font-sans text-[#0A0A0A] ${className}`}
    >
      {/* soft background washes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-60px] top-[60px] h-[340px] w-[340px] rounded-full bg-[#E3EEFF] opacity-70 blur-[90px]" />
        <div className="absolute left-1/2 top-[300px] h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[#F1E8FF] opacity-60 blur-[110px]" />
        <div className="absolute bottom-[-80px] left-[20%] h-[300px] w-[520px] rounded-full bg-[#F3ECFF] opacity-60 blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1150px] px-5 pb-16 lg:px-0">
        {/* ============ header ============ */}
        <header className="relative flex flex-col items-center pt-12 text-center lg:h-[332px] lg:pt-[85px]">
          {/* floating: WhatsApp alert */}
          <div
            className={`absolute left-[20px] top-[75px] hidden h-[107px] w-[203px] rounded-[20px] border border-[#4E63E8] bg-white px-[19px] pt-[16px] text-left lg:block ${FLOAT_SHADOW}`}
          >
            <div className="flex items-center gap-2">
              <img src="/watsapp-logo.svg" alt="whatsapp" />
              <span className="text-[15px] font-medium leading-none text-[#D9620B]">
                WhatsApp Alert
              </span>
            </div>
            <p className="mt-[14px] text-[13px] font-semibold leading-none">
              Get notified on whatsapp
            </p>
            <p className="mt-[7px] text-[11px] leading-[12px] text-[#4B5563]">
              You&apos;ll get all important updates on your whatsapp
            </p>
          </div>

          {/* floating: Resume builder */}
          <div
            className={`absolute right-[-7px] top-[68px] hidden h-[140px] w-[225px] rounded-[24px] border border-[#4E63E8] bg-white px-[21px] pt-[20px] text-left lg:block ${FLOAT_SHADOW}`}
          >
            <div className="flex items-center gap-1.5">
              <img src="lightning-icon.svg" alt="bolt" />
              <span className="text-[15px] font-medium leading-none text-[#8B3FF0]">
                Resume Builder
              </span>
            </div>
            <p className="mt-[14px] text-[13px] font-semibold leading-none">
              Build Your Resume
            </p>
            <p className="mt-[12px] text-[11px] leading-[16px] text-[#4B5563]">
              Our resume builder gives you dynamic options to build better &amp;
              faster resume that got you hired
            </p>
          </div>

          {/* pill */}
          <span className="inline-flex h-[37px] items-center gap-2 rounded-full bg-[#FFF6E8] px-[20px] text-[15px] font-medium text-[#1F5FEB] shadow-[0_2px_14px_rgba(255,214,150,0.35)]">
            <img src="ai-robo-icon.svg" alt="ai robo" />
            AI-Powered Campus Assistant
          </span>

          {/* h1 */}
          <h1 className="mt-[16px] text-[36px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[48px]">
            Connect{' '}
            <span className="bg-gradient-to-r from-[#1E63F0] via-[#0E9AE0] to-[#12BDC4] bg-clip-text text-transparent">
              10X Faster.
            </span>
          </h1>

          <p className="mt-[10px] max-w-[640px] text-[16px] leading-[28px] text-[#4B5563] sm:text-[20px]">
            One platform connecting students, colleges &amp; employers — faster.
          </p>

          <div className="mt-[14px] flex items-center gap-[37px]">
            <span className="hidden sm:block">
              <img src="Left Double Sparkle Icon.svg" alt="left-sparkle" />
            </span>
            <h2
              className="text-[20px] font-medium leading-[34px] sm:text-[26px]"
              style={{ color: LINK_BLUE }}
            >
              What are you looking for?
            </h2>
            <span className="hidden sm:block">
              <img src="Right Double Sparkle Icon.svg" alt="right-sparkle" />
            </span>
          </div>

          {/* chip: students matched */}
          <div
            className={`absolute left-[26px] top-[256px] hidden h-[50px] w-[292px] items-center rounded-[12px] border border-[#EEF0F5] bg-white pl-[14px] lg:flex ${FLOAT_SHADOW}`}
          >
            <div className="flex">
              {[
                ['AK', '#3B82F6'],
                ['PR', '#7C3AED'],
                ['SN', '#14B8A6'],
              ].map(([t, c], i) => (
                <span
                  key={t}
                  className="flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-white text-[9px] font-semibold text-white"
                  style={{ background: c, marginLeft: i ? -7 : 0 }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="ml-[8px] text-left">
              <p className="flex items-center gap-1 text-[13px] font-semibold leading-none">
                <span className="h-[6px] w-[6px] rounded-full bg-[#22C55E]" />
                <span aria-hidden>🔥</span> 142 students matched today
              </p>
              <p className="mt-[6px] pl-[10px] text-[11px] leading-none text-[#6B7280]">
                Just now • IIT, BITS, VIT
              </p>
            </div>
          </div>

          {/* chip: recruiter */}
          <div
            className={`absolute right-[49px] top-[262px] hidden h-[45px] w-[269px] items-center rounded-[12px] border border-[#EEF0F5] bg-white pl-[13px] lg:flex ${FLOAT_SHADOW}`}
          >
            <span className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[#EEF0FB] text-[13px]">
              💼
            </span>
            <div className="ml-[11px] text-left">
              <p className="leading-none">
                <span className="text-[14px] font-medium text-[#1A6CF0]">
                  Radiant Info
                </span>{' '}
                <span className="text-[12.5px] font-medium">
                  shortlisted 8 interns
                </span>
              </p>
              <p className="mt-[5px] flex items-center gap-1 text-[11px] leading-none text-[#374151]">
                <span className="h-[6px] w-[6px] rounded-full bg-[#22C55E]" />
                <span className="text-[#16A34A]">Verified recruiter</span> • 2
                days ago
              </p>
            </div>
          </div>
        </header>

        {/* ============ cards ============ */}
        <div className="mt-10 grid grid-cols-1 gap-[30px] lg:mt-[55px] lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.key}
              className="relative flex flex-col overflow-hidden rounded-[24px] border-2 border-[#BDEEFB] bg-gradient-to-b from-white to-[#F6FCFF] px-[29px] pb-[39px] pt-[26px] shadow-[0_10px_40px_rgba(56,189,248,0.10)] lg:h-[406px]"
            >
              {c.art}

              <div className="relative z-10 flex items-start justify-between">
                <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#CBEBF8] bg-[#E6F6FD]">
                  {c.icon}
                </span>
                <span className="mt-[10px] flex h-[27px] items-center rounded-full border border-[#12A6E6] bg-white px-[13px] text-[13px] font-medium text-[#0B8CFF]">
                  {c.badge}
                </span>
              </div>

              <h3 className="relative z-10 mt-[23px] font-[family-name:var(--font-serif),Georgia,'Times_New_Roman',serif] text-[26px] font-bold leading-[32px]">
                {c.title}
              </h3>
              <p className="relative z-10 mt-[8px] max-w-[250px] text-[16px] leading-[22px] text-[#4B5563]">
                {c.desc}
              </p>

              <ul className="relative z-10 mt-[22px]">
                {c.points.map((p) => (
                  <li
                    key={p}
                    className="flex h-[30px] items-center gap-[11px] text-[15px] text-[#374151]"
                  >
                    <span
                      className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full"
                      style={{ background: c.tick.bg }}
                    >
                      <CheckIcon color={c.tick.fg} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => onCardClick(c.key)}
                className="relative z-10 mt-8 flex h-[44px] w-full items-center justify-center gap-[9px] rounded-[8px] text-[15px] font-semibold text-white transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B8CFF] lg:mt-auto"
                style={{ background: BLUE }}
              >
                {c.cta.label}
                {c.cta.icon}
              </button>
            </article>
          ))}
        </div>

        {/* ============ stats ============ */}
        <div className="mt-[56px] grid grid-cols-2 gap-y-7 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center justify-center gap-4 ${i > 0 ? 'lg:border-l lg:border-slate-200' : ''}`}
            >
              <span
                className="flex h-[56px] w-[56px] items-center justify-center rounded-[14px]"
                style={{ background: s.bg }}
              >
                {s.icon}
              </span>
              <div className="text-left">
                <p className="text-[26px] font-bold leading-none">{s.value}</p>
                <p className="mt-[6px] text-[14px] leading-none text-[#6B7280]">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ============ trusted by ============ */}
        <div className="mt-[56px] text-center">
          <p className="text-[15px] font-medium text-[#4B5563]">
            Trusted by partners across India
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-14 gap-y-5">
            {partners && partners.length
              ? partners.map((p) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={p.name}
                  src={p.src}
                  alt={p.name}
                  className="h-12 w-auto object-contain"
                />
              ))
              : DEFAULT_PARTNERS.map((name) => (
                <span
                  key={name}
                  className="text-[20px] font-bold tracking-tight text-slate-700"
                >
                  {name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
