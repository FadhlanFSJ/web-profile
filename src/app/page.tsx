"use client";

import {
  Chip,
  Link,
} from "@heroui/react";
import {
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  Star,
} from "lucide-react";
import NextLink from "next/link";
import Image from "next/image";

const PROFILE_IMAGE = "/profile.jpg";

const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2022 - Present",
    description: "Building scalable web applications and exploring new technologies",
  },
  {
    role: "IoT Developer",
    company: "Personal Projects",
    period: "2021 - 2022",
    description: "Developed temperature monitoring systems for chicken coops using Arduino and C++",
  },
];

const projects = [
  {
    title: "brida-form",
    description: "Form application project",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/FadhlanFSJ/brida-form",
    stars: 12,
  },
  {
    title: "Job Seeker",
    description: "Job searching application with modern UI",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/FadhlanFSJ/job-seeker",
    stars: 8,
  },
  {
    title: "Monitoring Suhu Kandang",
    description: "IoT monitoring and temperature control system",
    tech: ["C++", "Arduino", "Sensors"],
    github: "https://github.com/FadhlanFSJ/monitoring-dan-kendali-suhu-kandang-anak-ayam",
    stars: 15,
  },
  {
    title: "Blog App",
    description: "Final project for Web Framework Programming course",
    tech: ["JavaScript", "Express", "MongoDB"],
    github: "https://github.com/FadhlanFSJ/blog-app",
    stars: 6,
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            fadhlan.dev
          </span>
          <div className="flex gap-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <section id="hero" className="min-h-[80vh] flex items-center justify-center">
            <div className="text-center">
              <div className="mb-8 relative inline-block">
                <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-cyan-500/30 shadow-2xl shadow-cyan-500/20 mx-auto">
                  <Image
                    src={PROFILE_IMAGE}
                    alt="Fadhlan Syahran Jungjungan"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-neutral-950" />
              </div>
              
              <Chip className="mb-4 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                Available for Work
              </Chip>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  Fadhlan Syahran
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-zinc-400 mb-6">
                Full Stack Developer
              </h2>
              <p className="text-zinc-500 max-w-md mx-auto mb-8">
                A Guy who love games and coding. Building scalable web applications and exploring new technologies.
              </p>
              
              <div className="flex gap-4 justify-center">
                <NextLink href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors">
                  View Projects <ChevronRight className="w-4 h-4" />
                </NextLink>
                <NextLink href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-600 hover:bg-zinc-800 text-white font-medium rounded-lg transition-colors">
                  Contact Me
                </NextLink>
              </div>

              <div className="flex gap-6 justify-center mt-12">
                <a
                  href="https://github.com/FadhlanFSJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  title="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/fadhlanfsj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  title="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/fadhlanfsj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  title="Instagram"
                >
                  <span className="text-xl">📸</span>
                </a>
              </div>
            </div>
          </section>

          <div className="h-px bg-white/5" />

          <section id="about" className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                <div className="space-y-4 text-zinc-400">
                  <p>
                    I am a Full Stack Developer with a passion for building
                    modern web applications. I specialize in React, Node.js, and
                    cloud-native technologies.
                  </p>
                  <p>
                    With experience in both frontend and backend development,
                    I enjoy creating complete solutions that are not only
                    functional but also user-friendly and visually appealing.
                  </p>
                  <p>
                    When I am not coding, you can find me gaming or exploring
                    new technologies. I am always eager to learn and take on
                    new challenges.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">Indonesia</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">fadhlan@example.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Quick Stats
                  </span>
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-neutral-900 border border-white/5 rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-cyan-400">35</p>
                    <p className="text-sm text-zinc-500">Repositories</p>
                  </div>
                  <div className="bg-neutral-900 border border-white/5 rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-pink-400">13</p>
                    <p className="text-sm text-zinc-500">Followers</p>
                  </div>
                  <div className="bg-neutral-900 border border-white/5 rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-blue-400">24</p>
                    <p className="text-sm text-zinc-500">Following</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-white/5" />

          <section id="skills" className="py-16">
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {["JavaScript", "TypeScript", "Python", "C++", "HTML/CSS", "SQL", "React", "Next.js", "Node.js", "Express", "Flask", "Tailwind CSS", "Git", "Docker", "PostgreSQL", "MongoDB", "Vercel", "Dokploy"].map((skill) => (
                <div key={skill} className="bg-neutral-900 border border-white/5 rounded-xl p-4 text-center hover:border-cyan-500/30 transition-colors">
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px bg-white/5" />

          <section id="experience" className="py-16">
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-neutral-900 border border-white/5 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-cyan-400">{exp.company}</p>
                    </div>
                    <Chip className="mt-2 md:mt-0 bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {exp.period}
                    </Chip>
                  </div>
                  <p className="text-zinc-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px bg-white/5" />

          <section id="projects" className="py-16">
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-neutral-900 border border-white/5 rounded-xl p-6 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <div className="flex items-center gap-1 text-zinc-500">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                  </div>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Chip key={tech} size="sm" className="bg-white/5 text-zinc-300">
                        {tech}
                      </Chip>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      View on GitHub <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px bg-white/5" />

          <section id="contact" className="py-16">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Let&apos;s Work Together
                </span>
              </h2>
              <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                Open to opportunities, collaborations, or just a friendly chat about tech.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://github.com/FadhlanFSJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors"
                >
                  🐙 GitHub
                </a>
                <a
                  href="https://instagram.com/fadhlanfsj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors"
                >
                  📸 Instagram
                </a>
                <a
                  href="https://linkedin.com/in/fadhlanfsj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors"
                >
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center text-zinc-500 text-sm">
          <p>Built with Next.js, Tailwind CSS, and HeroUI</p>
        </div>
      </footer>
    </div>
  );
}
