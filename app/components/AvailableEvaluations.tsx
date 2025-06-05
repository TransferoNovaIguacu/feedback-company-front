"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CardAvaliacao, CardAvaliacaoType  } from "@/app/components/CardAvaliacao"; // Ajuste o caminho conforme sua estrutura

export default function AvailableEvaluations() {
  const [evaluations, setEvaluations] = useState<CardAvaliacaoType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchEvaluations() {
      try {
        setLoading(true);
        setError(null);

        // Simulação de chamada de API com dados estáticos
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
        ];
        setEvaluations(mockData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocorreu um erro desconhecido.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchEvaluations();
  }, []);



  return (
    <div className="bg-[#0e1125] w-full h-fit">
      <main className="py-16 w-full">
        <section className="py-16 text-white flex flex-col justify-center items-center">
          <div className="max-w-7xl w-full">
            {/* Cabeçalho da seção */}
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-4xl font-bold">Avaliações Disponíveis</h2>
              <a
                href="#"
                className="flex items-center text-[#4C64D3] hover:text-[#6A7CDA] transition-colors duration-200"
              >
                Ver todas
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>

            {/* Mensagens de estado (carregando/erro) */}
            {loading && (
              <p className="text-center text-lg text-gray-400">
                Carregando avaliações...
              </p>
            )}
            {error && (
              <p className="text-center text-lg text-red-500">Erro: {error}</p>
            )}

            {/* Cards de avaliações */}
            {!loading && !error && evaluations.length === 0 && (
              <p className="text-center text-lg text-gray-400">
                Nenhuma avaliação disponível no momento.
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {!loading &&
                !error &&
                evaluations.map((evaluation) => (
                  <CardAvaliacao CardAvaliacaoInfo={evaluation} key={evaluation.id}  /> 
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}