import { Briefcase, Code, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Fullstack Developer",
      company: "Tech Company",
      period: "2025 - Present",
      description: "Розробка та підтримка корпоративних веб-додатків",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Code,
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2024 - 2025",
      description: "Створення інтерактивних користувацьких інтерфейсів",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: GraduationCap,
      title: "System Analysys and Data Science",
      company: "University",
      period: "2023 - Present",
      description: "Бакалавр системного аналізу",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-12 px-6 bg-slate-950">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Досвід</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Мій шлях</h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-20">
                <div className={`absolute left-0 w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <exp.icon className="w-8 h-8 text-white" />
                </div>

                <div className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-red-500/30 transition-all">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-sm text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-red-400 font-semibold mb-2">{exp.company}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;