"use client";
import { Botao1, Botao2 } from "@/app/components/Botao";
import CardGenerico from "@/app/components/card";
import pontoazul from "@/public/svg/pontoazul.svg";
import pontoroxo from "@/public/svg/pontoroxo.svg";
import pontoaroxoazul from "@/public/svg/pontoroxoazul.svg";
import api from "@/utils/axios";
import { useState } from "react";

interface PlansType {
  id: number;
  name: string;
  description: string;
  token_value: string;
  feedbacks_available: number;
  quests_available: number;
  is_active: boolean;
}

export default function PlansPage() {
  const [plans, setPlans] = useState<PlansType[]>([]);

  const fatchPlans = async () => {
    try {
      const token = localStorage.getItem("TOKEN");

      const response = await api.get("/plans/plans/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const sortedPlans = response.data.sort(
        (a: PlansType, b: PlansType) => a.id - b.id
      );
      setPlans(sortedPlans); // response.data precisa ser um array
    } catch (error) {
      console.error("Erro ao buscar os planos:", error);
    }
  };

  fatchPlans();
  return (
    <div className="flex flex-col bg-zinc-200 h-screen justify-center items-center">
      <h1 className="mb-20 font-extrabold text-3xl  text-violet-700 uppercase">
        Conheça nossos Planos
      </h1>
      <div className="flex flex-col-reverse lg:flex-row h-fit gap-5">
        {plans.map((plano, index) => (
          <CardGenerico
            key={index}
            ClassName="bg-violet-600 mt-5 drop-shadow-lg transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl"
            imagem={
              index === 0 ? pontoazul : index === 1 ? pontoroxo : pontoaroxoazul
            }
            titulo={plano.name}
            descricao={plano.description}
            lista={[
              `${plano.token_value} tokens para distribuir`,
              `${plano.quests_available} questionários por mês`,
              `${
                plano.feedbacks_available > 500
                  ? "Ilimitados"
                  : plano.feedbacks_available
              } feedbacks por mês`,
            ]}
            botao={
              <Botao2
                className="bg-opacity-40 hover:bg-opacity-40"
                texto="Adquirir plano"
              />
            }
          />
        ))}
      </div>
    </div>
  );
}
