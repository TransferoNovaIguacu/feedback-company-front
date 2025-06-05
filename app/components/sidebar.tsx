import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Home, Building, User, Shield, Menu, X } from "lucide-react";
import CompanyProfile from "./company-sidebar";
import Image from "next/image";

type CompanyInfo = {
  name: string;
  type: string;
  initials: string;
};

type SidebarProps = {
  companyInfo: CompanyInfo;
};

const SIDEBAR_WIDTH = 224; // 14rem * 16px = 224px

const menuItems = [
  { key: "dashboard", label: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
  { key: "business", label: "Negócios", href: "/business", icon: <Building size={18} /> },
  { key: "user", label: "Usuários", href: "/users", icon: <User size={18} /> },
  { key: "admin", label: "Admin", href: "/admin", icon: <Shield size={18} /> },
] as const;

type MenuItem = (typeof menuItems)[number];

const Sidebar: React.FC<SidebarProps> = ({ companyInfo }) => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selectedKey =
    menuItems.find((item) => pathname.startsWith(item.href))?.key ?? "dashboard";

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
            <Image src="/png/logo.png" alt="FeedToken logo" width={28} height={28} className="mr-2" />
            <span className="font-bold text-lg">FeedToken</span>
          </div>
          <button aria-label="Abrir menu" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      )}

      {/* Sidebar desktop (fixa no topo) */}
      <div className="hidden md:flex fixed top-0 left-0 z-50 h-screen w-56 bg-gradient-to-b from-purple-800 to-purple-900 text-white flex-col justify-between p-4">
        <SidebarContent selectedKey={selectedKey} companyInfo={companyInfo} />
      </div>

      {/* Sidebar mobile */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)} />
          <div className="fixed top-0 left-0 z-50 h-full w-56 bg-gradient-to-b from-purple-800 to-purple-900 text-white flex flex-col justify-between p-4">
            <SidebarContent selectedKey={selectedKey} companyInfo={companyInfo} />
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
};

type SidebarContentProps = {
  selectedKey: MenuItem["key"];
  companyInfo: CompanyInfo;
};

const SidebarContent: React.FC<SidebarContentProps> = ({ selectedKey, companyInfo }) => (
  <>
    <div>
      <div className="flex items-center justify-center mt-4 mb-8">
        <Image src="/png/logo.png" alt="FeedToken logo" width={32} height={32} className="rounded-md mr-2" />
        <span className="font-bold text-lg">FeedToken</span>
      </div>
      <ul className="space-y-4">
        {menuItems.map((item) => {
          const isActive = item.key === selectedKey;
          return (
            <li key={item.key}>
              <a
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md hover:scale-105 duration-300 ${
                  isActive ? "bg-white bg-opacity-20" : ""
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
    <CompanyProfile company={companyInfo} settingsUrl="" />
  </>
);

export default Sidebar;
