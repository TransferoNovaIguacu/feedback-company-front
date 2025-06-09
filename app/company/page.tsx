"use client";

import { useState, useEffect, SetStateAction } from "react";
import { Botao1 } from "../components/Botao";
import { CardAvaliacao, } from "../components/CardAvaliacao";
import CriacaoComentario from "../components/criacao-comentario";
import api from "@/utils/axios";

// const mockData: CardAvaliacaoType[] = [
//   {
//     id: 1,
//     title: "App de Delivery",
//     company: "FoodExpress Inc.",
//     description:
//       "Avalie nossa nova interface de usuário e o processo de pedido do aplicativo de delivery.",
//     time: "15-20 min",
//     reward: "+60 FTK",
//     rewardBg: "bg-[#282B33]",
//     rewardText: "text-white",
//     href: "/auth/login",
//   },
//   {
//     id: 2,
//     title: "Fones de Ouvido Pro",
//     company: "TechCorp",
//     description:
//       "Teste e avalie nossos novos fones de ouvido com cancelamento de ruído ativo.",
//     time: "30-40 min",
//     reward: "+120 FTK",
//     rewardBg: "bg-[#5A388D]",
//     rewardText: "text-white",
//     href: "/auth/login",
//   },
//   {
//     id: 3,
//     title: "Serviço de Streaming",
//     company: "MediaStream",
//     description:
//       "Avalie a experiência de usuário e as recomendações do nosso novo serviço de streaming.",
//     time: "20-25 min",
//     reward: "+85 FTK",
//     rewardBg: "bg-[#285A38]",
//     rewardText: "text-white",
//     href: "/auth/login",
//   },
//   {
//     id: 4,
//     title: "App de Delivery",
//     company: "FoodExpress Inc.",
//     description:
//       "Avalie nossa nova interface de usuário e o processo de pedido do aplicativo de delivery.",
//     time: "15-20 min",
//     reward: "+60 FTK",
//     rewardBg: "bg-[#282B33]",
//     rewardText: "text-white",
//     href: "/auth/login",
//   },
//   {
//     id: 5,
//     title: "Fones de Ouvido Pro",
//     company: "TechCorp",
//     description:
//       "Teste e avalie nossos novos fones de ouvido com cancelamento de ruído ativo.",
//     time: "30-40 min",
//     reward: "+120 FTK",
//     rewardBg: "bg-[#5A388D]",
//     rewardText: "text-white",
//     href: "/auth/login",
//   },
//   {
//     id: 6,
//     title: "Serviço de Streaming",
//     company: "MediaStream",
//     description:
//       "Avalie a experiência de usuário e as recomendações do nosso novo serviço de streaming.",
//     time: "20-25 min",
//     reward: "+85 FTK",
//     rewardBg: "bg-[#285A38]",
//     rewardText: "text-white",
//     href: "/auth/login",
//   },
//   {
//     id: 7,
//     title: "App de Delivery",
//     company: "FoodExpress Inc.",
//     description:
//       "Avalie nossa nova interface de usuário e o processo de pedido do aplicativo de delivery.",
//     time: "15-20 min",
//     reward: "+60 FTK",
//     rewardBg: "bg-[#282B33]",
//     rewardText: "text-white",
//     href: "/auth/login",
//   },
//   {
//     id: 8,
//     title: "Fones de Ouvido Pro",
//     company: "TechCorp",
//     description:
//       "Teste e avalie nossos novos fones de ouvido com cancelamento de ruído ativo.",
//     time: "30-40 min",
//     reward: "+120 FTK",
//     rewardBg: "bg-[#5A388D]",
//     rewardText: "text-white",
//     href: "/auth/login",
//   },
//   {
//     id: 9,
//     title: "Serviço de Streaming",
//     company: "MediaStream",
//     description:
//       "Avalie a experiência de usuário e as recomendações do nosso novo serviço de streaming.",
//     time: "20-25 min",
//     reward: "+85 FTK",
//     rewardBg: "bg-[#285A38]",
//     rewardText: "text-white",
//     href: "/auth/login",
//   },
// ];
export interface Mission {
  id: number;
  mission_type: string;
  title: string;
  description: string;
  url: string;
  status: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  company: number;
  contracted_plan: number;
  assigned_to: number;
}

export const fetchMissions = async (setMockData: React.Dispatch<SetStateAction<Mission[]>>) => {
  console.log("Executando fetchMissions...");
  try {
    const token = localStorage.getItem("TOKEN");
    if (!token) throw new Error("Token não encontrado");

    const response = await api.get("missions/missions/company-missions/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setMockData(response.data);
  } catch (error) {
    console.error("Erro em fetchMissions:", error);
  }
};

export default function CompanyPage() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [busca, setBusca] = useState("");
  const [creatMission, setCreatMission] = useState<boolean>(false);
  const [mockData, setMockData] = useState<Mission[]>([]);
  const itensPorPagina = 6;

  const hundleOpen = () => {
    setCreatMission(true);
  };

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
    if (typeof window !== "undefined") {
      fetchMissions(setMockData);
    }
  }, [busca]);

  return (
    <div className="h-screen w-full flex flex-col justify-start items-center py-5">
      {/* Campo de busca */}
      <div className="px-10 flex gap-2 w-full ">
        <input
          type="text"
          placeholder="Buscar por título..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="mb-6 px-4 py-2 text-zinc-700 border border-gray-300 rounded !w-[69vw] focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <div onClick={() => hundleOpen()}>
          <Botao1 texto="Criar Pesquisa" className="h-fit max-w-[20vw]" />
        </div>
      </div>

      <div
        className={`h-full flex ${
          creatMission ? "" : "flex-col"
        } justify-between`}
      >
        {creatMission && (
          <div className="min-w-[60vw] !max-h-[70vh]">
            <CriacaoComentario setMockData={setMockData} mockData={mockData} />
          </div>
        )}
        <div
          className={`grid grid-cols-1 ${
            creatMission ? "" : "md:grid-cols-2 lg:grid-cols-3"
          } gap-5 px-10 h-[88vh] overflow-scroll`}
        >
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

        {!creatMission && totalPaginas > 1 && (
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
