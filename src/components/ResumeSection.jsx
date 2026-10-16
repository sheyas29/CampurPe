'use client';

import { useState } from 'react';

export default function ResumeSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState(null);

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
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F9FBFF] to-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-360 px-5 sm:px-10 lg:px-24">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-1.5 text-[13px] font-semibold text-[#0077FF]">
            <span className="h-2 w-2 rounded-full bg-[#0077FF]" />
            TRY IT LIVE{' '}
            <span className="text-slate-400 font-normal">v2.4 AI Engine</span>
          </div>

          <h2 className="mt-6 text-[36px] font-extrabold tracking-tight text-[#1E293B] sm:text-[48px] lg:text-[56px] leading-[1.1]">
            Upload your resume. <br />
            <span className="text-[#0077FF]">Find jobs that fit.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[16px] text-[#64748B] sm:text-[17px] leading-relaxed">
            Upload once. CampusPe reads your skills, experience, and preferences
            — then finds relevant jobs across 1,000+ sources.
          </p>
        </div>

        {/* Central Interactive Upload Box Card */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          {/* Floating Left Badge: 98% Match Rate */}
          <div className="absolute -left-4 sm:-left-8 top-12 z-10 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all hover:scale-105">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 font-bold text-xs">
              ⚡
            </span>
            <div>
              <p className="text-[14px] font-bold text-[#1E293B]">
                98% Match Rate
              </p>
              <p className="text-[12px] text-[#64748B]">AI semantic rank</p>
            </div>
          </div>

          {/* Floating Right Badge: ATS Compliant */}
          <div className="absolute -right-4 sm:-right-8 bottom-20 z-10 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all hover:scale-105">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#0077FF] font-bold text-xs">
              🛡️
            </span>
            <div>
              <p className="text-[14px] font-bold text-[#1E293B]">
                ATS Compliant
              </p>
              <p className="text-[12px] text-[#64748B]">Standardized parser</p>
            </div>
          </div>

          {/* Main Container */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative rounded-[32px] border-2 border-dashed bg-white p-8 sm:p-12 text-center shadow-[0_20px_50px_rgba(0,119,255,0.08)] transition-all ${
              isDragging
                ? 'border-[#0077FF] bg-blue-50/40'
                : 'border-blue-200/80'
            }`}
          >
            <h3 className="text-[24px] font-bold text-[#1E293B] sm:text-[28px]">
              Upload your resume
            </h3>
            <p className="mt-2 text-[14px] text-[#64748B]">
              PDF, DOC, or DOCX · Up to 10MB · We'll use it to understand your
              skills and experience.
            </p>

            {/* Drag & Drop Action Box */}
            <div className="mx-auto mt-8 max-w-md rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-all hover:bg-slate-50">
              <label htmlFor="resume-upload" className="cursor-pointer">
                <div className="inline-flex h-12 items-center justify-center rounded-full bg-[#0077FF] px-6 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-[#0066E0] active:scale-95">
                  Upload resume ➔
                </div>
              </label>
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />

              <p className="mt-3 text-[13px] text-[#64748B]">
                {fileName ? (
                  <span className="font-semibold text-[#0077FF]">
                    Selected: {fileName}
                  </span>
                ) : (
                  'or drag and drop your file here'
                )}
              </p>

              {/* Format Badges */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                  PDF
                </span>
                <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                  DOC
                </span>
                <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                  DOCX
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Step Metrics Footer Row */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 font-bold">
              ✓
            </span>
            <div>
              <p className="text-[14px] font-bold text-[#1E293B]">
                Resume analyzed
              </p>
              <p className="text-[12px] font-medium text-emerald-600">
                🟢 Ready in 4s
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0077FF] font-bold">
              ✓
            </span>
            <div>
              <p className="text-[14px] font-bold text-[#1E293B]">
                Skills matched
              </p>
              <p className="text-[12px] text-[#64748B]">Deep taxonomy</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0077FF] font-bold">
              ✓
            </span>
            <div>
              <p className="text-[14px] font-bold text-[#1E293B]">
                Experience matched
              </p>
              <p className="text-[12px] text-[#64748B]">Contextual seniority</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0077FF] font-bold">
              ✓
            </span>
            <div>
              <p className="text-[14px] font-bold text-[#1E293B]">
                1,000+ sources searched
              </p>
              <p className="text-[12px] text-[#64748B]">
                Real-time aggregators
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
