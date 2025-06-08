import Image from "next/image";
import logo from "@/public/png/logo.png";
import { Building, Home, Shield, User } from "lucide-react";

type SidebarContentProps = {
  selectedKey: MenuItem["key"];
  children: React.ReactNode;
};

export const menuItems = [
  {
    key: "Minhas Pesquisas",
    label: "Minhas Pesquisas",
    href: "/company",
    icon: <Home size={18} />,
  },
  {
    key: "planos",
    label: "Planos",
    href: "company/planos",
    icon: <Building size={18} />,
  },
  { key: "user", label: "Usuario", href: "/users", icon: <User size={18} /> },
] as const;

type MenuItem = (typeof menuItems)[number];

export default function SidebarContent({
  selectedKey,
  children,
}: SidebarContentProps) {
  return (
    <>
      <div>
        <div className="flex items-center justify-center mt-4 mb-8">
          <Image
            src={logo}
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
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {children}
    </>
  );
}
