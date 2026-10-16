'use client';

import { useState, useRef } from 'react';

export default function ResumeSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* Background Glow Image */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          src="/resume-glow.png"
          alt=""
          className="w-full max-w-7xl h-full object-cover sm:object-contain opacity-90 select-none"
        />
      </div>

      <div className="relative mx-auto max-w-360 px-5 sm:px-10 lg:px-24">
        {/* Section Header */}
        <div className="text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 bg-white/90 backdrop-blur-xs px-3.5 py-1 text-[12px] shadow-xs">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-indigo-50">
              <span className="h-2 w-2 rounded-full bg-[#4F46E5]" />
            </span>
            <span className="font-bold text-[#0077FF] tracking-wide">
              TRY IT LIVE
            </span>
            <span className="h-3 w-px bg-slate-200" />
            <span className="text-slate-400 font-medium">v2.4 AI Engine</span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-[38px] font-black tracking-tight text-[#1E293B] sm:text-[48px] lg:text-[54px] leading-[1.08]">
            Upload your resume. <br />
            <span className="text-[#0088FF]">Find jobs that fit.</span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-[16px] text-[#64748B] leading-relaxed">
            Upload once. CampusPe reads your skills, experience, and preferences — <br className="hidden sm:inline" />
            then finds relevant jobs across 1,000+ sources.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[720px]">
          <div className="relative rounded-[32px] border border-slate-200/80 bg-white p-7 sm:p-10 shadow-[0_20px_50px_rgba(0,119,255,0.05),0_1px_3px_rgba(0,0,0,0.03)]">
            <div className="absolute -left-4 sm:-left-6 top-10 sm:top-12 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all hover:scale-105">
              <img
                src="/match-rate-icon.svg"
                alt="Match Rate"
                className="h-8 w-8 shrink-0 rounded-xl"
              />
              <div>
                <p className="text-[13.5px] font-bold text-[#1E293B] leading-tight">
                  98% Match Rate
                </p>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                  AI semantic rank
                </p>
              </div>
            </div>

            <div className="absolute -right-4 sm:-right-6 bottom-14 sm:bottom-16 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all hover:scale-105">
              <img
                src="/ats-icon.svg"
                alt="ATS Compliant"
                className="h-8 w-8 shrink-0 rounded-xl"
              />
              <div>
                <p className="text-[13.5px] font-bold text-[#1E293B] leading-tight">
                  ATS Compliant
                </p>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Standardized parser
                </p>
              </div>
            </div>

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative rounded-2xl border-2 border-dashed px-6 py-9 sm:py-11 text-center transition-all ${
                isDragging
                  ? 'border-[#0088FF] bg-blue-50/50'
                  : 'border-[#B9D5FF] bg-white'
              }`}
            >
              <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-[#93C5FD]" />
              <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-[#93C5FD]" />
              <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-[#93C5FD]" />
              <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-[#93C5FD]" />

              <h3 className="text-[25px] sm:text-[27px] font-extrabold text-[#1E293B] tracking-tight">
                Upload your resume
              </h3>

              <p className="mx-auto mt-2 max-w-md text-[13px] sm:text-[13.5px] text-slate-500 leading-relaxed">
                PDF, DOC, or DOCX · Up to 10MB · We&apos;ll use it to understand your skills <br className="hidden sm:inline" />
                and experience.
              </p>

              <div className="mt-5">
                <input
                  ref={fileInputRef}
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#0084FF] px-8 text-[14.5px] font-semibold text-white shadow-[0_8px_20px_rgba(0,132,255,0.35)] transition-all hover:bg-[#0074E8] active:scale-[0.98]"
                >
                  <span>Upload resume</span>
                  <span className="text-[16px] leading-none">↑</span>
                </button>
              </div>

              <p className="mt-4 text-[12.5px] text-slate-400 font-normal">
                {fileName ? (
                  <span className="font-semibold text-[#0088FF]">
                    Selected: {fileName}
                  </span>
                ) : (
                  'or drag and drop your file here'
                )}
              </p>

              <div className="mt-3.5 flex items-center justify-center gap-2">
                <span className="rounded-full border border-sky-400 bg-white px-3.5 py-0.5 text-[11px] font-bold text-[#0077FF]">
                  PDF
                </span>
                <span className="rounded-full border border-sky-400 bg-white px-3.5 py-0.5 text-[11px] font-bold text-[#0077FF]">
                  DOC
                </span>
                <span className="rounded-full border border-sky-400 bg-white px-3.5 py-0.5 text-[11px] font-bold text-[#0077FF]">
                  DOCX
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-0">
          <div className="flex-1 w-full rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all hover:border-slate-300">
            <div className="flex items-center gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-300 bg-[#E8FAF0] text-emerald-500">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div>
                <p className="text-[14px] font-bold text-[#1E293B] leading-tight">
                  Resume analyzed
                </p>
                <div className="mt-1 flex items-center gap-1.5 text-[11.5px] font-semibold text-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Ready in 4s
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block h-0.5 w-5 bg-slate-200/80 shrink-0 self-center" />

          <div className="flex-1 w-full rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all hover:border-slate-300">
            <div className="flex items-center gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-[#EFF6FF] text-[#3B82F6]">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div>
                <p className="text-[14px] font-bold text-[#1E293B] leading-tight">
                  Skills matched
                </p>
                <p className="mt-1 text-[11.5px] font-medium text-[#6366F1]">
                  Deep taxonomy
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block h-0.5 w-5 bg-slate-200/80 shrink-0 self-center" />

          <div className="flex-1 w-full rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all hover:border-slate-300">
            <div className="flex items-center gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple-200 bg-[#F5F3FF] text-[#8B5CF6]">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div>
                <p className="text-[14px] font-bold text-[#1E293B] leading-tight">
                  Experience matched
                </p>
                <p className="mt-1 text-[11.5px] font-medium text-[#8B5CF6]">
                  Contextual seniority
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block h-0.5 w-5 bg-slate-200/80 shrink-0 self-center" />

          <div className="flex-1 w-full rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all hover:border-slate-300">
            <div className="flex items-center gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-[#EFF6FF] text-[#3B82F6]">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div>
                <p className="text-[13.5px] font-bold text-[#1E293B] leading-tight">
                  1,000+ sources searched
                </p>
                <p className="mt-1 text-[11.5px] font-medium text-[#0077FF]">
                  Real-time aggregators
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


