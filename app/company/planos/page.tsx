"use client";
import { Botao1, Botao2 } from "@/app/components/Botao";
import CardGenerico from "@/app/components/card";
import pontoazul from "@/public/svg/pontoazul.svg";
import pontoroxo from "@/public/svg/pontoroxo.svg";
import pontoaroxoazul from "@/public/svg/pontoroxoazul.svg";
import api from "@/utils/axios";
import { useEffect, useState } from "react";

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
  const currentPlan = localStorage.getItem("MYPLAN");

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

  const contractPlan = async (planId: number) => {
    try {
      const token = localStorage.getItem("TOKEN");
      const contractedPan = localStorage.getItem("MYPLAN");

      // if (contractedPan) {
      //   const contractedResponse = await api.get("plans/contracted-plans/", {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   });
      //   await api.delete(
      //     `plans/contracted-plans/${contractedResponse.data[0].id}`,
      //     {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //       },
      //     }
      //   );
      //   localStorage.removeItem("MYPLAN");
      // }

      if (!token) throw new Error();
      await api.post(
        `plans/plans/${planId}/purchase/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.setItem("MYPLAN", `${planId}`);
    } catch (error) {
      console.error(error);
    } finally {
      fatchPlans();
    }
  };

  // const changePlan = async (plano: any) => {
  //   try {
  //     const token = localStorage.getItem("TOKEN");
  //     if (!token) throw new Error();

  //     if (currentPlan && parseInt(currentPlan) === plano.id) {
  //       const contractedResponse = await api.get("plans/contracted-plans/", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       await api.delete(
  //         `plans/contracted-plans/${contractedResponse.data[0].id}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       localStorage.removeItem("MYPLAN");
  //     } else {
  //       contractPlan(plano.id);
  //     }
  //     return;
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     fatchPlans();
  //   }
  // };

  useEffect(() => {
    fatchPlans();
  }, []);

  return (
    <div className="flex flex-col bg-zinc-50 h-screen items-center">
      <div className="flex flex-col items-center mb-10 gap-4">
        <h1 className="text-5xl font-bold text-white uppercase bg-gradient-to-br from-purple-500 to-indigo-600 px-9 pb-5 pt-14 rounded-b-3xl">
          Conheça nossos Planos
        </h1>
        <p className="text-xl text-purple-600 max-w-xl text-center">
          Escolha o plano ideal para suas necessidades e comece a transformar
          seus feedbacks em resultados.
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row h-fit gap-5">
        {plans.map((plano, index) => (
          <div key={plano.id} className="relative">
            <CardGenerico
              key={index}
              ClassName="!max-w-[20vw] bg-gradient-to-br from-purple-500 to-indigo-600 mt-5 drop-shadow-lg transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl"
              imagem={
                index === 0
                  ? pontoazul
                  : index === 1
                  ? pontoroxo
                  : pontoaroxoazul
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
                <div onClick={() => contractPlan(plano.id)}>
                  <Botao2
                    className={`${
                      currentPlan && parseInt(currentPlan) === plano.id
                        ? "bg-green-600 hover:bg-green-600 text-white"
                        : "bg-white hover:bg-white !text-violet-600"
                    } hover:bg-opacity-90 `}
                    texto={
                      currentPlan && parseInt(currentPlan) === plano.id
                        ? "Plano Ativo"
                        : "Adquirir Plano"
                    }
                  />
                </div>
              }
            />
          </div>
        ))}
      </div>
      <span className="text-purple-400 text-sm mt-14">
        © 2025 Feedtoken, Transfero Academy Todos os direitos reservados.
      </span>
    </div>
  );
}
