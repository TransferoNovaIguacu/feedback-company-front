import React, { useState } from "react";
import { Botao1 } from "./Botao";
import { X } from "lucide-react";
import Image from "next/image";

export default function TipoPesquisaSelector() {
  const [selecionado, setSelecionado] = useState<string | null>(null);

  const opcoes = [
    {
      id: "depoimento",
      titulo: "Depoimento",
      descricao: "Colete feedback em formato de texto livre",
      iconeCinza: "/svg/icon-message-cinza.svg",
      iconeRoxo: "/svg/icon-message-roxo.svg",
    },
    {
      id: "questionario",
      titulo: "Questionário",
      descricao: "Crie perguntas estruturadas com múltiplas opções",
      iconeCinza: "/svg/icon-question-cinza.svg",
      iconeRoxo: "/svg/icon-question-roxo.svg",
    },
  ];

  function handleSelecionar(id: string) {
    setSelecionado(id);
  }

  function handleCancelar() {
    setSelecionado(null);
  }

  function handleContinuar() {
    if (selecionado) {
      console.log("Redirecionar para:", selecionado);
    }
  }

  function handleFechar() {
    console.log("Fechar botão clicado");
  }

  function renderOpcao(opcao: typeof opcoes[number]) {
    const isSelecionado = selecionado === opcao.id;

    return (
      <div
        key={opcao.id}
        onClick={function () { handleSelecionar(opcao.id); }}
        className={`cursor-pointer flex flex-col items-center text-center gap-2 p-6 border rounded-lg transition ${
          isSelecionado ? "border-blue-600 bg-gray-100" : "hover:border-purple-400"
        }`}
      >
        <div
          className={`flex items-center justify-center w-14 h-14 rounded-full ${
            isSelecionado ? "bg-blue-200" : "bg-gray-100"
          }`}
        >
          <Image
            src={isSelecionado ? opcao.iconeRoxo : opcao.iconeCinza}
            alt={opcao.titulo + " ícone"}
            height={24}
            width={24}
          />
        </div>
        <div className="font-semibold text-black">{opcao.titulo}</div>
        <div className="text-sm text-gray-600">{opcao.descricao}</div>
      </div>
    );
  }

  return (
    <div className="relative max-w-md mx-auto p-6 border rounded-xl shadow-sm bg-white">
      <button
        onClick={handleFechar}
        className="absolute top-7 right-5 text-gray-400 hover:text-gray-600 transition"
        aria-label="Fechar"
      >
        <X size={20} />
      </button>

      <h2 className="text-xl font-extrabold mb-6 text-black text-left">
        Escolha o tipo de pesquisa
      </h2>

      <div className="space-y-4">
        {opcoes.map(function (opcao) {
          return renderOpcao(opcao);
        })}
      </div>

      <div className="mt-6 flex gap-4 justify-end">
        <button
          onClick={handleCancelar}
          className="text-gray-600 hover:font-bold transition"
        >
          Cancelar
        </button>
        <div className="w-24" onClick={handleContinuar}>
          <Botao1 texto="Continuar" />
        </div>
      </div>
    </div>
  );
}
