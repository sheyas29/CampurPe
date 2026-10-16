export default function SupportCta() {
  return (
    <>
      <StillHaveQuestions />
      <ReadyForNext />
    </>
  );
}

/* ---------------------------- Still have questions? ---------------------------- */
function StillHaveQuestions() {
  return (
    <section className="relative bg-white px-5 py-10 sm:px-10 lg:px-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(99,102,241,0.12)]">
        {/* soft blue glow across the top */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 55% at 15% 0%, rgba(147,197,253,0.55), transparent 70%), radial-gradient(60% 55% at 90% 0%, rgba(165,180,252,0.40), transparent 70%), linear-gradient(to bottom, rgba(191,219,254,0.45), rgba(255,255,255,0) 60%)',
          }}
        />

        <div className="relative flex flex-col items-center px-6 pb-16 pt-14 text-center sm:pb-20 sm:pt-16">
          <h2 className="text-[28px] font-bold tracking-tight text-[#1E293B] sm:text-[32px]">
            Still have questions?
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#475569] sm:text-[16px]">
            Our support team is here to help you succeed. Get in touch anytime.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            {/* Filled pill */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 rounded-full bg-[#0A93FF] py-1.5 pl-6 pr-1.5 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(10,147,255,0.30)] transition hover:bg-[#0084EE] active:scale-95"
            >
              Contact Support
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0A93FF] transition-transform group-hover:rotate-12">
                <ArrowUpRight />
              </span>
            </a>

            {/* Outlined pill */}
            <a
              href="#schedule"
              className="group inline-flex items-center gap-4 rounded-full border border-[#0A93FF] bg-white/70 py-1.5 pl-6 pr-1.5 text-[13px] font-semibold text-[#0A6FE0] backdrop-blur transition hover:bg-white active:scale-95"
            >
              Schedule a Call
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A6FE0] text-white transition-transform group-hover:-rotate-12">
                <PhoneCall />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Ready for what's next? ------------------------------ */
function ReadyForNext() {
  return (
    <section
      className="px-5 py-12 sm:px-10 lg:px-24"
      style={{
        background:
          'linear-gradient(to bottom, #F8FAFC 0%, #FAFAFA 50%, #FFF4EC 100%)',
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[28px] border border-slate-300/80 bg-white px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md">
          <h3 className="text-[24px] font-bold tracking-tight text-[#1E293B] sm:text-[26px]">
            Ready for what’s next?
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-[#64748B]">
            Discover colleges, find opportunities, list your institution, or
            start hiring with CampusPe.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#colleges"
            className="rounded-md bg-[#0A7CFF] px-4 py-2.5 text-[12px] font-semibold text-white transition hover:bg-[#0069DD] active:scale-95"
          >
            Explore Colleges →
          </a>
          <a
            href="#opportunities"
            className="rounded-md bg-[#0A7CFF] px-4 py-2.5 text-[12px] font-semibold text-white transition hover:bg-[#0069DD] active:scale-95"
          >
            Find Opportunities →
          </a>
          <a
            href="#list-college"
            className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-[12px] font-semibold text-[#1E293B] transition hover:bg-slate-50 active:scale-95"
          >
            List Your College →
          </a>
          <a
            href="#post-job"
            className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-[12px] font-semibold text-[#1E293B] transition hover:bg-slate-50 active:scale-95"
          >
            Post a Job →
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Icons --------------------------------- */
function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function PhoneCall() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
      <path d="M14.5 2.5a7 7 0 017 7" />
      <path d="M14.5 6a3.5 3.5 0 013.5 3.5" />
    </svg>
  );
}
