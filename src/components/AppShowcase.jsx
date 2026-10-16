'use client';

import { useEffect, useRef, useState } from 'react';

const phones = [
  { id: 0, title: 'Discover', src: '/phone-1.png' },
  { id: 1, title: 'Post a Job', src: '/phone-2.png' },
  { id: 2, title: 'Hi, Amit Kumar', src: '/phone-3.png' },
  { id: 3, title: 'My Application', src: '/phone-4.png' },
  { id: 4, title: 'XYZ College', src: '/phone-5.png' },
];

// Set to true if your /phone-N.png files already include the phone frame
// (bezel + notch). Then the images are shown as-is with no extra frame.
const IMAGES_INCLUDE_FRAME = false;

const N = phones.length;
const GAP = 0.08; // gap between neighbours, fraction of centre phone width

// Flat layout like the reference: centre biggest, then 2 smaller on each side
const SLOTS = {
  0: { scale: 1, opacity: 1 },
  1: { scale: 0.82, opacity: 0.96 },
  2: { scale: 0.65, opacity: 0.88 },
};

// Circular offset in range -2..2 -> always 2 phones on each side
const getOffset = (idx, active) => ((((idx - active) % N) + N + 2) % N) - 2;

export default function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [failed, setFailed] = useState({});
  const [stageWidth, setStageWidth] = useState(1000);
  const stageRef = useRef(null);
  const prevActive = useRef(2);
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

  useEffect(() => {
    prevActive.current = activeIndex;
  }, [activeIndex]);

  const go = (i) => setActiveIndex(((i % N) + N) % N);
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

    // A phone wrapping from one far edge to the other fades in at its new spot
    // instead of sliding across the stage underneath the others.
    const wasOffset = getOffset(idx, prevActive.current);
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
                  <PhoneFrame
                    phone={phone}
                    W={W}
                    isCenter={isCenter}
                    failed={failed[phone.id]}
                    onFail={() =>
                      setFailed((f) => ({ ...f, [phone.id]: true }))
                    }
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
                className={`rounded-full bg-[#0077FF] transition-all duration-300 ${
                  activeIndex === idx
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

/* ---------- Phone with peach/orange frame like the reference ---------- */
function PhoneFrame({ phone, W, isCenter, failed, onFail }) {
  const shadow = isCenter
    ? '0 25px 50px rgba(232,130,90,0.30), 0 8px 20px rgba(15,23,42,0.12)'
    : '0 12px 28px rgba(15,23,42,0.12)';

  // Images that already contain their own frame: show them as-is
  if (IMAGES_INCLUDE_FRAME && !failed) {
    return (
      <img
        src={phone.src}
        alt={phone.title}
        draggable={false}
        onError={onFail}
        className="h-full w-full object-contain select-none"
        style={{
          filter: isCenter
            ? 'drop-shadow(0 20px 30px rgba(232,130,90,0.3))'
            : undefined,
        }}
      />
    );
  }

  return (
    <div
      className="relative h-full w-full"
      style={{
        borderRadius: W * 0.17,
        padding: Math.max(2, W * 0.014),
        background: 'linear-gradient(160deg,#F9B997 0%,#E8825A 100%)',
        boxShadow: shadow,
      }}
    >
      <div
        className="relative h-full w-full bg-white"
        style={{ borderRadius: W * 0.155, padding: W * 0.02 }}
      >
        <div
          className="relative h-full w-full overflow-hidden bg-slate-50"
          style={{ borderRadius: W * 0.135 }}
        >
          {!failed ? (
            <img
              src={phone.src}
              alt={phone.title}
              draggable={false}
              onError={onFail}
              className="h-full w-full object-cover select-none"
            />
          ) : (
            <PlaceholderScreen title={phone.title} W={W} />
          )}
        </div>

        {/* notch */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-[#0F172A]"
          style={{
            top: W * 0.04,
            width: W * 0.3,
            height: W * 0.06,
            borderRadius: 999,
          }}
        />
      </div>
    </div>
  );
}

/* Generic app-screen skeleton used until the real screenshot is dropped in */
function PlaceholderScreen({ title, W }) {
  const fs = Math.max(6, W * 0.06);
  const bar = (w, h = W * 0.03, c = '#E2E8F0') => ({
    width: `${w}%`,
    height: h,
    background: c,
    borderRadius: 999,
  });

  return (
    <div className="flex h-full w-full flex-col" style={{ fontSize: fs }}>
      {/* blue header */}
      <div
        className="bg-gradient-to-b from-[#6FB0FF] to-[#CFE5FF] text-[#0B3B7A]"
        style={{ padding: `${W * 0.13}px ${W * 0.06}px ${W * 0.05}px` }}
      >
        <div className="font-bold leading-tight">{title}</div>
        <div className="mt-1 flex gap-1">
          <span
            className="rounded-full bg-white/90"
            style={{ ...bar(30, W * 0.045, '#fff') }}
          />
          <span
            className="rounded-full"
            style={{ ...bar(36, W * 0.045, 'rgba(255,255,255,0.6)') }}
          />
        </div>
      </div>

      {/* hero card */}
      <div style={{ padding: W * 0.05 }}>
        <div
          className="bg-gradient-to-br from-[#1E3A8A] to-[#0077FF]"
          style={{ height: W * 0.42, borderRadius: W * 0.05 }}
        />
      </div>

      {/* list rows */}
      <div
        className="flex flex-col"
        style={{ gap: W * 0.05, padding: `0 ${W * 0.05}px` }}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center" style={{ gap: W * 0.04 }}>
            <div
              className="shrink-0 bg-slate-200"
              style={{
                width: W * 0.14,
                height: W * 0.14,
                borderRadius: W * 0.03,
              }}
            />
            <div className="flex flex-1 flex-col" style={{ gap: W * 0.025 }}>
              <div style={bar(80)} />
              <div style={bar(55, W * 0.025, '#EEF2F7')} />
            </div>
          </div>
        ))}
      </div>

      {/* bottom nav */}
      <div
        className="mt-auto flex items-center justify-around border-t border-slate-200 bg-white"
        style={{ height: W * 0.13 }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="rounded-full bg-slate-300"
            style={{ width: W * 0.05, height: W * 0.05 }}
          />
        ))}
      </div>
    </div>
  );
}

function LandscapePreview() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 shadow-xl">
      {!failed && (
        <img
          src="/phone-landscape.png"
          alt="App preview landscape"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 text-white p-4 text-center">
          <span className="text-xs uppercase tracking-wider text-blue-400 font-bold">
            Placeholder
          </span>
          <span className="text-sm font-semibold mt-1">
            Landscape Phone Showcase Graphic
          </span>
          <span className="text-[11px] text-slate-400 mt-2">
            Drop `phone-landscape.png` in public/
          </span>
        </div>
      )}
    </div>
  );
}
