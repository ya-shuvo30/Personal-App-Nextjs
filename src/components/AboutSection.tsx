"use client";

import { motion } from "motion/react";
import { Code2, Lightbulb, Users, Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";

const traits = [
  "Full-Stack Strategist",
  "API Architect",
  "DevOps Advocate",
  "Curriculum Mentor",
  "System Designer",
  "Problem Solver",
];

const features = [
  { title: "Reliable Code", description: "Type-safe React + Django stacks with clean API boundaries and automated testing.", icon: Code2 },
  { title: "Product Velocity", description: "From Figma to production with UX polish, SEO, and measurable business outcomes.", icon: Lightbulb },
  { title: "DevOps Mindset", description: "Docker, Nginx, CI/CD, and cloud deployments that keep releases boring.", icon: Coffee },
  { title: "Knowledge Sharing", description: "Mentorship, curriculum design, and cross-team collaboration across time zones.", icon: Users },
];

export function AboutSection() {
  return (
    <section id="about" className="section-wrapper bg-gray-900/60">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <p className="pill-label text-emerald-300">About Me</p>
            <h2 className="heading-xl text-white">Engineering platforms that scale securely.</h2>
          </div>
          <p className="body-lg text-gray-300">
            I&apos;m a full-stack engineer from Dhaka who ships modern, secure web apps with React, Next.js, Django REST Framework,
            and PostgreSQL. My sweet spot is blending delightful UI with pragmatic API design and database modeling.
          </p>
          <p className="body-lg text-gray-400">
            At Arriva Soft I deliver end-to-end product features, while my past roles at Itransition Group and Thinkland.AI
            strengthened my backend, deployment, and teaching chops. Every engagement includes documentation, observability,
            and knowledge transfer so teams can move faster long after hand-off.
          </p>
          <div className="flex flex-wrap gap-3">
            {traits.map((trait) => (
              <span
                key={trait}
                className="body-sm rounded-full border border-emerald-500/30 bg-black/40 px-4 py-2 text-emerald-200"
              >
                {trait}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Card className="h-full bg-black/60">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="heading-md text-white">{title}</h3>
                <p className="body-base mt-2 text-gray-400">{description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
