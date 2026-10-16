'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
  { name: 'Colleges', href: '#colleges' },
  { name: 'Employers', href: '#employers' },
  { name: 'Jobs', href: '#jobs' },
  { name: 'Blogs', href: '#support' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-360 items-center justify-between px-5 sm:px-10 lg:h-22.5 lg:px-24">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-md transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077FF] active:scale-[0.98]"
        >
          <Image
            src="logo.svg"
            alt="CampusPe - Connecting Students, Institutions & Companies"
            width={178}
            height={54}
            priority
            className="h-auto w-33 object-contain sm:w-39.5"
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-8 md:flex lg:gap-13"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative py-1 text-[15px] font-medium leading-5.5 text-[#2D2D2D] transition-colors duration-200 hover:text-[#0077FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077FF] focus-visible:ring-offset-4 active:text-[#005FCC]"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#0077FF] transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right: Desktop Auth CTAs */}
        <div className="hidden items-center gap-6 md:flex lg:gap-7">
          <Link
            href="#signin"
            className="rounded-lg px-2 py-1.5 text-[15px] font-medium leading-5.5 text-[#2D2D2D] transition-all duration-200 hover:text-[#0077FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077FF] active:scale-[0.97]"
          >
            Sign In
          </Link>
          <Link
            href="#signup"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#0077FF] px-6 text-[15px] font-medium leading-5 text-white shadow-[0_2px_10px_rgba(0,119,255,0.22)] transition-all duration-200 hover:-translate-y-px hover:bg-[#0066E0] hover:shadow-[0_6px_16px_rgba(0,119,255,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077FF] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.97] active:bg-[#0052B8]"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#2D2D2D] transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077FF] active:scale-95 md:hidden"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 pt-3 pb-6 shadow-lg md:hidden">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-[15px] font-medium text-[#2D2D2D] transition-colors hover:bg-blue-50 hover:text-[#0077FF] active:bg-blue-100"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-slate-100 pt-4">
              <Link
                href="#signin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-10.5 w-full items-center justify-center rounded-full border border-slate-200 text-[15px] font-medium text-[#2D2D2D] transition-colors hover:border-[#0077FF] hover:text-[#0077FF] active:scale-[0.98]"
              >
                Sign In
              </Link>
              <Link
                href="#signup"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-10.5 w-full items-center justify-center rounded-full bg-[#0077FF] text-[15px] font-medium text-white shadow-sm transition-all hover:bg-[#0066E0] active:scale-[0.98]"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
