"use client";

import AuthGuard from "@/utils/privateRoute";
import { NavbarCommunUser } from "../components/NavbarCommunUser";
import { useEffect, useState } from "react";
import { Mission } from "../company/page";
import { CardAvaliacao } from "../components/CardAvaliacao";
import { Botao1 } from "../components/Botao";
import { fetchMissionsUsers } from "@/utils/fetchMissions";

export default function CommonPage() {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    fetchMissionsUsers(setMissions);
  }, []);

  return (
      <div className="grid grid-cols-4 gap-4 mt-10 mx-5">
        {missions.map((mission) => {
          return (
            <CardAvaliacao
              key={mission.id}
              CardAvaliacaoInfo={mission}
              botao={<Botao1 texto="Participar" />}
            />
          );
        })}
      </div>
  );
}
