'use client';

import React, { useState } from 'react';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

export interface CardTransacaoType {
  id: string;
  descricao: string;
  valor: number;
  tipo: 'saque' | 'recebimento';
  data: string;
  time: string;
}

interface CardTransacaoProps {
  transacaoInfo: CardTransacaoType;
}

export function CardTransacao({ transacaoInfo }: CardTransacaoProps) {
  const { descricao, valor, tipo, data, time } = transacaoInfo;

  const textColorClass = tipo === 'saque' ? 'text-red-500' : 'text-green-500';
  const formattedValor =
    tipo === 'saque'
      ? `- R$ ${valor.toFixed(2)}`
      : `+ R$ ${valor.toFixed(2)}`;
  const icon =
    tipo === 'saque' ? (
      <ArrowUpCircle className="text-red-500 w-5 h-5" />
    ) : (
      <ArrowDownCircle className="text-green-500 w-5 h-5" />
    );

  const [expandido, setExpandido] = useState(false);
  const toggleExpandido = () => setExpandido(!expandido);

  return (
    <div
      className="w-full bg-gray-800 rounded-lg p-4 shadow-md mb-4 cursor-pointer transition-all duration-300"
      onClick={toggleExpandido}
    >
      {/* Parte principal */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {icon}
          <div className="flex flex-col">
            <p className="text-white text-lg font-semibold">{descricao}</p>
            <p className="text-gray-400 text-sm">{time}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className={`text-xl font-bold ${textColorClass}`}>{formattedValor}</p>
          <span className="text-gray-500 text-sm capitalize">{tipo}</span>
        </div>
      </div>

      {/* Parte expansível */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          expandido ? 'max-h-20 mt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <hr className="border-gray-700 my-2" />
        <p className="text-gray-300 text-sm">Data: {data}</p>
      </div>
    </div>
  );
}
