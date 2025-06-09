"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CardAvaliacao } from "@/app/components/CardAvaliacao"; // Ajuste o caminho conforme sua estrutura
import { Mission } from "../company/page";

export default function AvailableEvaluations() {
  const [evaluations, setEvaluations] = useState<Mission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchEvaluations() {
      try {
        setLoading(true);
        setError(null);

        // Simulação de chamada de API com dados estáticos
        const mockData: Mission[] = [
          {
            id: 1,
            mission_type: "RESPONDA",
            title: "App de Delivery",
            description:
              "Avalie nossa nova interface de usuário e o processo de pedido do aplicativo de delivery.",
            url: "/auth/login",
            status: "ativa",
            created_at: "2025-06-09T10:00:00Z",
            updated_at: "2025-06-09T10:00:00Z",
            company: 1,
            contracted_plan: 2,
            assigned_to: 5,
          },
          {
            id: 2,
            mission_type: "COMENTE",
            title: "Fones de Ouvido Pro",
            description:
              "Teste e avalie nossos novos fones de ouvido com cancelamento de ruído ativo.",
            url: "/auth/login",
            status: "ativa",
            created_at: "2025-06-09T12:00:00Z",
            updated_at: "2025-06-09T12:00:00Z",
            company: 1,
            contracted_plan: 1,
            assigned_to: 10,
          },
          {
            id: 3,
            mission_type: "SUGIRA",
            title: "Serviço de Streaming",
            description:
              "Avalie a experiência de usuário e as recomendações do nosso novo serviço de streaming.",
            url: "/auth/login",
            status: "ativa",
            created_at: "2025-06-08T09:30:00Z",
            updated_at: "2025-06-09T09:00:00Z",
            company: 2,
            contracted_plan: 3,
            assigned_to: 8,
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
                  <CardAvaliacao
                    CardAvaliacaoInfo={evaluation}
                    key={evaluation.id}
                  />
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
