import AvailableEvaluations from "./components/AvailableEvaluations";
import CTA from "./components/CTAInstitucional";
import ComoFunciona from "./components/Como_funciona";
import Engajamento from "./components/Engajamento";
import HeroPage from "./components/HeroPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <ComoFunciona />
      <Engajamento />
      <AvailableEvaluations />
      <CTA />
      <Footer />
    </>
  );
}
