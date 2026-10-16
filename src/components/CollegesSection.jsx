'use client';

import Link from 'next/link';

export default function CollegesSection() {
  return (
    <section
      id="colleges"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute -top-24 -left-28 h-[520px] w-[520px] rounded-full bg-blue-100/35 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-[480px] w-[480px] rounded-full bg-purple-100/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 h-[440px] w-[440px] rounded-full bg-sky-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-360 px-5 sm:px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white px-3.5 py-1 text-[11.5px] font-bold text-[#0084FF] shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF]" />
              02 • FOR COLLEGES
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-[38px] font-extrabold tracking-tight text-[#1E293B] sm:text-[48px] lg:text-[52px] leading-[1.12]">
              Get Discovered <br />
              by <span className="text-[#0084FF]">Students and</span> <br />
              <span className="text-[#0084FF]">Recruiters.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-[15px] sm:text-[15.5px] text-[#64748B] leading-relaxed max-w-md">
              Put your college in front of students searching for the right
              course and recruiters looking for the right talent. CampusPe helps
              you build your presence, attract enquiries and connect with
              opportunities.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="#list-college"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#0084FF] px-7 text-[14.5px] font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-[#0077EE] active:scale-[0.98]"
              >
                List Your College →
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Feature Cards */}
          <div className="mt-12 lg:mt-0 lg:col-span-7 space-y-4">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-[0_2px_14px_rgba(0,0,0,0.02)] transition-all hover:border-slate-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-[#EEF2FF] text-[11px] font-bold text-[#4F46E5]">
                      01
                    </span>
                    <span className="text-[10.5px] font-semibold tracking-wider text-slate-400 uppercase">
                      VERIFIED PROFILE
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-[18px] sm:text-[19px] font-bold text-[#1E293B]">
                    Build your college profile
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-500 leading-relaxed max-w-lg">
                    Showcase your college, courses, fees, campus, placements and
                    achievements in one structured profile that students and
                    recruiters can discover.
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0 pt-0.5">
                  <span className="rounded-[8px] border border-[#86EFAC] bg-[#F0FDF4] px-2.5 py-1 text-[11px] font-semibold text-[#16A34A] inline-flex items-center gap-1.5 whitespace-nowrap">
                    {/* BadgeCheck SVG */}
                    <svg
                      className="w-3.5 h-3.5 text-[#16A34A]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    NAAC A++ Ready
                  </span>
                  <span className="rounded-[8px] border border-[#38BDF8] bg-[#F0F9FF] px-2.5 py-0.5 text-[10.5px] font-bold text-[#0284C7] self-end whitespace-nowrap">
                    98% Match
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-[0_2px_14px_rgba(0,0,0,0.02)] transition-all hover:border-slate-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-[#EEF2FF] text-[11px] font-bold text-[#4F46E5]">
                      02
                    </span>
                    <span className="text-[10.5px] font-semibold tracking-wider text-slate-400 uppercase">
                      DIRECT ENROLL
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-[18px] sm:text-[19px] font-bold text-[#1E293B]">
                    Students discover and connect
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-500 leading-relaxed max-w-lg">
                    Students searching for colleges can discover your profile,
                    explore your courses and fees, and connect directly with
                    your admission team.
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0 pt-0.5">
                  <span className="rounded-[8px] border border-[#BFDBFE] bg-[#EFF6FF] px-2.5 py-1 text-[11.5px] font-semibold text-[#2563EB] inline-flex items-center gap-1.5 whitespace-nowrap">
                    {/* MessagesSquare SVG */}
                    <svg
                      className="w-3.5 h-3.5 text-[#2563EB]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                    </svg>
                    Direct Enquiries
                  </span>
                  <span className="rounded-[8px] border border-[#E2E8F0] bg-white px-2.5 py-1 text-[10.5px] font-bold text-[#334155] inline-flex items-center gap-1.5 self-end whitespace-nowrap">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                    WHATSAPP / CHAT
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium text-right self-end -mt-0.5">
                    Avg. response: &lt;15 min
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-[0_2px_14px_rgba(0,0,0,0.02)] transition-all hover:border-slate-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-[#EEF2FF] text-[11px] font-bold text-[#4F46E5]">
                      03
                    </span>
                    <span className="text-[10.5px] font-semibold tracking-wider text-slate-400 uppercase">
                      CAMPUS RECRUITING
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-[18px] sm:text-[19px] font-bold text-[#1E293B]">
                    Recruiters discover your College
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-500 leading-relaxed max-w-lg">
                    Companies hiring fresh talent can discover your college,
                    explore your talent and connect with your placement team.
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0 pt-0.5">
                  <span className="rounded-[8px] border border-[#E9D5FF] bg-[#FAF5FF] px-2.5 py-1 text-[11.5px] font-semibold text-[#8B5CF6] inline-flex items-center gap-1.5 whitespace-nowrap">
                    {/* Building2 SVG */}
                    <svg
                      className="w-3.5 h-3.5 text-[#8B5CF6]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                      <path d="M10 6h4" />
                      <path d="M10 10h4" />
                      <path d="M10 14h4" />
                      <path d="M10 18h4" />
                    </svg>
                    500+ Hiring Partners
                  </span>
                  <span className="rounded-[8px] border border-[#C7D2FE] bg-[#EEF2FF] px-2.5 py-1 text-[11.5px] font-semibold text-[#4F46E5] inline-flex items-center gap-1.5 self-end whitespace-nowrap">
                    {/* Network SVG */}
                    <svg
                      className="w-3.5 h-3.5 text-[#4F46E5]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="16" y="16" width="6" height="6" rx="1" />
                      <rect x="2" y="16" width="6" height="6" rx="1" />
                      <rect x="9" y="2" width="6" height="6" rx="1" />
                      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                      <path d="M12 12V8" />
                    </svg>
                    Connect Directly
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-[0_2px_14px_rgba(0,0,0,0.02)] transition-all hover:border-slate-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-[#EEF2FF] text-[11px] font-bold text-[#4F46E5]">
                      04
                    </span>
                    <span className="text-[10.5px] font-semibold tracking-wider text-slate-400 uppercase">
                      LIVE HUD
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-[18px] sm:text-[19px] font-bold text-[#1E293B]">
                    Track placements in real time
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-500 leading-relaxed max-w-lg">
                    Track students, interviews, offers and placements from one
                    centralized dashboard.
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0 pt-0.5">
                  <span className="rounded-[8px] border border-[#FECACA] bg-[#FEF2F2] px-2.5 py-1 text-[10.5px] font-bold text-[#EF4444] inline-flex items-center gap-1.5 whitespace-nowrap tracking-wide">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EF4444]" />
                    LIVE PLACEMENTS
                  </span>
                  <span className="rounded-[8px] bg-[#0084FF] px-3 py-1 text-[11px] font-semibold text-white shadow-xs self-end whitespace-nowrap">
                    Students · Interviews · Offers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

