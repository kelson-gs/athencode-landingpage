import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Moderno',
      description: 'Plataforma completa de vendas online com painel administrativo, gestão de estoque e integração com gateways de pagamento.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Web Application'
    },
    {
      title: 'App de Delivery',
      description: 'Aplicativo mobile para delivery de comida com sistema de pedidos em tempo real, rastreamento e avaliações.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500',
      technologies: ['React Native', 'Firebase', 'Maps API', 'Push Notifications'],
      category: 'Mobile App'
    },
    {
      title: 'Sistema de Gestão',
      description: 'ERP personalizado para pequenas empresas com módulos de vendas, estoque, financeiro e relatórios analíticos.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
      technologies: ['Next.js', 'Python', 'MongoDB', 'Chart.js'],
      category: 'Enterprise System'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Painel de controle com visualizações interativas e relatórios em tempo real para análise de dados empresariais.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
      technologies: ['React', 'D3.js', 'FastAPI', 'Redis'],
      category: 'Data Visualization'
    },
    {
      title: 'Plataforma Educacional',
      description: 'Sistema de ensino à distância com videoaulas, quizzes, certificados e acompanhamento de progresso.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      category: 'Education Platform'
    },
    {
      title: 'API de Integração',
      description: 'Microserviços robustos para integração entre diferentes sistemas empresariais com documentação completa.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500',
      technologies: ['Node.js', 'Docker', 'GraphQL', 'AWS'],
      category: 'Backend API'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos, demonstrando nossa expertise 
            em diferentes tecnologias e setores do mercado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-slate-200"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                <CardDescription className="text-slate-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-blue-100 font-black">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 cursor-pointer border-blue-100 hover:bg-blue-50 font-black">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Projeto
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
