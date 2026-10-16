'use client';

import Link from 'next/link';

export default function EmployersSection() {
  return (
    <section
      id="employers"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F9FBFF] to-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-360 px-5 sm:px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-1.5 text-[13px] font-semibold text-[#0077FF]">
              <span className="h-2 w-2 rounded-full bg-[#0077FF]" />
              03 • FOR EMPLOYERS
            </div>

            <h2 className="mt-6 text-[36px] font-extrabold tracking-tight text-[#1E293B] sm:text-[48px] lg:text-[52px] leading-[1.1]">
              Stop running <br />
              campus drives. <br />
              <span className="text-[#0077FF]">
                Start hiring the right people.
              </span>
            </h2>

            <p className="mt-6 text-[16px] text-[#64748B] leading-relaxed sm:text-[17px]">
              Post a role in minutes and reach relevant candidates without the
              time, travel and coordination of traditional hiring. CampusPe
              helps you discover, match and connect with talent from colleges
              and beyond.
            </p>

            <div className="mt-10">
              <Link
                href="#post-job"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0077FF] px-8 text-[16px] font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-[#0066E0] active:scale-[0.98]"
              >
                Post a Job →
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
                      Post a role in minutes
                    </span>
                    <span className="rounded-md bg-purple-50 px-2 py-0.5 text-[11px] font-semibold text-purple-600">
                      INSTANT SETUP
                    </span>
                  </div>
                  <p className="mt-3 text-[14px] text-[#64748B] leading-relaxed">
                    Define your skills, location and hiring requirements. Reach
                    relevant candidates across the CampusPe network.
                  </p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-600 border border-emerald-100">
                    ⚡ 5 Min Deployment
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 text-center">
                    500+ Campus Network
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
                      Receive a matched shortlist
                    </span>
                    <span className="rounded-md bg-purple-50 px-2 py-0.5 text-[11px] font-semibold text-purple-600">
                      INSTANT SETUP
                    </span>
                  </div>
                  <p className="mt-3 text-[14px] text-[#64748B] leading-relaxed">
                    Get candidates matched to your role by skills, experience,
                    location and hiring requirements.
                  </p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <span className="rounded-full bg-purple-50 px-3 py-1 text-[12px] font-semibold text-purple-600">
                    🛡️ Zero CV Clutter
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 text-center">
                    Tier 1 - Tier 3 Parity
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
                      Connect with candidates directly
                    </span>
                    <span className="rounded-md bg-purple-50 px-2 py-0.5 text-[11px] font-semibold text-purple-600">
                      INSTANT SETUP
                    </span>
                  </div>
                  <p className="mt-3 text-[14px] text-[#64748B] leading-relaxed">
                    Message, schedule interviews, and move candidates through
                    your pipeline — all in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[12px] font-semibold text-[#0077FF]">
                    💬 In-App Scheduling
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 text-center">
                    1-Click Video / Chat
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
                      Reduce your time-to-hire
                    </span>
                    <span className="rounded-md bg-purple-50 px-2 py-0.5 text-[11px] font-semibold text-purple-600">
                      INSTANT SETUP
                    </span>
                  </div>
                  <p className="mt-3 text-[14px] text-[#64748B] leading-relaxed">
                    Find matched candidates, connect with them and move from
                    shortlist to offer in one streamlined workflow.
                  </p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <span className="rounded-full bg-[#0077FF] px-3 py-1 text-[12px] font-semibold text-white text-center shadow-sm">
                    &lt; 2 DAYS
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-600 text-center">
                    57% Faster Hiring
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
