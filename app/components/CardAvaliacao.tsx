// components/CardAvaliacao.tsx
import React from 'react';
import { Botao2 } from './Botao'; // Assumindo que Botao2 está em './Botao'

// Definição da interface para as props do CardAvaliacao
export interface CardAvaliacaoType {
  id: number;
  title: string;
  company: string;
  description: string;
  time: string;
  reward: string;
  rewardBg: string; // Classes Tailwind para o background da recompensa
  rewardText: string; // Classes Tailwind para a cor do texto da recompensa
  href: string; // O link para onde o card deve redirecionar
}

interface CardAvaliacaoProps {
    CardAvaliacaoInfo: CardAvaliacaoType
}

export  function CardAvaliacao({CardAvaliacaoInfo}: CardAvaliacaoProps) {
    const {company, description, href, reward,rewardBg, rewardText, time, title} = CardAvaliacaoInfo
  return (
    <div className="bg-gray-950 rounded-lg p-6 shadow-lg flex flex-col bg-opacity-45">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
        <span
          className={`${rewardBg} ${rewardText} text-sm font-medium px-3 py-1 rounded-full`}
        >
          {reward}
        </span>
      </div>
      <p className="text-sm text-gray-400 mb-2">
        {company}
      </p>
      <p className="text-gray-300 text-base flex-grow mb-4">
        {description}
      </p>

      <div className="flex items-center text-gray-400 text-sm mt-auto mb-4">
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
        {time}
      </div>
      <a href={href}>
        <Botao2 texto="Participar" />
      </a>
    </div>
  );
}