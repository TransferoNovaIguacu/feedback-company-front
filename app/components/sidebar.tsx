"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import CompanyProfile from "./company-sidebar";
import Image from "next/image";
import SidebarContent, { menuItems } from "./sidebarContent";
import { companyInfoType } from "../company/layout";



type SidebarProps = {
  companyInfo: companyInfoType;
};

const SIDEBAR_WIDTH = 224; // 14rem * 16px = 224px

export default function Sidebar({ companyInfo }: SidebarProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selectedKey = menuItems.find((item) => pathname.startsWith(item.href))?.key ?? "Meinhas Pesquisas";

  // Função para verificar se estamos em tela desktop >= md (768px)
  const isDesktop = () => window.matchMedia("(min-width: 768px)").matches;

  useEffect(() => {
    // Ajusta overflow body quando mobile sidebar aberta
    document.body.style.overflow = sidebarOpen ? "hidden" : "";

    // Se desktop e sidebar fixa (sempre visível), adiciona padding-left para empurrar o conteúdo
    if (isDesktop()) {
      if (!sidebarOpen) {
        // Sidebar desktop está visível (fixed) e mobile sidebar fechada, ajustar padding-left no body
        document.body.style.paddingLeft = `${SIDEBAR_WIDTH}px`;
      } else {
        // Se sidebar mobile está aberta (sobrepõe tudo), remove padding-left do body
        document.body.style.paddingLeft = "";
      }
    } else {
      // Em telas mobile remove o padding-left do body
      document.body.style.paddingLeft = "";
    }

    // Ouça resize para ajustar padding dinamicamente quando mudar a largura da janela
    const handleResize = () => {
      if (isDesktop() && !sidebarOpen) {
        document.body.style.paddingLeft = `${SIDEBAR_WIDTH}px`;
      } else {
        document.body.style.paddingLeft = "";
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingLeft = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [sidebarOpen]);

  return (
    <>
      {/* Topbar mobile */}
      {!sidebarOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 w-full bg-purple-800 text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/png/logo.png"
              alt="FeedToken logo"
              width={28}
              height={28}
              className="mr-2"
            />
            <span className="font-bold text-lg">FeedToken</span>
          </div>
          <button aria-label="Abrir menu" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      )}

      {/* Sidebar desktop (fixa no topo) */}
      <div className="hidden md:flex fixed top-0 left-0 z-50 h-screen w-56 bg-gradient-to-b from-purple-800 to-purple-900 text-white flex-col justify-between p-4">
        <SidebarContent selectedKey={selectedKey}>
          <CompanyProfile company={companyInfo} settingsUrl="" />
        </SidebarContent>
      </div>

      {/* Sidebar mobile */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed top-0 left-0 z-50 h-full w-56 bg-gradient-to-b from-purple-800 to-purple-900 text-white flex flex-col justify-between p-4">
            <SidebarContent selectedKey={selectedKey} >
              <CompanyProfile company={companyInfo} settingsUrl="" />
            </SidebarContent>
          </div>
          <button
            aria-label="Fechar menu"
            onClick={() => setSidebarOpen(false)}
            className="md:hidden fixed top-4 right-4 z-[9999] text-white bg-opacity-70 p-2"
          >
            <X size={24} />
          </button>
        </>
      )}
    </>
  );
}


