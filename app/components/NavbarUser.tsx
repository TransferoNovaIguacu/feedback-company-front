"use client";
import { useState } from "react";
import logofeedtoken from "@/public/png/logo.png";
import Image from "next/image";
import { Botao1, Botao2 } from "./Botao";
import { JSX } from "react/jsx-runtime";
import TokenBalance from "./TokenBalance";

// Função para extrair as iniciais
function getInitials(fullName: string): string {
  return fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function classNames(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function NavbarUser(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  const userName = "Alex Freddy"; 
  const userInitials = getInitials(userName);

  return (
    <nav className="sticky top-0 bg-[#26282e] backdrop-blur-md w-full bg-opacity-80 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botão menu mobile */}
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

          {/* Logo e navegação */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image src={logofeedtoken} alt="FeedToken logo" width={40} />
              <p className="font-bold ml-1 text-white">FeedToken</p>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">{/* Nav links aqui */}</div>
            </div>
          </div>

          {/* Área à direita (desktop) */}
          <div className="absolute inset-y-0 right-0 hidden items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:flex">
            <div className="flex space-x-4 items-center">
              <TokenBalance tokens={10000} />
              <div className="rounded-full w-10 h-10 bg-purple-200 text-purple-800 flex items-center justify-center font-bold text-sm mt-1">
                {userInitials}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="flex flex-col justify-center items-center space-y-2 px-2 pt-4 pb-4 bg-[#26282e] backdrop-blur-md w-full bg-opacity-80">
            <div className="rounded-full w-10 h-10 bg-purple-200 text-purple-800 flex items-center justify-center font-bold text-sm">
              {userInitials}
            </div>
            <TokenBalance tokens={10000} />
          </div>
        </div>
      )}
    </nav>
  );
}
