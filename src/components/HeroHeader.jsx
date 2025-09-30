import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, ChevronRight, Download, Code } from 'lucide-react';
import photo from '../assets/header-photo.jpg';
const HeroHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/ketalias", color: "hover:text-purple-400" },
    { name: "LinkedIn", icon: Linkedin, href: "http://linkedin.com/in/%D1%80%D0%BE%D0%BC%D0%B0%D0%BD-%D0%BA%D0%BE%D0%B2%D0%B0%D1%87-72866a36b", color: "hover:text-blue-400" },
  ];

  return (
    <header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className={`text-white space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="inline-block">
              <span className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium">
                Available for work
              </span>
            </div>

            <div>
              <p className="text-gray-400 text-lg font-medium mb-2">Привіт, я</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white/90">
                Kovach Roma
              </h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-red-400 to-purple-400 bg-clip-text text-transparent">
                Fullstack Web Developer
              </h1>

            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Створюю інноваційні веб-рішення з використанням сучасних технологій.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://t.me/romakkk"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-red-500/25 flex items-center gap-2"
              >
                Зв'язатися
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/CV.pdf"
                download
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Завантажити CV
              </a>
            </div>


            <div className="flex gap-4 pt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all transform hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className={`flex items-center justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

              <div className="relative w-full max-w-sm lg:max-w-md">
                <div className="text-center">
                  <img
                    src={photo}
                    alt="My profile"
                    className="w-64 h-64 mx-auto mb-4 rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-500/20 rounded-2xl backdrop-blur-sm border border-red-500/30 flex items-center justify-center animate-pulse">
                <Code className="w-10 h-10 text-red-400" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto"></div>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
