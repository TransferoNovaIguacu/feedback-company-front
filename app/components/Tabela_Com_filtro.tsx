'use client';

import React, { useEffect, useState } from 'react';
import { ThumbsUp, ThumbsDown, MoreHorizontal } from 'lucide-react';

const feedbacksData = [
  {
    user: "John Doe",
    Nível: 4,
    initials: "JD",
    feedback: "O menu de navegação não é intuitivo. Tive dificuldades para encontrar a seção de categorias de produtos. Considere reorganizar o menu superior.",
    date: new Date(),
    rating: "Muito útil"
  },
  {
    user: "Alice Smith",
    Nível: 3,
    initials: "AS",
    feedback: "O processo de finalização da compra foi tranquilo, mas sugiro adicionar mais opções de pagamento, como Apple Pay e Google Pay.",
    date: new Date(Date.now() - 86400000),
    rating: "Útil"
  },
  {
    user: "Robert Johnson",
    Nível: 5,
    initials: "RJ",
    feedback: "As imagens dos produtos demoram para carregar no celular. Considere otimizá-las para carregar mais rápido.",
    date: new Date('2023-05-12'),
    rating: "Não é Útil"
  },
  {
    user: "Emily Brown",
    Nível: 2,
    initials: "EB",
    feedback: "Adorei o layout! Muito limpo e profissional.",
    date: new Date('2024-03-02'),
    rating: "Muito útil"
  },
  {
    user: "Daniel Wilson",
    Nível: 1,
    initials: "DW",
    feedback: "Alguns links estão quebrados, especialmente na página de FAQ.",
    date: new Date('2024-11-05'),
    rating: "Não é Útil"
  },
  {
    user: "Sophia Davis",
    Nível: 3,
    initials: "SD",
    feedback: "Ótima variedade de produtos, mas os filtros de busca poderiam ser melhores.",
    date: new Date('2024-12-20'),
    rating: "Útil"
  },
  {
    user: "Michael Scott",
    Nível: 4,
    initials: "MS",
    feedback: "Muitos pop-ups. Por favor, diminuam os banners de marketing.",
    date: new Date('2025-01-15'),
    rating: "Não é Útil"
  },
  {
    user: "Olivia Martinez",
    Nível: 2,
    initials: "OM",
    feedback: "O modo escuro é incrível! Seria ótimo poder personalizar ainda mais o tema.",
    date: new Date('2025-02-03'),
    rating: "Muito útil"
  },
  {
    user: "Lucas Silva",
    Nível: 1,
    initials: "LS",
    feedback: "O site demora um pouco para carregar na minha internet.",
    date: new Date('2025-02-10'),
    rating: "Não é Útil"
  },
  {
    user: "Camila Rocha",
    Nível: 5,
    initials: "CR",
    feedback: "Gostei do suporte ao cliente, foram bem rápidos.",
    date: new Date('2025-03-01'),
    rating: "Útil"
  },
  {
    user: "Bruno Ferreira",
    Nível: 2,
    initials: "BF",
    feedback: "Faltam mais opções de idioma além de português e inglês.",
    date: new Date('2025-03-04'),
    rating: "Não é Útil"
  },
  {
    user: "Ana Costa",
    Nível: 3,
    initials: "AC",
    feedback: "Muito bom no celular, gostei da responsividade.",
    date: new Date('2025-03-10'),
    rating: "Muito útil"
  },
  {
    user: "Pedro Gomes",
    Nível: 4,
    initials: "PG",
    feedback: "A navegação entre categorias é bem confusa.",
    date: new Date('2025-03-12'),
    rating: "Não é Útil"
  },
  {
    user: "Julia Almeida",
    Nível: 1,
    initials: "JA",
    feedback: "Design muito bonito, mas faltam descrições detalhadas dos produtos.",
    date: new Date('2025-03-15'),
    rating: "Útil"
  },
  {
    user: "Marcos Tavares",
    Nível: 3,
    initials: "MT",
    feedback: "Adorei o recurso de salvar produtos favoritos.",
    date: new Date('2025-03-17'),
    rating: "Muito útil"
  },
  {
    user: "Larissa Mendes",
    Nível: 2,
    initials: "LM",
    feedback: "Ainda bem que tem modo escuro! Obrigada!",
    date: new Date('2025-03-20'),
    rating: "Muito útil"
  },
  {
    user: "Gustavo Nogueira",
    Nível: 4,
    initials: "GN",
    feedback: "Checkout rápido, mas não gostei do campo de cupom estar escondido.",
    date: new Date('2025-03-22'),
    rating: "Útil"
  },
  {
    user: "Fernanda Duarte",
    Nível: 5,
    initials: "FD",
    feedback: "As imagens de alguns produtos estão com baixa qualidade.",
    date: new Date('2025-03-25'),
    rating: "Não é Útil"
  },
  {
    user: "Henrique Souza",
    Nível: 2,
    initials: "HS",
    feedback: "Achei meio confusa a parte de rastreamento de pedidos.",
    date: new Date('2025-03-28'),
    rating: "Útil"
  },
  {
    user: "Isabela Lopes",
    Nível: 3,
    initials: "IL",
    feedback: "Amei o blog! Traz várias dicas boas.",
    date: new Date('2025-03-30'),
    rating: "Muito útil"
  }
];


const getRatingStyle = (rating: string) => {
  switch (rating) {
    case "Muito útil": return "bg-green-100 text-green-700";
    case "Útil": return "bg-blue-100 text-blue-700";
    case "Não útil": return "bg-red-100 text-red-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

const formatCustomDate = (date: Date) => {
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = date.toDateString() === yesterday.toDateString();

  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (isToday) return `Hoje, ${time}`;
  if (isYesterday) return `Ontem, ${time}`;

  return `${date.getDate()} ${date.toLocaleString('pt-BR', { month: 'short' })} ${date.getFullYear()}`;
};

export default function FeedbackTable() {
  const [feedbacks] = useState(feedbacksData);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("latest");
  const [liked, setLiked] = useState<{ [key: number]: "up" | "down" | null }>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState("All");
  const [itemsPerPage, setItemsPerPage] = useState(10); // Inicialmente 10 para desktop

  // Atualizar itemsPerPage baseado no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(3); // 3 itens para mobile
      } else {
        setItemsPerPage(10); // 10 itens para desktop
      }
      setCurrentPage(1); // Resetar para a primeira página ao redimensionar
    };

    // Definir valor inicial
    handleResize();

    // Adicionar listener para redimensionamento
    window.addEventListener('resize', handleResize);
    
    // Remover listener ao desmontar
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredFeedbacks = feedbacks
    .filter(f =>
      f.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.feedback.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(f => ratingFilter === "All" || f.rating === ratingFilter);

  const sortedFeedbacks = [...filteredFeedbacks].sort((a, b) => {
    if (sortOrder === "latest") return b.date.getTime() - a.date.getTime();
    if (sortOrder === "oldest") return a.date.getTime() - b.date.getTime(); // Nova opção
    return a.user.localeCompare(b.user);
  });

  const paginatedFeedbacks = sortedFeedbacks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredFeedbacks.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, filteredFeedbacks.length);
  const totalResults = filteredFeedbacks.length;

  const toggleLike = (index: number, type: "up" | "down") => {
    setLiked((prev) => ({
      ...prev,
      [index]: prev[index] === type ? null : type
    }));
  };

  return (
    <div className="rounded-xl shadow-sm bg-white p-4 sm:p-6 text-black border border-gray-200 mx-2 sm:mx-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <h2 className="text-xl font-semibold">Avaliações Recentes</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Procurar avaliações..."
            className="border border-gray-300 px-3 py-1.5 rounded text-sm w-full"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <div className="flex gap-2">
            <select
              className="border border-gray-300 px-3 py-1.5 rounded text-sm flex-1 min-w-[120px]"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="latest">Mais recentes</option>
              <option value="oldest">Mais antigos</option> {/* Nova opção adicionada */}
              <option value="az">A - Z</option>
            </select>

            <select
              className="border border-gray-300 px-3 py-1.5 rounded text-sm flex-1 min-w-[120px]"
              value={ratingFilter}
              onChange={(e) => {
                setRatingFilter(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="All">Todas classificações</option>
              <option value="Muito útil">Muito útil</option>
              <option value="Útil">Útil</option>
              <option value="Não útil">Não útil</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabela para desktop */}
      <div className="hidden md:block">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b border-gray-200 bg-gray-50">
              <th className="p-2">Usuário</th>
              <th className="p-2">Avaliação</th>
              <th className="p-2">Datas</th>
              <th className="p-2">Classificações</th>
              <th className="p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {paginatedFeedbacks.map((item, idx) => (
              <tr key={idx} className="border-b text-sm text-black">
                <td className="p-2 flex items-center gap-2">
                  <div className="rounded-full w-8 h-8 bg-purple-200 text-purple-800 flex items-center justify-center font-bold text-sm">
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-black">{item.user}</div>
                    <div className="text-xs text-gray-600">Nível {item.Nível} Avaliador</div>
                  </div>
                </td>
                <td className="p-2">{truncateText(item.feedback, 100)}</td>
                <td className="p-2 text-sm text-black opacity-60">
                  {formatCustomDate(item.date)}
                </td>
                <td className="p-2">
                  <span className={`text-xs px-2 py-1 rounded ${getRatingStyle(item.rating)}`}>
                    {item.rating}
                  </span>
                </td>
                <td className="p-3 flex items-center gap-2">
                  <ThumbsUp
                    size={18}
                    className={`cursor-pointer ${liked[idx] === "up" ? "text-purple-600" : "text-gray-400"}`}
                    onClick={() => toggleLike(idx, "up")}
                  />
                  <ThumbsDown
                    size={18}
                    className={`cursor-pointer ${liked[idx] === "down" ? "text-red-600" : "text-gray-400"}`}
                    onClick={() => toggleLike(idx, "down")}
                  />
                  <MoreHorizontal size={18} className="text-gray-400 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards para mobile */}
      <div className="md:hidden space-y-4">
        {paginatedFeedbacks.map((item, idx) => (
          <div key={idx} className="border rounded-lg p-4 bg-white">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full w-10 h-10 bg-purple-200 text-purple-800 flex items-center justify-center font-bold text-sm">
                  {item.initials}
                </div>
                <div>
                  <div className="font-semibold">{item.user}</div>
                  <div className="text-xs text-gray-600">Nível {item.Nível} Avaliador</div>
                </div>
              </div>
              <div className="text-xs text-gray-500">
                {formatCustomDate(item.date)}
              </div>
            </div>
            
            <div className="mb-3">
              <p className="text-sm">{item.feedback}</p>
            </div>
            
            <div className="flex justify-between items-center">
              <span className={`text-xs px-2 py-1 rounded ${getRatingStyle(item.rating)}`}>
                {item.rating}
              </span>
              <div className="flex gap-2">
                <ThumbsUp
                  size={18}
                  className={`cursor-pointer ${liked[idx] === "up" ? "text-purple-600" : "text-gray-400"}`}
                  onClick={() => toggleLike(idx, "up")}
                />
                <ThumbsDown
                  size={18}
                  className={`cursor-pointer ${liked[idx] === "down" ? "text-red-600" : "text-gray-400"}`}
                  onClick={() => toggleLike(idx, "down")}
                />
                <MoreHorizontal size={18} className="text-gray-400 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
        <div className="text-sm text-gray-600">
          Mostrando {startIndex} - {endIndex} de {totalResults} resultados
        </div>
        
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <button
            className="px-3 py-1 border rounded text-gray-600 hover:text-black flex items-center hover:bg-gray-100 gap-1 cursor-pointer text-sm disabled:opacity-50"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            <span>Anterior</span>
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded text-sm min-w-[36px] ${currentPage === i + 1 ? 'bg-gray-100 text-purple-700' : 'border text-black'}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          
          <button
            className="px-3 py-1 border rounded text-gray-600 hover:text-black flex items-center hover:bg-gray-100 gap-1 cursor-pointer text-sm disabled:opacity-50"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <span>Próximo</span>
          </button>
        </div>
      </div>
    </div>
  );
}