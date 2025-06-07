"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { isTokenExpired } from "@/utils/isTokenExpired";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (!token) {
      router.push("/auth/login");
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) return null; // ou um loading spinner

  return <>{children}</>;
}