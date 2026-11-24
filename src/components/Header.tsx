import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { BrandMark } from './ui/GeometricLogo';
import { STUDIO_BRAND } from '../data/studioConfig';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'idea', label: 'Who We Are', href: '#idea' },
  { id: 'services', label: 'What We Create', href: '#services' },
  { id: 'believe', label: 'Our Approach', href: '#believe' },
  { id: 'agency', label: 'The Work', href: '#agency' },
  { id: 'faq', label: 'Client Stories', href: '#faq' },
];

interface HeaderProps {
  lightNav: boolean;
  activeSection: string;
  onOpenContact: () => void;
  onNavigate: (id: string) => void;
  brandName: string;
}

export const Header: React.FC<HeaderProps> = ({
  lightNav,
  activeSection,
  onOpenContact,
  onNavigate,
  brandName,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLink = (id: string) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-3 sm:top-4 left-3 right-3 sm:left-6 sm:right-6 z-50 pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto max-w-[1360px] rounded-2xl sm:rounded-full px-4 sm:px-6 h-[64px] sm:h-[70px] flex items-center justify-between border backdrop-blur-2xl transition-all duration-300 ${
          lightNav
            ? 'bg-white/90 border-slate-200/90 shadow-[0_8px_32px_rgba(15,23,42,0.08)]'
            : 'bg-[#0B0D13]/85 border-white/12 shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
        }`}
      >
        {/* Left Brand Mark */}
        <button
          onClick={() => handleLink('hero')}
          className="cursor-pointer min-h-[44px] flex items-center rounded-lg focus:outline-none"
          aria-label="Go to top"
        >
          <BrandMark
            name={brandName}
            subname={STUDIO_BRAND.subname}
            lightTheme={lightNav}
          />
        </button>

        {/* Center Floating Pill Nav (Desktop) */}
        <nav
          aria-label="Primary Navigation"
          className={`hidden lg:flex items-center gap-1 rounded-full p-1.5 border transition-colors duration-300 ${
            lightNav
              ? 'bg-slate-100/90 border-slate-200'
              : 'bg-white/[0.05] border-white/[0.1]'
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLink(item.id)}
                className={`cursor-pointer rounded-full px-4 py-2 text-[13.5px] font-display font-medium tracking-[-0.01em] transition-all duration-200 ${
                  isActive
                    ? lightNav
                      ? 'bg-[#0F172A] text-white shadow-sm'
                      : 'bg-[#F8FAFC] text-[#0F172A] shadow-sm'
                    : lightNav
                    ? 'text-[#475569] hover:text-[#0F172A]'
                    : 'text-[#CBD5E1] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA + Mobile Trigger */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenContact}
            className={`cursor-pointer group inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-4 sm:px-5 py-2.5 text-[13.5px] font-display font-medium transition-all duration-200 active:scale-[0.97] ${
              lightNav
                ? 'bg-[#0F172A] text-white hover:bg-[#1E293B]'
                : 'bg-[#F8FAFC] text-[#0F172A] hover:bg-white'
            }`}
          >
            <span className="roll-text h-[1.25em]">
              <span className="roll-text-inner">
                <span>Contact</span>
                <span aria-hidden="true">Contact</span>
              </span>
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className={`cursor-pointer lg:hidden inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border transition-colors duration-200 ${
              lightNav
                ? 'border-slate-300 text-[#0F172A] hover:bg-slate-100'
                : 'border-white/20 text-white hover:bg-white/10'
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Drawer */}
      {mobileOpen && (
        <div
          className={`pointer-events-auto lg:hidden mt-2 mx-auto max-w-[1360px] rounded-3xl border p-4 backdrop-blur-2xl shadow-2xl transition-all ${
            lightNav
              ? 'bg-white/95 border-slate-200 text-[#0F172A]'
              : 'bg-[#0B0D13]/95 border-white/15 text-[#F8FAFC]'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLink(item.id)}
                  className={`cursor-pointer flex min-h-[48px] items-center justify-between rounded-2xl px-4 py-3 text-left text-[15px] font-display font-medium transition-colors duration-200 ${
                    isActive
                      ? lightNav
                        ? 'bg-[#0F172A] text-white'
                        : 'bg-[#F8FAFC] text-[#0F172A]'
                      : lightNav
                      ? 'hover:bg-slate-100 text-[#0F172A]'
                      : 'hover:bg-white/[0.06] text-[#E2E8F0]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </button>
              );
            })}
          </div>

          <div
            className={`mt-3 pt-3 border-t flex items-center justify-between gap-3 ${
              lightNav ? 'border-slate-200' : 'border-white/10'
            }`}
          >
            <span
              className={`text-xs font-medium ${
                lightNav ? 'text-[#475569]' : 'text-[#94A3B8]'
              }`}
            >
              {STUDIO_BRAND.location}
            </span>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenContact();
              }}
              className="cursor-pointer inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-[#FF334B] px-5 py-2.5 text-xs font-display font-semibold uppercase tracking-[0.12em] text-white hover:bg-[#E11D48] transition-colors"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
