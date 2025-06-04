'use client';

import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MoreHorizontal } from 'lucide-react';

const feedbacksData = [
  {
    user: "John Doe",
    level: 4,
    initials: "JD",
    feedback: "The navigation menu is not intuitive. I had trouble finding the product categories section. Consider reorganizing the top menu.",
    date: new Date(),
    rating: "Very Useful"
  },
  {
    user: "Alice Smith",
    level: 3,
    initials: "AS",
    feedback: "The checkout process was smooth, but I would suggest adding more payment options like Apple Pay and Google Pay.",
    date: new Date(Date.now() - 86400000),
    rating: "Useful"
  },
  {
    user: "Robert Johnson",
    level: 5,
    initials: "RJ",
    feedback: "The product images don't load quickly on mobile. Consider optimizing them for faster loading times.",
    date: new Date('2023-05-12'),
    rating: "Not Useful"
  },
  {
    user: "Emily Brown",
    level: 2,
    initials: "EB",
    feedback: "I loved the layout! Very clean and professional.",
    date: new Date('2024-03-02'),
    rating: "Very Useful"
  },
  {
    user: "Daniel Wilson",
    level: 1,
    initials: "DW",
    feedback: "Some links are broken, especially on the FAQ page.",
    date: new Date('2024-11-05'),
    rating: "Not Useful"
  },
  {
    user: "Sophia Davis",
    level: 3,
    initials: "SD",
    feedback: "Great product variety, but the filtering options could be improved.",
    date: new Date('2024-12-20'),
    rating: "Useful"
  },
  {
    user: "Michael Scott",
    level: 4,
    initials: "MS",
    feedback: "Too many pop-ups. Please reduce the marketing banners.",
    date: new Date('2025-01-15'),
    rating: "Not Useful"
  },
  {
    user: "Olivia Martinez",
    level: 2,
    initials: "OM",
    feedback: "Dark mode is awesome! Would love a way to personalize the theme more.",
    date: new Date('2025-02-03'),
    rating: "Very Useful"
  },
  {
    user: "Lucas Silva",
    level: 1,
    initials: "LS",
    feedback: "Site demora um pouco para carregar na minha internet.",
    date: new Date('2025-02-10'),
    rating: "Not Useful"
  },
  {
    user: "Camila Rocha",
    level: 5,
    initials: "CR",
    feedback: "Gostei do suporte ao cliente, foram bem rápidos.",
    date: new Date('2025-03-01'),
    rating: "Useful"
  },
  {
    user: "Bruno Ferreira",
    level: 2,
    initials: "BF",
    feedback: "Faltam mais opções de idioma além de português e inglês.",
    date: new Date('2025-03-04'),
    rating: "Not Useful"
  },
  {
    user: "Ana Costa",
    level: 3,
    initials: "AC",
    feedback: "Muito bom no mobile, gostei da responsividade.",
    date: new Date('2025-03-10'),
    rating: "Very Useful"
  },
  {
    user: "Pedro Gomes",
    level: 4,
    initials: "PG",
    feedback: "A navegação entre categorias é bem confusa.",
    date: new Date('2025-03-12'),
    rating: "Not Useful"
  },
  {
    user: "Julia Almeida",
    level: 1,
    initials: "JA",
    feedback: "Design muito bonito, mas faltam descrições detalhadas dos produtos.",
    date: new Date('2025-03-15'),
    rating: "Useful"
  },
  {
    user: "Marcos Tavares",
    level: 3,
    initials: "MT",
    feedback: "Adorei o recurso de salvar produtos favoritos.",
    date: new Date('2025-03-17'),
    rating: "Very Useful"
  },
  {
    user: "Larissa Mendes",
    level: 2,
    initials: "LM",
    feedback: "Ainda bem que tem modo escuro! Obrigada!",
    date: new Date('2025-03-20'),
    rating: "Very Useful"
  },
  {
    user: "Gustavo Nogueira",
    level: 4,
    initials: "GN",
    feedback: "Checkout rápido, mas não gostei do campo de cupom escondido.",
    date: new Date('2025-03-22'),
    rating: "Useful"
  },
  {
    user: "Fernanda Duarte",
    level: 5,
    initials: "FD",
    feedback: "As imagens de alguns produtos estão com baixa qualidade.",
    date: new Date('2025-03-25'),
    rating: "Not Useful"
  },
  {
    user: "Henrique Souza",
    level: 2,
    initials: "HS",
    feedback: "Achei meio confusa a parte de rastreamento de pedidos.",
    date: new Date('2025-03-28'),
    rating: "Useful"
  },
  {
    user: "Isabela Lopes",
    level: 3,
    initials: "IL",
    feedback: "Amei o blog! Traz várias dicas boas.",
    date: new Date('2025-03-30'),
    rating: "Very Useful"
  }
];

const getRatingStyle = (rating: string) => {
  switch (rating) {
    case "Very Useful": return "bg-green-100 text-green-700";
    case "Useful": return "bg-blue-100 text-blue-700";
    case "Not Useful": return "bg-red-100 text-red-700";
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

  const itemsPerPage = 10;

  const filteredFeedbacks = feedbacks
    .filter(f =>
      f.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.feedback.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(f => ratingFilter === "All" || f.rating === ratingFilter);

  const sortedFeedbacks = [...filteredFeedbacks].sort((a, b) => {
    if (sortOrder === "latest") return b.date.getTime() - a.date.getTime();
    return a.user.localeCompare(b.user);
  });

  const paginatedFeedbacks = sortedFeedbacks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredFeedbacks.length / itemsPerPage);
  
  // Cálculo dos índices para mostrar resultados
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
    <div className="rounded-xl shadow-sm bg-white p-6 text-black border border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <h2 className="text-xl font-semibold">Recent Feedbacks</h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search feedbacks..."
            className="border border-gray-300 px-3 py-1.5 rounded text-sm"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <select
            className="border border-gray-300 px-3 py-1.5 rounded text-sm"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="latest">Latest First</option>
            <option value="az">A - Z</option>
          </select>

          <select
            className="border border-gray-300 px-3 py-1.5 rounded text-sm"
            value={ratingFilter}
            onChange={(e) => {
              setRatingFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="All">All Ratings</option>
            <option value="Very Useful">Very Useful</option>
            <option value="Useful">Useful</option>
            <option value="Not Useful">Not Useful</option>
          </select>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-500 border-b border-gray-200 bg-gray-50">
            <th className="p-2">User</th>
            <th className="p-2">Feedback</th>
            <th className="p-2">Date</th>
            <th className="p-2">Rating</th>
            <th className="p-2">Actions</th>
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
                  <div className="text-xs text-gray-600">Level {item.level} Reviewer</div>
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

      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-600">
          Mostrando {startIndex} - {endIndex} de {totalResults} resultados
        </div>
        
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 border rounded text-gray-600 hover:text-black flex items-center hover:bg-gray-100 gap-1 cursor-pointer"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            <span>Previous</span>
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-gray-100 text-purple-700' : 'border text-black'}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          
          <button
            className="px-3 py-1 border rounded text-gray-600 hover:text-black flex items-center hover:bg-gray-100 gap-1 cursor-pointer"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}