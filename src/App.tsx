import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Database, Brain, Briefcase, GraduationCap, Languages, Award, ChevronLeft, ChevronRight, Terminal, Cpu, Globe, Sparkles, Trophy, Calendar } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';

const projects = [
  {
    title: "CampusCoin",
    description: "Plataforma de educação financeira com carrossel de ações e sistema de autenticação.",
    image: "/images/campuscoin.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    url: "https://drive.google.com/file/d/16yKCkt3ospzlfFMWeaUBl8_fMaUsKZNB/view?usp=sharing"
  },
  {
    title: "Inovajs",
    description: "Website moderno com foco em design e usabilidade.",
    image: "/images/inovajs.png",
    tags: ["React", "Next.js", "TailwindCSS"],
    url: "https://inovajs.com.br"
  },
  {
    title: "Bebrum",
    description: "Site para cervejaria com foco em experiência do usuário.",
    image: "/images/bebrum.png",
    tags: ["Next.js", "React", "Responsive"],
    url: "https://cervejariabebrum.netlify.app"
  },
  {
    title: "Dra. Adna Boaventura",
    description: "Landing Page profissional para advocacia, apresentando serviços jurídicos especializados",
    image: "/images/adna.png",
    tags: ["Tailwind CSS", "React", "Responsive"],
    url: "https://draadna.netlify.app"
  },
  {
    title: "Bruna Boaventura",
    description: "Portfólio profissional de analista de sistemas, destacando projetos e habilidades",
    image: "/images/brunaboaventura.png",
    tags: ["Tailwind CSS", "React", "Responsive"],
    url: "https://brunaluiza.vercel.app"
  },
  {
    title: "Pistache Granel",
    description: "Landing Page de informações especializado em pistaches e produtos a granel de alta qualidade",
    image: "/images/pistache.png",
    tags: ["Next.js", "React", "Responsive"],
    url: "https://pistachepage.netlify.app"
  },
  {
    title: "Disaster Report",
    description: "Plataforma para relatório e monitoramento de desastres naturais",
    image: "/images/disasterreport.png",
    tags: ["Typescript", "React", "Firebase", "Leaflet.js", "Tailwind CSS", "Vite"],
    url: "https://disasterreport.netlify.app"
  },
  {
    title: "Clima e Tempo",
    description: "Uma aplicação web moderna para consulta de previsão do tempo, desenvolvida com React e TypeScript. Oferece uma interface intuitiva e responsiva para visualização das condições climáticas atuais e previsão para os próximos dias.",
    image: "/images/clima.png",
    tags: ["Typescript", "React", "Framer Motion", "React Query", "Tailwind CSS", "Vite", "OpenWeather API"],
    url: "https://climastempos.netlify.app"
  }
];

function App() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [showToast, setShowToast] = useState(false);

  const nextProject = useCallback(() => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 250);
  }, []);

  const prevProject = useCallback(() => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    }, 250);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('joaomgsb@gmail.com');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 bg-mesh">
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-out">
          Email copiado com sucesso!
        </div>
      )}
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent animate-pulse"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="text-center animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-glow">
              João Mateus
              <span className="block gradient-text">Desenvolvedor Full Stack</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Desenvolvedor apaixonado por criar soluções tecnológicas eficientes e modernas,
              com foco em React, Node.js, e TypeScript.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <a href="https://github.com/joaomgsb" 
                 className="p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/joaomgsb/" 
                 className="p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-6">
                <Linkedin className="w-6 h-6" />
              </a>
              <button onClick={handleCopyEmail}
                 className="p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6">
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="relative grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
            <div className="relative">
              <div className="relative w-64 h-64 mx-auto lg:mx-0 group perspective">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow blur-xl opacity-50"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                <img
                  src="/images/_MG_1952.JPG"
                  alt="João Mateus"
                  className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-xl border-4 border-gray-900 group-hover:transform group-hover:rotate-y-12 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-20 top-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"></div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                  <Terminal className="w-8 h-8 text-blue-400" />
                  <span>Sobre Mim</span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Sou um desenvolvedor Full Stack apaixonado por criar soluções tecnológicas inovadoras.
                  Minha jornada única combina desenvolvimento web com conhecimentos em eletromecânica,
                  trazendo uma perspectiva diferenciada para resolução de problemas.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <span>Brumadinho, MG</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <span>(31) 9.8580-4492</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900/50"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-white mb-20 flex items-center gap-4 justify-center">
            <Cpu className="w-8 h-8 text-blue-400" />
            <span>Habilidades & Tecnologias</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative glass-card h-64 p-8 rounded-lg flex flex-col items-center text-center justify-between group-hover:bg-gray-900/80 transition-colors duration-500">
                <Code2 className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Front-end</h3>
                  <p className="text-gray-400">React, TypeScript, Tailwind CSS</p>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative glass-card h-64 p-8 rounded-lg flex flex-col items-center text-center justify-between group-hover:bg-gray-900/80 transition-colors duration-500">
                <Database className="w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors duration-500" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Back-end</h3>
                  <p className="text-gray-400">Node.js, PHP, MySQL, APIs</p>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative glass-card h-64 p-8 rounded-lg flex flex-col items-center text-center justify-between group-hover:bg-gray-900/80 transition-colors duration-500">
                <Brain className="w-12 h-12 text-pink-400 group-hover:text-pink-300 transition-colors duration-500" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Soft Skills</h3>
                  <p className="text-gray-400">Comunicação, Liderança, Adaptabilidade</p>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative glass-card h-64 p-8 rounded-lg flex flex-col items-center text-center justify-between group-hover:bg-gray-900/80 transition-colors duration-500">
                <Globe className="w-12 h-12 text-red-400 group-hover:text-red-300 transition-colors duration-500" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Idiomas</h3>
                  <p className="text-gray-400">Inglês e Espanhol Intermediário</p>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-white mb-16 flex items-center gap-4 justify-center">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <span>Jornada Profissional</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
              
              {/* Experience Item */}
              <div className="relative mb-16 perspective">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-gray-900 rounded-full border-4 border-blue-500 z-10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="relative glass-card p-8 rounded-xl group/card hover:bg-gray-900/80 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:scale-[1.02]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover/card:opacity-100 group-hover/card:animate-pulse transition-all duration-500"></div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-blue-400 group-hover/card:to-purple-400 transition-all duration-500">
                      Jovem Aprendiz em Eletromecânica
                    </h3>
                    <p className="text-blue-400 mb-4 group-hover/card:text-blue-300 transition-colors duration-500">Vale S.A. • Abr/2024 - Atual</p>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center gap-2 group/item hover:text-white transition-colors duration-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                        Apoio em manutenções e projetos industriais
                      </li>
                      <li className="flex items-center gap-2 group/item hover:text-white transition-colors duration-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                        Desenvolvimento de habilidades técnicas
                      </li>
                      <li className="flex items-center gap-2 group/item hover:text-white transition-colors duration-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                        Participação em treinamentos internos
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Education Items */}
              <div className="relative mb-16 perspective">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-gray-900 rounded-full border-4 border-purple-500 z-10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div className="relative glass-card p-8 rounded-xl group/card hover:bg-gray-900/80 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] hover:scale-[1.02]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover/card:opacity-100 group-hover/card:animate-pulse transition-all duration-500"></div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-purple-400 group-hover/card:to-pink-400 transition-all duration-500">
                      Sistemas de Informação
                    </h3>
                    <p className="text-purple-400 mb-4 group-hover/card:text-purple-300 transition-colors duration-500">PUC Minas • 2024 - 2028</p>
                    <p className="text-gray-300 group-hover/card:text-white transition-colors duration-500">
                      Bacharelado em andamento com foco em desenvolvimento de software e gestão de projetos tecnológicos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative perspective">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-gray-900 rounded-full border-4 border-pink-500 z-10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-pink-400" />
                  </div>
                </div>
                <div className="relative glass-card p-8 rounded-xl group/card hover:bg-gray-900/80 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)] hover:scale-[1.02]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl blur opacity-30 group-hover/card:opacity-100 group-hover/card:animate-pulse transition-all duration-500"></div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-pink-400 group-hover/card:to-red-400 transition-all duration-500">
                      Eletromecânica
                    </h3>
                    <p className="text-pink-400 mb-4 group-hover/card:text-pink-300 transition-colors duration-500">SENAI • 2024 - 2025</p>
                    <p className="text-gray-300 group-hover/card:text-white transition-colors duration-500">
                      Curso técnico focado em manutenção industrial e automação, combinando teoria e prática em projetos reais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900/90"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-white mb-16 flex items-center gap-4 justify-center">
            <Terminal className="w-8 h-8 text-blue-400" />
            <span>Projetos em Destaque</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="glass-card rounded-xl overflow-hidden group hover:bg-gray-900/80 transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                <div className="relative aspect-video bg-gray-900 overflow-hidden perspective">
                  <img 
                    src={projects[currentProject].image}
                    alt={`${projects[currentProject].title} Preview`}
                    className={`object-cover w-full h-full transform transition-all duration-500 ease-out
                      ${isAnimating ? direction === 'right' 
                        ? 'animate-slide-left opacity-0'
                        : 'animate-slide-right opacity-0'
                        : 'animate-fade-in'} 
                      ${!isAnimating && 'group-hover:scale-110 group-hover:rotate-2'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                </div>
                <div className="relative p-8 overflow-hidden">
                  <h3 className={`text-2xl font-bold text-white mb-3 transform transition-all duration-500
                    ${isAnimating ? direction === 'right'
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                      : 'translate-x-0 opacity-100 transition-transform duration-500 ease-out'}`}>
                    {projects[currentProject].title}
                  </h3>
                  <p className={`text-gray-300 mb-6 text-lg transform transition-all duration-500 delay-100
                    ${isAnimating ? direction === 'right'
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                      : 'translate-x-0 opacity-100 transition-transform duration-500 ease-out'}`}>
                    {projects[currentProject].description}
                  </p>
                  <div className={`flex flex-wrap gap-2 mb-4 transform transition-all duration-500 delay-200
                    ${isAnimating ? direction === 'right'
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                      : 'translate-x-0 opacity-100 transition-transform duration-500 ease-out'}`}>
                    {projects[currentProject].tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm hover:scale-110 hover:border-blue-400 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={projects[currentProject].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 overflow-hidden rounded-full border border-blue-400/30 text-blue-300 transition-all duration-500 hover:text-white hover:border-blue-300 transform hover:scale-105 backdrop-blur-sm
                      ${isAnimating ? direction === 'right'
                        ? '-translate-x-full opacity-0'
                        : 'translate-x-full opacity-0'
                        : 'translate-x-0 opacity-100'}`}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-90 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                    Visitar Site
                    <span className="relative ml-1 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevProject}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-3 text-gray-300 hover:text-white bg-gray-900/50 hover:bg-gray-900 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700 hover:border-blue-500 group"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
              </button>
              <button 
                onClick={nextProject}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-3 text-gray-300 hover:text-white bg-gray-900/50 hover:bg-gray-900 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700 hover:border-blue-500 group"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
              </button>
              
              {/* Project Indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentProject 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8' 
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses & Certifications */}

      {/* Achievements Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900/90"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-white mb-16 flex items-center gap-4 justify-center">
            <Award className="w-8 h-8 text-blue-400" />
            <span>Conquistas & Destaques</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-card p-8 rounded-xl hover:bg-gray-900/80 transition-all duration-500">
                <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-center">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden group-hover:transform group-hover:scale-[1.02] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img
                      src="images/senai.jpg"
                      alt="Reconhecimento Acadêmico"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                        <Trophy className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Aluno Destaque SENAI</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-blue-400">
                        <Calendar className="w-5 h-5" />
                        <span>2024 • 1º Trimestre</span>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">
                        Reconhecido como Aluno Destaque no curso de Aprendizagem Industrial do SENAI Betim,
                        durante minha jornada como Jovem Aprendiz na Vale. Esta conquista reflete minha
                        dedicação e empenho no desenvolvimento profissional.
                      </p>
                      
                      <div className="flex flex-wrap gap-3 mt-4">
                        <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-300 rounded-full text-sm">
                          Excelência Acadêmica
                        </span>
                        <span className="px-4 py-1.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300 rounded-full text-sm">
                          Eletromecânica
                        </span>
                        <span className="px-4 py-1.5 bg-gradient-to-r from-pink-500/10 to-red-500/10 border border-pink-500/20 text-pink-300 rounded-full text-sm">
                          SENAI Betim
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-white mb-20 flex items-center gap-4 justify-center">
            <Award className="w-8 h-8 text-blue-400" />
            <span>Cursos & Certificações</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative glass-card h-[420px] p-8 rounded-xl hover:bg-gray-900/80 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">IA para Devs</h3>
                  <div className="flex items-center gap-2 text-blue-400 mb-4">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span>Rocketseat</span>
                  </div>
                  <p className="text-gray-300">Desenvolvimento de aplicações com integração de IA, incluindo ChatGPT, Whisper e DALL-E.</p>
                </div>
                <div>
                  <span className="px-3 py-1 text-sm bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-green-400 rounded-full">Concluído</span>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative glass-card h-[420px] p-8 rounded-xl hover:bg-gray-900/80 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Full Stack Developer</h3>
                  <div className="flex items-center gap-2 text-purple-400 mb-4">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span>Rocketseat</span>
                  </div>
                  <p className="text-gray-300">Desenvolvimento web completo com React, Node.js, e as tecnologias mais modernas do mercado.</p>
                </div>
                <div>
                  <span className="px-3 py-1 text-sm bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 text-yellow-400 rounded-full">Em andamento</span>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative glass-card h-[420px] p-8 rounded-xl hover:bg-gray-900/80 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-500/20 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-pink-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Eletromecânica</h3>
                  <div className="flex items-center gap-2 text-pink-400 mb-4">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                    <span>SENAI Betim</span>
                  </div>
                  <p className="text-gray-300">Formação técnica em manutenção industrial e automação, com projetos práticos e teoria aplicada.</p>
                </div>
                <div>
                  <span className="px-3 py-1 text-sm bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 text-yellow-400 rounded-full">Em andamento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 glass-effect">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2024 João Mateus. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="https://github.com/joaomgsb" 
                 className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/joaomgsb/" 
                 className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-rotate-6">
                <Linkedin className="w-5 h-5" />
              </a>
              <button onClick={handleCopyEmail}
                 className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;