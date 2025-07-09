import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import logo from '/public/athen-code-logo.png'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-slate-900 relative text-white">
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
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Image
                src={logo} 
                alt="Logo Athen Code" 
                className="h-16 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-slate-300 text-lg max-w-md">
                Transformamos ideias em soluções digitais inovadoras. 
                Sua parceira ideal para projetos de tecnologia.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {/* <a 
                href="#" 
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a> */}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#services" className="hover:text-white transition-colors">Automação & Chatbot</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Apps Mobile</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Backend & APIs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Consultoria Tech</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>athencodecompany@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+55 (77) 9111-7217</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} .ATHEN CODE. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
