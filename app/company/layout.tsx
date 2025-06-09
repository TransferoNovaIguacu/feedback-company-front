"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "../components/sidebar";
import AuthGuard from "@/utils/privateRoute";
import api from "@/utils/axios";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export interface companyInfoType {
  name: string;
  type: string;
  initials: string;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [companyInfo, setCompanyInfo] = useState<companyInfoType>({
    name: "",
    type: "",
    initials: "",
  });

  const getUserInfo = async () => {
    try {
      const token = localStorage.getItem("TOKEN");

      const userResponse = await api.get("auth/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const planPesponse = await api.get("plans/contracted-plans/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const infoCompanyObject:companyInfoType = {
        name: userResponse.data.commercial_name,
        type: planPesponse.data[0].plan.name || " ",
        initials: ""
      };

      setCompanyInfo(infoCompanyObject)
      localStorage.setItem('MYPLAN', planPesponse.data[0].plan.id)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <>
      <AuthGuard>
        <Sidebar companyInfo={companyInfo} />
        {children}
      </AuthGuard>
    </>
  );
}
