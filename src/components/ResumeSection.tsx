"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { BadgeCheck, BookMarked, Medal } from "lucide-react";

const experience = [
  {
    role: "Software Engineer Level I",
    company: "Arriva Soft",
    period: "Apr 2025 – Present",
    impact: [
      "Own React/Next.js + Django features end-to-end with measurable release metrics.",
      "Design modular API slices, PostgreSQL schemas, and CI/CD guardrails for production stability.",
      "Partner with designers and PMs to ship pixel-perfect UI plus accessibility and SEO fixes.",
    ],
    stack: ["Next.js", "TypeScript", "Django REST", "PostgreSQL", "AWS"],
  },
  {
    role: "Back-End Developer",
    company: "Itransition Group",
    period: "Jan 2025 – Apr 2025",
    impact: [
      "Refined reusable Django service layers and GraphQL gateways for enterprise clients.",
      "Automated Azure deployments with GitHub Actions and containerized staging environments.",
      "Mentored junior engineers on API design reviews and load-testing playbooks.",
    ],
    stack: ["Django", "FastAPI", "Azure", "Redis", "Celery"],
  },
  {
    role: "Coding Instructor (Remote)",
    company: "Thinkland.AI",
    period: "Apr 2024 – Dec 2024",
    impact: [
      "Developed project-based curriculum for Scratch, Python, and foundational ML.",
      "Ran remote cohorts across time zones with weekly demos and feedback loops.",
      "Helped 200+ students launch their first apps with version control best practices.",
    ],
    stack: ["Python", "Scratch", "Curriculum Design"],
  },
];

const education = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    org: "World University of Bangladesh",
    period: "2020 – 2023",
  },
  {
    title: "HSC (Science)",
    org: "Safiuddin Sarker Academy & College",
    period: "2017 – 2019",
  },
];

const credentials = [
  "Google Fundamentals of Digital Marketing",
  "Python Course: Basic to Advanced",
  "EF SET English Certificate (C1)",
  "HackerRank Problem Solving (Intermediate)",
  "Top 5, Hult Prize 2021 Dhaka Summit",
];

export function ResumeSection() {
  return (
    <section id="resume" className="section-wrapper bg-gray-900/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <p className="pill-label text-sky-300">Live Resume</p>
          <h2 className="heading-xl text-white">Experience snapshot at a glance.</h2>
          <p className="body-lg text-gray-300">
            Clients can review my latest professional history, education, and credentials without downloading
            a PDF. Every highlight mirrors the long-form resume I share during proposals.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            {experience.map((item) => (
              <Card key={item.role} className="bg-black/70 p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="heading-lg text-white">{item.role}</h3>
                    <p className="body-base text-gray-400">
                      {item.company} · {item.period}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide text-sky-200">
                    {item.stack.slice(0, 2).join(" · ")}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {item.impact.map((line) => (
                    <li key={line} className="body-base flex items-start gap-2">
                      <span className="mt-1 text-sky-400">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={`${item.role}-${tech}`}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="bg-black/70 p-6">
              <div className="flex items-center gap-2 text-white">
                <BadgeCheck className="h-5 w-5 text-sky-300" />
                <p className="pill-label text-sky-200">Education</p>
              </div>
              <div className="mt-4 space-y-4">
                {education.map((entry) => (
                  <div key={entry.title}>
                    <p className="heading-md text-white">{entry.title}</p>
                    <p className="body-base text-gray-400">{entry.org}</p>
                    <p className="body-sm text-gray-500">{entry.period}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-black/70 p-6">
              <div className="flex items-center gap-2 text-white">
                <BookMarked className="h-5 w-5 text-emerald-300" />
                <p className="pill-label text-emerald-200">Certifications</p>
              </div>
              <ul className="mt-4 space-y-3 text-gray-300">
                {credentials.map((cred) => (
                  <li key={cred} className="body-base flex items-start gap-2">
                    <span className="mt-1 text-emerald-300">◆</span>
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-black/70 p-6">
              <div className="flex items-center gap-2 text-white">
                <Medal className="h-5 w-5 text-amber-300" />
                <p className="pill-label text-amber-200">Why it matters</p>
              </div>
              <p className="body-base mt-3 text-gray-300">
                This section mirrors the live resume my clients review during project kickoff. No downloads or
                pop-ups—just transparent expertise on the page.
              </p>
              <p className="body-sm mt-4 text-gray-400">
                Need the printable version? Ping me through the contact form and I will send the PDF with tailored project
                notes.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
