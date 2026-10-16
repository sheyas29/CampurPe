import Link from 'next/link';
const columns = [
  {
    title: 'For Students',
    links: [
      ['Explore Colleges', '#'],
      ['Find Opportunities', '#'],
      ['Internships', '#'],
      ['Full-time Jobs', '#'],
      ['Part-time & Gig', '#'],
      ['Application Tracker', '#'],
    ],
  },
  {
    title: 'For Colleges',
    links: [
      ['List Your College', '#'],
      ['Admissions', '#'],
      ['Fee Collection', '#'],
      ['Placements', '#'],
    ],
  },
  {
    title: 'For Employers',
    links: [
      ['Post a Job', '#'],
      ['Find Talent', '#'],
      ['Campus Hiring', '#'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About Us', '#'],
      ['Contact Us', '#'],
      ['Blogs', '#'],
      ['Careers', '#'],
    ],
  },
];

const legalLinks = [
  ['Privacy Policy', '#'],
  ['Terms & Conditions', '#'],
  ['Refund & Cancellation Policy', '#'],
  ['Cookie Policy', '#'],
  ['Grievance Redressal', '#'],
  ['Job & Internship Disclaimer', '#'],
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden px-5 pt-12 sm:px-10 lg:px-24"
      style={{
        background:
          'radial-gradient(ellipse 55% 45% at 12% 100%, rgba(59,130,246,0.55), transparent 70%), radial-gradient(ellipse 45% 40% at 78% 105%, rgba(96,165,250,0.55), transparent 70%), linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 55%, #EAF2FF 100%)',
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* ---------------- Top: brand + link columns ---------------- */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-[1.5fr_repeat(3,auto)_auto_auto] lg:gap-x-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" aria-label="CampusPe home" className="inline-block">
              {/* Swap for your real logo: <img src="/logo.png" alt="CampusPe" className="h-9" /> */}
              <span className="text-[34px] font-extrabold leading-none tracking-tight text-[#0A7CFF]">
                CampusPe
              </span>
              <span className="mt-1 block text-[7px] tracking-wide text-[#0A7CFF]/80">
                Connecting Students, Institutions &amp; Companies
              </span>
            </Link>
            <p className="mt-6 max-w-57.5 text-[16px] leading-snug text-[#1E293B]">
              From choosing a college to finding your next opportunity.
            </p>
            <p className="mt-5 max-w-52.5 text-[14px] leading-snug text-[#475569]">
              CampusPe connects students, colleges and employers in one place.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[15px] font-semibold text-[#1E293B]">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[11.5px] text-[#334155] transition hover:text-[#0A7CFF]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal */}
          <div>
            <h4 className="text-[15px] font-semibold text-[#1E293B]">
              Legal &amp; Policies
            </h4>
            <ul className="mt-4 space-y-3">
              {legalLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[11.5px] text-[#334155] transition hover:text-[#0A7CFF]"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#policies"
                  className="text-[11.5px] font-medium text-[#0A7CFF] hover:underline"
                >
                  View all policies →
                </a>
              </li>
            </ul>

            <div className="mt-5 max-w-37.5 rounded-lg border border-[#BBD9FF] bg-[#EAF4FF]/80 p-3 text-[11px] leading-snug text-[#334155] backdrop-blur">
              Separate user, institution and employer terms can live inside the
              full Policies page.
            </div>
          </div>
        </div>

        {/* ---------------- Contact row ---------------- */}
        <div className="mt-16 border-t border-slate-400/70 pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[11.5px] text-[#334155]">
              <a
                href="mailto:contactus@campuspe.com"
                className="inline-flex items-center gap-2 hover:text-[#0A7CFF]"
              >
                <IconBox>
                  <MailIcon />
                </IconBox>
                contactus@campuspe.com
              </a>
              <a
                href="tel:+916362606464"
                className="inline-flex items-center gap-2 hover:text-[#0A7CFF]"
              >
                <IconBox>
                  <PhoneIcon />
                </IconBox>
                +91 6362606464
              </a>
            </div>

            <div className="inline-flex items-center gap-2 text-[11.5px] text-[#334155]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Students · Colleges · Employers
            </div>
          </div>
        </div>

        {/* ---------------- Bottom row ---------------- */}
        <div className="mt-8 border-t border-slate-400/70 py-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[14px] text-[#0F2A5C]">
              2026 CampusPe Technologies Pvt. Ltd.{' '}
              <a href="#privacy" className="hover:underline">
                Privacy
              </a>{' '}
              <a href="#terms" className="hover:underline">
                Terms
              </a>{' '}
              <a href="#grievance" className="hover:underline">
                Grievance
              </a>
            </p>

            <div className="flex items-center gap-4 text-[#0F2A5C]">
              <Social label="LinkedIn" href="#">
                <LinkedIn />
              </Social>
              <Social label="Instagram" href="#">
                <Instagram />
              </Social>
              <Social label="Twitter" href="#">
                <Twitter />
              </Social>
              <Social label="Facebook" href="#">
                <Facebook />
              </Social>
              <Social label="WhatsApp" href="#">
                <WhatsApp />
              </Social>
              <Social label="YouTube" href="#">
                <YouTube />
              </Social>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------ helpers ------------------------------ */
function IconBox({ children }) {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-md border border-slate-400 bg-white text-[#334155]">
      {children}
    </span>
  );
}

function Social({ label, href, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="transition hover:scale-110 hover:text-[#0A7CFF]"
    >
      {children}
    </a>
  );
}

const iconProps = {
  viewBox: '0 0 24 24',
  className: 'h-[18px] w-[18px]',
  fill: 'currentColor',
};

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg {...iconProps}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function Instagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4.5 w-4.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Twitter() {
  return (
    <svg {...iconProps}>
      <path d="M23 4.56a9.4 9.4 0 01-2.7.74 4.7 4.7 0 002.07-2.6 9.4 9.4 0 01-2.98 1.14 4.7 4.7 0 00-8 4.28A13.3 13.3 0 011.67 3.15a4.7 4.7 0 001.45 6.27 4.7 4.7 0 01-2.13-.59v.06a4.7 4.7 0 003.77 4.6 4.7 4.7 0 01-2.12.08 4.7 4.7 0 004.39 3.26A9.4 9.4 0 010 19.54a13.3 13.3 0 007.2 2.11c8.64 0 13.36-7.16 13.36-13.36l-.02-.61A9.5 9.5 0 0023 4.56z" />
    </svg>
  );
}

function Facebook() {
  return (
    <svg {...iconProps}>
      <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
    </svg>
  );
}

function WhatsApp() {
  return (
    <svg {...iconProps}>
      <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.2 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.4.3.1.4.1.6-.1l.8-.9c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.1 1.4z" />
    </svg>
  );
}

function YouTube() {
  return (
    <svg {...iconProps}>
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}
