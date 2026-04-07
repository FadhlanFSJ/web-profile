"use client";

import { Chip, Link } from "@heroui/react";
import { Mail, MapPin, ExternalLink, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const PROFILE_IMAGE = "/profile.jpg";

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "Docker", level: 65 },
  { name: "Python", level: 60 },
  { name: "MongoDB", level: 65 },
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2022 - Present",
    achievements: [
      "Building scalable web applications and exploring new technologies",
      "Working with modern tech stacks including React, Node.js, and cloud-native solutions",
    ],
  },
  {
    role: "IoT Developer",
    company: "Personal Projects",
    period: "2021 - 2022",
    achievements: [
      "Developed temperature monitoring systems for chicken coops",
      "Built embedded systems using Arduino and C++",
    ],
  },
];

const projects = [
  {
    title: "brida-form",
    description: "Form application project built with HTML, CSS, and JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/FadhlanFSJ/brida-form",
    stars: 12,
    featured: true,
  },
  {
    title: "Job Seeker",
    description: "Job searching application with modern UI and real-time updates",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/FadhlanFSJ/job-seeker",
    stars: 8,
    featured: true,
  },
  {
    title: "Monitoring Suhu Kandang",
    description: "IoT monitoring and temperature control system for agriculture",
    tech: ["C++", "Arduino", "Sensors"],
    github: "https://github.com/FadhlanFSJ/monitoring-dan-kendali-suhu-kandang-anak-ayam",
    stars: 15,
    featured: true,
  },
  {
    title: "Blog App",
    description: "Full-stack blog application with authentication and CMS features",
    tech: ["JavaScript", "Express", "MongoDB"],
    github: "https://github.com/FadhlanFSJ/blog-app",
    stars: 6,
    featured: false,
  },
];

const social = [
  { name: "GitHub", icon: "🐙", link: "https://github.com/FadhlanFSJ" },
  { name: "LinkedIn", icon: "💼", link: "https://linkedin.com/in/fadhlanfsj" },
  { name: "Instagram", icon: "📸", link: "https://instagram.com/fadhlanfsj" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-lg tracking-tight">fadhlan.dev</span>
          <div className="flex gap-8">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
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

      <main className="pt-20">
        <div className="max-w-5xl mx-auto px-6">
          <section id="hero" className="min-h-[85vh] flex flex-col justify-center py-20">
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden ring-2 ring-white/10">
                    <Image
                      src={PROFILE_IMAGE}
                      alt="Fadhlan Syahran Jungjungan"
                      width={192}
                      height={192}
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-[#09090b]" />
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <p className="text-zinc-500 mb-2 text-sm">Full Stack Developer</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                  Fadhlan Syahran
                </h1>
                <p className="text-xl text-zinc-400 mb-8 max-w-xl">
                  Building bridges between design and code. A guy who love games and coding.
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
                  >
                    View Projects <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>

                <div className="flex gap-6 justify-center lg:justify-start">
                  {social.map((s) => (
                    <a
                      key={s.name}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors"
                      title={s.name}
                    >
                      <span className="text-2xl">{s.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-20 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">About</h2>
              </div>
              <div className="lg:col-span-2 space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  I am a Full Stack Developer with a passion for building modern web applications. 
                  I specialize in React, Node.js, and cloud-native technologies, creating solutions 
                  that are both functional and visually appealing.
                </p>
                <p>
                  When I am not coding, you can find me gaming or exploring new technologies. 
                  I am always eager to learn and take on new challenges.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <MapPin className="w-4 h-4" />
                    <span>Indonesia</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <Mail className="w-4 h-4" />
                    <span>fadhlan@example.com</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="py-20 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Experience</h2>
              </div>
              <div className="lg:col-span-2 space-y-12">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l border-zinc-800">
                    <div className="absolute w-2 h-2 bg-zinc-600 rounded-full -left-[5px] top-2" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                        <p className="text-cyan-400">{exp.company}</p>
                      </div>
                      <Chip className="mt-2 sm:mt-0 bg-zinc-800 text-zinc-300 border-zinc-700" size="sm">
                        {exp.period}
                      </Chip>
                    </div>
                    <ul className="space-y-2 text-zinc-400 text-sm">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-zinc-600 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="skills" className="py-20 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Technical Skills</h2>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-300">{skill.name}</span>
                        <span className="text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="py-20 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Projects</h2>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <a
                      key={project.title}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1 text-zinc-500">
                          <Star className="w-4 h-4" />
                          <span className="text-sm">{project.stars}</span>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-zinc-500 group-hover:text-white transition-colors">
                        <span>View on GitHub</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Contact</h2>
              </div>
              <div className="lg:col-span-2">
                <p className="text-zinc-400 mb-8 max-w-lg">
                  Open to opportunities, collaborations, or just a friendly chat about tech. 
                  Feel free to reach out through any of these channels.
                </p>
                <div className="flex flex-wrap gap-4">
                  {social.map((s) => (
                    <a
                      key={s.name}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors"
                    >
                      <span>{s.icon}</span>
                      <span>{s.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center text-zinc-500 text-sm">
          <p>Built with Next.js, Tailwind CSS, and HeroUI</p>
        </div>
      </footer>
    </div>
  );
}
