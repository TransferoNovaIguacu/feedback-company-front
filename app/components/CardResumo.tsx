import React from 'react';

// Define as props para o componente InfoCard
interface InfoCardProps {
  titulo: string;
  textoPrincipal: string;
  subTexto: string;
  textoDetalhes?: string; // Texto opcional para detalhes
  corFundoIcone?: string; // Classe Tailwind CSS para a cor de fundo do ícone
  corTextoIcone?: string; // Classe Tailwind CSS para a cor do texto/preenchimento do ícone
  children: React.ReactNode; // Para o ícone SVG
  aoClicarDetalhes?: () => void; // Handler de clique opcional para detalhes
  linkTexto?: string; // Texto opcional para um link ao lado do subTexto
  aoClicarLink?: () => void; // Handler de clique opcional para o linkTexto
}

const InfoCard: React.FC<InfoCardProps> = ({
  titulo,
  textoPrincipal,
  subTexto,
  textoDetalhes = "Detalhes", // Valor padrão para textoDetalhes
  corFundoIcone = "bg-purple-100", // Cor de fundo padrão do ícone
  corTextoIcone = "text-purple-600", // Cor padrão do texto do ícone
  children,
  aoClicarDetalhes,
  linkTexto,
  aoClicarLink,
}) => {
  return (
    // Container principal do card
    // - Em telas menores (<lg): w-full, max-w- apropriado, mx-auto para centralizar.
    // - Em telas lg e maiores: lg:w-auto (largura baseada no conteúdo), lg:max-w-xs (limite de 320px),
    //   lg:mx-0 (sem margem automática lateral), lg:flex-none (não cresce/encolhe no flex container).
    <div
      className={`
        bg-white p-6 rounded-xl shadow-lg font-sans 
        w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto 
        lg:mx-0 lg:w-auto lg:max-w-xs lg:flex-none
      `}
    >
      {/* Área de conteúdo principal: texto e ícone */}
      <div className="flex justify-between items-start">
        {/* Seção de informações de texto */}
        <div className="flex-grow mr-4"> {/* mr-4 adiciona uma margem à direita para separar do ícone */}
          <p className="text-sm text-gray-500">{titulo}</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-1 break-words">{textoPrincipal}</h2>
        </div>

        {/* Seção do ícone */}
        {/* flex-shrink-0 impede que o ícone encolha se o texto for muito grande */}
        <div className={`p-3 rounded-lg ${corFundoIcone} ${corTextoIcone} flex-shrink-0`}>
          {/* O SVG filho (children) herdará a cor do texto se configurado com currentColor */}
          {children}
        </div>
      </div>

      {/* Seção do rodapé: subtexto e link/botão de detalhes */}
      <div className="mt-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-between sm:items-center">
        {/* Container para subTexto e linkTexto, alinhados à esquerda */}
        {/* Em telas pequenas, subTexto e linkTexto ficam empilhados */}
        <div className="flex flex-col items-start sm:flex-row sm:items-center">
          <p className="text-xs text-gray-400 sm:mr-2">{subTexto}</p>
          {/* Renderiza o linkTexto se ele for fornecido e tiver uma função de clique */}
          {linkTexto && aoClicarLink && (
            <button
              onClick={aoClicarLink}
              className="text-xs text-blue-500 hover:text-blue-700 font-semibold mt-1 sm:mt-0"
            >
              {linkTexto}
            </button>
          )}
        </div>
        {/* Renderiza o botão de detalhes se uma função de clique for fornecida */}
        {aoClicarDetalhes && (
          <button
            onClick={aoClicarDetalhes}
            className="text-sm text-purple-600 hover:text-purple-800 font-semibold mt-2 sm:mt-0 self-start sm:self-auto"
          >
            {textoDetalhes}
          </button>
        )}
      </div>
    </div>
  );
};

// Componente de Ícone SVG: Dólar
const DollarIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Componente de Ícone SVG: Feedback/Chat
const FeedbackIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

// Componente de Ícone SVG: Estrela
const StarIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.846 5.671a1 1 0 00.95.69h5.969c.969 0 1.371 1.24.588 1.81l-4.826 3.522a1 1 0 00-.364 1.118l1.846 5.671c.3.921-.755 1.688-1.54 1.118l-4.826-3.522a1 1 0 00-1.175 0l-4.826 3.522c-.784.57-1.838-.197-1.539-1.118l1.846-5.671a1 1 0 00-.364-1.118L2.28 11.1c-.783-.57-.38-1.81.588-1.81h5.969a1 1 0 00.95-.69l1.846-5.671z" />
  </svg>
);

// Componente de Ícone SVG: Escudo/Proteção (para o plano Premium)
const ShieldIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c.044 1.055.225 2.1.536 3.102M12 21c-1.353 0-2.658-.33-3.818-.944M12 21c1.353 0 2.658-.33 3.818-.944m-7.636 0c.937-2.915 2.378-5.6 4.309-7.795M12 21a9 9 0 009-9c0-1.353-.33-2.658-.944-3.818m-7.636 0c2.915 0 5.6.937 7.795 2.378M12 21a9 9 0 01-9-9c0-1.353.33-2.658.944-3.818" />
  </svg>
);


// Componente principal da Aplicação (Exemplo de Uso)
export default function App() {
  // Função para lidar com o clique no botão de detalhes
  const lidarComDetalhes = (item: string) => {
    console.log(`${item} - Detalhes clicados!`);
    // Aqui você pode adicionar lógica de navegação, abrir um modal, etc.
  };

  // Função para lidar com o clique no linkTexto
  const lidarComLink = (link: string) => {
    console.log(`Link '${link}' clicado!`);
    // Aqui você pode adicionar lógica para o link, como abrir uma nova aba ou um pop-up informativo.
  }

  return (
    // Container da aplicação: centralizado, com espaçamento e layout responsivo
    // - lg:justify-center garante que o grupo de cards fique centralizado na tela larga.
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 space-y-6 lg:space-y-0 lg:flex-row lg:items-start lg:justify-center lg:space-x-6">
      {/* Card 1: Exemplo de Saldo de Tokens */}
      <InfoCard
        titulo="Saldo de Tokens"
        textoPrincipal="2,450 FTK"
        subTexto="≈ $245.00 USD"
        corFundoIcone="bg-green-100"  // Fundo do ícone verde claro
        corTextoIcone="text-green-600" // Ícone verde escuro
        linkTexto="O que são tokens?"
        aoClicarLink={() => lidarComLink("O que são tokens?")}
        // Nenhum botão de "Detalhes" para este card
      >
        <DollarIcon />
      </InfoCard>

      {/* Card 2: Exemplo de Total de Feedbacks */}
      <InfoCard
        titulo="Total de Feedbacks"
        textoPrincipal="187"
        subTexto="Últimos 30 dias"
        corFundoIcone="bg-blue-100"   // Fundo do ícone azul claro
        corTextoIcone="text-blue-600"  // Ícone azul escuro
        aoClicarDetalhes={() => lidarComDetalhes("Feedbacks")}
        textoDetalhes="Ver todos"
      >
        <FeedbackIcon />
      </InfoCard>

        {/* Card 3: Exemplo de Taxa de Feedback Útil */}
        <InfoCard
         titulo="Taxa de Feedback Útil"
         textoPrincipal="78%"
         subTexto="+5% do último mês"
         corFundoIcone="bg-yellow-100" // Fundo do ícone amarelo claro
         corTextoIcone="text-yellow-600"// Ícone amarelo escuro
         aoClicarDetalhes={() => lidarComDetalhes("Taxa de Feedback")}
         // textoDetalhes="Detalhes" // Usa o texto padrão "Detalhes"
        >
         <StarIcon />
       </InfoCard>

      {/* NOVO CARD: Plano Atual Premium */}
      <InfoCard
        titulo="Plano Atual"
        textoPrincipal="Premium"
        subTexto="Renova em 14 dias"
        corFundoIcone="bg-purple-100" // Cor de fundo do ícone roxo claro (conforme a imagem)
        corTextoIcone="text-purple-600" // Cor do ícone roxo (conforme a imagem)
        aoClicarDetalhes={() => lidarComDetalhes("Plano Premium")}
        textoDetalhes="Detalhes" // O texto é "Detalhes" como na imagem
      >
        <ShieldIcon /> {/* Usando o novo ícone de escudo */}
      </InfoCard>

    </div>
  );
}