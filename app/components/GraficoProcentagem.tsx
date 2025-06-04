import React from "react";

// Define as props para o componente ProgressBar
interface ProgressBarProps {
  label: string;
  percentage: number;
  barColor: string; // Classe Tailwind para a cor da barra
  textColor?: string; // Classe Tailwind para a cor do texto
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percentage,
  barColor,
  textColor = "text-gray-800",
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-gray-700">{percentage}%</span>
        <span className={`font-medium ${textColor}`}>{label}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
        <div
          className={`${barColor} h-2.5 rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

// Define as props para o componente FeedbackQualityChart
interface FeedbackItem {
  label: string;
  percentage: number;
  barColor: string;
  textColor?: string;
}

interface FeedbackQualityChartProps {
  feedbackItems: FeedbackItem[];
  onViewAllClick?: () => void;
}

const FeedbackQualityChart: React.FC<FeedbackQualityChartProps> = ({
  feedbackItems,
  onViewAllClick,
}) => {
  // Validação lógica para garantir que o total das porcentagens seja 100%
  const totalPercentage = feedbackItems.reduce(
    (sum, item) => sum + item.percentage,
    0
  );

  if (totalPercentage !== 100) {
    console.error(
      `Erro: A soma das porcentagens dos feedbacks não é 100%. Total: ${totalPercentage}%`
    );
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg font-sans w-full max-w-sm mx-auto text-red-600">
        <p>Erro ao carregar o gráfico: A soma das porcentagens não é 100%.</p>
        <p>Total atual: {totalPercentage}%</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg font-sans w-full max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Qualidade do Feedback
        </h3>
        {onViewAllClick && (
          <button
            onClick={onViewAllClick}
            className="text-purple-600 hover:text-purple-800 text-sm font-semibold focus:outline-none"
          >
            Ver Todos
          </button>
        )}
      </div>

      <div>
        {feedbackItems.map((item, index) => (
          <ProgressBar
            key={index}
            label={item.label}
            percentage={item.percentage}
            barColor={item.barColor}
            textColor={item.textColor}
          />
        ))}
      </div>
    </div>
  );
};

// Componente principal da Aplicação (Exemplo de Uso)
export default function App() {
  const handleViewAll = () => {
    console.log("Ver Todos clicado!");
  };

  // Dados corrigidos com os rótulos exigidos e soma 100%
  const feedbackData = [
    {
      label: "Muito útil",
      percentage: 50,
      barColor: "bg-green-500",
      textColor: "text-green-700",
    },
    {
      label: "Útil",
      percentage: 35,
      barColor: "bg-blue-500",
      textColor: "text-blue-700",
    },
    {
      label: "Nada útil",
      percentage: 15,
      barColor: "bg-red-500",
      textColor: "text-red-700",
    },
  ];

  // Exemplo de dados que não somam 100% para testar a validação (descomente para testar)
  // const invalidFeedbackData = [
  //   { label: "Muito Útil", percentage: 40, barColor: "bg-green-500" },
  //   { label: "Útil", percentage: 30, barColor: "bg-blue-500" },
  //   { label: "Neutro", percentage: 20, barColor: "bg-yellow-500" },
  //   { label: "Não Útil", percentage: 5, barColor: "bg-red-500" }, // Soma 95%
  // ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <FeedbackQualityChart
        feedbackItems={feedbackData}
        onViewAllClick={handleViewAll}
      />
    </div>
  );
}
