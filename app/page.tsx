"use client"
import AvailableEvaluations from "./components/AvailableEvaluations";
import InfoCard from "./components/CardResumo";
import ComoFunciona from "./components/Como_funciona";
import Engajamento from "./components/Engajamento";
import FeedbackQualityChart from "./components/GraficoProcentagem";
import App from "./components/GraficoProcentagem";
import HeroPage from "./components/HeroPage";

export default function EmConstrucao() {
  
  return (
    <>
      <HeroPage />
      <ComoFunciona />
      <Engajamento />
      <AvailableEvaluations />
    </>
  );
}
