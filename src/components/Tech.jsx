import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies, skillCategories } from '../constants';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';

const Tech = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="-mt-14 sm:-mt-16">
      <motion.div variants={textVariant()}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
          Technical Arsenal
        </div>
        <p className={styles.sectionSubTextLight}>Skills & Stack</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-silver/80 text-sm sm:text-base max-w-3xl leading-relaxed font-poppins">
        A comprehensive overview of the programming languages, frameworks, backend architectures, databases, and AI tooling I use to build scalable, enterprise-grade applications.
      </motion.p>

      {/* Categorized Skills Directory */}
      <div className="mt-10 rounded-2xl bg-jet/60 border border-white/10 p-5 sm:p-7 backdrop-blur-md shadow-xl">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pb-5 border-b border-white/10">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-poppins font-medium transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-white text-eerieBlack shadow-md font-semibold'
                  : 'bg-white/5 text-silver hover:bg-white/10 hover:text-white'
              }`}>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {skillCategories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="p-3.5 rounded-xl bg-jetLight/70 border border-white/5 hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5">
              <span className="text-white text-sm font-semibold font-poppins group-hover:text-emerald-400 transition-colors">
                {skill.name}
              </span>
              <span className="text-[11px] text-taupe font-mono mt-1">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3D Interactive Floating Tech Balls */}
      <div className="mt-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-0.5 w-6 bg-emerald-400 rounded-full"></span>
          <h3 className="text-white font-beckman text-lg sm:text-xl font-bold tracking-wide">
            Interactive 3D Stack
          </h3>
          <span className="text-xs text-taupe font-mono hidden sm:inline">(Drag & Spin the 3D spheres)</span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-6">
          {technologies.map((technology) => (
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center group cursor-grab active:cursor-grabbing"
              key={technology.name}>
              <div className="w-full h-full">
                <BallCanvas icon={technology.icon} />
              </div>
              <span className="text-[11px] font-mono text-silver/70 group-hover:text-white text-center mt-1 transition-colors">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, 'skills');
