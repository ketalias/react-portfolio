import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Code, Palette, Smartphone, Database, ExternalLink, ChevronRight, Briefcase, GraduationCap, Download, Send } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Palette,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Vue.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "React", level: 55 }
      ]
    },
    {
      title: "Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js / Express", level: 80 },
        { name: "PostgreSQL / MongoDB", level: 85 },
        { name: "REST API", level: 88 },
        { name: "Redis", level: 60 }
      ]
    },
    {
      title: "Mobile & Other",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Flutter", level: 85 },
        { name: "English", level: 79 },
        { name: "CI/CD", level: 88 },
        { name: "Git", level: 95 }
      ]
    }
  ];

  return (
    <section className="py-12 px-6 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Навички</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Мій стек технологій</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-8 bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-red-500/30 transition-all">
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;