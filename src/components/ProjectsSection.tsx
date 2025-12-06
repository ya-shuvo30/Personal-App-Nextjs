"use client";

import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Card } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live?: string;
  repo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "BrightLife Membership Platform",
    description:
      "Full-stack health membership ecosystem with smart eligibility, PDF policy packs, JWT auth, and Celery-powered renewals that serve 20K+ Bangladeshi members.",
    tech: ["Next.js", "Django REST", "PostgreSQL", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
    live: "https://yeasindev.me/work/brightlife",
    repo: "https://github.com/ya-shuvo30/brightlife-membership",
    featured: true,
  },
  {
    title: "Arriva Service Hub",
    description:
      "Multi-tenant feature suite for Arriva Soft with React/Next.js experiences, Django + Node micro services, and CI/CD pipelines that cut release cycles from weeks to days.",
    tech: ["Next.js", "Node.js", "Django", "AWS", "CI/CD"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    live: "https://yeasindev.me/work/arriva-service-hub",
    featured: true,
  },
  {
    title: "Itransition Integration Layer",
    description:
      "Reusable Django ORM modules and FastAPI services with Azure deployments powering invoicing, billing, and access control across internal tools.",
    tech: ["Django REST", "FastAPI", "Azure", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    live: "https://yeasindev.me/work/itransition",
  },
  {
    title: "Thinkland Learning Lab",
    description:
      "Remote-first curriculum platform featuring live coding lessons, student analytics, and reusable lesson blocks for 200+ learners.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    live: "https://yeasindev.me/work/thinkland",
  },
  {
    title: "Deployment Automation Toolkit",
    description:
      "Docker Compose, Nginx, and GitHub Actions templates that standardize staging + production rollouts with zero-downtime deploys.",
    tech: ["Docker", "Nginx", "GitHub Actions", "AWS"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    repo: "https://github.com/ya-shuvo30/deployment-automation-toolkit",
  },
  {
    title: "Health Insights Dashboard",
    description:
      "Analytics workspace with Next.js, Zustand, and server-side search to visualize member activity, churn risk, and plan usage dashboards for CX teams.",
    tech: ["Next.js", "Zustand", "PostgreSQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    live: "https://yeasindev.me/work/health-insights",
  },
];

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-wrapper bg-gray-900/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="pill-label text-emerald-300">Projects</p>
          <h2 className="heading-xl text-white">Results-focused case studies.</h2>
          <p className="body-lg text-gray-400">
            Real-world solutions for health, education, and enterprise teams—each blending delightful UX with hardened APIs, DevOps, and observability.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} layout="featured" />
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {others.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              layout="grid"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  layout,
}: {
  project: Project;
  index: number;
  layout: "featured" | "grid";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <Card className="group flex h-full flex-col overflow-hidden border-white/5 bg-black/60 p-0">
        <div className="relative h-60 w-full">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
            {project.repo && (
              <motion.a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="body-base flex items-center gap-2 rounded-2xl border border-white/20 bg-black/60 px-4 py-2 text-white"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-4 w-4" /> Code
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="body-base flex items-center gap-2 rounded-2xl border border-emerald-400/50 bg-emerald-500/20 px-4 py-2 text-emerald-200"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="h-4 w-4" /> Live
              </motion.a>
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <p className="body-sm text-emerald-300">{layout === "featured" ? "Featured" : "Case Study"}</p>
            <h3 className="heading-lg text-white">{project.title}</h3>
          </div>
          <p className="body-base text-gray-400">{project.description}</p>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={`${project.title}-${tech}`}
                className="body-sm rounded-full border border-white/10 px-3 py-1 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
