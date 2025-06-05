import AvailableEvaluations from "./components/AvailableEvaluations";
import CTA from "./components/CTAInstitucional";
import ComoFunciona from "./components/Como_funciona";
import Engajamento from "./components/Engajamento";
import HeroPage from "./components/HeroPage";

export default function EmConstrucao() {


const companyInfo = {
  name: "Transfero academy",
  type: "Bank account",
  initials: "TA",
};


  return (
    <>
     <HeroPage/>
     <ComoFunciona/>
     <Engajamento/>
     <AvailableEvaluations/>
     <CTA/>
    </>
  );
}
