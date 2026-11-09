'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// 프로젝트 카드 데이터 (순서 = 화면 표시 순서)
const projects = [
  {
    title: 'jobHunter',
    year: '2026',
    href: 'https://andychoi4495.github.io/jobHunter/',
    image: '/jobhunter.png',
    alt: 'jobHunter public job board',
    cta: 'Visit the Job Board',
    tech: ['Python', 'GitHub Actions', 'Notion API', 'Discord Webhooks', 'GitHub Pages', 'pytest'],
    description:
      'An automated job-search pipeline that collects ~6,000 postings per run from 4 sources, filters and deduplicates them down to ~650 relevant Canadian developer roles, and syncs new ones to Notion with Discord alerts. Publishes a live job board on GitHub Pages, with private application data kept out by design.',
    tags: ['Scheduled Automation', 'Live Job Board'],
  },
  {
    title: 'Dividend Stock Tracker',
    year: '2026',
    href: 'https://dividendstocktracker-three.vercel.app/',
    image: '/tracker.png',
    alt: 'Dividend Stock Tracker',
    cta: 'Visit the Website',
    tech: ['Django', 'DRF', 'React', 'Vite', 'TypeScript', 'PostgreSQL', 'Docker', 'yfinance'],
    description:
      'A single-user dividend tracker with a Django REST Framework backend and a React SPA (Vite + TypeScript) frontend. Live market data is pulled via yfinance over a curl_cffi browser session, with the whole PostgreSQL stack containerized through Docker Compose and Django admin for power editing.',
    tags: ['Portfolio Tracking', 'Dividend Insights'],
  },
  {
    title: 'AI-Powered Financial Hub',
    year: '2025',
    href: 'https://personal-expense-tracker-front-end.vercel.app/',
    image: '/image1.png',
    alt: 'Finance Dashboard',
    cta: 'Visit Dashboard',
    tech: ['React', 'Node.js', 'MSA', 'Gemini API', 'PostgreSQL', 'Supabase', 'SendGrid'],
    description:
      'A modern financial dashboard built with Microservices Architecture. Features an AI-driven Chatbot for automated analysis and real-time visualization of spending trends.',
    tags: ['AI Advisor', 'Microservices'],
  },
  {
    title: 'Book Inventory System',
    year: '2025',
    href: 'https://book-inventory-frontend-plum.vercel.app',
    image: '/image2.png',
    alt: 'Book Inventory',
    cta: 'Visit the Website',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST API', 'Sequelize', 'Supabase'],
    description:
      'A comprehensive Full-Stack application designed for efficient book collection management. It features advanced filtering by title, author, and genre, and supports multi-format data export (CSV/JSON) for reporting. Built with a robust Node.js & Express backend to ensure seamless data flow and high performance.',
    tags: ['Data Export (CSV/JSON)', 'PostgreSQL Management'],
  },
];

const skills = [
  { category: 'Languages', stack: ['JavaScript', 'Python', 'C++', 'Java', 'React-Native'] },
  {
    category: 'Web Development',
    stack: ['React.js', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'HTML/CSS'],
  },
  { category: 'Database & Cloud', stack: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'AWS'] },
  { category: 'Engineering Tools', stack: ['Docker', 'Git', 'Jira', 'Postman', 'Agile(Scrum)'] },
];

const jobs = [
  { role: 'Full Stack Software Developer Intern', company: 'Needlist.org', date: '2025.09 - 2026.01' },
  { role: 'System Development Engineer Intern', company: 'Kubetools Technologies Inc', date: '2025.01 - 2025.04' },
  { role: 'Customer Representative', company: 'Pantages Hotel', date: '2017 - 2018' },
];

// 섹션 제목: 번호는 포인트 색상
function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
      <span className="text-accent">{num}</span>
      <span className="h-px w-8 bg-zinc-700" />
      <span>{title}</span>
    </div>
  );
}

export default function Portfolio() {
  // 공통 애니메이션 속성 정의
  const animProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-10% 0px' },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-accent selection:text-black">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/70 backdrop-blur-md px-6 md:px-10 py-5 flex justify-between items-center text-white">
        <a href="#" className="text-xl font-black tracking-tighter">
          YS<span className="text-accent">.</span>
        </a>
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.25em] font-semibold text-zinc-400">
          <a href="#about" className="hover:text-accent transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-accent transition-colors">
            Work
          </a>
          <a href="#careers" className="hover:text-accent transition-colors">
            Career
          </a>
        </div>
      </nav>

      {/* --- 1. TITLE SECTION (HERO) --- */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden">
        {/* soft accent glow */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-orange-900/20 blur-[140px]" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative flex items-center gap-3 text-zinc-300 uppercase tracking-[0.35em] text-xs mb-8 font-medium"
        >
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_#f97316]" />
          Yunseok Choi — Full Stack Software Developer
        </motion.div>
        <div className="relative overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-[13vw] leading-[0.8] font-black uppercase tracking-tighter text-white"
          >
            IDEAS TO <br /> REALITY<span className="text-accent">.</span>
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative mt-12 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-black transition-all hover:bg-accent-soft hover:shadow-[0_0_30px_rgba(249,115,22,0.45)]"
          >
            View work →
          </a>
          <a
            href="mailto:yun4495@gmail.com"
            className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </motion.div>
      </section>

      {/* --- 2. ABOUT ME SECTION --- */}
      <section id="about" className="py-32 md:py-40 px-6 md:px-24 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div {...animProps} className="md:col-span-4">
            <SectionLabel num="01" title="About Me" />
          </motion.div>

          <motion.div {...animProps} className="md:col-span-8">
            <h3 className="text-3xl md:text-5xl font-semibold leading-tight text-white tracking-tight">
              Full Stack Developer & <br />
              <span className="text-zinc-400">Master’s Student at Ontario Tech University.</span>
            </h3>

            <div className="mt-10 space-y-6 text-lg text-zinc-300 max-w-2xl leading-relaxed">
              <p>
                Software Developer and current Master&apos;s student at Ontario Tech University,
                holding an Honors degree in Software Development from Seneca Polytechnic.
                I focus on developing clean, efficient code and optimizing distributed, high-performance software systems.
              </p>
              <p>
                Through my internships at Needlist.org and Kubetools, I have proven my
                ability to deliver results—reducing load times by{' '}
                <strong className="text-white">3.5x</strong> and accelerating search speeds by{' '}
                <strong className="text-white">50%</strong>. I focus on ensuring optimal
                functionality through rigorous testing and efficient system
                architecture.
              </p>
              <p className="text-white font-medium border-l-2 border-accent pl-5">
                Currently based in Toronto,{' '}
                <strong className="text-accent">I am fully open to relocation</strong> and
                eager to contribute to innovative teams wherever the next challenge
                leads.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. SKILLS SECTION --- */}
      <section id="skills" className="py-28 md:py-32 px-6 md:px-24 bg-[#0d0d0d]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div {...animProps} className="md:col-span-4">
            <SectionLabel num="02" title="Skills" />
          </motion.div>
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {skills.map((s) => (
              <motion.div key={s.category} {...animProps}>
                <h4 className="text-zinc-400 uppercase text-[11px] font-semibold tracking-[0.2em] mb-4">
                  {s.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {s.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-200 transition-colors hover:border-accent/60 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. PROJECTS SECTION --- */}
      <section id="projects" className="py-32 md:py-40 px-6 md:px-24">
        <motion.div {...animProps} className="mb-16">
          <SectionLabel num="03" title="Selected Projects" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((p) => (
            <motion.div key={p.title} {...animProps}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_60px_-20px_rgba(249,115,22,0.35)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                    {p.cta} ↗
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-accent">
                      {p.title}
                      <span className="ml-2 inline-block text-zinc-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
                        ↗
                      </span>
                    </h3>
                    <span className="font-mono text-sm text-zinc-500">{p.year}</span>
                  </div>
                  <p className="mb-5 text-[15px] leading-relaxed text-zinc-300 text-pretty">
                    {p.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent-soft"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}

          <motion.div {...animProps}>
            <div className="flex h-full min-h-[18rem] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 p-8 text-center">
              <span className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
                Project {projects.length + 1}
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white">Upcoming Project</h3>
              <p className="mt-3 text-sm text-zinc-400">
                Ready for your next innovative full-stack solution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 5. CAREERS SECTION --- */}
      <section id="careers" className="py-32 md:py-40 px-6 md:px-24 bg-[#0d0d0d]">
        <motion.div {...animProps} className="mb-16">
          <SectionLabel num="04" title="Career Experience" />
        </motion.div>
        <div className="relative border-l border-white/10 ml-2">
          {jobs.map((job) => (
            <motion.div key={job.role} {...animProps} className="group relative pl-10 pb-12 last:pb-0">
              <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-[#0d0d0d] transition-colors group-hover:bg-accent" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {job.role}
                  </h4>
                  <p className="text-zinc-400 mt-1 font-medium">{job.company}</p>
                </div>
                <div className="self-start md:self-auto font-mono text-xs uppercase tracking-widest text-zinc-300 border border-white/10 px-4 py-2 rounded-full">
                  {job.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 6. FOOTER SECTION --- */}
      <footer className="py-32 md:py-40 px-6 md:px-24 border-t border-white/5 text-center relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.04 }}
          className="text-[15vw] font-black tracking-tighter text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        >
          CONNECT
        </motion.h2>

        <motion.div {...animProps} className="relative z-10">
          <p className="text-zinc-300 uppercase tracking-[0.35em] text-xs mb-10 font-semibold">
            Available for New Opportunities <span className="text-accent">•</span> Open to Relocation
          </p>
          <a
            href="mailto:yun4495@gmail.com"
            className="text-3xl md:text-7xl font-light text-white hover:text-accent transition-colors border-b border-white/15 hover:border-accent pb-2 inline-block tracking-tight"
          >
            yun4495@gmail.com
          </a>
          <div className="mt-12 text-zinc-400 text-sm tracking-widest font-medium">
            Toronto, Ontario, Canada
          </div>
          <div className="mt-12 flex justify-center gap-4 text-xs uppercase tracking-[0.25em] font-semibold">
            <a
              href="https://github.com/AndyChoi4495"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-zinc-200 hover:border-accent hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yunseok-choi-267635296"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-zinc-200 hover:border-accent hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
        <p className="relative mt-24 text-[11px] text-zinc-500 uppercase tracking-[0.4em] font-semibold">
          © 2026 Yunseok Choi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
