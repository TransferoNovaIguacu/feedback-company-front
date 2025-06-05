"use client";
import Head from 'next/head';
import TokenBalance from '../components/status-carteira';

export default function EmConstrucao() {

  return (
    <>
      <Head>
        <title>Em Construção</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-violet-500 overflow-x-hidden flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Em Construção</h1>

        <p className="text-xl text-white text-opacity-90 mb-8 max-w-4xl">
          Nós alunos do <strong>Transfero Academy</strong> estamos trabalhando duro para criar algo incrível para você. Volte em breve para conferir!
        </p>

        <div className="mb-8 w-full max-w-md">
          <div className="h-3 bg-white bg-opacity-20 rounded-full relative overflow-hidden progress-bar">
            <div className="absolute top-0 left-0 h-full w-full animate-progress bg-white bg-opacity-30"></div>
          </div>
          <p className="text-white text-opacity-80 mt-2">Progresso: Design e Analise de Requisitos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: '🎨', label: 'Design', delay: '0.5s' },
            { icon: '⚙️', label: 'Desenvolvimento', delay: '0s' },
            { icon: '🚀', label: 'Lançamento', delay: '1s' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-10 p-4 rounded-lg border border-white border-opacity-10 floating"
              style={{ animationDelay: item.delay }}
            >
              <div className="text-yellow-300 text-3xl mb-2">{item.icon}</div>
              <h3 className="text-white font-medium">{item.label}</h3>
            </div>
          ))}
        </div>

        <div className="mt-8 text-white text-opacity-70 text-sm">
          &copy; 2023 Transfero Academy Nova Iguaçu. Todos os direitos reservados.
        </div>
      </div>

      <div className="h-screen">
      <TokenBalance tokens={1000}/>
      </div>

      <style jsx>{`
        .progress-bar .animate-progress {
          animation: progress 3s infinite;
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  );
}
