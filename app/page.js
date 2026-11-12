"use client";

import { useEffect, useRef, useState } from "react";

const COLORS = {
  bg: "#0A0F1A",
  panel: "#111826",
  panel2: "#151E2D",
  hairline: "#243044",
  text: "#CBD5E1",
  heading: "#F1F5F9",
  muted: "#8A97AC",
  mutedDim: "#57657A",
  accent: "#5EEAD4",
  amber: "#F2A65A",
};

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    company: "Intertrust Technologies",
    role: "Principal Frontend Engineer",
    dates: "2024 — 2026",
    place: "Mumbai (Remote)",
    bullets: [
      "Led frontend architecture for AREONE, a greenfield music distribution & monetization platform — React, TypeScript, Redux Toolkit, React Query.",
      "Directed a distributed team of 6 engineers across 3 time zones: architecture, sprint planning, code review, mentoring.",
      "Cut Nx monorepo CI/CD pipeline time ~50% via better affected-project detection, caching, and parallel execution.",
    ],
    tags: ["React", "TypeScript", "Nx", "Kubernetes"],
  },
  {
    company: "Bluecore",
    role: "Senior Software Engineer",
    dates: "2019 — 2024",
    place: "New Delhi",
    bullets: [
      "Built a Canva-style drag-and-drop Campaign Builder from scratch — owned for 2+ years.",
      "Migrated the core platform to Next.js, improving Core Web Vitals, load times, and SEO.",
      "Shipped an async image-compression platform (Cloud Run + Pub/Sub) — ~90% compression, ~$25–30K/mo in CDN savings.",
      "Introduced Datadog RUM observability for proactive production monitoring.",
    ],
    tags: ["Next.js", "GCP", "Datadog RUM", "Python"],
  },
  {
    company: "Paytm",
    role: "Software Engineer",
    dates: "2018 — 2019",
    place: "New Delhi",
    bullets: [
      "Built a Video KYC platform handling 5,000+ daily verifications over WebRTC.",
      "Migrated merchant apps from Angular to Preact + TypeScript — ~60% smaller bundles.",
    ],
    tags: ["Preact", "WebRTC", "TypeScript"],
  },
  {
    company: "Betaout Software",
    role: "Senior Frontend Developer",
    dates: "2015 — 2018",
    place: "Noida",
    bullets: [
      "Built a drag-and-drop email editor — campaign creation cut from hours to under 10 minutes, adopted by 50+ clients.",
      "Built a reusable AngularJS component library used across the product team.",
    ],
    tags: ["AngularJS", "HTML5", "CSS3"],
  },
];

const SKILLS = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "React Query", "HTML5", "SCSS", "Material UI"] },
  { group: "Architecture", items: ["Core Web Vitals", "Design Systems", "Micro-frontends", "Nx Monorepo", "Webpack"] },
  { group: "Cloud & Infra", items: ["GCP", "Docker", "Cloud Run", "Kubernetes", "Terraform", "Buildkite"] },
  { group: "Observability", items: ["Datadog RUM", "Chronosphere", "Jest", "RTL"] },
];

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2.5" />
      <path d="m3 6.5 9 6 9-6" />
    </svg>
  );
}

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9.98h4v10.02H3V9.98Zm7 0h3.84v1.37h.05c.53-1 1.85-2.06 3.8-2.06 4.07 0 4.82 2.68 4.82 6.17v6.54h-4v-5.8c0-1.38-.03-3.16-1.92-3.16-1.93 0-2.23 1.51-2.23 3.06v5.9h-4V9.98Z" />
    </svg>
  );
}

function IconDownload(props) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        transform: visible ? "translateY(0)" : "translateY(16px)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, opacity 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("about");
  const [loaded, setLoaded] = useState(false);
  const [spot, setSpot] = useState({ x: 50, y: 30 });
  const sectionRefs = useRef({});

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 md:grid md:grid-cols-5 md:gap-12">
        {/* SIDEBAR */}
        <aside className="md:col-span-2 md:sticky md:top-0 md:h-screen md:flex md:flex-col md:justify-center py-16 md:py-0">
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div className="relative w-28 h-28 mb-6">
              <div
                className="photo-ring absolute inset-0 rounded-full"
                style={{ border: `2px solid ${COLORS.accent}` }}
              />
              <img
                src="/photo.jpg"
                alt="Shivam Kumar"
                className="w-28 h-28 rounded-full object-cover relative"
                style={{ border: `3px solid ${COLORS.bg}` }}
              />
            </div>

            <div
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: COLORS.accent, letterSpacing: "0.08em" }}
              className="mb-3"
            >
              FULL STACK SOFTWARE ENGINEER
            </div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                lineHeight: 1.05,
                color: COLORS.heading,
                letterSpacing: "-0.02em",
              }}
            >
              Shivam Kumar
            </h1>
            <p style={{ color: COLORS.muted, fontSize: "15px", lineHeight: 1.6 }} className="mt-4 max-w-sm">
              I lead React &amp; Next.js architecture at scale — 11 years turning ambiguous product
              requirements into frontend systems teams can build on for years.
            </p>

            <nav className="hidden md:flex flex-col gap-1 mt-10">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`navlink ${active === item.id ? "active" : ""}`}
                  style={{ color: active === item.id ? COLORS.heading : COLORS.mutedDim }}
                >
                  <span className="bar" />
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex gap-3 mt-10 flex-wrap" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}>
              <a href="mailto:shivamrajput007@gmail.com" className="btn btn-primary px-4 py-2.5">
                <IconMail /> Email
              </a>
              <a href="https://linkedin.com/in/shivam-kumar-05572475" target="_blank" rel="noreferrer" className="btn btn-secondary px-4 py-2.5">
                <IconLinkedIn /> LinkedIn
              </a>
              <a href="/resume.pdf" download="Shivam-Kumar-Resume.pdf" className="btn btn-secondary px-4 py-2.5">
                <IconDownload /> Resume
              </a>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="md:col-span-3 py-16 md:py-24">
          {/* ABOUT */}
          <section
            id="about"
            ref={(el) => (sectionRefs.current.about = el)}
            className="mb-24 relative rounded-xl p-8 overflow-hidden"
            style={{ border: `1px solid ${COLORS.hairline}`, background: COLORS.panel }}
            onMouseMove={handleMouseMove}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(360px circle at ${spot.x}% ${spot.y}%, rgba(94,234,212,0.07), transparent 60%)`,
              }}
            />
            <div className="relative">
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", color: COLORS.amber, letterSpacing: "0.08em" }} className="mb-3">
                ABOUT
              </div>
              <p style={{ fontSize: "15.5px", lineHeight: 1.75, color: COLORS.text }}>
               Fullstack engineer with 11 years of experience across Intertrust, Bluecore and Paytm, owning products end to end: React and Next.js frontends, Node.js REST microservices and API contracts, GCP infrastructure, the CI pipeline that ships it, and the RUM dashboard that tells us if it actually worked. Recent wins: a 45% LCP improvement from an SSR migration, an 83% cut in CI build time, and $25–30K/month in infra savings from an image-processing platform on Cloud Run and Pub/Sub that I designed myself. On the AI side, I build agentic features with LLM tool calling (most recently GullyScore, where an AI agent answers match questions from live data), automated 300+ partner configuration migrations with AI-assisted scripts, and use Cursor and Claude Code every day. I lead distributed teams the same way I write code: with clear structure and a bias for shipping. Based in Noida and open to roles anywhere in India.
              </p>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" ref={(el) => (sectionRefs.current.experience = el)} className="mb-24">
            <Reveal>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", color: COLORS.amber, letterSpacing: "0.08em" }} className="mb-6">
                EXPERIENCE
              </div>
            </Reveal>
            <div className="flex flex-col gap-3">
              {EXPERIENCE.map((job, i) => (
                <Reveal key={job.company} delay={i * 70}>
                  <div className="exp-row">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: 600, color: COLORS.heading }}>
                        {job.role} · <span style={{ color: COLORS.accent }}>{job.company}</span>
                      </h3>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: COLORS.mutedDim }}>
                        {job.dates}
                      </span>
                    </div>
                    <div style={{ color: COLORS.mutedDim, fontSize: "12px" }} className="mb-3">{job.place}</div>
                    <ul className="space-y-1.5 mb-4">
                      {job.bullets.map((b) => (
                        <li key={b} style={{ color: COLORS.muted, fontSize: "14px", lineHeight: 1.6 }} className="flex gap-2.5">
                          <span style={{ color: COLORS.hairline, flexShrink: 0 }}>—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" ref={(el) => (sectionRefs.current.skills = el)} className="mb-24">
            <Reveal>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", color: COLORS.amber, letterSpacing: "0.08em" }} className="mb-6">
                SKILLS
              </div>
            </Reveal>
            <div className="flex flex-col gap-6">
              {SKILLS.map((s, i) => (
                <Reveal key={s.group} delay={i * 60}>
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10.5px", color: COLORS.mutedDim, letterSpacing: "0.06em" }} className="mb-2">
                      {s.group.toUpperCase()}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {s.items.map((item) => (
                        <span key={item} className="chip">{item}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" ref={(el) => (sectionRefs.current.contact = el)}>
            <Reveal>
              <div
                className="rounded-xl p-8 md:p-10"
                style={{ border: `1px solid ${COLORS.hairline}`, background: COLORS.panel }}
              >
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11.5px", color: COLORS.amber, letterSpacing: "0.08em" }} className="mb-3">
                  CONTACT
                </div>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: COLORS.heading }}>
                  Open to Lead Frontend Engineer roles.
                </h2>
                <p style={{ color: COLORS.muted, fontSize: "14.5px" }} className="mt-3 mb-6 max-w-md">
                  Greater Noida, India · MCA, AKTU (2015)
                </p>
                <div className="flex flex-wrap gap-3" style={{ fontSize: "12.5px" }}>
                  <a href="mailto:shivamrajput007@gmail.com" className="btn btn-primary px-5 py-2.5">
                    <IconMail /> shivamrajput007@gmail.com
                  </a>
                  <a href="tel:+918510809832" className="btn btn-secondary px-5 py-2.5">
                    <IconPhone /> +91 8510809832
                  </a>
                  <a href="https://linkedin.com/in/shivam-kumar-05572475" target="_blank" rel="noreferrer" className="btn btn-secondary px-5 py-2.5">
                    <IconLinkedIn /> LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
            <div
              className="mt-10 pt-6 flex flex-wrap justify-between gap-3"
              style={{ borderTop: `1px solid ${COLORS.hairline}`, fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: COLORS.mutedDim }}
            >
              <span>© {new Date().getFullYear()} Shivam Kumar</span>
              <span>Built with Next.js</span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
