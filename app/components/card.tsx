import React, { ReactNode } from 'react';

interface CardProps {
  imagem: string;
  titulo: string;
  descricao: string;
  lista?: string[];
  corIcone?: string;
  botao?: ReactNode; // 👈 Aqui está a mágica
}

export default function CardGenerico({
  imagem,
  titulo,
  descricao,
  lista = [],
  corIcone = '#263755',
  botao,
}: CardProps) {
  return (
    <div className="bg-[#1b1e33] rounded-2xl p-6 shadow-lg flex flex-col">
      <div className="flex-grow">
        <div className="mb-4 max-[500px]:text-center">
          <div className={`p-3 rounded-lg w-fit mb-2 max-[500px]:mx-auto`} style={{ backgroundColor: corIcone }}>
            <img src={imagem} alt={titulo} className="w-6 h-6" />
          </div>
          <h3 className="text-lg mt-6 font-extrabold">{titulo}</h3>
        </div>
        <p className="text-gray-300 mb-4 text-opacity-75 max-[500px]:text-center">{descricao}</p>
        <ul className="space-y-1 text-sm mb-6 text-gray-300">
          {lista.map((item, index) => (
            <li key={index} className="flex items-center space-x-2 max-[500px]:justify-center">
              <img src="/svg/icon-check.svg" alt="check" className="w-4 h-4" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {botao && <div className="mt-auto">{botao}</div>}
    </div>
  );
}
