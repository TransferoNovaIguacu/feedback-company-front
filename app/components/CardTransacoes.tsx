'use client';

import React, { useState } from 'react';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

// essa foi a unica maneira que entendi para converter do yyyy-mm-dd para dd-mm-yyyy pt-br 
function parseDatePtBr(dataPtBr: string): Date {
  const [dia, mes, ano] = dataPtBr.split('/');
  return new Date(`${ano}-${mes}-${dia}`);
}


// Colocando as funçoes para ontem/hoje, não entendi muito o processo mais e isso kk
function formatarDataComHorario(dataTransacao: string, horario: string): string {
  const hoje = new Date();
  const transacao = parseDatePtBr(dataTransacao); //Aqui chamei meu function parseDatePtBr (converte)

  hoje.setHours(0, 0, 0, 0);
  transacao.setHours(0, 0, 0, 0);

  const diffEmdias = (hoje.getTime() - transacao.getTime()) / (1000 * 60 * 60 * 24);

  let dataFormatada = '';

  if (diffEmdias === 0) {
    dataFormatada = 'Hoje';
  } else if (diffEmdias === 1) {
    dataFormatada = 'Ontem';
  } else {
    dataFormatada = transacao.toLocaleDateString('pt-BR');
  }

  return `${dataFormatada}, ${horario}`;
}

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
      className="w-full bg-gray-800 rounded-lg p-4 shadow-md cursor-pointer transition-all duration-300"
      onClick={toggleExpandido}
    >
      {/* Parte principal */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {icon}
          <div className="flex flex-col">
            <p className="text-white text-lg font-semibold">{descricao}</p>
            <p className="text-gray-300 text-sm">
              {formatarDataComHorario(data, time)}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className={`text-xl font-bold ${textColorClass}`}>{formattedValor}</p>
          <span className="text-gray-500 text-sm capitalize">{tipo}</span>
        </div>
      </div>
    </div>
  );
}
