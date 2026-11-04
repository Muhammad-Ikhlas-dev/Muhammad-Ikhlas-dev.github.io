import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn, fadeIn } from '../utils/motion';
import { send } from '../assets';
import { personalInfo } from '../constants';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatusMessage({ type: 'error', text: 'Please fill in all fields before sending.' });
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    emailjs
      .send(
        'service_3cei7om',
        'template_rle85kl',
        {
          from_name: form.name,
          to_name: personalInfo.name,
          from_email: form.email,
          to_email: personalInfo.email,
          message: form.message,
        },
        '3yBFtkNUbCOjX1WOd'
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage({
            type: 'success',
            text: 'Thank you! Your message has been sent successfully. I will get back to you shortly.',
          });
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatusMessage({
            type: 'error',
            text: 'Unable to send message directly via EmailJS. Please email me directly at ' + personalInfo.email,
          });
        }
      );
  };

  return (
    <div className="-mt-14 sm:-mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form */}
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 0.8)}
          className="lg:col-span-7 bg-jet/80 p-6 sm:p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
            Get In Touch
          </div>
          <p className={styles.sectionSubText}>Let's Connect</p>
          <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

          <p className="mt-3 text-silver/80 text-xs sm:text-sm font-poppins leading-relaxed">
            Interested in full-stack web engineering, workflow automation, or AI/LLM integration? Send a message below and I'll respond within 24 hours.
          </p>

          {statusMessage && (
            <div
              className={`mt-4 p-4 rounded-xl text-xs sm:text-sm font-poppins ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                  : 'bg-red-500/15 border border-red-500/30 text-red-300'
              }`}>
              {statusMessage.text}
            </div>
          )}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-4 font-poppins">
            <label className="flex flex-col">
              <span className="text-timberWolf text-xs font-mono mb-2">YOUR NAME</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-eerieBlack/90 py-3.5 px-5 placeholder:text-taupe/60 text-white rounded-xl outline-none border border-white/10 focus:border-emerald-500/50 text-sm font-medium transition-colors"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-timberWolf text-xs font-mono mb-2">YOUR EMAIL</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-eerieBlack/90 py-3.5 px-5 placeholder:text-taupe/60 text-white rounded-xl outline-none border border-white/10 focus:border-emerald-500/50 text-sm font-medium transition-colors"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-timberWolf text-xs font-mono mb-2">YOUR MESSAGE</span>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, or open role..."
                className="bg-eerieBlack/90 py-3.5 px-5 placeholder:text-taupe/60 text-white rounded-xl outline-none border border-white/10 focus:border-emerald-500/50 text-sm font-medium resize-none transition-colors"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-white text-eerieBlack hover:bg-silver font-bold font-poppins text-sm transition-all duration-200 active:scale-95 disabled:opacity-50 shadow-lg cursor-pointer">
              <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
              <img
                src={send}
                alt="send"
                className="w-4 h-4 object-contain invert"
              />
            </button>
          </form>
        </motion.div>

        {/* Right Column: Direct Info Card */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 0.8)}
          className="lg:col-span-5 flex flex-col gap-5">
          {/* Direct Details Card */}
          <div className="bg-jet/80 p-6 sm:p-8 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
            <h4 className="text-white font-beckman font-bold text-xl mb-4">
              Direct Contact Details
            </h4>
            <p className="text-taupe text-xs sm:text-sm font-poppins mb-6">
              Prefer direct outreach? Reach me directly via email, phone, or LinkedIn.
            </p>

            <div className="space-y-4">
              {/* Email item */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-taupe block">EMAIL</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white text-xs sm:text-sm font-medium hover:text-emerald-400 transition-colors truncate block">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-silver hover:text-white transition-colors shrink-0"
                  title="Copy email address">
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-taupe block">PHONE & WHATSAPP</span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-white text-xs sm:text-sm font-medium hover:text-blue-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-taupe block">LOCATION</span>
                  <span className="text-white text-xs sm:text-sm font-medium">
                    {personalInfo.location} (UTC+5 / Remote Worldwide)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/15 text-white border border-white/10 font-poppins text-xs font-semibold flex items-center justify-center gap-2 transition-all">
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 rounded-xl bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-white border border-[#0077b5]/40 font-poppins text-xs font-semibold flex items-center justify-center gap-2 transition-all">
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
