'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/25 backdrop-blur-md backdrop-saturate-150 shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center h-10 text-xl font-bold text-blue-600">
          <Link href="/">
            <img 
              src='https://res.cloudinary.com/dup3eggmc/image/upload/v1752606873/athen-code-logo-svg_bhij80.svg'
              alt="Athen Code Logo" 
              className="mx-auto w-auto"
            />
          </Link>
        </div>

        <div className="space-x-6 flex items-center">
          {['#services', '#about', '#contact'].map((href, i) => {
            const label = ['Serviços', 'Sobre', 'Contato'][i];
            return (
              <a
                key={href}
                href={href}
                className="group relative text-zinc-950 hover:text-blue-600 transition duration-300 hover:scale-105"
              >
                {label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
