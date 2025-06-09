import { Mission } from "@/app/company/page";
import api from "@/utils/axios";

export const fetchMissions = async (
  setMockData: React.Dispatch<React.SetStateAction<Mission[]>>
) => {
  console.log("Executando fetchMissions...");
  try {
    const token = localStorage.getItem("TOKEN");
    if (!token) throw new Error("Token não encontrado");

    const response = await api.get("missions/missions/company-missions/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setMockData(response.data);
  } catch (error) {
    console.error("Erro em fetchMissions:", error);
  }
};