"use client";

import { motion } from "motion/react";

const categories = [
  {
    title: "Frontend Platforms",
    skills: [
      { label: "React / Next.js", value: 94, gradient: "from-emerald-400 to-emerald-600" },
      { label: "TypeScript", value: 90, gradient: "from-blue-400 to-emerald-400" },
      { label: "Tailwind CSS", value: 88, gradient: "from-purple-400 to-pink-500" },
      { label: "Zustand & UI State", value: 82, gradient: "from-sky-400 to-indigo-500" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { label: "Django REST Framework", value: 93, gradient: "from-emerald-400 to-blue-500" },
      { label: "FastAPI", value: 85, gradient: "from-blue-500 to-cyan-400" },
      { label: "Node.js", value: 78, gradient: "from-amber-400 to-orange-500" },
      { label: "JWT/Auth & Role Logic", value: 80, gradient: "from-pink-400 to-purple-500" },
    ],
  },
  {
    title: "DevOps & Data",
    skills: [
      { label: "PostgreSQL Schema Design", value: 90, gradient: "from-blue-500 to-purple-500" },
      { label: "Docker & Compose", value: 85, gradient: "from-blue-500 to-cyan-400" },
      { label: "Redis & Celery", value: 82, gradient: "from-emerald-500 to-green-500" },
      { label: "AWS / Azure Deployments", value: 75, gradient: "from-amber-400 to-yellow-500" },
    ],
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Zustand",
  "Python",
  "Django REST",
  "FastAPI",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Celery",
  "Docker",
  "Nginx",
  "Git/GitHub",
  "CI/CD",
  "AWS",
  "Azure",
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-wrapper bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="pill-label text-emerald-300">Skills</p>
          <h2 className="heading-xl text-white">Production-ready skills across the stack.</h2>
          <p className="body-lg text-gray-400">
            From pixel-perfect dashboards to hardened APIs and Dockerized deployments, I tailor each stack to the product goals, performance targets, and team capacity.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-white/10 bg-linear-to-b from-white/5 to-transparent p-6"
            >
              <h3 className="heading-md text-white">{category.title}</h3>
              <div className="mt-6 flex flex-col gap-5">
                {category.skills.map((skill) => (
                  <div key={skill.label}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="body-base text-gray-300">{skill.label}</span>
                      <span className="body-sm text-emerald-300">{skill.value}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10">
                      <motion.div
                        className={`h-3 rounded-full bg-linear-to-r ${skill.gradient} shadow-[0_10px_30px_rgba(16,185,129,0.35)]`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="body-base rounded-full border border-white/10 px-4 py-2 text-gray-300 transition hover:border-emerald-400/60 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
