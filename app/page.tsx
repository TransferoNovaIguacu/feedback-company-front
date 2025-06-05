import AvailableEvaluations from "./components/AvailableEvaluations";
import CTA from "./components/CTAInstitucional";
import { CardTransacao } from "./components/CardTransacoes";
import ComoFunciona from "./components/Como_funciona";
import Engajamento from "./components/Engajamento";
import HeroPage from "./components/HeroPage";
import { Navbar } from "./components/Navbar";
import TransacaoInfo from "./components/TransacaoInfo";
import { Footer } from "./components/footer";

  const minhasTransacoes: CardTransacaoType[] = [
    {
      id: '1',
      descricao: 'Salário Mensal',
      valor: 3500.00,
      tipo: 'recebimento',
      data: '01/06/2025',
      time: '09:00', 
    },
    {
      id: '2',
      descricao: 'Aluguel',
      valor: 1200.00,
      tipo: 'saque',
      data: '05/06/2025',
      time: '08:00',
    },
    {
      id: '3',
      descricao: 'Reembolso de Despesas',
      valor: 150.75,
      tipo: 'recebimento',
      data: '03/06/2025',
      time: '10:30',
    },
    {
      id: '4',
      descricao: 'Supermercado',
      valor: 280.50,
      tipo: 'saque',
      data: '04/06/2025',
      time: '12:45',
    },
  ];

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
      {minhasTransacoes.map((transacao) => (
        <CardTransacao key={transacao.id} transacaoInfo={transacao} />
      ))}
    </>
  );
}
