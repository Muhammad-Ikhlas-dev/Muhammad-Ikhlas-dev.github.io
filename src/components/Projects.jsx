import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  subtitle,
  description,
  tags,
  highlight,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  const isActive = active === id;

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
      className={`relative rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer border ${
        isActive
          ? 'lg:flex-[3.6] flex-[1] min-h-[520px] sm:min-h-[550px] lg:h-[580px] border-emerald-500/50 shadow-2xl shadow-emerald-500/10'
          : 'lg:flex-[0.7] h-[72px] lg:h-[580px] border-white/10 hover:border-white/30'
      } w-full flex flex-col justify-between group`}
      onClick={() => handleClick(id)}>
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark Gradients for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35 z-10" />
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-transparent to-transparent z-10" />
      )}

      {/* Collapsed State */}
      {!isActive ? (
        <div className="relative z-20 p-4 sm:p-6 h-full flex lg:flex-col flex-row justify-between items-center lg:items-start">
          <div className="flex items-center gap-3 lg:flex-col lg:items-start">
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-xs font-mono text-emerald-400 border border-white/10 shrink-0">
              0{index + 1}
            </div>
            {/* Mobile horizontal title */}
            <h3 className="font-beckman font-bold text-sm sm:text-base text-white tracking-wider uppercase lg:hidden truncate">
              {name}
            </h3>
          </div>

          {/* Desktop rotated title */}
          <div className="hidden lg:block lg:rotate-[-90deg] lg:origin-bottom-left lg:translate-x-7 lg:mb-24 whitespace-nowrap">
            <h3 className="font-beckman font-bold text-base xl:text-lg text-white tracking-wider uppercase">
              {name}
            </h3>
            <p className="text-[11px] font-mono text-taupe truncate max-w-[200px]">{subtitle}</p>
          </div>

          <div className="text-xs font-mono text-emerald-400 flex items-center gap-1 shrink-0">
            <span className="hidden sm:inline">View</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      ) : (
        /* Expanded State */
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-20 p-5 sm:p-7 flex flex-col justify-between h-full overflow-y-auto">
            {/* Top Bar inside expanded card */}
            <div className="flex justify-between items-start gap-4 shrink-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium">
                  Project 0{index + 1}
                </span>
                {highlight && (
                  <span className="hidden md:inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 text-timberWolf text-xs font-mono">
                    {highlight}
                  </span>
                )}
              </div>

              {/* GitHub Link Button */}
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-jetLight hover:bg-white text-white hover:text-black transition-colors duration-200 border border-white/20 flex items-center justify-center shadow-md shrink-0"
                  title="View Source Repository">
                  <img src={github} alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5 object-contain invert group-hover:invert-0" />
                </a>
              )}
            </div>

            {/* Bottom Content Area */}
            <div className="mt-auto pt-4 pb-1">
              <span className="text-emerald-400 font-mono text-[11px] sm:text-xs uppercase tracking-wider block mb-1">
                {subtitle}
              </span>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-beckman font-extrabold text-white tracking-wide uppercase leading-tight">
                {name}
              </h2>

              <p className="mt-2 text-silver/90 text-xs sm:text-sm font-poppins leading-relaxed max-w-2xl line-clamp-4 lg:line-clamp-5">
                {description}
              </p>

              {/* Technology Tags */}
              <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/10 text-white border border-white/10 backdrop-blur-sm">
                    #{tag.name}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-3">
                {repo && (
                  <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white text-eerieBlack font-semibold font-poppins text-xs sm:text-sm hover:bg-silver transition-all duration-200 flex items-center gap-2 active:scale-95 shadow-md">
                    <img src={github} alt="github" className="w-4 h-4 object-contain" />
                    <span>View Repository</span>
                  </a>
                )}
                {demo && demo !== repo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-jetLight hover:bg-jet border border-white/20 text-white font-medium font-poppins text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 active:scale-95">
                    <span>Live Demo</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-1');

  return (
    <div className="-mt-14 sm:-mt-16">
      <motion.div variants={textVariant()}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
          Real-World Impact
        </div>
        <p className={styles.sectionSubTextLight}>Case Studies</p>
        <h2 className={styles.sectionHeadTextLight}>Featured Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-silver/80 text-sm sm:text-base max-w-3xl leading-relaxed font-poppins">
        Selected engineering projects highlighting full-stack web applications, university-piloted AI systems, HR workflow automations, and scalable frontend architectures. Click any card to expand details.
      </motion.p>

      {/* Interactive Expandable Projects Accordion / Grid */}
      <div className="mt-10 flex lg:flex-row flex-col min-h-[580px] gap-4 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            {...project}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>

      {/* GitHub Callout Footer */}
      <div className="mt-12 p-6 rounded-2xl bg-jet/40 border border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h4 className="text-white font-beckman font-bold text-base sm:text-lg">
            Looking for more repositories and experiments?
          </h4>
          <p className="text-taupe text-xs sm:text-sm font-poppins mt-0.5">
            Check out open-source contributions, algorithms, and sandbox utilities on GitHub.
          </p>
        </div>
        <a
          href="https://github.com/Muhammad-Ikhlas-dev"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 font-semibold font-poppins text-xs sm:text-sm transition-all duration-200 whitespace-nowrap flex items-center gap-2">
          <img src={github} alt="github" className="w-4 h-4 object-contain invert hover:invert-0" />
          <span>Explore GitHub Profile</span>
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
