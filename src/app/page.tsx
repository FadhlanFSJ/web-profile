import Image from "next/image";

const PROFILE_IMAGE = "/profile.jpg";

const skills = [
  { name: "Fullstack Developer", icon: "💻", color: "from-blue-500 to-blue-600" },
  { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600" },
  { name: "React", icon: "⚛️", color: "from-cyan-500 to-cyan-600" },
  { name: "HeroUI", icon: "🎨", color: "from-pink-500 to-pink-600" },
  { name: "Dokploy", icon: "📦", color: "from-orange-500 to-orange-600" },
  { name: "JavaScript", icon: "📜", color: "from-yellow-500 to-yellow-600" },
  { name: "Python", icon: "🐍", color: "from-emerald-500 to-emerald-600" },
  { name: "HTML/CSS", icon: "🌐", color: "from-red-500 to-red-600" },
  { name: "C++", icon: "⚙️", color: "from-blue-600 to-blue-700" },
  { name: "PostgreSQL", icon: "🐘", color: "from-indigo-500 to-indigo-600" },
  { name: "Git", icon: "📂", color: "from-orange-600 to-orange-700" },
  { name: "Docker", icon: "🐳", color: "from-sky-500 to-sky-600" },
];

const projects = [
  {
    title: "brida-form",
    description: "Form application project",
    tech: ["HTML"],
    github: "https://github.com/FadhlanFSJ/brida-form",
    size: "small",
  },
  {
    title: "dompis-bges",
    description: "Web project with MIT license",
    tech: ["HTML"],
    github: "https://github.com/FadhlanFSJ/dompis-bges",
    size: "small",
  },
  {
    title: "Monitoring Suhu Kandang",
    description: "IoT monitoring and temperature control system for chicken coop",
    tech: ["C++", "Arduino"],
    github: "https://github.com/FadhlanFSJ/monitoring-dan-kendali-suhu-kandang-anak-ayam",
    size: "large",
  },
  {
    title: "Job Seeker",
    description: "Job searching application",
    tech: ["JavaScript"],
    github: "https://github.com/FadhlanFSJ/job-seeker",
    size: "medium",
  },
  {
    title: "Jobseeker Flask",
    description: "Job searching application built with Flask",
    tech: ["Python", "Flask"],
    github: "https://github.com/FadhlanFSJ/jobseeker-flask",
    size: "medium",
  },
  {
    title: "Blog App",
    description: "Final project for Web Framework Programming course",
    tech: ["JavaScript"],
    github: "https://github.com/FadhlanFSJ/blog-app",
    size: "medium",
  },
];

const stats = [
  { label: "Repositories", value: "35", color: "text-blue-400" },
  { label: "Followers", value: "13", color: "text-pink-400" },
  { label: "Following", value: "24", color: "text-cyan-400" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-mono text-sm bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
            fadhlan.dev
          </span>
          <div className="flex gap-8 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          <section id="about" className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              <div className="lg:col-span-8 bg-gradient-to-br from-neutral-900 to-neutral-900/50 rounded-3xl p-8 border border-white/5 relative overflow-hidden group hover:border-blue-500/20 transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-500" />
                
                <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden ring-4 ring-blue-500/20 shadow-2xl shadow-blue-500/10 flex-shrink-0">
                    <Image
                      src={PROFILE_IMAGE}
                      alt="Fadhlan Syahran Jungjungan"
                      width={160}
                      height={160}
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-blue-400 font-mono text-sm mb-2">Hello, I am</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                      Fadhlan Syahran Jungjungan
                    </h1>
                    <p className="text-xl text-zinc-400 mb-4">S.Kom • Full Stack Developer</p>
                    <p className="text-zinc-500 max-w-lg">
                      A Guy who love games and coding. Building scalable web applications and exploring new technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="bg-neutral-900 rounded-3xl p-6 border border-white/5 hover:border-cyan-500/20 transition-all duration-500">
                  <h3 className="text-sm font-semibold text-zinc-400 mb-4">Quick Stats</h3>
                  <div className="flex justify-between">
                    {stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                        <p className="text-xs text-zinc-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-neutral-900 rounded-3xl p-6 border border-white/5 hover:border-pink-500/20 transition-all duration-500 flex-1">
                  <h3 className="text-sm font-semibold text-zinc-400 mb-4">Connect</h3>
                  <div className="flex flex-col gap-3">
                    <a href="https://github.com/FadhlanFSJ" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                      <span className="text-lg">🐙</span>
                      <span>GitHub</span>
                    </a>
                    <a href="https://instagram.com/fadhlanfsj" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                      <span className="text-lg">📸</span>
                      <span>Instagram</span>
                    </a>
                    <a href="https://linkedin.com/in/fadhlanfsj" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                      <span className="text-lg">💼</span>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`bg-gradient-to-br ${skill.color} p-px rounded-2xl hover:scale-105 transition-transform duration-300`}
                >
                  <div className="bg-neutral-900 rounded-2xl p-4 h-full flex flex-col items-center justify-center gap-2 text-center">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-xs font-medium text-zinc-300">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-neutral-900 rounded-3xl p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 ${
                    project.size === 'large' ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                      ↗
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 bg-white/5 rounded-full text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
              
              <a
                href="https://github.com/FadhlanFSJ"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-neutral-900/50 rounded-3xl p-6 border border-dashed border-white/10 flex items-center justify-center gap-3 text-zinc-500 hover:text-white hover:border-white/20 transition-all"
              >
                <span>View all projects</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </section>

          <section id="contact" className="mb-16">
            <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-3xl p-8 border border-blue-500/20 text-center">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Let&apos;s Work Together
              </h2>
              <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                Open to opportunities, collaborations, or just a friendly chat about tech.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://github.com/FadhlanFSJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-neutral-900 font-medium rounded-full hover:bg-zinc-200 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://instagram.com/fadhlanfsj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com/in/fadhlanfsj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center text-zinc-500 text-sm">
          <p>Built with Next.js, Tailwind CSS, and ☕</p>
        </div>
      </footer>
    </div>
  );
}
