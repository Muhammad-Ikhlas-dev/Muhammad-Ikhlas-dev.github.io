import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks, personalInfo } from '../constants';
import { close, menu, logo } from '../assets';
import resumePdf from '../assets/resume.pdf';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-night/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Brand Link */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <div className="w-10 h-10 rounded-xl bg-jetLight border border-white/15 flex items-center justify-center p-2 group-hover:border-emerald-500/50 transition-colors">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain invert"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-beckman font-bold text-base sm:text-lg tracking-wider group-hover:text-emerald-400 transition-colors">
              IKHLAS
            </span>
            <span className="text-[10px] font-mono text-taupe uppercase tracking-widest hidden sm:inline">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-7">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? 'text-emerald-400 font-semibold' : 'text-silver'
                } hover:text-white text-sm font-poppins font-medium cursor-pointer transition-colors`}
                onClick={() => setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Quick Resume CTA Button in Nav */}
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-emerald-500 text-white hover:text-night border border-white/15 hover:border-emerald-400 font-poppins text-xs font-semibold transition-all duration-200 flex items-center gap-2 active:scale-95">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle navigation menu"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-5 h-5 object-contain invert"
            />
          </button>

          {/* Mobile Dropdown Drawer */}
          {toggle && (
            <div className="p-6 bg-night/95 backdrop-blur-2xl border-b border-white/10 fixed top-[72px] left-0 w-full z-40 flex flex-col gap-5 shadow-2xl animate-in slide-in-from-top duration-200">
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-emerald-400 font-bold' : 'text-silver'
                    } text-lg font-poppins font-medium cursor-pointer`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`} className="block py-1">
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setToggle(false)}
                  className="w-full py-3 rounded-xl bg-emerald-500 text-night font-bold font-poppins text-center text-sm flex items-center justify-center gap-2">
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
