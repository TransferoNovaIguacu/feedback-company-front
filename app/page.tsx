"use client"
import AvailableEvaluations from "./components/AvailableEvaluations";
import InfoCard from "./components/CardResumo";
import ComoFunciona from "./components/Como_funciona";
import Engajamento from "./components/Engajamento";
import HeroPage from "./components/HeroPage";

export default function EmConstrucao() {

  const FeedbackIcon: React.FC = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
      />
    </svg>
  );
  const lidarComDetalhes = () => {
    console.log(`Detalhes clicados!`);
    // Aqui você pode adicionar lógica de navegação, abrir um modal, etc.
  };

  return (
    <>
      <HeroPage />
      <ComoFunciona />
      <Engajamento />
      <AvailableEvaluations />
    </>
  );
}
