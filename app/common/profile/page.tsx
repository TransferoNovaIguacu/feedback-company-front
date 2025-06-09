"use client";

import { Mission } from "@/app/company/page";
import { Botao1, Botao2 } from "@/app/components/Botao";
import { CardAvaliacao } from "@/app/components/CardAvaliacao";
import { fetchMyMissionsUsers } from "@/utils/fetchMissions";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [currentUser, setCurrentUser] = useState({
    email: "",
  });

  const getCurrentUser = () => {
    const user = localStorage.getItem("USER");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  };

  useEffect(() => {
      getCurrentUser();
      fetchMyMissionsUsers(setMissions);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg">
        <section className="flex justify-between py-20">
          <div className="flex items-center gap-5">
            <div className="size-32 bg-white bg-opacity-20 rounded-full flex justify-center items-center">
              <p className="text-6xl font-semibold">FT</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-4xl">Alex Lanção</h3>
              <p className="text-xl opacity-50">{currentUser.email}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <Botao2 texto="Vincular Crteira" />
            </div>
            <div>
              <Botao1 texto="Resgatar Tokens" />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <h2 className="w-[67vw] text-3xl">Últimas Pesquisas</h2>
          <div>
            {missions.length > 0  && missions.map((mission) => {
              return (
                <CardAvaliacao
                  key={mission.id}
                  CardAvaliacaoInfo={mission}
                  botao={<Botao1 texto="Participar" />}
                />
              );
            })}
            {
                missions.length < 1 && <p>Você ainda não participa de nenhuma pesquisa</p>
            }
          </div>
        </section>
      </div>
    </div>
  );
}
