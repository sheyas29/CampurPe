'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  LightningIcon,
  BookIcon,
  PinIcon,
  LaptopIcon,
  HomeIcon,
  BriefcaseIcon,
  ClockIcon,
  IIMBLogo,
  GoogleLogo,
  NotionLogo,
  CurvedArrowIcon,
} from './OpportunityIcons';

const ALL_CARDS = [
  {
    id: 'iim-b',
    category: 'Colleges',
    title: 'IIM Bangalore',
    badge: 'Top College',
    badgeColor: 'bg-[#F4EBFF] text-[#9333EA]',
    logo: <IIMBLogo />,
    metaItems: [
      { icon: <BookIcon />, text: 'MBA' },
      { icon: <PinIcon />, text: 'Bengaluru' },
      { text: '₹ 3L+' },
    ],
    desc: "India's premier management institute with global exposer...",
    action: 'View Details',
  },
  {
    id: 'google-intern',
    category: 'Internships',
    title: 'Product Intern',
    badge: 'Internship',
    badgeColor: 'bg-[#E0F2FE] text-[#0284C7]',
    logo: <GoogleLogo />,
    metaItems: [
      { icon: <PinIcon />, text: 'Bengaluru' },
      { icon: <LaptopIcon />, text: 'Hybrid' },
      { text: '₹ 35K/mo' },
    ],
    desc: 'Work on real products, learn from top engineers and build...',
    action: 'Apply Now',
  },
  {
    id: 'notion-gig',
    category: 'Freelance',
    title: 'Marketing Gig',
    badge: 'Freelance',
    badgeColor: 'bg-[#DCFCE7] text-[#16A34A]',
    logo: <NotionLogo />,
    metaItems: [
      { icon: <HomeIcon />, text: 'Remote' },
      { icon: <BriefcaseIcon />, text: 'Freelance' },
      { text: '₹ 10K - 25K' },
    ],
    desc: 'Create content and help with social media campaigns for...',
    action: 'View Details',
  },
];

const FEED_ITEMS = {
  All: ALL_CARDS,
  Colleges: [ALL_CARDS[0]],
  Jobs: [
    {
      id: 'swe-job',
      category: 'Jobs',
      title: 'Full Stack Engineer',
      badge: 'Full-time',
      badgeColor: 'bg-[#E0F2FE] text-[#0284C7]',
      logo: (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500 font-bold text-white text-[12px]">
          ⚡
        </div>
      ),
      metaItems: [
        { icon: <PinIcon />, text: 'Hyderabad' },
        { icon: <LaptopIcon />, text: 'On-site' },
        { text: '₹ 12L - 18L' },
      ],
      desc: 'Build scalable web applications using React, Node, and Next.js...',
      action: 'Apply Now',
    },
  ],
  Internships: [ALL_CARDS[1]],
  Freelance: [ALL_CARDS[2]],
  'Part-time': [
    {
      id: 'campus-amb',
      category: 'Part-time',
      title: 'Campus Ambassador',
      badge: 'Part-time',
      badgeColor: 'bg-[#FEF3C7] text-[#D97706]',
      logo: (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0084FF] font-bold text-white text-[11px]">
          CP
        </div>
      ),
      metaItems: [
        { icon: <PinIcon />, text: 'Flexible' },
        { icon: <ClockIcon />, text: '10 hrs/week' },
        { text: '₹ 8K/mo' },
      ],
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
      {/* Ambient background glow accents matching design */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-blue-100/35 blur-3xl" />
      <div className="pointer-events-none absolute -top-20 -right-20 h-[450px] w-[450px] rounded-full bg-purple-100/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-[380px] w-[380px] rounded-full bg-blue-50/40 blur-3xl" />

      <div className="relative mx-auto max-w-360 px-5 sm:px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Steps */}
          <div className="lg:col-span-6">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white px-3.5 py-1 text-[11.5px] font-bold text-[#0077FF] shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0077FF]" />
              01 • OPPORTUNITY DISCOVERY
            </div>

            <h2 className="mt-6 text-[38px] font-black tracking-tight text-[#1E293B] sm:text-[48px] lg:text-[54px] leading-[1.08]">
              Stop searching. <br />
              <span className="text-[#0088FF]">Start getting matched.</span>
            </h2>

            <p className="mt-6 max-w-xl text-[16px] text-[#64748B] leading-relaxed">
              Tell CampusPe your skills, preferences and goals. We continuously
              monitor company career pages and job sources, find opportunities
              that match you, and notify you when they appear.
            </p>

            {/* 3 Step Cards */}
            <div className="mt-9 space-y-3.5">
              {/* Step 1 */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-4.5 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all hover:border-slate-300">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-200/90 bg-[#EFF6FF] text-[13px] font-bold text-[#0077FF]">
                      01
                    </span>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#1E293B]">
                        Set your preferences
                      </h4>
                      <p className="mt-0.5 text-[13px] text-slate-500 leading-relaxed">
                        Tell us what you're looking for, from colleges and
                        courses to jobs, internships and gigs.
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#EEF2FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#4F46E5]">
                    Smart Profile
                  </span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-4.5 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all hover:border-slate-300">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[13px] font-semibold text-slate-400">
                      02
                    </span>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#1E293B]">
                        Discover relevant opportunities
                      </h4>
                      <p className="mt-0.5 text-[13px] text-slate-500 leading-relaxed">
                        Explore colleges and career opportunities matched to
                        your profile, interests and goals
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
                    AI Ranked
                  </span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-4.5 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all hover:border-slate-300">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[13px] font-semibold text-slate-400">
                      03
                    </span>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#1E293B]">
                        Get notified when something fits
                      </h4>
                      <p className="mt-0.5 text-[13px] text-slate-500 leading-relaxed">
                        Get notified when a relevant college or new opportunity
                        is found, so you can act early.
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#ECFDF5] px-2.5 py-0.5 text-[11px] font-semibold text-[#10B981]">
                    Instant Alerts
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="#signup"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0088FF] px-8 text-[15px] font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-[#0077EE] active:scale-[0.98]"
              >
                Explore opportunities →
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Opportunity Feed Mockup */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative rounded-[32px] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.03)]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0088FF] text-white shadow-xs">
                    <LightningIcon />
                  </div>
                  <div>
                    <h3 className="text-[16.5px] font-bold text-[#1E293B]">
                      CampusPe Opportunity Feed
                    </h3>
                    <p className="text-[12.5px] text-slate-500">
                      Colleges & opportunities matched to you
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF8F0] px-3.5 py-1 text-[12px] font-medium text-[#10B981]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                  12 new matches today
                </div>
              </div>

              {/* Filter Pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {Object.keys(FEED_ITEMS).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-full px-4.5 py-1.5 text-[13px] transition-all ${
                      activeTab === tab
                        ? 'bg-[#0088FF] font-semibold text-white shadow-xs'
                        : 'bg-[#F1F5F9] font-medium text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Feed Cards List */}
              <div className="mt-6 space-y-3.5">
                {(FEED_ITEMS[activeTab] || FEED_ITEMS.All).map((item) => (
                  <div
                    key={item.id || item.title}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 transition-all hover:border-slate-300 hover:shadow-xs"
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4 min-w-0">
                      {/* Logo Squircle */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200/90 bg-white shadow-xs">
                        {item.logo}
                      </div>

                      {/* Info */}
                      <div className="min-w-0 flex-1">
                        {/* Title & Badge */}
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-[15.5px] font-bold text-[#1E293B]">
                            {item.title}
                          </h4>
                          <span
                            className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${item.badgeColor}`}
                          >
                            {item.badge}
                          </span>
                        </div>

                        {/* Meta Tags with Icons */}
                        <div className="mt-1.5 flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[12.5px] text-slate-500 font-medium">
                          {item.metaItems.map((meta, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5">
                              {meta.icon}
                              <span>{meta.text}</span>
                            </span>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="mt-1.5 text-[13px] text-slate-400 font-normal truncate max-w-[200px] sm:max-w-xs md:max-w-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      href="#apply"
                      className="shrink-0 rounded-xl bg-[#0088FF] px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-[#0074E8] active:scale-95 shadow-xs whitespace-nowrap"
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
                  className="inline-flex items-center gap-1 font-semibold text-[#0088FF] hover:underline"
                >
                  <span>View all matched opportunities</span>
                  <span>→</span>
                </Link>
                <span className="text-slate-400">
                  Curated for you • Updated daily
                </span>
              </div>
            </div>

            {/* Handwritten style note at bottom with curved arrow */}
            <div className="mt-5 flex items-start gap-3 pl-6 sm:pl-8 text-[#7C3AED]">
              <CurvedArrowIcon />
              <div className="text-[15px] sm:text-[16px] font-medium italic leading-snug tracking-wide text-[#6D28D9]">
                A mix of colleges, jobs, <br />
                internships and gigs — all in one place.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
