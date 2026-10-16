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
          role="region"
          aria-roledescription="carousel"
          aria-label="App screenshots"
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

        <div className="mt-4 flex items-center justify-center">
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
              <a href="#google-play" className="transition-transform hover:scale-105 active:scale-95">
                <img src="/google-play.png" alt="Get it on Google Play" className="h-12 w-auto object-contain" />
              </a>

              <a href="#app-store" className="transition-transform hover:scale-105 active:scale-95">
                <img src="/app-store.png" alt="Download on the App Store" className="h-12 w-auto object-contain" />
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
