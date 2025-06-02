import React from 'react';

export function Footer() {
  return (
    <footer className="mt-14 bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Column */}
          <div className="sm:col-span-1">
            <h2 className="mb-4 text-lg font-bold text-gray-900 uppercase tracking-wider">EMPRESA</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="/login"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium transition-colors duration-200"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium transition-colors duration-200"
                >
                  Grupo Lurian
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium transition-colors duration-200"
                >
                  Sustentabilidade
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium transition-colors duration-200"
                >
                  Trabalhe conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="sm:col-span-1">
            <h2 className="mb-4 text-lg font-bold text-gray-900 uppercase tracking-wider">TERMOS LEGAIS</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium transition-colors duration-200"
                >
                  Legal
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium transition-colors duration-200"
                >
                  Política de privacidade
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium transition-colors duration-200"
                >
                  Política de cookie
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium transition-colors duration-200"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
<div className="sm:col-span-2 lg:col-span-2">
  <h2 className="mb-4 text-lg font-bold text-gray-900 uppercase tracking-wider">ESTAMOS EM:</h2>
  <div className="flex space-x-4 justify-start mt-2 pr-0 w-24 align-center">
    {/* Instagram */}
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 border border-white rounded-full flex items-center justify-center text-white transition-colors duration-300 hover:text-white group relative overflow-hidden"
    >
      <span className="absolute inset-0 bg-[#fc4f7a] scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
      <img
        src="/public/svg/next.svg" // Coloque o caminho para o ícone do Instagram
        alt="Instagram"
        className="w-6 h-6 relative z-10"
      />
    </a>
    {/* WhatsApp */}
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 border border-white rounded-full flex items-center justify-center text-white transition-colors duration-300 hover:text-white group relative overflow-hidden"
    >
      <span className="absolute inset-0 bg-[#25d366] scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
      <img
        src="/public/svg/next.svg" // Coloque o caminho para o ícone do WhatsApp
        alt="WhatsApp"
        className="w-6 h-6 relative z-10"
      />
    </a>
  </div>
</div>
</div>


        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; 2023 Lurian. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
