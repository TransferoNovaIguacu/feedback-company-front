// App.tsx

// Importando o componente do cartão e o tipo dos dados que ele usa
import { CardTransacao, CardTransacaoType } from "./CardTransacoes";

function App() {
  // Lista de transações de exemplo (simulando extrato bancário)
  const minhasTransacoes: CardTransacaoType[] = [
    {
      id: '1',
      descricao: 'Salário Mensal',
      valor: 3500.00,
      tipo: 'recebimento',
      data: '01/06/2025',
      time: '09:00', // Adicionei o campo time, que é obrigatório na interface
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

  return (
    // Um container centralizado na tela com padding
    <div className="p-4 max-w-md mx-auto">
      {/* Título da página */}
      <h1 className="text-2xl font-bold text-center mb-6 text-white">
        Minhas Transações
      </h1>

      {/* Renderizando um CardTransacao para cada item da lista */}
      {minhasTransacoes.map((transacao) => (
        <CardTransacao key={transacao.id} transacaoInfo={transacao} />
      ))}
    </div>
  );
}

export default App;
