"use client";
import React, { useState } from "react";
import Iconclipboard from '@/public/svg/Iconclipboard.svg';

export default function TelaFormulario() {
  const [nomeEmpresa, setNomeEmpresa] = useState("Transfero");
  const [tituloQuestionario, setTituloQuestionario] = useState("Avaliação da Interface de Usuário");
  const [descricaoQuestionario, setDescricaoQuestionario] = useState(
    "Descreva o objetivo do questionário..."
  );
  const [recompensaTokens] = useState(5);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Criar Questionário
        </h1>

        {/* Seção de Informações do Questionário */}
        <section className="mb-8">
          <div className="flex items-center text-blue-600 mb-4">
            {/* Ícone: Clipboard */}
            <div className="mb-2">
              { Iconclipboard } 
            </div>
            <h2 className="text-xl font-semibold">
              Informações do Questionário
            </h2>
          </div>

          <form>
            {/* Input Nome da Empresa */}
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Nome da Empresa
            </label>
            <input
              type="text"
              placeholder="Ex: Transfero"
              value={nomeEmpresa}
              onChange={(e) => setNomeEmpresa(e.target.value)}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            {/* Input Título do Questionário */}
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Título do Questionário
            </label>
            <input
              type="text"
              placeholder="Ex: Avaliação da Interface de Usuário"
              value={tituloQuestionario}
              onChange={(e) => setTituloQuestionario(e.target.value)}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            {/* Textarea Descrição */}
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Descrição do Questionário
            </label>
            <textarea
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Descreva o objetivo do questionário..."
              value={descricaoQuestionario}
              onChange={(e) => setDescricaoQuestionario(e.target.value)}
              rows={4}
            />

            {/* Recompensa Tokens */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Recompensa em Tokens (por resposta)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-1 flex items-center  text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="number"
                  className="shadow appearance-none border rounded-lg w-full py-2 pl-8 pr-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={recompensaTokens}
                  readOnly
                  min="0"
                />
              </div>
            </div>
          </form>
        </section>

        {/* Seção de Perguntas */}
        <section>
          <div className="flex items-center text-blue-600 mb-4">
            <svg
              className="h-6 w-6 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9a3.375 3.375 0 016.5 0c0 1.824-1.5 2.25-2.25 3M12 17h.008m-.008 5a9 9 0 110-18 9 9 0 010 18z"
              ></path>
            </svg>
            <h2 className="text-xl font-semibold">Perguntas</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="/en-construcao" className="w-fit">
              <div className="flex w-full">
                <button
                  className="flex items-center justify-center gap-2 w-full 
                       bg-white text-gray-700 font-semibold 
                       border border-gray-300 
                       px-4 py-2 rounded-md 
                       hover:bg-gray-100 
                       focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 
                       transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    />
                  </svg>
                  Adicionar Múltipla Escolha
                </button>
              </div>
            </a>

            <a href="/en-construcao" className="w-fit">
              <div className="flex w-full">
                <button
                  className="flex items-center justify-center gap-2 w-full 
                       bg-white text-gray-700 font-semibold 
                       border border-gray-300 
                       px-4 py-2 rounded-md 
                       hover:bg-gray-100 
                       focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 
                       transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                  Adicionar Texto Livre
                </button>
              </div>
            </a>
          </div>
        </section>

        {/* Botão de Salvar/Enviar */}
        <div className="flex justify-end mt-8">
          <a href="/en-construcao" className="w-fit">
            <div className="flex w-full">
              <button
                className="flex items-center justify-center gap-2 w-full 
                   bg-white text-gray-700 font-semibold 
                   border border-gray-300 
                   px-4 py-2 rounded-md 
                   hover:bg-gray-100 
                   focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 
                   transition"
              >
                Salvar Questionário
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
