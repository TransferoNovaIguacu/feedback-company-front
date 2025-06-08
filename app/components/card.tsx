import React, { ReactNode } from 'react';
import Image from 'next/image';  // Importa o componente Image do Next.js

interface CardProps {
  imagem: string;
  titulo: string;
  descricao: string;
  lista?: string[];
  corIcone?: string;
  botao?: ReactNode;
  ClassName?: string;
}

export default function CardGenerico({
  imagem,
  titulo,
  descricao,
  lista = [],
  corIcone = '#263755',
  botao,
  ClassName, 
}: CardProps) {
  return (
    <div className={`bg-[#1b1e33] rounded-2xl p-6 shadow-lg flex flex-col max-w-sm mx-auto ${ClassName}`}>
      {/* max-w-sm define a largura máxima (ex: 24rem) e mx-auto centraliza */}
      <div className="flex-grow">
        <div className="mb-4 max-[500px]:text-center">
          <div
            className={`p-3 rounded-lg w-fit mb-2 max-[500px]:mx-auto`}
            style={{ backgroundColor: corIcone }}
          >
            {/* Usando Image do next com width e height fixos */}
            <Image
              src={imagem}
              alt={titulo}
              width={24}   // 6 * 4px (tailwind default = 1 unit = 4px)
              height={24}
              className="object-contain"
            />
          </div>
          <h3 className="text-lg mt-6 font-extrabold">{titulo}</h3>
        </div>
        <p className="text-gray-300 mb-4 text-opacity-75 max-[500px]:text-center">{descricao}</p>
        <ul className="space-y-1 text-sm mb-6 text-gray-300">
          {lista.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 max-[500px]:justify-center"
            >
              <Image
                src="/svg/icon-check.svg"
                alt="check"
                width={16}
                height={16}
                className="object-contain"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {botao && <div className="mt-auto">{botao}</div>}
    </div>
  );
}
