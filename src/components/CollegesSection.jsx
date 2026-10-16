'use client';

import Link from 'next/link';

export default function CollegesSection() {
  return (
    <section
      id="colleges"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-360 px-5 sm:px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Heading & CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-1.5 text-[13px] font-semibold text-[#0077FF]">
              <span className="h-2 w-2 rounded-full bg-[#0077FF]" />
              02 • FOR COLLEGES
            </div>

            <h2 className="mt-6 text-[36px] font-extrabold tracking-tight text-[#1E293B] sm:text-[48px] lg:text-[52px] leading-[1.1]">
              Get Discovered <br />
              by <span className="text-[#0077FF]">Students and Recruiter.</span>
            </h2>

            <p className="mt-6 text-[16px] text-[#64748B] leading-relaxed sm:text-[17px]">
              Put your college in front of students searching for the right
              course and recruiters looking for the right talent. CampusPe helps
              you build your presence, attract enquiries and connect with
              opportunities.
            </p>

            <div className="mt-10">
              <Link
                href="#list-college"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0077FF] px-8 text-[16px] font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-[#0066E0] active:scale-[0.98]"
              >
                List Your College →
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Feature Cards */}
          <div className="mt-12 lg:mt-0 lg:col-span-7 space-y-6">
            {/* Card 1 */}
            <div className="relative rounded-[24px] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all hover:border-[#0077FF] hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-[#0077FF]">
                      01
                    </span>
                    <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider">
                      VERIFIED PROFILE
                    </span>
                  </div>
                  <h3 className="mt-4 text-[20px] font-bold text-[#1E293B]">
                    Build your college profile
                  </h3>
                  <p className="mt-1 text-[14px] text-[#64748B] leading-relaxed">
                    Showcase your college, courses, fees, campus, placements and
                    achievements in one structured profile that students and
                    recruiters can discover.
                  </p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-600 border border-emerald-100">
                    🟢 NAAC A++ Ready
                  </span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[12px] font-semibold text-[#0077FF] text-center">
                    98% Match
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-[24px] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all hover:border-[#0077FF] hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-[#0077FF]">
                      02
                    </span>
                    <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider">
                      DIRECT ENROLL
                    </span>
                  </div>
                  <h3 className="mt-4 text-[20px] font-bold text-[#1E293B]">
                    Students discover and connect
                  </h3>
                  <p className="mt-1 text-[14px] text-[#64748B] leading-relaxed">
                    Students searching for colleges can discover your profile,
                    explore your courses and fees, and connect directly with
                    your admission team.
                  </p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[12px] font-semibold text-[#0077FF]">
                    💬 Direct Enquiries
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-600 text-center">
                    🟢 WHATSAPP / CHAT
                  </span>
                  <span className="text-[11px] text-slate-400 text-center">
                    Avg. response: &lt;15 min
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-[24px] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all hover:border-[#0077FF] hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-[#0077FF]">
                      03
                    </span>
                    <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider">
                      CAMPUS RECRUITING
                    </span>
                  </div>
                  <h3 className="mt-4 text-[20px] font-bold text-[#1E293B]">
                    Recruiters discover your College
                  </h3>
                  <p className="mt-1 text-[14px] text-[#64748B] leading-relaxed">
                    Companies hiring fresh talent can discover your college,
                    explore your talent and connect with your placement team.
                  </p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <span className="rounded-full bg-purple-50 px-3 py-1 text-[12px] font-semibold text-purple-600">
                    🏢 500+ Hiring Partners
                  </span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[12px] font-semibold text-[#0077FF] text-center">
                    🤝 Connect Directly
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative rounded-[24px] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all hover:border-[#0077FF] hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-[#0077FF]">
                      04
                    </span>
                    <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider">
                      LIVE HUD
                    </span>
                  </div>
                  <h3 className="mt-4 text-[20px] font-bold text-[#1E293B]">
                    Track placements in real time
                  </h3>
                  <p className="mt-1 text-[14px] text-[#64748B] leading-relaxed">
                    Track students, interviews, offers and placements from one
                    centralized dashboard.
                  </p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <span className="rounded-full bg-red-50 px-3 py-1 text-[12px] font-semibold text-red-600 text-center">
                    🔴 LIVE PLACEMENTS
                  </span>
                  <span className="rounded-full bg-[#0077FF] px-3 py-1 text-[11px] font-semibold text-white text-center shadow-sm">
                    Students - Interviews - Offers
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
