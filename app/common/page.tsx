"use client";

import AuthGuard from "@/utils/privateRoute";
import { NavbarCommunUser } from "../components/NavbarCommunUser";
import { useEffect, useState } from "react";
import { Mission } from "../company/page";
import { CardAvaliacao } from "../components/CardAvaliacao";
import { Botao1 } from "../components/Botao";
import { fetchMissionsUsers } from "@/utils/fetchMissions";
import api from "@/utils/axios";

export default function CommonPage() {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    fetchMissionsUsers(setMissions);
  }, []);

  const handleParticipar = async(id: number) => {
    const token = localStorage.getItem("TOKEN")
    const response = await api.post(`missions/missions/${id}/accept/`,{}, {
      headers: {
          Authorization: `Bearer ${token}`,
        },
    })

    console.log(response)
  }
 
  return (
    <div className="grid grid-cols-4 gap-4 mt-10 mx-5">
      {missions.map((mission) => {
        console.log(mission)
        return (
          <CardAvaliacao
            key={mission.id}
            CardAvaliacaoInfo={mission}
            botao={
              <div onClick={() => handleParticipar(mission.id)}>
                <Botao1 texto={mission.status == "PENDING" ? `Participar`: "Responder"} className="h-full" />
              </div>
            }
          />
        );
      })}
    </div>
  );
}
