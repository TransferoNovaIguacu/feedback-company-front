// app/Avaliacao/page.tsx
"use client"; // Necessário para usar hooks como useState, useEffect e useRouter

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Importa o hook useRouter

// Definição do tipo para uma avaliação (opcional, mas boa prática com TypeScript)
interface Evaluation {
  id: string; // Adicione um ID para identificar a avaliação, vindo do backend
  title: string;
  company: string;
  description: string;
  time: string;
  reward: string;
  rewardBg: string;
  rewardText: string;
}

export default function AvailableEvaluations() {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Inicializa o useRouter


  // Função para buscar dados do backend
  useEffect(() => {
    async function fetchEvaluations() {
      try {
        setLoading(true);
        setError(null);
        // Exemplo de chamada de API. Substitua pelo seu endpoint real.
        // const response = await fetch('/api/evaluations');
        // if (!response.ok) {
        //   throw new Error('Falha ao buscar avaliações');
        // }
        // const data: Evaluation[] = await response.json();
        // setEvaluations(data);

        // Por enquanto, usando dados estáticos para simular o backend
        const mockData: Evaluation[] = [
          {
            id: '1',
            title: "App de Delivery",
            company: "FoodExpress Inc.",
            description: "Avalie nossa nova interface de usuário e o processo de pedido do aplicativo de delivery.",
            time: "15-20 min",
            reward: "+60 FTK",
            rewardBg: "bg-[#282B33]",
            rewardText: "text-white",
          },
          {
            id: '2',
            title: "Fones de Ouvido Pro",
            company: "TechCorp",
            description: "Teste e avalie nossos novos fones de ouvido com cancelamento de ruído ativo.",
            time: "30-40 min",
            reward: "+120 FTK",
            rewardBg: "bg-[#5A388D]",
            rewardText: "text-white",
          },
          {
            id: '3',
            title: "Serviço de Streaming",
            company: "MediaStream",
            description: "Avalie a experiência de usuário e as recomendações do nosso novo serviço de streaming.",
            time: "20-25 min",
            reward: "+85 FTK",
            rewardBg: "bg-[#285A38]",
            rewardText: "text-white",
          },
        ];
        setEvaluations(mockData); // Define os dados mockados
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Ocorreu um erro desconhecido.');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchEvaluations();
  }, []); // O array vazio garante que o useEffect rode apenas uma vez ao montar o componente

  // Função para lidar com o clique no botão "Participar"
  const handleParticipateClick = () => {
    router.push('/auth/login'); // Redireciona para a rota /auth/login
  };

  return (
    <div className="bg-[#0A0B10] w-full h-fit">
      {/* Você pode incluir a Navbar aqui se quiser que ela apareça nesta rota */}
      {/* Certifique-se de importar a Navbar se precisar dela aqui, por exemplo:
      import { Navbar } from '@/components/Navbar';
      <Navbar />
      */}
      <main className="py-16 w-full"> {/* Ajuste o padding se a Navbar estiver presente e for absoluta/fixa */}
        <section className="py-16 text-white flex flex-col justify-center items-center">
          <div className="max-w-7xl w-full">
            {/* Cabeçalho da seção */}
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-4xl font-bold">Avaliações Disponíveis</h2>
              <a href="#" className="flex items-center text-[#4C64D3] hover:text-[#6A7CDA] transition-colors duration-200">
                Ver todas
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Mensagens de estado (carregando/erro) */}
            {loading && <p className="text-center text-lg text-gray-400">Carregando avaliações...</p>}
            {error && <p className="text-center text-lg text-red-500">Erro: {error}</p>}

            {/* Cards de avaliações */}
            {!loading && !error && evaluations.length === 0 && (
              <p className="text-center text-lg text-gray-400">Nenhuma avaliação disponível no momento.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {!loading && !error && evaluations.map((evaluation) => (
                <div key={evaluation.id} className="bg-[#101116] rounded-lg p-6 shadow-lg flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{evaluation.title}</h3>
                    <span className={`${evaluation.rewardBg} ${evaluation.rewardText} text-sm font-medium px-3 py-1 rounded-full`}>
                      {evaluation.reward}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{evaluation.company}</p>
                  <p className="text-gray-300 text-base flex-grow mb-4">{evaluation.description}</p>

                  <div className="flex items-center text-gray-400 text-sm mt-auto mb-4">
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
                    {evaluation.time}
                  </div>

                  <button
                    onClick={handleParticipateClick} // Adiciona o evento de clique
                    className="w-full bg-[#1A1B23] hover:bg-[#26282E] text-white py-2 rounded-md transition-colors duration-200"
                  >
                    Participar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}