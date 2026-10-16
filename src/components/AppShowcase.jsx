'use client';

import { useEffect, useRef, useState } from 'react';

const phones = [
  { id: 0, title: 'Discover', src: '/l2-mobile.png' },
  { id: 1, title: 'Post a Job', src: '/l1mobile.png' },
  { id: 2, title: 'Hi, Amit Kumar', src: '/middle-mobile.png' },
  { id: 3, title: 'My Application', src: '/r1-mobile.png' },
  { id: 4, title: 'XYZ College', src: '/r2-mobile.png' },
];


const N = phones.length;

const GAP = 0.08;

const SLOTS = {
  0: { scale: 1, opacity: 1 },
  1: { scale: 0.82, opacity: 0.96 },
  2: { scale: 0.65, opacity: 0.88 },
};


const getOffset = (idx, active) => ((((idx - active) % N) + N + 2) % N) - 2;

export default function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [previousActive, setPreviousActive] = useState(2);
  const [stageWidth, setStageWidth] = useState(1000);
  const stageRef = useRef(null);

  const touchStartX = useRef(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const update = () => setStageWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const go = (i) => {
    const nextIndex = ((i % N) + N) % N;
    setPreviousActive(activeIndex);
    setActiveIndex(nextIndex);
  };

  const prev = () => go(activeIndex - 1);

  const next = () => go(activeIndex + 1);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev();

    if (e.key === 'ArrowRight') next();
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const dx = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();

    touchStartX.current = null;
  };

  // ---- Layout maths -------------------------------------------------------

  const s1 = SLOTS[1].scale;

  const s2 = SLOTS[2].scale;

  const W = Math.max(
    60,

    Math.min(230, stageWidth / (1 + 2 * (s1 + s2) + 4 * GAP))
  );

  const gap = W * GAP;
  const nearX = W / 2 + gap + (W * s1) / 2;
  const farX = nearX + (W * s1) / 2 + gap + (W * s2) / 2;
  const screenX = { 0: 0, 1: nearX, 2: farX };
  const phoneHeight = W * (19.5 / 9);
  const getStyle = (offset, idx) => {
    const abs = Math.abs(offset);
    const slot = SLOTS[abs];
    const sign = Math.sign(offset);
    const wasOffset = getOffset(idx, previousActive);
    const jumped = Math.abs(offset - wasOffset) > 2;
    return {
      width: W,
      height: phoneHeight,
      transform: `translateX(${sign * screenX[abs]}px) scale(${slot.scale})`,
      zIndex: 40 - abs * 10,
      opacity: slot.opacity,
      transition: jumped ? 'none' : undefined,
      animation: jumped ? 'phoneFadeIn 600ms ease-out' : undefined,
    };
  };

  return (
    <section
      id="app"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <style>{`

        @keyframes phoneFadeIn { from { opacity: 0; } }

      `}</style>

      <div className="mx-auto max-w-360 px-5 sm:px-10 lg:px-24">
        {/* Section Header */}

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[32px] font-extrabold tracking-tight text-[#1E293B] sm:text-[44px] lg:text-[48px] leading-[1.1]">
            Checkout Our{' '}
            <span className="text-[#0077FF]">App Interface Look</span>
          </h2>

          <p className="mt-4 text-[15px] text-[#64748B] sm:text-[16px] leading-relaxed">
            Experience the power of a unified campus ecosystem right in your
            pocket. <strong className="text-[#1E293B]">CampusPe</strong> offers
            a tailored interface for every user: students can explore trending
            courses, colleges can showcase their campus life, and companies can
            post job vacancies directly to a pool of qualified candidates.
          </p>
        </div>

        {/* Coverflow stage */}

        <div
          ref={stageRef}
          className="relative mt-12 w-full max-w-6xl mx-auto py-6 outline-none"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="App screenshots"
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* soft blue glow behind the phones */}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto h-3/4 w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,119,255,0.10),transparent_70%)]"
          />

          <div
            className="relative flex items-center justify-center w-full"
            style={{ height: phoneHeight + 16 }}
          >
            {phones.map((phone, idx) => {
              const offset = getOffset(idx, activeIndex);

              const isCenter = offset === 0;

              return (
                <div
                  key={phone.id}
                  onClick={() => go(idx)}
                  style={getStyle(offset, idx)}
                  aria-hidden={!isCenter}
                  className="absolute cursor-pointer transition-all duration-700 ease-out"
                >
                  <img
                    src={phone.src}
                    alt={phone.title}
                    draggable={false}
                    className="h-full w-full object-contain select-none"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}

        <div className="mt-4 flex items-center justify-center gap-5">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1E293B] shadow-md ring-1 ring-slate-200 transition hover:bg-slate-50 active:scale-95"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            {phones.map((_, idx) => (
              <button
                key={idx}
                onClick={() => go(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={activeIndex === idx}
                className={`rounded-full bg-[#0077FF] transition-all duration-300 ${activeIndex === idx
                  ? 'h-3.5 w-3.5'
                  : 'h-2.5 w-2.5 hover:opacity-80'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1E293B] shadow-md ring-1 ring-slate-200 transition hover:bg-slate-50 active:scale-95"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Download App Now Banner */}

        <div className="mt-24 rounded-[32px] border border-slate-200/80 bg-gradient-to-r from-blue-50/50 via-white to-blue-50/30 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h3 className="text-[32px] font-extrabold text-[#1E293B] sm:text-[40px] leading-tight">
              Download App Now
            </h3>

            <p className="mt-4 text-[15px] text-[#64748B] leading-relaxed">
              Elevate your academic journey with Campuspe, the all-in-one
              digital ecosystem designed to bridge the gap between education and
              industry. Whether you're a student seeking your next big
              internship, a college looking to empower your cohort, or a company
              scouting for top-tier talent, Campuspe streamlines the connection.
              Your career doesn't start at graduation — it starts here.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#google-play"
                className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white transition-transform hover:scale-105 active:scale-95 shadow-md"
              >
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 01-1.61-.247 1.51 1.51 0 01-.5-.939V3c0-.363.18-.702.5-.939a1.5 1.5 0 011.61-.247zM15.207 13.415l2.42 2.42-11.458 6.643a1.5 1.5 0 01-1.398 0l10.436-9.063zm0-2.83L4.771 1.522a1.5 1.5 0 011.398 0l11.458 6.642-2.42 2.42zM16.92 12.508l3.714 2.148a1.5 1.5 0 010 2.588l-2.876 1.662-3.13-3.13 2.292-3.268z" />
                </svg>

                <div className="text-left">
                  <p className="text-[10px] text-slate-300 uppercase tracking-wider">
                    GET IT ON
                  </p>

                  <p className="text-[14px] font-bold leading-tight">
                    Google Play
                  </p>
                </div>
              </a>

              <a
                href="#app-store"
                className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white transition-transform hover:scale-105 active:scale-95 shadow-md"
              >
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.31c.67-.82 1.12-1.95.99-3.09-1.03.04-2.28.69-3.01 1.51-.62.69-1.16 1.83-1 2.92 1.15.09 2.31-.56 3.02-1.34z" />
                </svg>

                <div className="text-left">
                  <p className="text-[10px] text-slate-300 uppercase tracking-wider">
                    Download on the
                  </p>

                  <p className="text-[14px] font-bold leading-tight">
                    App Store
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="relative shrink-0 w-full max-w-md lg:max-w-lg">
            <LandscapePreview />
          </div>
        </div>
      </div>
    </section>
  );
}

function LandscapePreview() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
      <img
        src="/two-phones.png"
        alt="App preview landscape"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
