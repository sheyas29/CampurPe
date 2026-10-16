'use client';

import Link from 'next/link';
import { useState } from 'react';

const FEED_ITEMS = {
  All: [
    {
      title: 'IIM Bangalore',
      badge: 'Top College',
      badgeColor: 'bg-purple-50 text-purple-600',
      meta: '🎓 MBA  •  📍 Bengaluru  •  💰 3L+',
      desc: "India's premier management institute with global exposer...",
      action: 'View Details',
    },
    {
      title: 'Product Intern',
      badge: 'Internship',
      badgeColor: 'bg-blue-50 text-[#0077FF]',
      meta: '💼 Bengaluru  •  ⚡ Hybrid  •  💰 35K/mo',
      desc: 'Work on real products, learn from top engineers and build...',
      action: 'Apply Now',
    },
    {
      title: 'Marketing Gig',
      badge: 'Freelance',
      badgeColor: 'bg-emerald-50 text-emerald-600',
      meta: '🏠 Remote  •  💼 Freelance  •  💰 10K - 25K',
      desc: 'Create content and help with social media campaigns for...',
      action: 'View Details',
    },
  ],
  Colleges: [
    {
      title: 'IIM Bangalore',
      badge: 'Top College',
      badgeColor: 'bg-purple-50 text-purple-600',
      meta: '🎓 MBA  •  📍 Bengaluru  •  💰 3L+',
      desc: "India's premier management institute with global exposer...",
      action: 'View Details',
    },
  ],
  Jobs: [
    {
      title: 'Full Stack Engineer',
      badge: 'Full-time',
      badgeColor: 'bg-blue-50 text-[#0077FF]',
      meta: '📍 Hyderabad  •  ⚡ On-site  •  💰 12L - 18L',
      desc: 'Build scalable web applications using React, Node, and Next.js...',
      action: 'Apply Now',
    },
  ],
  Internships: [
    {
      title: 'Product Intern',
      badge: 'Internship',
      badgeColor: 'bg-blue-50 text-[#0077FF]',
      meta: '💼 Bengaluru  •  ⚡ Hybrid  •  💰 35K/mo',
      desc: 'Work on real products, learn from top engineers and build...',
      action: 'Apply Now',
    },
  ],
  Freelance: [
    {
      title: 'Marketing Gig',
      badge: 'Freelance',
      badgeColor: 'bg-emerald-50 text-emerald-600',
      meta: '🏠 Remote  •  💼 Freelance  •  💰 10K - 25K',
      desc: 'Create content and help with social media campaigns for...',
      action: 'View Details',
    },
  ],
  'Part-time': [
    {
      title: 'Campus Ambassador',
      badge: 'Part-time',
      badgeColor: 'bg-amber-50 text-amber-600',
      meta: '📍 Flexible  •  ⏱️ 10 hrs/week  •  💰 8K/mo',
      desc: 'Represent CampusPe in your college fest and student community...',
      action: 'Apply Now',
    },
  ],
};

export default function OpportunitySection() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <section
      id="jobs"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-360 px-5 sm:px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Steps */}
          <div className="lg:col-span-6">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/60 px-4 py-1.5 text-[13px] font-semibold text-[#0077FF]">
              <span className="h-2 w-2 rounded-full bg-[#0077FF]" />
              01 • OPPORTUNITY DISCOVERY
            </div>

            <h2 className="mt-6 text-[36px] font-extrabold tracking-tight text-[#1E293B] sm:text-[48px] lg:text-[52px] leading-[1.1]">
              Stop searching. <br />
              <span className="text-[#0077FF]">Start getting matched.</span>
            </h2>

            <p className="mt-6 text-[16px] text-[#64748B] leading-relaxed sm:text-[17px]">
              Tell CampusPe your skills, preferences and goals. We continuously
              monitor company career pages and job sources, find opportunities
              that match you, and notify you when they appear.
            </p>

            {/* 3 Step Cards */}
            <div className="mt-10 space-y-4">
              {/* Step 1 */}
              <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 transition-all hover:border-[#0077FF] hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[15px] font-bold text-[#0077FF]">
                      01
                    </span>
                    <div>
                      <h4 className="text-[16px] font-bold text-[#1E293B]">
                        Set your preferences
                      </h4>
                      <p className="mt-1 text-[14px] text-[#64748B]">
                        Tell us what you're looking for, from colleges and
                        courses to jobs, internships and gigs.
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-semibold text-slate-600">
                    Smart Profile
                  </span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 transition-all hover:border-[#0077FF] hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[15px] font-bold text-[#0077FF]">
                      02
                    </span>
                    <div>
                      <h4 className="text-[16px] font-bold text-[#1E293B]">
                        Discover relevant opportunities
                      </h4>
                      <p className="mt-1 text-[14px] text-[#64748B]">
                        Explore colleges and career opportunities matched to
                        your profile, interests and goals.
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-semibold text-slate-600">
                    AI Ranked
                  </span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 transition-all hover:border-[#0077FF] hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[15px] font-bold text-[#0077FF]">
                      03
                    </span>
                    <div>
                      <h4 className="text-[16px] font-bold text-[#1E293B]">
                        Get notified when something fits
                      </h4>
                      <p className="mt-1 text-[14px] text-[#64748B]">
                        Get notified when a relevant college or new opportunity
                        is found, so you can act early.
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-semibold text-slate-600">
                    Instant Alerts
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="#signup"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0077FF] px-8 text-[16px] font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-[#0066E0] active:scale-[0.98]"
              >
                Explore opportunities →
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Opportunity Feed Mockup */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative rounded-[32px] border border-slate-200/90 bg-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0077FF] text-white">
                    ⚡
                  </span>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#1E293B]">
                      CampusPe Opportunity Feed
                    </h3>
                    <p className="text-[13px] text-[#64748B]">
                      Colleges & opportunities matched to you
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-600">
                  🟢 12 new matches today
                </span>
              </div>

              {/* Filter Pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {Object.keys(FEED_ITEMS).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-all ${
                      activeTab === tab
                        ? 'bg-[#0077FF] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Feed Cards List */}
              <div className="mt-6 space-y-4">
                {(FEED_ITEMS[activeTab] || FEED_ITEMS.All).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:bg-blue-50/30 hover:border-blue-100"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-[15px] font-bold text-[#1E293B]">
                          {item.title}
                        </h4>
                        <span
                          className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${item.badgeColor}`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-[12px] text-[#64748B]">
                        {item.meta}
                      </p>
                      <p className="mt-1 text-[13px] text-slate-600 truncate max-w-[260px] sm:max-w-xs">
                        {item.desc}
                      </p>
                    </div>

                    <Link
                      href="#apply"
                      className="shrink-0 rounded-full bg-[#0077FF] px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-[#0066E0] active:scale-95"
                    >
                      {item.action}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Footer Links */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-[13px]">
                <Link
                  href="#all"
                  className="font-semibold text-[#0077FF] hover:underline"
                >
                  View all matched opportunities →
                </Link>
                <span className="text-slate-400">
                  Curated for you • Updated daily
                </span>
              </div>
            </div>

            {/* Handwritten style note at bottom */}
            <div className="mt-4 flex items-center gap-2 text-indigo-600 text-[15px] font-medium italic">
              <span>↳</span> A mix of colleges, jobs, internships and gigs — all
              in one place.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
