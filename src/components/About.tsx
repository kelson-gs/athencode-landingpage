import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, Users, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Projetos Entregues' },
    { icon: Clock, number: '3+', label: 'Anos de Experiência' },
    { icon: Award, number: '100%', label: 'Clientes Satisfeitos' },
    { icon: Target, number: '24/7', label: 'Suporte Disponível' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Sobre a .ATHEN CODE
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Somos uma empresa especializada em desenvolvimento de software, focada em criar 
              soluções tecnológicas inovadoras que transformam negócios e impulsionam o crescimento 
              de nossos clientes.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Nossa equipe combina expertise técnica com uma abordagem centrada no cliente, 
              garantindo que cada projeto seja desenvolvido com qualidade, agilidade e atenção aos detalhes.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-slate-800">Missão</h4>
                  <p className="text-slate-600">Transformar ideias em soluções digitais que geram valor real para nossos clientes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-slate-800">Visão</h4>
                  <p className="text-slate-600">Ser referência em desenvolvimento de software, reconhecida pela qualidade e inovação.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-slate-800">Valores</h4>
                  <p className="text-slate-600">Excelência técnica, transparência, colaboração e compromisso com resultados.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-slate-200">
                <CardContent className="p-0">
                  <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
