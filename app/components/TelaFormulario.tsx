"use client";
import React, { useState } from "react";
import { Botao1, Botao2 } from "./Botao";

export default function TelaFormulario() {
  const [respostas, setRespostas] = useState<string[]>(["", "",]); // Começa com 3 respostas

  const adicionarResposta = () => {
    setRespostas([...respostas, ""]);
  };

  const removerResposta = (index: number) => {
    const novasRespostas = respostas.filter((_, i) => i !== index);
    setRespostas(novasRespostas);
  };

  const handleChange = (index: number, value: string) => {
    const novasRespostas = [...respostas];
    novasRespostas[index] = value;
    setRespostas(novasRespostas);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg px-5 py-1 overflow-scroll max-h-[90vh]">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 mt-2">
        Criar Questionário
      </h1>

      {/* Seção de Informações do Questionário */}
      <section className="mb-8">
        <div className="flex items-center text-blue-600 mb-4">
          {/* Ícone: Clipboard */}
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
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
            />
          </svg>
          <h2 className="text-xl font-semibold">Informações do Questionário</h2>
        </div>

        <form>
          {/* Input Título do Questionário */}
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Título do Questionário
          </label>
          <input
            type="text"
            placeholder="Ex: Avaliação da Interface de Usuário"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Link do seu site
          </label>
          <input
            type="text"
            placeholder="Ex: https://meusite.com.br"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          {/* Textarea Descrição */}
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Descrição do Questionário
          </label>
          <textarea
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Descreva o objetivo do questionário..."
            rows={4}
          />

          {/* Respostas Dinâmicas */}
          <div>
            {respostas.map((resposta, index) => (
              <div key={index} className="flex items-center gap-2 mb-4">
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Resposta {index + 1}
                  </label>
                  <input
                    type="text"
                    placeholder={`Resposta ${index + 1}`}
                    value={resposta}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removerResposta(index)}
                  className="bg-red-500 hover:bg-red-600 hover:bg-opacity-40 bg-opacity-10 px-1.5 rounded-full text-red-600 hover:text-white font-bold text-lg mt-6"
                  title="Remover resposta"
                >
                  ✕
                </button>
              </div>
            ))}

            <div
              onClick={(e) => {
                e.preventDefault(); // impede o submit do formulário
                adicionarResposta();
              }}
              className="flex px-[20vw] lg:px-[15vw]"
            >
              <Botao2 className="bg-opacity-60 hover:bg-opacity-60 !rounded-full" texto="Adicionar resposta" />
            </div>
          </div>

          <div className="mt-6">
            <Botao1 texto={"Salvar Questionário"} />
          </div>
        </form>
      </section>
    </div>
  );
}
