"use client";
import { useState } from "react";
import logofeedtoken from "@/public/png/logo.png";
import Image from "next/image";
import { Botao1, Botao2 } from "./Botao";

function classNames(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Como Funciona", href: "/en-construcao" },
    { name: "Para Empresas", href: "/auth/login" },
    { name: "Para Avaliadores", href: "/auth/login" },
  ];

  return (
    <nav className="sticky top-0 bg-[#26282e] backdrop-blur-md w-full bg-opacity-80 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botão menu mobile (esquerda) */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center rounded-md p-2 text-gray-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo e Links de Navegação (esquerda) */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image src={logofeedtoken} alt="FeedToken logo" width={40} />
              <p className="font-bold ml-1 text-white">FeedToken</p>{" "}
              {/* Adicionei text-white para a visibilidade do texto */}
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 rounded-md px-3 py-2 text-sm font-medium hover:font-semibold"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Botões de Entrar e Cadastrar (direita) */}
          {/* Adicionado 'hidden' para esconder em telas pequenas e 'sm:flex' para exibir em telas maiores que sm */}
          <div className="absolute inset-y-0 right-0 hidden items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:flex">
            <div className="flex space-x-4">
              {/* Botão Entrar com gradiente */}
              <a href="/auth/login">
                <Botao1 texto="Entrar" />
              </a>
              {/* Botão Cadastrar com fundo escuro */}
              <a href="/auth/register">
                <Botao2 texto="Cadastrar" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="sm:hidden " id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 bg-[#26282e] backdrop-blur-md w-full bg-opacity-80 z-auto">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-white rounded-md px-3 py-2 text-base font-medium"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-4 flex flex-col space-y-2">
              <Botao1 texto="Entrar" />
              <Botao2 texto="Cadastrar" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
