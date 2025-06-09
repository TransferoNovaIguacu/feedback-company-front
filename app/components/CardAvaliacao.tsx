// components/CardAvaliacao.tsx
import React, { ReactNode } from 'react';
import { Botao2 } from './Botao'; // Assumindo que Botao2 está em './Botao'
import { Mission } from '../company/page';


interface CardAvaliacaoProps {
    CardAvaliacaoInfo: Mission,
    className?: string 
    botao?: ReactNode
}

export  function CardAvaliacao({CardAvaliacaoInfo, className, botao}: CardAvaliacaoProps) {
    const {company, description, title, mission_type, url} = CardAvaliacaoInfo
  return (
    <div className={`bg-gray-950 rounded-lg p-6 shadow-lg flex flex-col bg-opacity-45 max-h-96 ${className}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-purple-800">
          {title}
        </h3>
        <span
          className={`ml-4 bg-green-500 text-sm font-medium px-3 py-1 rounded-full`}
        >
          {mission_type}
        </span>
      </div>
      <p className="text-sm text-purple-800 mb-2">
        {company}
      </p>
      <p className="text-purple-800 text-base flex-grow mb-4">
        {description}
      </p>

      <div className="flex items-center text-purple-800 text-sm mt-auto mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        10 - 20min
      </div>
      <a target='_blank' href={url}>
        {!botao? <Botao2 texto="Participar" /> : botao}
      </a>
    </div>
  );
}