import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Cloud, Database, Globe, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'Automação & Chatbot',
      description: 'Soluções inteligentes de automação e chatbots para melhorar eficiência e atendimento ao cliente.',
      features: [
        'Chatbots 24/7 para atendimento automático',
        'Integração com WhatsApp, Telegram e sites',
        'Automação de processos internos (RPA)',
        'Respostas inteligentes com IA generativa'
      ]
    },
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      description: 'Aplicações web modernas e responsivas usando React, Next.js e as tecnologias mais atuais do mercado.',
      features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration']
    },
    {
      icon: Smartphone,
      title: 'Aplicações Mobile',
      description: 'Apps nativos e híbridos para iOS e Android com foco na experiência do usuário.',
      features: ['React Native', 'Flutter', 'UI/UX Design', 'App Store Deploy']
    },
    {
      icon: Database,
      title: 'Backend & APIs',
      description: 'Sistemas robustos e escaláveis com arquitetura moderna e segura.',
      features: ['Node.js', 'Python', 'PostgreSQL', 'REST & GraphQL']
    },
    
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia, desde o conceito até a implementação e manutenção.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200"
            >
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4 group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                <CardDescription className="text-slate-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
