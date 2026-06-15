'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Portfolio() {
  // 공통 애니메이션 속성 정의
  const animProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-10% 0px' },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-white selection:text-black">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference p-6 md:p-10 flex justify-between items-center text-white">
        <div className="text-xl font-black tracking-tighter cursor-pointer transition-transform hover:scale-110">
          YS
        </div>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-semibold opacity-60">
          <a href="#about" className="hover:opacity-100 transition-opacity">
            About
          </a>
          <a href="#projects" className="hover:opacity-100 transition-opacity">
            Work
          </a>
          <a href="#careers" className="hover:opacity-100 transition-opacity">
            Career
          </a>
        </div>
      </nav>

      {/* --- 1. TITLE SECTION (HERO) --- */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-zinc-500 uppercase tracking-[0.4em] text-xs mb-6 font-medium"
        >
          Yunseok Choi — Full Stack Software Developer
        </motion.div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-[13vw] leading-[0.8] font-black uppercase tracking-tighter text-white"
          >
            IDEAS TO <br /> REALITY.
          </motion.h1>
        </div>
      </section>

      {/* --- 2. ABOUT ME SECTION --- */}
      <section id="about" className="py-40 px-6 md:px-24 border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div {...animProps} className="md:col-span-4">
            <h2 className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold mb-4">
              / 01. About Me
            </h2>
            <div className="h-px w-12 bg-zinc-800 hidden md:block"></div>
          </motion.div>

          <motion.div {...animProps} className="md:col-span-8">
            <h3 className="text-3xl md:text-5xl font-medium leading-tight text-white tracking-tight">
              Full Stack Developer & <br />
              <span className="text-zinc-500">Software Engineering Graduate.</span>
            </h3>

            <div className="mt-10 space-y-6 text-lg text-zinc-400 max-w-2xl leading-relaxed">
              <p>
                As an **Honors graduate in Software Development from Seneca
                Polytechnic**, I am a technically advanced developer with a strong
                passion for building and optimizing high-performance applications.
              </p>
              <p>
                Through my internships at Needlist.org and Kubetools, I have proven my
                ability to deliver results—reducing load times by 3.5x and
                accelerating search speeds by 50%. I focus on ensuring optimal
                functionality through rigorous testing and efficient system
                architecture.
              </p>
              <p className="text-white font-medium italic">
                Currently based in Toronto, **I am fully open to relocation** and
                eager to contribute to innovative teams wherever the next challenge
                leads.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. SKILLS SECTION --- */}
      <section id="skills" className="py-32 px-6 md:px-24 bg-[#0d0d0d]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div
            {...animProps}
            className="md:col-span-4 text-zinc-500 uppercase tracking-widest text-xs font-semibold"
          >
            / 02. Skills
          </motion.div>
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              {
                category: 'Languages',
                stack: 'JavaScript, Python, C++, Java, React-Native',
              },
              {
                category: 'Web Development',
                stack: 'React.js, Next.js, Node.js, Express, FastAPI, HTML/CSS',
              },
              {
                category: 'Database & Cloud',
                stack: 'PostgreSQL, MySQL, MongoDB, Firebase, AWS',
              },
              {
                category: 'Engineering Tools',
                stack: 'Docker, Git, Jira, Postman, Agile(Scrum)',
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...animProps}
                className="group border-b border-zinc-800 pb-4"
              >
                <h4 className="text-zinc-600 uppercase text-[9px] tracking-widest mb-2">
                  {s.category}
                </h4>
                <div className="text-lg text-white group-hover:text-zinc-400 transition-colors duration-300 font-light italic">
                  {s.stack}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. PROJECTS SECTION --- */}
      <section id="projects" className="py-40 px-6 md:px-24">
        <motion.div
          {...animProps}
          className="mb-20 text-zinc-500 uppercase tracking-widest text-xs font-semibold"
        >
          / 03. Selected Projects
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {/* Project 1: Dividend Stock Tracker */}
          <motion.div {...animProps}>
            <a
              href="https://dividendstocktracker-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-6 block cursor-pointer"
            >
              <div className="w-full aspect-[4/3] bg-zinc-900 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 rounded-sm">
                <div className="relative w-full h-full">
                  <Image
                    src="/tracker.png"
                    alt="Dividend Stock Tracker"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center z-10">
                  <span className="text-zinc-400 text-[10px] tracking-[0.4em] uppercase mb-4">
                    Visit the Website ↗
                  </span>
                  <span className="text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20 px-4 py-2">
                    Real-Time Insights
                  </span>
                </div>
              </div>

              <div className="border-b border-zinc-900 pb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter text-white group-hover:text-zinc-400 transition-colors">
                    Dividend Stock Tracker
                  </h3>
                  <span className="text-zinc-600 font-mono text-sm">[2026]</span>
                </div>
                <p className="text-zinc-500 text-[11px] mb-4 font-bold uppercase tracking-wider italic leading-relaxed">
                  Django · DRF · React · Vite · TypeScript · PostgreSQL · Docker ·
                  yfinance
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 text-pretty">
                  A single-user dividend tracker with a Django REST Framework
                  backend and a React SPA (Vite + TypeScript) frontend. Live
                  market data is pulled via yfinance over a curl_cffi browser
                  session, with the whole PostgreSQL stack containerized through
                  Docker Compose and Django admin for power editing.
                </p>
                <div className="flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity font-bold">
                  <span className="text-[9px] border border-zinc-800 px-2 py-1 rounded text-zinc-500 uppercase tracking-tighter">
                    Portfolio Tracking
                  </span>
                  <span className="text-[9px] border border-zinc-800 px-2 py-1 rounded text-zinc-500 uppercase tracking-tighter">
                    Dividend Insights
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Project 2: AI-Powered Financial Hub */}
          <motion.div {...animProps}>
            <a
              href="https://personal-expense-tracker-front-end.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-6 block cursor-pointer"
            >
              <div className="w-full aspect-[4/3] bg-zinc-900 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 rounded-sm">
                <div className="relative w-full h-full">
                  <Image
                    src="/image1.png"
                    alt="Finance Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center z-10">
                  <span className="text-zinc-400 text-[10px] tracking-[0.4em] uppercase mb-4">
                    Visit Dashboard ↗
                  </span>
                  <span className="text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20 px-4 py-2">
                    AI-Powered Insights
                  </span>
                </div>
              </div>

              <div className="border-b border-zinc-900 pb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter text-white group-hover:text-zinc-400 transition-colors">
                    AI-Powered Financial Hub
                  </h3>
                  <span className="text-zinc-600 font-mono text-sm">[2025]</span>
                </div>
                <p className="text-zinc-500 text-[11px] mb-4 font-bold uppercase tracking-wider italic leading-relaxed">
                  React · Node.js · MSA · Gemini API · PostgreSQL · Supabase ·
                  SendGrid
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  A modern financial dashboard built with **Microservices
                  Architecture**. Features an **AI-driven Chatbot** for automated
                  analysis and real-time visualization of spending trends.
                </p>
                <div className="flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity font-bold">
                  <span className="text-[9px] border border-zinc-800 px-2 py-1 rounded text-zinc-500 uppercase tracking-tighter">
                    AI Advisor
                  </span>
                  <span className="text-[9px] border border-zinc-800 px-2 py-1 rounded text-zinc-500 uppercase tracking-tighter">
                    Microservices
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
          {/* Project 3: Book Inventory */}
          <motion.div {...animProps}>
            <a
              href="https://book-inventory-frontend-plum.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-6 block cursor-pointer"
            >
              <div className="w-full aspect-[4/3] bg-zinc-900 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 rounded-sm">
                <div className="relative w-full h-full">
                  <Image
                    src="/image2.png"
                    alt="Book Inventory"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center z-10">
                  <span className="text-zinc-400 text-[10px] tracking-[0.4em] uppercase mb-4">
                    Visit the Website ↗
                  </span>
                  <span className="text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20 px-4 py-2">
                    Full-Stack Solution
                  </span>
                </div>
              </div>

              <div className="border-b border-zinc-900 pb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter text-white group-hover:text-zinc-400 transition-colors">
                    Book Inventory System
                  </h3>
                  <span className="text-zinc-600 font-mono text-sm">[2025]</span>
                </div>
                <p className="text-zinc-500 text-[11px] mb-4 font-bold uppercase tracking-wider italic leading-relaxed">
                  React · Node.js · Express · PostgreSQL · REST API · Sequelize ·
                  Supabase
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 text-pretty">
                  A comprehensive **Full-Stack application** designed for efficient
                  book collection management. It features advanced **filtering by
                  title, author, and genre**, and supports multi-format **data export
                  (CSV/JSON)** for reporting. Built with a robust **Node.js &
                  Express** backend to ensure seamless data flow and high performance.
                </p>
                <div className="flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity font-bold">
                  <span className="text-[9px] border border-zinc-800 px-2 py-1 rounded text-zinc-500 uppercase tracking-tighter">
                    Data Export (CSV/JSON)
                  </span>
                  <span className="text-[9px] border border-zinc-800 px-2 py-1 rounded text-zinc-500 uppercase tracking-tighter">
                    PostgreSQL Management
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

          {[4].map((num) => (
            <motion.div key={num} {...animProps}>
              <div className="group flex flex-col gap-6 opacity-40 hover:opacity-100 transition-opacity">
                <div className="w-full aspect-[4/3] bg-zinc-900 overflow-hidden relative grayscale transition-all duration-700 rounded-sm">
                  <div className="absolute inset-0 bg-zinc-800 flex flex-col items-center justify-center">
                    <span className="text-zinc-600 text-xs tracking-[0.3em] uppercase font-bold">
                      Project {num}
                    </span>
                  </div>
                </div>
                <div className="border-b border-zinc-900 pb-6">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter text-white mb-4">
                    Upcoming Project
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed italic">
                    Ready for your next innovative full-stack solution.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 5. CAREERS SECTION --- */}
      <section id="careers" className="py-40 px-6 md:px-24 bg-[#0d0d0d]">
        <motion.div
          {...animProps}
          className="mb-20 text-zinc-500 uppercase tracking-widest text-xs font-semibold"
        >
          / 04. Career Experience
        </motion.div>
        <div className="flex flex-col gap-px bg-zinc-900">
          {[
            {
              role: 'Full Stack Software Developer Intern',
              company: 'Needlist.org',
              date: '2025.09 - 2026.01',
            },
            {
              role: 'System Development Engineer Intern',
              company: 'Kubetools Technologies Inc',
              date: '2025.01 - 2025.04',
            },
            {
              role: 'Customer Representative',
              company: 'Pantages Hotel',
              date: '2017 - 2018',
            },
          ].map((job, i) => (
            <motion.div
              key={i}
              {...animProps}
              className="bg-[#0a0a0a] py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-zinc-900/40 transition-all px-8 group"
            >
              <div>
                <h4 className="text-2xl font-bold text-white tracking-tight group-hover:text-zinc-400 transition-colors italic">
                  {job.role}
                </h4>
                <p className="text-zinc-500 mt-2 font-medium">{job.company}</p>
              </div>
              <div className="text-zinc-600 font-mono mt-4 md:mt-0 uppercase text-xs tracking-widest border border-zinc-800 px-4 py-2 rounded-full">
                {job.date}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 6. FOOTER SECTION --- */}
      <footer className="py-40 px-6 md:px-24 border-t border-zinc-900 text-center relative overflow-hidden">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.03 }}
          className="text-[15vw] font-black tracking-tighter text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        >
          CONNECT
        </motion.h2>

        <motion.div {...animProps} className="relative z-10">
          <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs mb-10 font-bold italic">
            Available for New Opportunities • Open to Relocation
          </p>
          <a
            href="mailto:yun4495@gmail.com"
            className="text-3xl md:text-7xl font-light text-white hover:text-zinc-500 transition-colors border-b border-zinc-800 pb-2 inline-block tracking-tight"
          >
            yun4495@gmail.com
          </a>
          <div className="mt-16 text-zinc-500 text-sm tracking-widest flex flex-col gap-2 italic font-medium text-white">
            <span>Toronto, Ontario, Canada</span>
          </div>
          <div className="mt-16 flex justify-center gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">
            <a
              href="https://github.com/AndyChoi4495"
              target="_blank"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yunseok-choi-267635296"
              target="_blank"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
        <p className="mt-32 text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-bold">
          © 2026 Yunseok Choi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
