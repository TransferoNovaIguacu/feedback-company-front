'use client';

import React, { useState, FormEvent, ReactNode } from 'react';

export default function TelaFormulario() {
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [tituloQuestionario, setTituloQuestionario] = useState('');
    const [descricaoQuestionario, setDescricaoQuestionario] = useState('');
    const [recompensaTokens, setRecompensaTokens] = useState(5);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log({
            nomeEmpresa,
            tituloQuestionario,
            descricaoQuestionario,
            recompensaTokens,
        });
        alert('Formulário enviado! (Verifique o console para os dados)');
    };

    // Tipagem dos props do botão
    interface BotaoProps {
        children: ReactNode;
        onClick?: () => void;
        type?: 'button' | 'submit' | 'reset';
        className?: string;
    }

    function Botao({ children, onClick, type = 'button', className = '' }: BotaoProps) {
        return (
            <button
                type={type}
                onClick={onClick}
                className={`bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ${className}`}
            >
                {children}
            </button>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Criar Questionário</h1>

                {/* Seção Informações do Questionário */}
                <section className="mb-8">
                    <div className="flex items-center text-blue-600 mb-4">
                        {/* Ícone Informações do Questionário */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                            />
                        </svg>
                        <h2 className="text-xl font-semibold">Informações do Questionário</h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Nome da Empresa */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Nome da Empresa
                            </label>
                            <input
                                type="text"
                                placeholder="Ex: Transfero"
                                value={nomeEmpresa}
                                onChange={(e) => setNomeEmpresa(e.target.value)}
                                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Título do Questionário */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Título do Questionário
                            </label>
                            <input
                                type="text"
                                placeholder="Ex: Avaliação da Interface de Usuário"
                                value={tituloQuestionario}
                                onChange={(e) => setTituloQuestionario(e.target.value)}
                                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Descrição do Questionário */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Descrição do Questionário
                            </label>
                            <textarea
                                placeholder="Descreva o objetivo do questionário..."
                                value={descricaoQuestionario}
                                onChange={(e) => setDescricaoQuestionario(e.target.value)}
                                rows={4}
                                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                            />
                        </div>

                        {/* Recompensa em Tokens */}
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2 flex items-center">
                                {/* Ícone Recompensa em Tokens */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-1 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3m0 0v3m0-3h3m-3 0H9m12-6v6a9 9 0 11-18 0V8"
                                    />
                                </svg>
                                Recompensa em Tokens (por resposta)
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                                <input
                                    type="number"
                                    className="shadow appearance-none border rounded-lg w-full py-2 pl-8 pr-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={recompensaTokens}
                                    onChange={(e) => setRecompensaTokens(Number(e.target.value))}
                                    min="0"
                                />
                            </div>
                        </div>
                    </form>
                </section>

                {/* Seção Perguntas */}
                <section>
                    <div className="flex items-center text-blue-600 mb-4">
                        {/* Ícone Perguntas */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>

                        <h2 className="text-xl font-semibold">Perguntas</h2>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {/* Botão Adicionar Múltipla Escolha */}
                        <Botao
                            className="flex items-center px-6 py-3"
                            onClick={() => alert('Adicionar Múltipla Escolha clicado!')}
                        >
                            {/* Ícone + para Múltipla Escolha */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                            Adicionar Múltipla Escolha
                        </Botao>

                        {/* Botão Adicionar Texto Livre */}
                        <Botao
                            className="flex items-center px-6 py-3"
                            onClick={() => alert('Adicionar Texto Livre clicado!')}
                        >
                            {/* Ícone Lápis para Texto Livre */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                            </svg>
                            Adicionar Texto Livre
                        </Botao>
                    </div>
                </section>
            </div>
        </div>
    );
}
