"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "./axios";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  const verifyToken = async (token: string) => {
    try {
      const response = await api.post("auth/token/verify/", { token });
      // Se a resposta for 200, consideramos autorizado
      setAuthorized(true);
    } catch (error: any) {
      setAuthorized(false);
      router.push("/auth/login");
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("TOKEN");
      if (!token) {
        router.push("/auth/login");
      } else {
        await verifyToken(token);
      }
    };
    checkToken();
  }, [router]);

  if (!authorized) return null; // ou retornar um spinner de loading

  return <>{children}</>;
}
