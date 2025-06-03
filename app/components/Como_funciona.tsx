import React from 'react';
import { Botao1 } from './Botao';

export default function ComoFunciona() {
  return (
    <section className="bg-[#111429] flex justify-center items-center min-h-screen text-white px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-extrabold mb-4">Como Funciona</h2>
        <p className="text-gray-400 mb-12">
          Nossa plataforma conecta empresas que buscam feedback valioso com <br />
          avaliadores que são recompensados por suas opiniões sinceras.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card: Empresas */}
          <div className="bg-[#1b1e33] rounded-2xl p-6 shadow-lg flex flex-col h-full">
            <div className="flex-grow">
              <div className="mb-4 max-[500px]:text-center">
                <div className="bg-[#263755] p-3 rounded-lg w-fit mb-2 max-[500px]:mx-auto">
                  <img src="/svg/predio.svg" alt="Empresa" className="w-6 h-6" />
                </div>
                <h3 className="text-lg mt-6 font-extrabold">Para Empresas</h3>
              </div>
              <p className="text-gray-300 mb-4 text-opacity-75 max-[500px]:text-center">
                Solicite avaliações personalizadas para seus produtos ou serviços e receba feedback valioso para melhorias.
              </p>
              <ul className="space-y-1 text-sm mb-6 text-gray-300">
                <li className="flex items-center space-x-2 max-[500px]:justify-center">
                  <img src="/svg/icon-check.svg" alt="check" className="w-4 h-4" />
                  <span>Feedback detalhado e honesto</span>
                </li>
                <li className="flex items-center space-x-2 max-[500px]:justify-center">
                  <img src="/svg/icon-check.svg" alt="check" className="w-4 h-4" />
                  <span>Questionários personalizados</span>
                </li>
                <li className="flex items-center space-x-2 max-[500px]:justify-center">
                  <img src="/svg/icon-check.svg" alt="check" className="w-4 h-4" />
                  <span>Relatórios analíticos</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-[#3e4a64] hover:bg-[#2f3a50] text-white font-medium py-2 rounded-lg transition mt-2">
              Saiba mais
            </button>
          </div>

          {/* Card: Avaliadores */}
          <div className="bg-[#1b1e33] rounded-2xl p-6 shadow-lg flex flex-col h-full">
            <div className="flex-grow">
              <div className="mb-4 max-[500px]:text-center">
                <div className="bg-[#3a2c63] p-3 rounded-lg w-fit mb-2 max-[500px]:mx-auto">
                  <img src="/svg/perfil-editar.svg" alt="Avaliadores" className="w-6 h-6" />
                </div>
                <h3 className="text-lg mt-6 font-extrabold">Para Avaliadores</h3>
              </div>
              <p className="text-gray-300 mb-4 max-[500px]:text-center">
                Compartilhe suas opiniões sobre produtos e serviços e ganhe tokens como recompensa pelo seu tempo.
              </p>
              <ul className="space-y-1 text-sm mb-6 text-gray-300">
                <li className="flex items-center space-x-2 max-[500px]:justify-center">
                  <img src="/svg/icon-check.svg" alt="check" className="w-4 h-4" />
                  <span>Ganhe tokens por avaliação</span>
                </li>
                <li className="flex items-center space-x-2 max-[500px]:justify-center">
                  <img src="/svg/icon-check.svg" alt="check" className="w-4 h-4" />
                  <span>Troque por recompensas reais</span>
                </li>
                <li className="flex items-center space-x-2 max-[500px]:justify-center">
                  <img src="/svg/icon-check.svg" alt="check" className="w-4 h-4" />
                  <span>Acesso a produtos exclusivos</span>
                </li>
              </ul>
            </div>
            <div className='w-full flex justify-center items-center'>

              <Botao1 texto='Começar agora'></Botao1>
            </div>
          </div>

          {/* Card: Tokens FTK */}
          <div className="bg-[#1b1e33] rounded-2xl p-6 shadow-lg flex flex-col h-full">
            <div className="flex-grow">
              <div className="mb-4 max-[500px]:text-center">
                <div className="bg-[#5f4d32] p-3 rounded-lg w-fit mb-2 max-[500px]:mx-auto">
                  <img src="/svg/moedas.svg" alt="Tokens" className="w-6 h-6" />
                </div>
                <h3 className="text-lg mt-6 font-extrabold">Tokens FTK</h3>
              </div>
              <p className="text-gray-300 mb-4 max-[500px]:text-center">
                Nossa criptomoeda exclusiva que valoriza conforme a plataforma cresce. Use para trocas ou guarde como investimento.
              </p>
              <ul className="space-y-1 text-sm mb-6 text-gray-300">
                <li className="flex items-center space-x-2 max-[500px]:justify-center">
                  <img src="/svg/icon-check.svg" alt="check" className="w-4 h-4" />
                  <span>Tecnologia blockchain</span>
                </li>
                <li className="flex items-center space-x-2 max-[500px]:justify-center">
                  <img src="/svg/icon-check.svg" alt="check" className="w-4 h-4" />
                  <span>Troque por produtos ou serviços</span>
                </li>
                <li className="flex items-center space-x-2 max-[500px]:justify-center">
                  <img src="/svg/icon-check.svg" alt="check" className="w-4 h-4" />
                  <span>Potencial de valorização</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-[#3e4a64] hover:bg-[#2f3a50] text-white font-medium py-2 rounded-lg transition mt-2">
              Explorar tokens
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}