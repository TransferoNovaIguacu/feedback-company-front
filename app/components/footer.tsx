import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#1b273a] py-8 px-4 pt-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid principal do footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 ml-20 ">

          {/* Coluna da logo e redes sociais */}

          <div className="sm:col-span-1">
  <div className="flex items-center space-x-3 mb-4">
    <div className="w-10 h-10 bg-gradient-to-r from-[#3f80f6] to-[#895df6] clip-hexagon scale-y-[0.85] flex items-center justify-center">
      <img src="svg/logo.svg" alt="Logo FeedToken" className="w-full h-full" />
    </div>
    <span className="text-white font-bold text-lg">FeedToken</span>
  </div>





            {/* Descrição */}

            <p className="text-gray-400 text-sm max-w-xs mb-4">
              Conectando empresas e avaliadores através de um sistema de recompensas baseado em tokens.
            </p>

            {/* Redes sociais */}

            <div className="flex space-x-4">
              <a href="/" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <img src="/svg/icon-facebook.svg" alt="Facebook" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="/" className="text-gray-400 hover:text-pink-600 transition-colors duration-200">
                <img src="/svg/icon-instagram.svg" alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="/" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <img src="/svg/icon-twitter.svg" alt="Twitter" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="/" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
                <img src="/svg/icon-linkedin.svg" alt="Linkedin" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Plataforma */}

          <div>
            <h2 className="mb-4 pt-1 text-lg font-bold text-white tracking-wider">Plataforma</h2>
            <ul className="space-y-2">
              <li><a href="/login" className="text-zinc-400 hover:text-zinc-200 hover:font-medium transition-colors duration-200">Como Funciona</a></li>
              <li><a href="/" className="text-zinc-400 hover:text-zinc-200 hover:font-medium transition-colors duration-200">Tokens FTK</a></li>
              <li><a href="/" className="text-zinc-400 hover:text-zinc-200 hover:font-medium transition-colors duration-200">Para Empresas</a></li>
              <li><a href="/" className="text-zinc-400 hover:text-zinc-200 hover:font-medium transition-colors duration-200">Para Avaliadores</a></li>
            </ul>
          </div>

          {/* Recursos */}

          <div>
            <h2 className="mb-4 pt-1  text-lg font-bold text-white tracking-wider">Recursos</h2>
            <ul className="space-y-2">
              <li><a href="/" className="text-zinc-400 hover:text-zinc-200 hover:font-medium transition-colors duration-200">Blog</a></li>
              <li><a href="/" className="text-zinc-400 hover:text-zinc-200 hover:font-medium transition-colors duration-200">FAQ</a></li>
              <li><a href="/" className="text-zinc-400 hover:text-zinc-200 hover:font-medium transition-colors duration-200">Suporte</a></li>
              <li><a href="/" className="text-zinc-400 hover:text-zinc-200 hover:font-medium transition-colors duration-200">Documentação</a></li>
            </ul>
          </div>

          {/* Legal */}

          <div>
            <h2 className="mb-4 pt-1 text-lg font-bold text-white tracking-wider">Legal</h2>
            <ul className="space-y-2">
              <li><a href="/" className="text-zinc-400 hover:text-zinc-200 hover:font-medium transition-colors duration-200">Termos de Serviço</a></li>
              <li><a href="/" className="text-zinc-400 hover:text-zinc-200 hover:font-medium transition-colors duration-200">Política de Privacidade</a></li>
              <li><a href="/" className="text-zinc-400 hover:text-zinc-200 hover:font-medium transition-colors duration-200">Política de Cookies</a></li>
              <li><a href="/" className="text-zinc-400 hover:text-zinc-200 hover:font-medium transition-colors duration-200">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}

        <div className="mt-12">
          <div className="border-t border-white/20"></div>
        </div>

        {/* Conteúdo abaixo da borda */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">
            &copy; {new Date().getFullYear()} FeedToken. Todos os direitos reservados.
          </p>
          <select className="bg-[#1b273a] text-zinc-400 text-sm border border-gray-600 rounded px-3 py-1 focus:outline-none ">
            <option>Português (BR)</option>
            <option>English (EN)</option>
          </select>
        </div>
      </div>
    </footer>
  );
}




