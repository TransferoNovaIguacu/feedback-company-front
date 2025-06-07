import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "../components/sidebar";
import AuthGuard from "@/utils/privateRoute";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feedtoke",
  description: "Avalie seus sites favoritos e ganhe tokens",
};

const companyInfo = {
  name: "Transfero academy",
  type: "Bank account",
  initials: "TA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
    <AuthGuard>
      <Sidebar companyInfo={companyInfo} />
      {children}
    </AuthGuard>
    </>
  );
}
