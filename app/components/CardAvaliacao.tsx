'use client';
import React, { useEffect, useState } from 'react';
import { Botao2 } from './Botao';

export type CardAvaliacaoType = {
  id: number;
  title: string;
  company: string;
  description: string;
  time: string;
  reward: string;
  rewardBg: string;
  rewardText: string;
  href: string;
  type: 'comentario' | 'questionario';
};

const dadosFicticios: CardAvaliacaoType[] = [
  { id: 1, title: 'Avaliação do app mobile', company: 'Transfero', description: 'Nos diga o que achou do novo app mobile.', time: '5 min', reward: '10 tokens', rewardBg: 'bg-blue-100', rewardText: 'text-blue-700', href: '#', type: 'comentario' },
  { id: 2, title: 'Questionário sobre atendimento', company: 'Binance', description: 'Queremos saber como foi seu atendimento.', time: '8 min', reward: '20 tokens', rewardBg: 'bg-green-100', rewardText: 'text-green-700', href: '#', type: 'questionario' },
  { id: 3, title: 'Feedback da nova interface', company: 'Mercado Pago', description: 'Ajude-nos avaliando a nova experiência de compra.', time: '10 min', reward: '15 tokens', rewardBg: 'bg-yellow-100', rewardText: 'text-yellow-800', href: '#', type: 'comentario' },
  { id: 4, title: 'Pesquisa de usabilidade', company: 'PicPay', description: 'Teste nosso novo fluxo de cadastro.', time: '7 min', reward: '25 tokens', rewardBg: 'bg-purple-100', rewardText: 'text-purple-700', href: '#', type: 'questionario' },
  { id: 5, title: 'Avaliação do suporte técnico', company: 'Nubank', description: 'Sua opinião sobre nosso suporte é essencial.', time: '4 min', reward: '12 tokens', rewardBg: 'bg-pink-100', rewardText: 'text-pink-700', href: '#', type: 'comentario' },
  { id: 6, title: 'Questionário de satisfação', company: 'XP Investimentos', description: 'Queremos saber o que achou dos nossos serviços.', time: '9 min', reward: '18 tokens', rewardBg: 'bg-red-100', rewardText: 'text-red-700', href: '#', type: 'questionario' },
  { id: 7, title: 'Opinião sobre novo layout', company: 'Mercado Pago', description: 'Conte-nos se o novo visual está mais intuitivo.', time: '6 min', reward: '14 tokens', rewardBg: 'bg-indigo-100', rewardText: 'text-indigo-700', href: '#', type: 'comentario' },
  { id: 8, title: 'Questionário sobre funcionalidades', company: 'Binance', description: 'Você conseguiu usar todas as funções sem problemas?', time: '11 min', reward: '22 tokens', rewardBg: 'bg-green-200', rewardText: 'text-green-900', href: '#', type: 'questionario' },
  { id: 9, title: 'Pesquisa de satisfação do app', company: 'Nubank', description: 'Como você avalia nosso aplicativo?', time: '10 min', reward: '17 tokens', rewardBg: 'bg-pink-200', rewardText: 'text-pink-900', href: '#', type: 'comentario' },
  { id: 10, title: 'Experiência com suporte recente', company: 'XP Investimentos', description: 'Avalie seu último contato com o suporte.', time: '5 min', reward: '11 tokens', rewardBg: 'bg-red-200', rewardText: 'text-red-900', href: '#', type: 'questionario' },
  { id: 11, title: 'Feedback do novo recurso de investimentos', company: 'Transfero', description: 'Nos diga se gostou da nova aba de investimentos.', time: '12 min', reward: '30 tokens', rewardBg: 'bg-blue-200', rewardText: 'text-blue-900', href: '#', type: 'comentario' },
  { id: 12, title: 'Questionário sobre cashback', company: 'PicPay', description: 'O sistema de cashback atendeu suas expectativas?', time: '9 min', reward: '21 tokens', rewardBg: 'bg-purple-200', rewardText: 'text-purple-900', href: '#', type: 'questionario' },
];



function extrairMinutos(time: string) {
  const num = parseInt(time);
  return isNaN(num) ? 0 : num;
}

function getInitials(fullName: string): string {
  return fullName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export default function CardAvaliacao() {
  const [tipoFiltro, setTipoFiltro] = useState<'todos' | 'comentario' | 'questionario'>('todos');
  const [ordenarPor, setOrdenarPor] = useState<'az' | 'menor_5' | 'igual_5' | 'igual_10' | 'maior_10'>('az');
  const [pesquisaEmpresa, setPesquisaEmpresa] = useState('');
  const [pesquisaTokens, setPesquisaTokens] = useState('');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [itensPorPagina, setItensPorPagina] = useState(6);

  useEffect(() => {
    const atualizarItensPorPagina = () => {
      if (window.innerWidth < 640) {
        setItensPorPagina(3);
      } else {
        setItensPorPagina(6);
      }
    };
    atualizarItensPorPagina();
    window.addEventListener('resize', atualizarItensPorPagina);
    return () => window.removeEventListener('resize', atualizarItensPorPagina);
  }, []);

  let filtrado = dadosFicticios
    .filter((card) => tipoFiltro === 'todos' || card.type === tipoFiltro)
    .filter((card) => card.company.toLowerCase().includes(pesquisaEmpresa.toLowerCase()))
    .filter((card) => card.reward.toLowerCase().includes(pesquisaTokens.toLowerCase()));

  if (ordenarPor === 'menor_5') {
    filtrado = filtrado.filter((card) => extrairMinutos(card.time) < 5);
  } else if (ordenarPor === 'igual_5') {
    filtrado = filtrado.filter((card) => {
      const minutos = extrairMinutos(card.time);
      return minutos >= 5 && minutos <= 9;
    });
  } else if (ordenarPor === 'igual_10') {
    filtrado = filtrado.filter((card) => extrairMinutos(card.time) === 10);
  } else if (ordenarPor === 'maior_10') {
    filtrado = filtrado.filter((card) => extrairMinutos(card.time) > 10);
  } else if (ordenarPor === 'az') {
    filtrado.sort((a, b) => a.title.localeCompare(b.title));
  }

  const totalPaginas = Math.ceil(filtrado.length / itensPorPagina);
  const dadosPaginados = filtrado.slice((paginaAtual - 1) * itensPorPagina, paginaAtual * itensPorPagina);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-[#1c1c1c] min-h-screen">
      {/* Filtros topo */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full max-w-5xl gap-4">
        <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
          {['todos', 'comentario', 'questionario'].map((tipo) => (
            <button
              key={tipo}
              onClick={() => setTipoFiltro(tipo as any)}
              className={`px-4 py-2 rounded-md text-white border ${
                tipoFiltro === tipo ? 'bg-blue-500' : 'bg-transparent'
              }`}
            >
              {tipo === 'todos' ? 'Todos os tipos' : tipo === 'comentario' ? 'Comentários' : 'Questionários'}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-white justify-center sm:justify-end">
          <label htmlFor="ordenar" className="text-sm">
            Filtrar:
          </label>
          <select
            id="ordenar"
            value={ordenarPor}
            onChange={(e) => setOrdenarPor(e.target.value as any)}
            className="p-2 bg-gray-800 rounded-md text-white"
          >
            <option value="az">A-Z</option>
            <option value="menor_5">-5 min</option>
            <option value="igual_5">+5 min</option>
            <option value="igual_10">10 min</option>
            <option value="maior_10">+10 min</option>
          </select>
        </div>
      </div>

      {/* Busca */}
      <div className="flex gap-4 flex-wrap justify-center w-full max-w-3xl">
        <input
          type="text"
          placeholder="Buscar por empresa"
          className="p-2 rounded-md bg-gray-800 text-white w-full sm:w-auto"
          value={pesquisaEmpresa}
          onChange={(e) => setPesquisaEmpresa(e.target.value)}
        />
        <input
          type="text"
          placeholder="Buscar por tokens"
          className="p-2 rounded-md bg-gray-800 text-white w-full sm:w-auto"
          value={pesquisaTokens}
          onChange={(e) => setPesquisaTokens(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dadosPaginados.map((card) => (
          <div
            key={card.id}
            className="bg-gray-950 rounded-lg p-6 shadow-lg flex flex-col bg-opacity-45 w-full max-w-xs"
          >
            <div className="flex items-center mb-2">
              <div className="rounded-full w-10 h-10 bg-purple-200 text-purple-800 flex items-center justify-center font-bold text-sm mr-3 select-none">
                {getInitials(card.company)}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                {card.company}
              </h2>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
            <p className="text-gray-300 text-base flex-grow mb-4">{card.description}</p>
            <div className="mt-auto mb-4">
              <div className="flex items-center text-gray-400 text-sm mb-1">
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
                {card.time}
              </div>
              <div
                className={`${card.rewardBg} ${card.rewardText} text-xs font-semibold inline-block px-2 py-0.5 rounded-full shadow-sm`}
                style={{ boxShadow: '0 0 6px rgba(0,0,0,0.25)' }}
              >
                {card.reward}
              </div>
            </div>
            <a href={card.href}>
              <Botao2 texto="Participar" />
            </a>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex gap-2 items-center mt-6 flex-wrap justify-center">
        <button
          onClick={() => setPaginaAtual((p) => Math.max(p - 1, 1))}
          className="px-3 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition"
        >
          Anterior
        </button>
        {Array.from({ length: totalPaginas }).map((_, index) => {
          const numero = index + 1;
          const ativo = paginaAtual === numero;
          return (
            <button
              key={index}
              onClick={() => setPaginaAtual(numero)}
              className={`w-8 h-8 rounded-md text-sm font-semibold transition-colors duration-200 ${
                ativo ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {numero}
            </button>
          );
        })}
        <button
          onClick={() => setPaginaAtual((p) => Math.min(p + 1, totalPaginas))}
          className="px-3 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
