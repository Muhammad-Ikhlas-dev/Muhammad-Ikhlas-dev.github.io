import React from 'react';
import { personalInfo, navLinks } from '../constants';
import resumePdf from '../assets/resume.pdf';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-jet/90 border-t border-white/10 pt-12 pb-8 px-6 sm:px-16 text-silver">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Branding & Role */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-white font-beckman font-bold text-xl tracking-wider">
            {personalInfo.name}
          </h3>
          <p className="text-taupe text-xs sm:text-sm font-poppins mt-1">
            {personalInfo.role} • Islamabad, Pakistan
          </p>
        </div>

        {/* Center: Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-poppins">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className="text-silver/80 hover:text-white transition-colors">
              {nav.title}
            </a>
          ))}
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
            Resume
          </a>
        </div>

        {/* Right: Back to Top & Socials */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-silver hover:text-white transition-colors"
            title="GitHub">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-silver hover:text-white transition-colors"
            title="LinkedIn">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-black border border-white/15 flex items-center justify-center text-white transition-all active:scale-95 ml-2"
            title="Back to Top">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-taupe font-mono gap-2">
        <span>© {new Date().getFullYear()} Muhammad Ikhlas. Built with React & Tailwind CSS.</span>
        <span>Crafted for high performance & scalability.</span>
      </div>
    </footer>
  );
};

export default Footer;

