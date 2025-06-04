"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Home, Building, User, Shield, Menu, X } from "lucide-react";
import CompanyProfile from "./company-sidebar";
import Image from "next/image";

export type MenuItem = {
  key: "dashboard" | "business" | "user" | "admin";
  label: string;
  href: string;
};

type CompanyInfo = {
  name: string;
  type: string;
  initials: string;
};

type SidebarProps = {
  menuItems: MenuItem[];
  companyInfo: CompanyInfo;
  children: ReactNode;
};

const iconMap: Record<MenuItem["key"], JSX.Element> = {
  dashboard: <Home size={18} />,
  business: <Building size={18} />,
  user: <User size={18} />,
  admin: <Shield size={18} />,
};

const Sidebar: React.FC<SidebarProps> = ({ menuItems, companyInfo, children }) => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selectedKey =
    menuItems.find((item) => pathname.startsWith(item.href))?.key ?? "dashboard";

  // Evita scroll no body quando o menu mobile está aberto
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile Top Navbar — escondida quando sidebar está aberta */}
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
          <button
            aria-label="Abrir menu"
            onClick={() => setSidebarOpen(true)}
            className="focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      )}

      {/* Fixed Sidebar (desktop) */}
      <div className="hidden md:flex fixed top-0 left-0 z-50 h-screen w-56 bg-gradient-to-b from-purple-800 to-purple-900 text-white flex-col justify-between p-4">
        <SidebarContent
          menuItems={menuItems}
          selectedKey={selectedKey}
          companyInfo={companyInfo}
        />
      </div>

      {/* Sidebar Mobile Drawer */}
      {sidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
          {/* Sidebar */}
          <div className="fixed top-0 left-0 z-50 h-full w-56 bg-gradient-to-b from-purple-800 to-purple-900 text-white flex flex-col justify-between p-4">
            <SidebarContent
              menuItems={menuItems}
              selectedKey={selectedKey}
              companyInfo={companyInfo}
            />
          </div>
          {/* Botão de fechar */}
          <button
            aria-label="Fechar menu"
            onClick={() => setSidebarOpen(false)}
            className="md:hidden fixed top-4 right-4 z-[9999] text-white bg-opacity-70 p-2"
          >
            <X size={24} />
          </button>
        </>
      )}

      {/* Main Content */}
      <main className={`flex-1 w-full`}>
        {children}
      </main>
    </div>
  );
};

type SidebarContentProps = {
  menuItems: MenuItem[];
  selectedKey: MenuItem["key"];
  companyInfo: CompanyInfo;
};

const SidebarContent: React.FC<SidebarContentProps> = ({
  menuItems,
  selectedKey,
  companyInfo,
}) => (
  <>
    <div>
      <div className="flex items-center justify-center mt-4 mb-8">
        <Image
          src="/png/logo.png"
          alt="FeedToken logo"
          width={32}
          height={32}
          className="rounded-md mr-2"
        />
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
                {iconMap[item.key]}
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
    <CompanyProfile company={companyInfo} settingsUrl={""} />
  </>
);

export default Sidebar;
