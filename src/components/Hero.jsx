import { motion } from 'framer-motion';
import { styles } from '../styles';
import { bwmap, worldmap } from '../assets';
import rightSectionImage from '../assets/right-section-img.png';
import resumePdf from '../assets/resume.pdf';
import { personalInfo } from '../constants';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-night">
      {/* Background maps */}
      <div className="absolute top-0 left-0 z-0 h-full w-full pointer-events-none opacity-40">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>

      {/* Subtle modern radial background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <section
        className={`relative z-10 max-w-7xl mx-auto min-h-screen flex flex-col justify-center ${styles.paddingX} pt-28 pb-16`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Intro & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start z-20">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-md mb-4 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-time Roles & Contracts</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-white font-poppins font-extrabold tracking-tight text-3xl sm:text-5xl lg:text-6xl leading-[1.15]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver via-timberWolf to-white font-beckman tracking-wide block sm:inline mt-1 sm:mt-0">
                {personalInfo.name}
              </span>
            </h1>

            {/* Sub-headline / Role */}
            <div className="mt-3 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-emerald-400 rounded-full"></span>
              <p className="text-emerald-400 text-base sm:text-xl font-beckman font-semibold tracking-wider uppercase">
                {personalInfo.role}
              </p>
            </div>

            {/* Intro paragraph */}
            <p className="mt-4 text-silver/85 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl font-poppins">
              Full Stack Developer with <strong className="text-white font-semibold">3+ years of experience</strong> engineering scalable web applications using{' '}
              <span className="text-white font-semibold">React.js, Next.js, TypeScript, Node.js, and PostgreSQL</span>.
              Experienced in direct technical discovery and agile collaboration with <strong className="text-emerald-300 font-semibold">US-based clients</strong>, enterprise workflow automation, and modern AI/LLM integration.
            </p>

            {/* Quick Metrics Strip */}
            <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-6 py-3 px-4 rounded-xl bg-jet/60 border border-white/10 backdrop-blur-md w-full max-w-xl">
              <div>
                <p className="text-lg sm:text-2xl font-bold font-beckman text-white">3+ Years</p>
                <p className="text-xs text-taupe uppercase tracking-wider font-poppins">Full Stack Exp</p>
              </div>
              <div className="border-x border-white/10 px-2 sm:px-4">
                <p className="text-lg sm:text-2xl font-bold font-beckman text-emerald-400">US Clients</p>
                <p className="text-xs text-taupe uppercase tracking-wider font-poppins">Direct Collab</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold font-beckman text-white">60% Auto</p>
                <p className="text-xs text-taupe uppercase tracking-wider font-poppins">HR Workflows</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 items-center w-full">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-white text-eerieBlack font-semibold font-poppins text-sm sm:text-base hover:bg-silver transition-all duration-200 shadow-lg hover:shadow-white/20 active:scale-95 flex items-center gap-2">
                <span>View Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-jetLight hover:bg-jet border border-white/15 text-white font-semibold font-poppins text-sm sm:text-base transition-all duration-200 active:scale-95 flex items-center gap-2 hover:border-emerald-500/50">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/5 border border-white/10 text-silver hover:text-white font-medium font-poppins text-sm sm:text-base transition-all duration-200">
                Contact Me
              </a>
            </div>

            {/* Quick Links Row */}
            <div className="mt-7 flex items-center gap-4 text-xs sm:text-sm text-silver/70 font-poppins">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <span>•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              <span>•</span>
              <span className="flex items-center gap-1 text-taupe">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {personalInfo.location}
              </span>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center">
              {/* Decorative Glow Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-white/5 to-blue-500/20 blur-xl opacity-70" />

              {/* Graphic Card Container */}
              <div className="relative w-full h-full rounded-2xl bg-jet/40 border border-white/10 backdrop-blur-xl overflow-hidden p-6 flex flex-col justify-between shadow-2xl">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-xs font-mono text-taupe">ikhlas.dev // fullstack</span>
                </div>

                {/* Hero Illustration Image */}
                <div className="my-auto py-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={rightSectionImage}
                    alt="Muhammad Ikhlas Developer"
                    className="max-h-[260px] sm:max-h-[300px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Quick Interactive Tagline */}
                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs text-taupe font-mono">
                  <span className="text-emerald-400">● React 19 • Next.js • TS</span>
                  <span>PostgreSQL • Node</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <div className="w-full flex justify-center items-center mt-12 sm:mt-8">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 group text-taupe hover:text-white transition-colors">
            <span className="text-xs font-poppins uppercase tracking-widest text-taupe/80 group-hover:text-white">
              Discover More
            </span>
            <div className="w-[30px] h-[52px] rounded-full border-2 border-white/20 flex justify-center items-start p-2 group-hover:border-emerald-400/60 transition-colors">
              <motion.div
                animate={{ y: [0, 18, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatType: 'loop' }}
                className="w-2 h-2 rounded-full bg-emerald-400 mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
