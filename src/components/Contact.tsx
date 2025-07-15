'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, CheckCircle, Zap, Shield, Rocket, Code, Check, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com'
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const loadingToast = toast.loading('Enviando...')
    // Aqui você pode implementar o envio do formulário

    emailjs.send(
      'service_bp7cgj3',
      'template_rbnenoo',
      formData,
      'T-l44K9TcuCJ8w2Cp'
    )
      .then(() => {
        toast.success(
          <div className='flex items-center gap-2'>
            <Check className='text-green-500 w-4 h-4' />
            Mensagem enviada com sucesso!
          </div>,
          { id: loadingToast }
        )
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      })
      .catch(err => {
        toast.success(
          <div className='flex items-center gap-2'>
            <AlertCircle className='text-red-500 w-4 h-4' />
            Erro ao enviar a mensagem.
          </div>,
          { id: loadingToast }
        )
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que escolher a .ATHEN CODE?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos mais que desenvolvedores. Somos parceiros estratégicos comprometidos com o sucesso do seu projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600  rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Experiência Comprovada</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  Mais de 100 projetos complexos entregues com sucesso. Nossa expertise abrange desde startups até
                  grandes corporações, sempre superando expectativas.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600  rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Metodologias Ágeis</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  Entregas pontuais garantidas através de Scrum e Kanban. Transparência total no processo com
                  atualizações constantes e feedback contínuo.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600  rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Suporte Contínuo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  Manutenção garantida e suporte 24/7. Seu projeto nunca fica desatualizado com nossos planos de
                  evolução contínua e monitoramento proativo.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Tecnologias Modernas</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  Stack tecnológico de ponta: React, Next.js, Node.js, Python, Cloud Computing. Soluções escaláveis que
                  crescem com seu negócio.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">O que você ganha trabalhando conosco</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Qualidade Garantida</h4>
                    <p className="text-gray-600">Código limpo, testado e documentado</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Escalabilidade</h4>
                    <p className="text-gray-600">Arquitetura preparada para crescimento</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Segurança</h4>
                    <p className="text-gray-600">Proteção de dados e compliance garantidos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Inovação</h4>
                    <p className="text-gray-600">Sempre à frente das tendências tecnológicas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Pronto para transformar sua ideia em realidade?</h3>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos acelerar o crescimento do seu negócio com
            tecnologia de ponta.
          </p>
        </div>
      </section>
      <div className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <p className="text-slate-600">athencodecompany@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Telefone - <label className=' text-sm text-slate-500'>Clique no numero para whatsapp</label></h4>
                    <p className="text-slate-600">
                      <a href="https://api.whatsapp.com/send?phone=5577991117217&text=Olá%20,Tudo%20bem?%20Gostaria%20de%20um%20Orçamento">+55 (77) 9 9111-7217</a>
                    </p>
                    <p className="text-slate-600">
                      <a href="https://api.whatsapp.com/send?phone=5516989260142&text=Olá%20,Tudo%20bem?%20Gostaria%20de%20um%20Orçamento">+55 (16) 9 8926-0142</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Horário de Atendimento</h4>
                    <p className="text-slate-600">Segunda à Sexta: 8h às 18h</p>
                    <p className="text-slate-600">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Solicite um Orçamento</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entraremos em contato em até 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      className='border-blue-200'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className='border-blue-200'
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="11988888888"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className='border-blue-200'
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    className='border-blue-200'
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    className='border-blue-200'
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto ou necessidade..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold cursor-pointer">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Toaster position='top-right' reverseOrder={false} />
    </section>
  );
};

export default Contact;
