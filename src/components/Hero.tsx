'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Zap, Users } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/2e8e6ca7-90cf-43a3-aa19-346a2584ebac.png" 
            alt="Athen Code Logo" 
            className="mx-auto h-32 w-auto mb-6"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 animate-fade-in animation-delay-200">
          Soluções Tecnológicas
          <span className="block text-blue-600">Inovadoras</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-400">
          Transformamos suas ideias em código. Desenvolvemos aplicações web modernas, 
          sistemas personalizados e soluções digitais que impulsionam seu negócio.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-600">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg cursor-pointer"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Começar Projeto
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg cursor-pointer hover:bg-blue-50 hover:font-black"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Projetos
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 animate-fade-in animation-delay-800">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Code className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Desenvolvimento Ágil</h3>
            <p className="text-slate-600 text-center">Metodologias modernas para entregas rápidas e eficientes</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Performance Otimizada</h3>
            <p className="text-slate-600 text-center">Aplicações rápidas e escaláveis para qualquer demanda</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Suporte Dedicado</h3>
            <p className="text-slate-600 text-center">Equipe especializada para acompanhar seu projeto</p>
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
