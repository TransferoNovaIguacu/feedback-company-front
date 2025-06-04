"use client";
import React from 'react';

/**
 * Componente InfoCard:
 * 
 * Uso:
 *  - Este componente deve ser usado dentro de um componente que esteja marcado com `"use client"`.
 *  - Isso é necessário porque ele aceita funções como props (ex: aoClicarDetalhes),
 *    e passar funções entre Server Components e Client Components gera erro no Next.js 13+.
 * 
 * Exemplo de componente pai:
 * 
 * ```tsx
 * "use client";
 * 
 * import InfoCard from './InfoCard';
 * import { FeedbackIcon } from './Icons';
 * 
 * export default function ComponentePai() {
 *   const lidarComDetalhes = () => {
 *     console.log("Detalhes clicados!");
 *   };
 * 
 *   return (
 *     <InfoCard
 *       titulo="Total de Feedbacks"
 *       textoPrincipal="187"
 *       subTexto="Últimos 30 dias"
 *       corFundoIcone="bg-blue-100"
 *       corTextoIcone="text-blue-600"
 *       aoClicarDetalhes={lidarComDetalhes}
 *       textoDetalhes="Ver todos"
 *     >
 *       <FeedbackIcon />
 *     </InfoCard>
 *   );
 * }
 * ```
 * 
 * Lembre-se: O componente pai que usa o InfoCard **deve** conter `"use client"` no topo do arquivo.
 */

interface InfoCardProps {
  titulo: string;
  textoPrincipal: string;
  subTexto: string;
  textoDetalhes?: string;
  corFundoIcone?: string;
  corTextoIcone?: string;
  children: React.ReactNode;
  aoClicarDetalhes?: () => void | Promise<void>; // função opcional, síncrona ou async
  linkTexto?: string;
  aoClicarLink?: () => void | Promise<void>;    // função opcional, síncrona ou async
}

export default function InfoCard({
  titulo,
  textoPrincipal,
  subTexto,
  textoDetalhes = "Detalhes",
  corFundoIcone = "bg-purple-100",
  corTextoIcone = "text-purple-600",
  children,
  aoClicarDetalhes,
  linkTexto,
  aoClicarLink,
}: InfoCardProps){
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg font-sans w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0 lg:w-auto lg:max-w-xs lg:flex-none">
      <div className="flex justify-between items-start">
        <div className="flex-grow mr-4">
          <p className="text-sm text-gray-500">{titulo}</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-1 break-words">{textoPrincipal}</h2>
        </div>
        <div className={`p-3 rounded-lg ${corFundoIcone} ${corTextoIcone} flex-shrink-0`}>
          {children}
        </div>
      </div>

      <div className="mt-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-between sm:items-center">
        <div className="flex flex-col items-start sm:flex-row sm:items-center">
          <p className="text-xs text-gray-400 sm:mr-2">{subTexto}</p>
          {linkTexto && aoClicarLink && (
            <button
              onClick={() => aoClicarLink()} // chamada protegida
              className="text-xs text-blue-500 hover:text-blue-700 font-semibold mt-1 sm:mt-0"
            >
              {linkTexto}
            </button>
          )}
        </div>

        {aoClicarDetalhes && (
          <button
            onClick={() => aoClicarDetalhes()} // chamada protegida
            className="text-sm text-purple-600 hover:text-purple-800 font-semibold mt-2 sm:mt-0 self-start sm:self-auto"
          >
            {textoDetalhes}
          </button>
        )}
      </div>
    </div>
  );
}


// Componente de Ícone SVG: Dólar
const DollarIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Componente de Ícone SVG: Feedback/Chat
const FeedbackIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

// Componente de Ícone SVG: Estrela
const StarIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.846 5.671a1 1 0 00.95.69h5.969c.969 0 1.371 1.24.588 1.81l-4.826 3.522a1 1 0 00-.364 1.118l1.846 5.671c.3.921-.755 1.688-1.54 1.118l-4.826-3.522a1 1 0 00-1.175 0l-4.826 3.522c-.784.57-1.838-.197-1.539-1.118l1.846-5.671a1 1 0 00-.364-1.118L2.28 11.1c-.783-.57-.38-1.81.588-1.81h5.969a1 1 0 00.95-.69l1.846-5.671z" />
  </svg>
);

// Componente de Ícone SVG: Escudo/Proteção (para o plano Premium)
const ShieldIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c.044 1.055.225 2.1.536 3.102M12 21c-1.353 0-2.658-.33-3.818-.944M12 21c1.353 0 2.658-.33 3.818-.944m-7.636 0c.937-2.915 2.378-5.6 4.309-7.795M12 21a9 9 0 009-9c0-1.353-.33-2.658-.944-3.818m-7.636 0c2.915 0 5.6.937 7.795 2.378M12 21a9 9 0 01-9-9c0-1.353.33-2.658.944-3.818" />
  </svg>
);
