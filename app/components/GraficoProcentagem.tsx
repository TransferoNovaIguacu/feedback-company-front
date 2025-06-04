import React from "react";
/**
 * Componente `FeedbackQualityChart`
 * 
 * Este componente exibe uma visualização da qualidade dos feedbacks usando barras de progresso (progress bars).
 * 
 * ✅ Uso:
 * - Forneça um array de objetos `feedbackItems` com `label`, `percentage`, `barColor` e opcionalmente `textColor`.
 * - A soma das porcentagens deve totalizar **exatamente 100%** para que o gráfico seja renderizado corretamente.
 * - Opcionalmente, pode-se passar uma função `onViewAllClick` para lidar com o clique no botão "Ver Todos".
 * 
 * 🛠️ Exemplo de uso:
 * ```tsx
 * const dados = [
 *   { label: "Ótimo", percentage: 60, barColor: "bg-green-500" },
 *   { label: "Bom", percentage: 25, barColor: "bg-yellow-400" },
 *   { label: "Ruim", percentage: 15, barColor: "bg-red-500" },
 * ];
 * 
 * <FeedbackQualityChart
 *   feedbackItems={dados}
 *   onViewAllClick={() => console.log("Ver todos os feedbacks")}
 * />
 * ```
 * 
 * ⚠️ Este componente deve ser renderizado dentro de um componente `use client` se for usado em um projeto Next.js com diretivas de client component.
 */

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

export default function FeedbackQualityChart ({
  feedbackItems,
  onViewAllClick,
}: FeedbackQualityChartProps) {
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