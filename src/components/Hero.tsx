'use client';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Users, Zap } from 'lucide-react';


const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
    className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-10 bg-cover bg-center"
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/vid-back.mp4" type="video/mp4" />
      Seu navegador não suporta vídeo em HTML5.
    </video>
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in animation-delay-200">
          Soluções Tecnológicas
          <span className="block text-blue-600">Inovadoras</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-400">
          Transformamos suas ideias em soluções digitais poderosas. Desenvolvemos aplicações web modernas e sistemas personalizados que geram resultado real para o seu negócio.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-600">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg cursor-pointer"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Começar Projeto
          </Button>
          {/* <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg cursor-pointer hover:bg-blue-50 hover:font-black"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Projetos
          </Button> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 animate-fade-in animation-delay-800">
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg shadow-sm border border-blue-50/50">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Code className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Desenvolvimento Ágil</h3>
            <p className="text-white text-center">Metodologias modernas para entregas rápidas e eficientes</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg shadow-sm border border-blue-50/30">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Performance Otimizada</h3>
            <p className="text-white text-center">Aplicações rápidas e escaláveis para qualquer demanda</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg shadow-sm border border-blue-50/30">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Suporte Dedicado</h3>
            <p className="text-white text-center">Equipe especializada para acompanhar seu projeto</p>
          </div>
        </div>
        
        <button 
          onClick={scrollToServices}
          className="animate-bounce bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <ArrowDown className="h-6 w-6 text-blue-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
