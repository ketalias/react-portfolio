const About = () => {
  const stats = [
    { value: "1.5+", label: "Роки досвіду" },
    { value: "10+", label: "Завершених проектів" },
    { value: "3", label: "Задоволених відгуків" },
    { value: "100%", label: "Успішність" }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Про мене</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Хто я такий</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Я пристрасний fullstack розробник з досвідом створення сучасних веб-додатків. 
              Спеціалізуюсь на Vue.js, Node.js та інших технологіях.
            </p>
            <p className="text-lg leading-relaxed">
              Мій підхід до розробки поєднує технічну експертизу з креативним мисленням, 
              що дозволяє створювати продукти, які не лише працюють бездоганно, 
              але й приносять радість користувачам.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['Vue', 'Node.js', 'TypeScript', 'PostgreSQL', 'React', 'Python', 'NoSQL', 'Firebase'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-red-500/30 transition-all transform hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;