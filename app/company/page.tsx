"use client";
import { useState, useEffect } from "react";
import { Botao1 } from "../components/Botao";
import { CardAvaliacao, CardAvaliacaoType } from "../components/CardAvaliacao";

const mockData: CardAvaliacaoType[] = [
  {
    id: 1,
    title: "App de Delivery",
    company: "FoodExpress Inc.",
    description:
      "Avalie nossa nova interface de usuário e o processo de pedido do aplicativo de delivery.",
    time: "15-20 min",
    reward: "+60 FTK",
    rewardBg: "bg-[#282B33]",
    rewardText: "text-white",
    href: "/auth/login",
  },
  {
    id: 2,
    title: "Fones de Ouvido Pro",
    company: "TechCorp",
    description:
      "Teste e avalie nossos novos fones de ouvido com cancelamento de ruído ativo.",
    time: "30-40 min",
    reward: "+120 FTK",
    rewardBg: "bg-[#5A388D]",
    rewardText: "text-white",
    href: "/auth/login",
  },
  {
    id: 3,
    title: "Serviço de Streaming",
    company: "MediaStream",
    description:
      "Avalie a experiência de usuário e as recomendações do nosso novo serviço de streaming.",
    time: "20-25 min",
    reward: "+85 FTK",
    rewardBg: "bg-[#285A38]",
    rewardText: "text-white",
    href: "/auth/login",
  },
  {
    id: 4,
    title: "App de Delivery",
    company: "FoodExpress Inc.",
    description:
      "Avalie nossa nova interface de usuário e o processo de pedido do aplicativo de delivery.",
    time: "15-20 min",
    reward: "+60 FTK",
    rewardBg: "bg-[#282B33]",
    rewardText: "text-white",
    href: "/auth/login",
  },
  {
    id: 5,
    title: "Fones de Ouvido Pro",
    company: "TechCorp",
    description:
      "Teste e avalie nossos novos fones de ouvido com cancelamento de ruído ativo.",
    time: "30-40 min",
    reward: "+120 FTK",
    rewardBg: "bg-[#5A388D]",
    rewardText: "text-white",
    href: "/auth/login",
  },
  {
    id: 6,
    title: "Serviço de Streaming",
    company: "MediaStream",
    description:
      "Avalie a experiência de usuário e as recomendações do nosso novo serviço de streaming.",
    time: "20-25 min",
    reward: "+85 FTK",
    rewardBg: "bg-[#285A38]",
    rewardText: "text-white",
    href: "/auth/login",
  },
  {
    id: 7,
    title: "App de Delivery",
    company: "FoodExpress Inc.",
    description:
      "Avalie nossa nova interface de usuário e o processo de pedido do aplicativo de delivery.",
    time: "15-20 min",
    reward: "+60 FTK",
    rewardBg: "bg-[#282B33]",
    rewardText: "text-white",
    href: "/auth/login",
  },
  {
    id: 8,
    title: "Fones de Ouvido Pro",
    company: "TechCorp",
    description:
      "Teste e avalie nossos novos fones de ouvido com cancelamento de ruído ativo.",
    time: "30-40 min",
    reward: "+120 FTK",
    rewardBg: "bg-[#5A388D]",
    rewardText: "text-white",
    href: "/auth/login",
  },
  {
    id: 9,
    title: "Serviço de Streaming",
    company: "MediaStream",
    description:
      "Avalie a experiência de usuário e as recomendações do nosso novo serviço de streaming.",
    time: "20-25 min",
    reward: "+85 FTK",
    rewardBg: "bg-[#285A38]",
    rewardText: "text-white",
    href: "/auth/login",
  },
];

export default function CompanyPage() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [busca, setBusca] = useState("");
  const itensPorPagina = 6;

  // Filtra os cards conforme o título
  const dadosFiltrados = mockData.filter((item) =>
    item.title.toLowerCase().includes(busca.toLowerCase())
  );

  const totalPaginas = Math.ceil(dadosFiltrados.length / itensPorPagina);

  const dadosVisiveis = dadosFiltrados.slice(
    (paginaAtual - 1) * itensPorPagina,
    paginaAtual * itensPorPagina
  );

  // Resetar para a página 1 quando a busca mudar
  useEffect(() => {
    setPaginaAtual(1);
  }, [busca]);

  return (
    <div className="h-screen w-full flex flex-col justify-start items-center py-10">
      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Buscar por título..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="mb-6 px-4 py-2 text-zinc-700 border border-gray-300 rounded w-80 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />

      <div className="h-full flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10">
          {dadosVisiveis.length > 0 ? (
            dadosVisiveis.map((data) => (
              <CardAvaliacao
                botao={<Botao1 texto="Ver Detalhes" />}
                className="bg-violet-200 bg-opacity-100 h-full"
                key={data.id}
                CardAvaliacaoInfo={data}
              />
            ))
          ) : (
            <p className="text-white col-span-full text-center">
              Nenhum resultado encontrado.
            </p>
          )}
        </div>

        {totalPaginas > 1 && (
          <div className="mt-8 flex justify-center items-center gap-4">
            <button
              onClick={() => setPaginaAtual((prev) => Math.max(prev - 1, 1))}
              disabled={paginaAtual === 1}
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
            >
              {"<<<"}
            </button>
            <span className="text-zinc-600">
              Página {paginaAtual} de {totalPaginas}
            </span>
            <button
              onClick={() =>
                setPaginaAtual((prev) => Math.min(prev + 1, totalPaginas))
              }
              disabled={paginaAtual === totalPaginas}
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
            >
              {">>>"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
