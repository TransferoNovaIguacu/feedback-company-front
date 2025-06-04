"use client";
import React from "react";

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
  aoClicarLink?: () => void | Promise<void>; // função opcional, síncrona ou async
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
}: InfoCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg font-sans w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0 lg:w-auto lg:max-w-xs lg:flex-none">
      <div className="flex justify-between items-start">
        <div className="flex-grow mr-4">
          <p className="text-sm text-gray-500">{titulo}</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-1 break-words">
            {textoPrincipal}
          </h2>
        </div>
        <div
          className={`p-3 rounded-lg ${corFundoIcone} ${corTextoIcone} flex-shrink-0`}
        >
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
