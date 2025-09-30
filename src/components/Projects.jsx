import { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "AZS Platform",
            description: "Інформаційна платформа для мережі АЗС з адмінпанеллю",
            tags: ["Vue.js", "Node.js", "Firebase", "Docker"],
            color: "from-blue-500/20 to-cyan-500/20",
            link: "https://toptar.ua/"
        },
        {
            id: 2,
            title: "Pansionary website",
            description: "Вебсайт для бронювання номерів у пансіонаті",
            tags: ["Vue.js", "Express", "Tailwind"],
            color: "from-purple-500/20 to-pink-500/20",
            link: "https://retirement-test.netlify.app/home"
        }
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Портфоліо</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Останні проекти</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-red-500/30 transition-all duration-500 cursor-pointer"
                            onMouseEnter={() => setActiveProject(project.id)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            <div className="aspect-video overflow-hidden">
                                <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center transition-transform duration-500 ${activeProject === project.id ? 'scale-110' : 'scale-100'}`}>
                                    <div className="text-white/50 text-center">
                                        <Code className="w-16 h-16 mx-auto mb-2" />
                                        <p className="text-sm">Project Preview</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-sm font-semibold transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Переглянути
                                    </a>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;